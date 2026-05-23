import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ArrowRight } from "lucide-react";
import contactFormImg from "../../assets/images/Gallery/contact-social.jpg";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

export default function ContactForm() {
  const [status, setStatus] = useState("");
  const [imageLoaded, setImageLoaded] = useState(false);

  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (values) => {
    const subject = encodeURIComponent(
      `Website enquiry from ${values.name || "a visitor"}`
    );
    const body = encodeURIComponent(
      `Name: ${values.name}\nEmail: ${values.email}\n\nMessage:\n${values.message}`
    );

    window.location.href = `mailto:contact@olympianhouseintl.com?subject=${subject}&body=${body}`;
    setStatus("Opening your email client.");
    form.reset();
  };

  return (
    <section className="relative overflow-hidden px-6 py-16 text-foreground lg:px-8 lg:py-20">
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,#fffaf0_0%,#fcf6ea_28%,#f7f0e2_100%)]" />

      <div className="container mx-auto">
        <div className="grid items-stretch gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <Card className="overflow-hidden border-[#e8dcc8] bg-white shadow-[0_28px_80px_rgba(15,23,42,0.12)]">
            <div className="relative min-h-[520px] bg-slate-950">
              {!imageLoaded && (
                <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-muted via-muted/60 to-muted" />
              )}
              <img
                src={contactFormImg}
                alt="Contact OHI social media illustration"
                onLoad={() => setImageLoaded(true)}
                className={`h-full min-h-[520px] w-full object-cover transition-opacity duration-300 ${
                  imageLoaded ? "opacity-100" : "opacity-0"
                }`}
              />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(8,10,15,0.08)_0%,rgba(8,10,15,0.35)_100%)]" />
            </div>
          </Card>

          <Card className="border-[#e8dcc8] bg-white shadow-[0_28px_80px_rgba(15,23,42,0.12)]">
            <CardHeader className="space-y-3 border-b border-[#e8dcc8]/80 pb-6">
              <div className="space-y-2">
                <CardTitle className="font-display text-3xl font-semibold tracking-[-0.03em] text-[#173145]">
                  Contact Us
                </CardTitle>
                <CardDescription className="font-body max-w-xl text-base leading-7 text-[#4e5a67]">
                  Send a message and we&apos;ll reply by email.
                </CardDescription>
              </div>
            </CardHeader>

            <CardContent className="pt-6">
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="name"
                      rules={{ required: "Full name is required." }}
                      render={({ field }) => (
                        <FormItem className="sm:col-span-1">
                          <FormLabel>Full name</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              placeholder="John Doe"
                              autoComplete="name"
                              className="h-11 rounded-xl border-[#e8dcc8] bg-white"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      rules={{
                        required: "Email is required.",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Enter a valid email address.",
                        },
                      }}
                      render={({ field }) => (
                        <FormItem className="sm:col-span-1">
                          <FormLabel>Email address</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              type="email"
                              placeholder="you@example.com"
                              autoComplete="email"
                              className="h-11 rounded-xl border-[#e8dcc8] bg-white"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="message"
                    rules={{
                      required: "Please add a message.",
                      minLength: {
                        value: 10,
                        message: "Write at least 10 characters.",
                      },
                    }}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            {...field}
                            rows={6}
                            placeholder="Tell us a little about the project or question..."
                            className="min-h-[160px] rounded-xl border-[#e8dcc8] bg-white"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <p className="font-body text-sm text-[#708496]">
                      We typically respond within one business day.
                    </p>
                    <Button
                      type="submit"
                      size="lg"
                      className="group w-full rounded-xl bg-[linear-gradient(180deg,#f59d21_0%,#c96b17_100%)] px-6 text-white shadow-[0_18px_42px_rgba(201,107,23,0.22)] hover:brightness-105 sm:w-auto"
                    >
                      {form.formState.isSubmitting ? "Sending..." : "Let's talk"}
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </Button>
                  </div>
                </form>
              </Form>

              {status ? (
                <div className="mt-5 rounded-xl border border-[#e8dcc8] bg-white/80 px-4 py-3 text-sm text-[#173145]">
                  {status}
                </div>
              ) : null}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
