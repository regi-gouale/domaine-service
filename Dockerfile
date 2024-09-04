FROM node:20-alpine as base

# Install dependencies
FROM base as dependencies
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies based on package manager
COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm install --frozen-lockfile; \
  else echo "lockfile not found" && exit 1; \
  fi

# Dev stage
FROM dependencies as dev

WORKDIR /app
# COPY --from=dependencies /app/node_modules ./node_modules
# COPY /app/node_modules ./node_modules
COPY . .

# Build stage
FROM dev as builder
WORKDIR /app
# COPY /app/node_modules ./node_modules
# COPY --from=dependencies /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED 1
RUN pnpm run build

# Runner stage
FROM builder as runner
WORKDIR /app

ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup -S -g 1001 nodejs
RUN adduser --system -u 1001 nextjs

COPY --from=builder /app/public ./public

COPY --from=builder --chown=nextjs:nextjs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nextjs /app/.next/static ./.next/static

USER nextjs

CMD ["node", "server.js"]
