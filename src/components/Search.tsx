"use client";

import { SearchIcon } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

const formSchema = z.object({
  query: z.string().min(3, {
    message: "Please enter at least 3 characters",
  }).max(10, {
    message: "Please enter at most 10 characters",
  }),
})

const Search = () => {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      query: "",
    }
  })

  const router = useRouter()

  const handleSubmit = async (values: z.infer<typeof formSchema>) => {

    const { query } = values;

    router.push(`/photos/${query}`)

    return;
  };

  return (
    <form
      onSubmit={form.handleSubmit(handleSubmit)}
      className="w-full max-w-md flex gap-4 items-center px-4 py-3 border border-background-foreground rounded-md bg-background-foreground hover:opacity-80 focus-within:bg-transparent transition-all duration-300 group"
    >
      <SearchIcon className="w-5 h-5 text-secondary opacity-50 transition-opacity duration-300 group-focus-within:opacity-100 " />
      <input
        {...form.register("query")}
        type="text"
        placeholder="Search hight quality images"
        className="text-md text-secondary font-light outline-none caret-secondary bg-transparent placeholder:text-secondary placeholder:opacity-50 flex-1"
      />
    </form>
  );
};

export default Search;
