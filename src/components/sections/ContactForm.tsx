"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/base-select";
import { ArrowUpRightIcon } from "@phosphor-icons/react";

const formSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(100, { message: "Name must be at most 100 characters" }),
  email: z
    .string()
    .trim()
    .email({ message: "Please enter a valid email address" })
    .max(160, { message: "Email must be at most 160 characters" }),
  messageTypes: z
    .array(z.string())
    .min(1, { message: "Please select at least one message type" }),
  message: z
    .string()
    .trim()
    .min(10, { message: "Message must be at least 10 characters" })
    .max(2000, { message: "Message must be at most 2000 characters" }),
});

const items = [
  { label: "Donation", value: "donation" },
  { label: "Volunteering", value: "volunteering" },
  { label: "Partnership", value: "partnership" },
  { label: "Enquiry", value: "enquiry" },
  { label: "Feedback", value: "feedback" },
];

export default function ContactForm() {
  const renderValue = (value: string[]) => {
    const MAX_COUNT = 2;
    if (value.length === 0) return "Select message type";
    const labels = value
      .map((val) => items.find((item) => item.value === val)?.label)
      .filter(Boolean);
    if (labels.length <= MAX_COUNT) {
      return labels.join(", ");
    }
    const firstThree = labels.slice(0, MAX_COUNT);
    const remaining = labels.length - MAX_COUNT;
    return `${firstThree.join(", ")}, +${remaining} more`;
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      messageTypes: [],
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const to = "info@reachafrika.org";
      const subjectBase = values.messageTypes[0]
        ? items.find((i) => i.value === values.messageTypes[0])?.label ||
          "Contact"
        : "Contact";
      const subject = `${subjectBase} - ${values.name}`;

      const typeList = values.messageTypes
        .map((val) => items.find((i) => i.value === val)?.label)
        .filter(Boolean)
        .join(", ");

      const body = `Name: ${values.name}\nEmail: ${values.email}\nType: ${typeList}\n\nMessage:\n${values.message}`;

      const mailto = `mailto:${encodeURIComponent(
        to
      )}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
        body
      )}`;

      window.location.href = mailto;
      toast.success("Opening your email app to send the message...");
    } catch (error) {
      console.error("Error constructing email link", error);
      toast.error("Failed to open your email app. Please try again.");
    }
  }

  return (
    <div className="flex min-h-[60vh] h-full w-full items-center justify-center px-4 basis-1/3">
      <Card className="max-w-120 w-full">
        <CardHeader>
          <CardTitle className="card-subtitle">Send us a message</CardTitle>
          <CardDescription>
            Please fill out the form below and we will get back to you shortly.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid gap-4">
                {/* Name Field */}
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="grid gap-2">
                      <FormLabel htmlFor="name">Name</FormLabel>
                      <FormControl>
                        <Input
                          id="name"
                          placeholder="John Doe"
                          type="text"
                          autoComplete="name"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Email Field */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="grid gap-2">
                      <FormLabel htmlFor="email">Email</FormLabel>
                      <FormControl>
                        <Input
                          id="email"
                          placeholder="johndoe@mail.com"
                          type="email"
                          autoComplete="email"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Message Type Field */}
                <FormField
                  control={form.control}
                  name="messageTypes"
                  render={({ field }) => (
                    <FormItem className="grid gap-2">
                      <FormLabel htmlFor="messageTypes">Message Type</FormLabel>
                      <FormControl>
                        <Select
                          multiple
                          value={field.value}
                          onValueChange={field.onChange}
                        >
                          <SelectTrigger className="w-full" size="lg">
                            <SelectValue
                              className="truncate"
                              placeholder="Select message type"
                            >
                              {renderValue(field.value)}
                            </SelectValue>
                          </SelectTrigger>
                          <SelectContent>
                            {items.map((item) => (
                              <SelectItem key={item.value} value={item.value}>
                                {item.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Message Field */}
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="grid gap-2">
                      <FormLabel htmlFor="message">Message</FormLabel>
                      <FormControl>
                        <Textarea
                          id="message"
                          placeholder="Your message..."
                          autoComplete="off"
                          className="resize-none max-h-28 overflow-y-auto"
                          rows={5}
                          maxLength={2000}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button type="submit" className="w-full group">
                  Send Message
                  <ArrowUpRightIcon className="group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
