"use client";

import { type ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "../../../components/table/column-header";
import type { Group } from "~/lib/validations";
import { DataTableRowActions } from "./row-actions";
import { Badge } from "~/components/ui/badge";
import { Package } from "lucide-react";

export const columns: ColumnDef<Group>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Nome do Grupo" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex items-center">
          <span className="font-medium">{row.getValue("name")}</span>
        </div>
      );
    },
    size: 300, // Set a fixed width for the name column
  },
  {
    accessorKey: "products",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Produtos"
        className="text-center"
      />
    ),
    cell: ({ row }) => {
      const products = row.original.products;
      return (
        <div className="flex justify-center">
          <Badge variant="secondary" className="flex items-center gap-1.5">
            <Package className="h-3.5 w-3.5" />
            <span>{products.length}</span>
          </Badge>
        </div>
      );
    },
    size: 150, // Set a fixed width for the products column
  },
  {
    id: "actions",
    header: () => <div className="text-right">Ações</div>,
    cell: ({ row }) => (
      <div className="flex justify-end pr-4">
        <DataTableRowActions row={row} />
      </div>
    ),
    size: 100, // Set a fixed width for the actions column
  },
];
