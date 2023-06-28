
import { ThemeProvider } from "@/components/theme-provider";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ThemeForm } from "@/components/theme-form";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const colors = [

];

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
                <Card className="flex w-full flex-col items-center">
                  <CardHeader>
                    <h2 className="text-lg font-bold md:text-xl">Light Colors</h2>
                  </CardHeader>
                  <CardContent className="md:w-max-[80%] w-full ">
                    <p className="text-sm font-medium leading-none">
                      This is the light theme.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="dark">
                <Card className="flex w-full flex-col items-center">
                  <CardHeader>
                    <h2 className="text-lg font-bold md:text-xl">Dark Colors</h2>
                  </CardHeader>
                  <CardContent className="md:w-max-[80%] w-full ">
                    <p className="text-sm font-medium leading-none">
                      This is the dark theme.
                    </p>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
            <ThemeForm />
          </CardContent>
        </Card>
        <ThemeProvider>
          <Card className="flex w-full flex-col items-center">
            <CardHeader>
              <h2 className="text-lg font-bold md:text-xl">Theme Preview</h2>
            </CardHeader>
            <CardContent className="md:w-max-[80%] w-full ">

            </CardContent>
          </Card>
        </ThemeProvider>
      </div>
    </section>
  )
}
