"use client"
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ThemeForm } from "@/components/theme-form";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea"
import CSSMdx from "./css.mdx"
import { SelectCSS } from "@/components/css-vars";

export default function IndexPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Easily style your shadcn/ui components.
        </h1>
        <Link href="/demo" className="text-primary underline">
          <Button>View Components</Button>
        </Link>
      </div>
      <Separator my-4 bg-gradient-to-r from-primary to-secondary />
      <div className="mx-auto flex w-full max-w-[980px] flex-col items-center gap-2">
        <h2 className="text-xl font-bold leading-tight tracking-tighter md:text-2xl">
          Use the sliders below to customize the theme.
        </h2>
        <Card className="flex w-full flex-col items-center">
          <CardHeader>
            <h2 className="text-lg font-bold md:text-xl">Theme Settings</h2>
          </CardHeader>
          <CardContent className="md:w-max-[80%] w-full ">
            <Tabs defaultValue="light" className="mx-auto w-[400px]">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="light">Light Mode</TabsTrigger>
                <TabsTrigger value="dark">Dark Mode</TabsTrigger>
              </TabsList>
              <TabsContent value="light">
                <SelectCSS />
              </TabsContent>
              <TabsContent value="dark">
                <SelectCSS />
              </TabsContent>
            </Tabs>
            <ThemeForm />
          </CardContent>
        </Card>
        <Card className="flex w-full flex-col items-center">
          <CardHeader>
            <h2 className="text-lg font-bold md:text-xl">Theme Preview</h2>
          </CardHeader>
          <CardContent className="md:w-max-[80%] w-full ">

          </CardContent>
        </Card>
        <Card className="flex w-full flex-col items-center">
          <CardHeader className="flex flex-col items-center">
            <h2 className="text-lg font-bold md:text-xl">CSS</h2>
            <p>copy this to your <Badge>/globals.css</Badge></p>
          </CardHeader>
          <CardContent className="md:w-max-[80%] w-full ">
            <Card className="mx-1 grid w-full grid-cols-1 p-4 md:mx-auto md:max-w-[80%]">
              <CSSMdx />
            </Card>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
