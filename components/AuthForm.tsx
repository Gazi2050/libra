"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { DefaultValues, FieldValues, SubmitHandler, useForm, UseFormReturn } from "react-hook-form"
import { z, ZodType } from "zod";
import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "./ui/input";
import Link from "next/link";
import path from "path";
import { FIELD_NAMES } from "@/constants";

interface Props<T extends FieldValues> {
    schema: ZodType<T>;
    defaultValues: T;
    onSubmit: (data: T) => Promise<{ success: boolean; error?: string }>;
    types: "SIGN-IN" | "SIGN-UP";
}

const AuthForm = <T extends FieldValues>({ types, schema, defaultValues, onSubmit }: Props<T>) => {
    const isSignIn = types === "SIGN-IN"
    const form: UseFormReturn<T> = useForm({
        resolver: zodResolver(schema),
        defaultValues: defaultValues as DefaultValues<T>,
    })

    const handleSubmit: SubmitHandler<T> = async (data) => { };
    return (
        <div className="flex flex-col gap-4">
            <h1 className="text-2xl font-semibold text-white">
                {isSignIn ? "Welcome back to Libra" : "Create your library account"}
            </h1>
            <p>{isSignIn ? "Access the vast collection of resources, and stay updated" : "Please complete all fields and upload a valid university ID to gain access to the library"}</p>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6 w-full">
                    {Object.keys(defaultValues).map((field) => (
                        <FormField
                            control={form.control}
                            key={field}
                            name={field as Path<T>}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="capitalize">  {FIELD_NAMES[field.name as keyof typeof FIELD_NAMES]}</FormLabel>
                                    <FormControl>
                                        <Input placeholder="shadcn" {...field} />
                                    </FormControl>
                                    <FormDescription>
                                        This is your public display name.
                                    </FormDescription>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                    ))}
                    <Button type="submit">Submit</Button>
                </form>
            </Form>
            <p className="text-center text-base font-medium">
                {isSignIn ? "New to Libra? " : "Already have an account? "}
                <Link className="font-bold text-primary underline-offset-3 hover:underline" href={isSignIn ? "/sign-up" : "/sign-in"}>
                    {isSignIn ? "Sign Up" : "Sign In"}
                </Link>
            </p>
        </div>
    )
};

export default AuthForm;