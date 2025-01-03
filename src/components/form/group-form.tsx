"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "../ui/form";
import ControlledBtn from "./controlled-btn";
import CustomFormField, { FormFieldTypes } from "./controlled-form-field";
import {
  type CreateGroup,
  createGroupSchema,
  type Group,
  groupSchema,
} from "~/lib/validations";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";
import { ScrollArea } from "../ui/scroll-area";
import { DialogFooter } from "../ui/dialog";

export default function GroupForm({
  mutationFn,
  isLoading,
  group,
  existingProducts,
}: {
  group?: Group;
  mutationFn: (data: Group | CreateGroup) => void;
  existingProducts: { id: string; name: string }[];
  isLoading: boolean;
}) {
  const isEditing = Boolean(group);

  const form = useForm<Group | CreateGroup>({
    resolver: zodResolver(isEditing ? groupSchema : createGroupSchema),
    defaultValues: {
      name: group?.name ?? "",
      products: group?.products ?? [],
      ...(isEditing && { id: group?.id }),
    },
  });
  const { control, watch, setValue } = form;
  const selectedProductIds = watch("products");

  async function onSubmit(data: Group | CreateGroup) {
    mutationFn(data);
  }

  const handleProductToggle = (productId: string) => {
    const currentProducts = form.getValues("products");
    const productIndex = currentProducts.findIndex((p) => p.id === productId);
    let updatedProducts;
    if (productIndex > -1) {
      updatedProducts = currentProducts.filter((p) => p.id !== productId);
    } else {
      updatedProducts = [...currentProducts, { id: productId }];
    }
    setValue("products", updatedProducts, { shouldValidate: true });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="space-y-4">
          <CustomFormField
            fieldType={FormFieldTypes.input}
            control={control}
            name="name"
            label="Nome do Grupo"
            placeholder="Ex: Bebidas"
          />

          <div>
            <h3 className="mb-2 text-lg font-semibold">Produtos</h3>
            <ScrollArea className="h-[200px] rounded-md border p-4">
              <div className="space-y-2">
                {existingProducts.map((product) => (
                  <div key={product.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={`product-${product.id}`}
                      checked={selectedProductIds.some(
                        (p) => p.id === product.id,
                      )}
                      onCheckedChange={() => handleProductToggle(product.id)}
                      name={product.name}
                    />
                    <Label
                      htmlFor={`product-${product.id}`}
                      className="text-sm"
                    >
                      {product.name}
                    </Label>
                  </div>
                ))}
              </div>
            </ScrollArea>
            {form.formState.errors.products && (
              <p className="mt-2 text-sm text-destructive">
                Selecione pelo menos um produto
              </p>
            )}
          </div>
        </div>

        <DialogFooter>
          <ControlledBtn
            type="submit"
            isLoading={isLoading}
            className="w-full sm:w-auto"
          >
            {isEditing ? "Salvar Alterações" : "Criar Grupo"}
          </ControlledBtn>
        </DialogFooter>
      </form>
    </Form>
  );
}
