"use client";

import { useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Trash2, Plus, DollarSign, Image, AlignLeft } from "lucide-react";
import { Form } from "../ui/form";
import ControlledBtn from "./controlled-btn";
import CustomFormField, { FormFieldTypes } from "./controlled-form-field";
import {
  type CreateGroup,
  createGroupSchema,
  type Group,
  groupSchema,
} from "~/lib/validations";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { ScrollArea } from "../ui/scroll-area";
import { Separator } from "../ui/separator";

export default function ProductForm({
  mutationFn,
  isLoading,
  group,
}: {
  group?: Group;
  mutationFn: (data: Group | CreateGroup) => void;
  isLoading: boolean;
}) {
  const isEditing = Boolean(group);

  const form = useForm<Group | CreateGroup>({
    resolver: zodResolver(isEditing ? groupSchema : createGroupSchema),
    defaultValues: {
      name: "",
      items: [{ name: "", description: "", price: 0, image: "" }],
      ...(isEditing && { id: group?.id }),
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "items",
  });

  async function onSubmit(data: Group | CreateGroup) {
    mutationFn(data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-4">
          <CustomFormField
            fieldType={FormFieldTypes.input}
            control={form.control}
            name="name"
            label="Nome do Grupo"
            placeholder="Ex: Espetinhos, Bebidas, Sobremesas"
          />
        </div>

        <Separator className="my-6" />

        <ScrollArea className="-mr-4 h-[50vh] pr-4">
          <div className="space-y-6">
            {fields.map((field, index) => (
              <Card key={field.id} className="border-2">
                <CardHeader className="pb-2">
                  <CardTitle className="flex items-center justify-between text-lg">
                    Item {index + 1}
                    <Button
                      type="button"
                      variant="ghost"
                      size="sm"
                      onClick={() => remove(index)}
                      disabled={fields.length === 1}
                      className="text-destructive hover:text-destructive/90"
                    >
                      <Trash2 className="mr-1 h-4 w-4" />
                      Remover
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 pt-0">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <CustomFormField
                      fieldType={FormFieldTypes.input}
                      control={form.control}
                      name={`items.${index}.name`}
                      label="Nome do Item"
                      placeholder="Ex: Espetinho de Frango"
                    />
                    <CustomFormField
                      fieldType={FormFieldTypes.input}
                      control={form.control}
                      name={`items.${index}.price`}
                      label="Preço do Item"
                      type="number"
                      placeholder="0.00"
                      leftIcon={
                        <DollarSign className="h-4 w-4 text-muted-foreground" />
                      }
                    />
                  </div>
                  <CustomFormField
                    fieldType={FormFieldTypes.textarea}
                    control={form.control}
                    name={`items.${index}.description`}
                    label="Descrição do Item"
                    placeholder="Descreva o item brevemente..."
                    leftIcon={
                      <AlignLeft className="h-4 w-4 text-muted-foreground" />
                    }
                  />
                  <CustomFormField
                    fieldType={FormFieldTypes.input}
                    control={form.control}
                    name={`items.${index}.image`}
                    label="URL da Imagem do Item"
                    placeholder="https://exemplo.com/imagem.jpg"
                    leftIcon={
                      <Image className="h-4 w-4 text-muted-foreground" />
                    }
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollArea>

        <div className="flex items-center justify-between pt-4">
          <Button
            type="button"
            variant="outline"
            onClick={() =>
              append({ name: "", description: "", price: 0, image: "" })
            }
            className="w-full sm:w-auto"
          >
            <Plus className="mr-2 h-4 w-4" />
            Adicionar Item
          </Button>

          <ControlledBtn
            type="submit"
            isLoading={isLoading}
            className="mt-4 w-full sm:mt-0 sm:w-auto"
          >
            {isEditing ? "Salvar Alterações" : "Criar Grupo"}
          </ControlledBtn>
        </div>
      </form>
    </Form>
  );
}
