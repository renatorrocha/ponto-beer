"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { DollarSign, Image, AlignLeft } from "lucide-react";
import { Form } from "../ui/form";
import ControlledBtn from "./controlled-btn";
import CustomFormField, { FormFieldTypes } from "./controlled-form-field";
import {
  type CreateProduct,
  createProductSchema,
  type Product,
  productSchema,
} from "~/lib/validations";

export default function ProductForm({
  mutationFn,
  isLoading,
  product,
}: {
  product?: Product;
  mutationFn: (data: Product | CreateProduct) => void;
  isLoading: boolean;
}) {
  const isEditing = Boolean(product);

  const form = useForm<Product | CreateProduct>({
    resolver: zodResolver(isEditing ? productSchema : createProductSchema),
    defaultValues: {
      name: "",
      description: "",
      price: 0,
      image: "",
      ...(isEditing && { id: product?.id }),
    },
  });

  console.log(form.formState.errors);

  async function onSubmit(data: Product | CreateProduct) {
    mutationFn(data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <CustomFormField
            fieldType={FormFieldTypes.input}
            control={form.control}
            name={"name"}
            label="Nome do Item"
            placeholder="Ex: Espetinho de Frango"
          />
          <CustomFormField
            fieldType={FormFieldTypes.input}
            control={form.control}
            name={"price"}
            label="Preço do Item"
            type="number"
            placeholder="0.00"
            leftIcon={<DollarSign className="h-4 w-4 text-muted-foreground" />}
          />
        </div>
        <CustomFormField
          fieldType={FormFieldTypes.textarea}
          control={form.control}
          name={"description"}
          label="Descrição do Item"
          placeholder="Descreva o item brevemente..."
          leftIcon={<AlignLeft className="h-4 w-4 text-muted-foreground" />}
        />
        <CustomFormField
          fieldType={FormFieldTypes.input}
          control={form.control}
          name={"image"}
          label="URL da Imagem do Item"
          placeholder="https://exemplo.com/imagem.jpg"
          leftIcon={<Image className="h-4 w-4 text-muted-foreground" />}
        />

        <ControlledBtn
          type="submit"
          isLoading={isLoading}
          className="mt-4 w-full sm:mt-0 sm:w-auto"
        >
          {isEditing ? "Salvar Alterações" : "Criar Produto"}
        </ControlledBtn>
      </form>
    </Form>
  );
}
