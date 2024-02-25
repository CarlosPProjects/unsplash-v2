"use client";

import { SearchIcon } from "lucide-react";
import { useRouter } from "next/navigation";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  query: z
    .string()
    .min(3, {
      message: "Please enter at least 3 characters",
    })
    .max(16, {
      message: "Please enter at most 10 characters",
    }),
});

const Search = () => {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      query: "",
    },
  });

  const handleSubmit = (values: z.infer<typeof formSchema>) => {
    const { query } = values;
    router.push(`/photos/${query}`);
  };

  return (
    <form
      onSubmit={form.handleSubmit(handleSubmit)}
      className="w-full max-w-md flex gap-4 items-center border-2 border-background-foreground rounded-full bg-background-foreground focus-within:bg-transparent transition-all duration-300 group"
    >
      <input
        {...form.register("query")}
        type="text"
        placeholder="Search photos..."
        className="text-sm text-background-foreground font-light px-4 py-3 outline-none rounded-full bg-secondary flex-1"
      />
      <button className="pr-4" type="submit">
        <SearchIcon className="w-5 h-5 text-secondary" />
      </button>
    </form>
  );
};

export default Search;
