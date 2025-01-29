import { Meta, StoryObj } from "@storybook/react";
import { useForm, SubmitHandler } from "react-hook-form";
import {
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormField,
} from "./form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type FormValues = {
  username: string;
  email: string;
};

const meta: Meta = {
  title: "Components/Form",
  component: Form,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "A flexible and accessible form component built with react-hook-form.",
      },
    },
  },
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
  render: function DefaultForm() {
    const formMethods = useForm<FormValues>({
      defaultValues: {
        username: "",
        email: "",
      },
    });

    const onSubmit: SubmitHandler<FormValues> = (data) => {
      alert(JSON.stringify(data, null, 2));
    };

    return (
      <Form {...formMethods}>
        <form
          onSubmit={formMethods.handleSubmit(onSubmit)}
          className="space-y-4"
        >
          <FormField
            control={formMethods.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your username" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    );
  },
};

export const WithValidation: Story = {
  render: function WithValidationForm() {
    const formMethods = useForm<FormValues>({
      defaultValues: {
        username: "",
        email: "",
      },
      mode: "onBlur",
    });

    const onSubmit: SubmitHandler<FormValues> = (data) => {
      alert(JSON.stringify(data, null, 2));
    };

    return (
      <Form {...formMethods}>
        <form
          onSubmit={formMethods.handleSubmit(onSubmit)}
          className="space-y-4"
        >
          <FormField
            control={formMethods.control}
            name="email"
            rules={{
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Invalid email format",
              },
            }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    );
  },
};

export const WithErrorHandling: Story = {
  render: function WithErrorHandlingForm() {
    const formMethods = useForm<FormValues>({
      defaultValues: {
        username: "",
      },
      mode: "onChange",
    });

    const onSubmit: SubmitHandler<FormValues> = (data) => {
      alert(JSON.stringify(data, null, 2));
    };

    return (
      <Form {...formMethods}>
        <form
          onSubmit={formMethods.handleSubmit(onSubmit)}
          className="space-y-4"
        >
          <FormField
            control={formMethods.control}
            name="username"
            rules={{ required: "Username is required" }}
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your username" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    );
  },
};
