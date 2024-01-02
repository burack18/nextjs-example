"use client"

import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, Form } from '@/components/ui/form'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Input } from '@/components/ui/input'

const formSchema = z.object({
    firstName: z.string(),
    lastName: z.string(),
    email: z.string(),
    password: z.string()
})

export default function SignUp() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: ""
        },
    })
    // 2. Define a submit handler.
    function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }
    return (
        <div>
            <div className="bg-grey-lighter min-h-screen flex flex-col">
                <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <div className="bg-white px-6 py-8 rounded shadow text-black w-full border-t-2">
                        <h1 className="mb-8 text-3xl text-center">Sign up</h1>
                        <Form {...form} >
                            <form onSubmit={form.handleSubmit(onSubmit)}>
                                <div className="relative mb-3 " data-te-input-wrapper-init>
                                    <FormField
                                        control={form.control}
                                        name="firstName"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl >
                                                    <Input
                                                        id='firstNameInput'
                                                        className="peer block border border-grey-light  min-h-[auto] w-full rounded outline-none  bg-transparent px-3 py-[0.32rem] leading-[2.15]  transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                                        {...field}
                                                        type='text'
                                                        value={firstName}
                                                        onChange={(e) => { setFirstName(e.target.value); field.value = e.target.value; field.onChange(e) }}
                                                    />
                                                </FormControl>
                                                <FormLabel
                                                    className={`pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] ${firstName.length > 0 && '-translate-y-[1.15rem] scale-[0.8]'}  text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary  motion-reduce:transition-none ${firstName?.length > 0 && 'opacity:0'} dark:peer-focus:text-primary`}
                                                    htmlFor="firstNameInput"
                                                >First Name</FormLabel>
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div className="relative mb-3 " data-te-input-wrapper-init>
                                    <FormField
                                        control={form.control}
                                        name="lastName"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl >
                                                    <Input
                                                        id='lastNameInput'
                                                        className="peer block border border-grey-light  min-h-[auto] w-full rounded outline-none  bg-transparent px-3 py-[0.32rem] leading-[2.15]  transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                                        {...field}
                                                        type='text'
                                                        value={lastName}
                                                        onChange={(e) => { setLastName(e.target.value); field.value = e.target.value; field.onChange(e) }}
                                                    />
                                                </FormControl>
                                                <FormLabel
                                                    className={`pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] ${lastName.length > 0 && '-translate-y-[1.15rem] scale-[0.8]'}  text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary  motion-reduce:transition-none ${lastName?.length > 0 && 'opacity:0'} dark:peer-focus:text-primary`}
                                                    htmlFor="lastNameInput"
                                                >Last Name</FormLabel>
                                            </FormItem>
                                        )}
                                    />
                                </div>
                                <div className="relative mb-3 " data-te-input-wrapper-init>
                                    <FormField
                                        control={form.control}
                                        name="email"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl >
                                                    <Input
                                                        id='emailInput'
                                                        className="peer block border border-grey-light  min-h-[auto] w-full rounded outline-none  bg-transparent px-3 py-[0.32rem] leading-[2.15]  transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                                        {...field}
                                                        value={email}
                                                        onChange={(e) => { setEmail(e.target.value); field.value = e.target.value; field.onChange(e) }}
                                                    />
                                                </FormControl>
                                                <FormLabel
                                                    className={`pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] ${email.length > 0 && '-translate-y-[1.15rem] scale-[0.8]'}  text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary  motion-reduce:transition-none ${email?.length > 0 && 'opacity:0'} dark:peer-focus:text-primary`}
                                                    htmlFor="emailInput"
                                                >Email address</FormLabel>
                                            </FormItem>
                                        )}
                                    />

                                </div>
                                <div className="relative mb-3 " data-te-input-wrapper-init>
                                    <FormField
                                        control={form.control}
                                        name="password"
                                        render={({ field }) => (
                                            <FormItem>
                                                <FormControl >
                                                    <Input
                                                        id='passwordInput'
                                                        className="peer block border border-grey-light  min-h-[auto] w-full rounded outline-none  bg-transparent px-3 py-[0.32rem] leading-[2.15]  transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                                                        {...field}
                                                        type='password'
                                                        value={password}
                                                        onChange={(e) => { setPassword(e.target.value); field.value = e.target.value; field.onChange(e) }}
                                                    />
                                                </FormControl>
                                                <FormLabel
                                                    className={`pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] ${password.length > 0 && '-translate-y-[1.15rem] scale-[0.8]'}  text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary  motion-reduce:transition-none ${password?.length > 0 && 'opacity:0'} dark:peer-focus:text-primary`}
                                                    htmlFor="emailInput"
                                                >Password</FormLabel>
                                            </FormItem>
                                        )}
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full text-center py-3 rounded bg-primary text-white hover:bg-green-dark focus:outline-none my-1"
                                >Create Account</button>
                            </form>
                        </Form>
                        <div className="text-center text-sm text-grey-dark mt-4">
                            By signing up, you agree to the<br />
                            <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                                Terms of Service
                            </a> and &nbsp;
                            <a className="no-underline border-b border-grey-dark text-grey-dark" href="#">
                                 Privacy Policy
                            </a>
                        </div>
                    </div>

                    <div className="text-grey-dark mt-6">
                        Already have an account?
                        <Link className="no-underline border-b border-blue text-blue" href="/sign-in/">
                            Log in
                        </Link>.
                    </div>
                </div>
            </div>
        </div>
    )
}
