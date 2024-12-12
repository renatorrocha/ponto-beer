"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormFieldTypes } from "~/lib/types/form-field";
import { Form } from "~/components/ui/form";
import { api } from "~/trpc/react";
import { toast } from "sonner";
import { type MagicLinkInput, magicLinkSchema } from "~/lib/validations";
import CustomFormField from "~/components/form/controlled-form-field";
import ControlledBtn from "~/components/form/controlled-btn";

export default function SignInForm() {
  const { mutate, isPending } = api.auth.login.useMutation({
    onError: (error) => {
      toast.error(
        error.message ||
          "Ocorreu um erro ao tentar fazer login. Por favor, tente novamente.",
        {
          description:
            "Se o problema persistir, entre em contato com o suporte.",
          duration: 5000,
        },
      );
    },
    onSuccess: () => {
      toast.success("Link de acesso enviado com sucesso!", {
        description:
          "Verifique sua caixa de entrada e spam para acessar a plataforma.",
        duration: 5000,
      });
    },
  });

  const form = useForm<MagicLinkInput>({
    resolver: zodResolver(magicLinkSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(data: MagicLinkInput) {
    mutate(data);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full flex-col items-center justify-center gap-4"
      >
        <CustomFormField
          fieldType={FormFieldTypes.input}
          control={form.control}
          name="email"
          label="Email"
          placeholder="Insira o seu E-mail"
          className="w-full"
        />

        <ControlledBtn isLoading={isPending} className="w-full" type="submit">
          Entrar
        </ControlledBtn>
      </form>
    </Form>
  );
}
