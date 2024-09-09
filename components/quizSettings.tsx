"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { churchOptions } from "@/constants";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

const QuizSettingsSchema = z.object({
  firstname: z.string().min(2, { message: "Veuillez saisir un prénom valide" }),
  lastname: z.string().min(2, { message: "Veuillez saisir un nom valide" }),
  email: z.string().email({ message: "Veuillez insérer un email valide" }),
  church: z.string({ required_error: "Veuillez sélectionner une église" }),
});

export const QuizSettings = () => {
  const router = useRouter();
  // const [church, setChurch] = useState<string>("");

  const handleQuizStart = () => {
    console.log(form.getValues());
    // router.push(
    //   `/questions?name=${form.getValues().firstname}-${
    //     form.getValues().lastname
    //   }&church=${form.getValues().church}&email=${form.getValues().email}`
    // );
  };

  const form = useForm<z.infer<typeof QuizSettingsSchema>>({
    resolver: zodResolver(QuizSettingsSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      church: "",
    },
  });

  return (
    <div className="flex flex-col justify-center items-center gap-4 md:gap-6">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleQuizStart)}>
          <div className="flex flex-col">
            <div className="flex flex-row w-full justify-evenly gap-2">
              <FormField
                control={form.control}
                name="firstname"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="text"
                        id="firstname"
                        placeholder="Prénom"
                        className="rounded-full"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastname"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="text"
                        id="lastname"
                        placeholder="Nom"
                        className="rounded-full"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="mt-4 md:mt-6">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input
                        type="email"
                        id="email"
                        placeholder="Email"
                        className="rounded-full"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div>
              <FormField
                control={form.control}
                name="church"
                render={({ field }) => (
                  <FormItem>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="mt-6 rounded-full">
                        <SelectValue placeholder="Choisir une église" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {churchOptions.map((church) => (
                        <SelectItem value={church.value} key={church.value}>
                          {church.option}
                        </SelectItem>
                      ))}
                    </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex w-full justify-center mt-4 md:mt-6">
              <Button className="rounded-full" type="submit">
                Commencer le questionnaire
              </Button>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};
