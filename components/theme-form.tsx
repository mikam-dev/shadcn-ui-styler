"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"

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
import { Input } from "@/components/ui/input"
import { useForm } from "react-hook-form"
import { Slider } from "./ui/slider"
import { cn } from "@/lib/utils"
import { fi } from "date-fns/locale"

const formSchema = z.object({
  hue: z.number().min(0).max(360),
  sat: z.number().min(0).max(100),
  light: z.number().min(0).max(100),
})

export function ThemeForm() {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      hue: 180,
      sat: 50,
      light: 50,
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-8">
        <FormField
          control={form.control}
          name="hue"
          render={({ field }) => (
            <FormItem className="flex items-center">
              <FormLabel>H:{' '}</FormLabel>
              <FormControl>
                <Slider
                  defaultValue={[field.value]}
                  max={360}
                  step={1}
                  className={cn("w-[60%]", "mx-auto")}
                />
              </FormControl>
              <p>{field.value}</p>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="sat"
          render={({ field }) => (
            <FormItem className="flex items-center">
              <FormLabel>S:{' '}</FormLabel>
              <FormControl>
                <Slider
                  defaultValue={[field.value]}
                  max={100}
                  step={1}
                  className={cn("w-[60%]", "mx-auto")}
                />
              </FormControl>
              <p>{field.value}%</p>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="light"
          render={({ field }) => (
            <FormItem className="flex items-center">
              <FormLabel>L:{' '}</FormLabel>
              <FormControl>
                <Slider
                  defaultValue={[field.value]}
                  max={100}
                  step={1}
                  className={cn("w-[60%]", "mx-auto")}
                />
              </FormControl>
              <p>{field.value}%</p>
            </FormItem>
          )}
        />
      </form>
    </Form>
  )
}
