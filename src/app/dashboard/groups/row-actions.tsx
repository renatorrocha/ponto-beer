"use client";

import { type Row } from "@tanstack/react-table";
import { Ellipsis } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import ControlledBtn from "~/components/form/controlled-btn";
import GroupForm from "~/components/form/group-form";
import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogHeader,
  DialogTitle,
  DialogContent,
  DialogDescription,
  DialogFooter,
} from "~/components/ui/dialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { type Group } from "~/lib/validations";
import { api } from "~/trpc/react";

interface DataTableRowActionsProps<TData extends Group> {
  row: Row<TData>;
}

export function DataTableRowActions<TData extends Group>({
  row,
}: DataTableRowActionsProps<TData>) {
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [editDialogOpen, setEditDialogOpen] = useState(false);

  const utils = api.useUtils();
  const { mutate: deleteGroup, isPending: deleteGroupPending } =
    api.group.delete.useMutation({
      onSuccess: async () => {
        setDeleteDialogOpen(false);
        await utils.group.getAll.invalidate();
        toast.success(`Grupo "${row.original.name}" excluído com sucesso!`);
      },
    });

  const { data: products } = api.product.getAll.useQuery();
  const { mutate: updateGroup, isPending: updateGroupPending } =
    api.group.update.useMutation({
      onSuccess: async () => {
        setEditDialogOpen(false);
        await utils.group.getAll.invalidate();
        toast.success(`Grupo "${row.original.name}" atualizado com sucesso!`);
      },
    });

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="flex size-8 justify-end p-0 data-[state=open]:bg-muted"
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
            onClick={() => setDeleteDialogOpen(true)}
            className="text-destructive"
          >
            Excluir
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Dialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Excluir grupo {row.original.name} ?</DialogTitle>
          </DialogHeader>
          <DialogDescription>
            Você tem certeza que deseja excluir este grupo?
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
              isLoading={deleteGroupPending}
              onClick={() => {
                deleteGroup({ id: row.original.id });
              }}
            >
              Excluir
            </ControlledBtn>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={editDialogOpen} onOpenChange={setEditDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>
              Editar grupo &quot;{row.original.name}&quot;
            </DialogTitle>
          </DialogHeader>
          <DialogDescription>
            Edite as informações do grupo &quot;{row.original.name}&quot;.
          </DialogDescription>
          {products && (
            <GroupForm
              mutationFn={(data) => {
                updateGroup({
                  id: row.original.id,
                  name: data.name,
                  products: data.products.map((product) => ({
                    id: product.id,
                  })),
                });
              }}
              existingProducts={products?.map((product) => ({
                id: product.id,
                name: product.name,
              }))}
              isLoading={updateGroupPending}
              group={row.original}
            />
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
