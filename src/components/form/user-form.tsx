"use client";

import { useForm } from "react-hook-form";
import { Form } from "../ui/form";
import { zodResolver } from "@hookform/resolvers/zod";

import ControlledBtn from "./controlled-btn";
import {
  createUserSchema,
  userSchema,
  type CreateUser,
  type User,
} from "~/lib/validations";
import CustomFormField, { FormFieldTypes } from "./controlled-form-field";

export default function UserForm({
  mutationFn,
  isLoading,
  user,
}: {
  user?: User;
  mutationFn: (data: User | CreateUser) => void;
  isLoading: boolean;
}) {
  const isEditing = Boolean(user);

  const form = useForm<User | CreateUser>({
    resolver: zodResolver(isEditing ? userSchema : createUserSchema),
    defaultValues: {
      name: user?.name ?? "",
      email: user?.email ?? "",
      ...(isEditing && { id: user?.id }),
    },
  });

  async function onSubmit(data: User | CreateUser) {
    mutationFn(data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <CustomFormField
          fieldType={FormFieldTypes.input}
          control={form.control}
          name="name"
          label="Nome do Usuário"
          placeholder="Antonio Talone"
        />

        <CustomFormField
          fieldType={FormFieldTypes.input}
          control={form.control}
          name="email"
          label="E-mail do Usuário"
          placeholder="AntonioTalone@mail.com"
        />

        <ControlledBtn type="submit" isLoading={isLoading}>
          {user ? "Editar" : "Criar"} Usuário
        </ControlledBtn>
      </form>
    </Form>
  );
}
