"use client";

import { type Row } from "@tanstack/react-table";
import { Ellipsis } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import ControlledBtn from "~/components/form/controlled-btn";
import ProductForm from "~/components/form/products-form";
import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { type Product } from "~/lib/validations";
import { api } from "~/trpc/react";

interface DataTableRowActionsProps<TData extends Product> {
  row: Row<TData>;
}

export function DataTableRowActions<TData extends Product>({
  row,
}: DataTableRowActionsProps<TData>) {
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [editDialogOpen, setEditDialogOpen] = useState(false);

  const utils = api.useUtils();
  const { mutate: deleteProduct, isPending: deleteProductPending } =
    api.product.delete.useMutation({
      onSuccess: async () => {
        setDeleteDialogOpen(false);
        await utils.product.getAll.invalidate();
        toast.success(`Produto "${row.original.name}" excluído com sucesso!`);
      },
    });
  const { mutate: updateProduct, isPending: updateProductPending } =
    api.product.update.useMutation({
      onSuccess: async () => {
        setEditDialogOpen(false);
        await utils.product.getAll.invalidate();
        toast.success(`Produto "${row.original.name}" atualizado com sucesso!`);
      },
    });

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
          >
            <Ellipsis className="h-4 w-4" />
            <span className="sr-only">Abrir menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[160px]">
          <DropdownMenuItem onClick={() => setEditDialogOpen(true)}>
            Editar
          </DropdownMenuItem>
          <DropdownMenuItem
            className="text-destructive"
            onClick={() => setDeleteDialogOpen(true)}
          >
            Excluir
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent className="sm:max-w-[625px]">
          <DialogHeader>
            <DialogTitle>Excluir produto {row.original.name} ?</DialogTitle>
          </DialogHeader>
          <DialogDescription>
            Você tem certeza que deseja excluir este produto?
          </DialogDescription>
          <DialogFooter>
            <Button
              variant="outline"
              onClick={() => setDeleteDialogOpen(false)}
            >
              Cancelar
            </Button>
            <ControlledBtn
              type="button"
              variant="destructive"
              className="w-fit"
              isLoading={deleteProductPending}
              onClick={() => {
                deleteProduct({ id: row.original.id });
              }}
            >
              Excluir
            </ControlledBtn>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={editDialogOpen} onOpenChange={setEditDialogOpen}>
        <DialogContent className="sm:max-w-[625px]">
          <DialogHeader>
            <DialogTitle>
              Editar grupo &quot;{row.original.name}&quot;
            </DialogTitle>
          </DialogHeader>
          <DialogDescription>
            Edite as informações do grupo &quot;{row.original.name}&quot;.
          </DialogDescription>

          <ProductForm
            mutationFn={(data) => {
              updateProduct({
                id: row.original.id,
                ...data,
              });
            }}
            product={row.original}
            isLoading={updateProductPending}
          />
        </DialogContent>
      </Dialog>
    </>
  );
}
