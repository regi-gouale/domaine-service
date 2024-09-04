"use client";

import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Error() {
  return (
    <div className="h-[100dvh] w-full flex flex-col items-center justify-center space-y-4">
      <Image src="/error.png" height="300" width="300" alt="Error" />
      <h2 className="text-xl font-medium">
        Désolé, une erreur s&apos;est produite.
      </h2>
      <Link className={buttonVariants()} href={"/documents"}>
        Retour à l&apos;accueil
      </Link>
    </div>
  );
}
