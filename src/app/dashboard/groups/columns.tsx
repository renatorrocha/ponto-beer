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
        <div className="flex items-center space-x-2">
          <span className="font-medium">{row.getValue("name")}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "products",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        className="flex justify-start"
        title="Produtos"
      />
    ),
    cell: ({ row }) => {
      const products = row.original.products;
      return (
        <div className="flex items-center justify-end">
          <Badge variant="secondary" className="flex items-center space-x-1">
            <Package className="h-3 w-3" />
            <span>{products.length}</span>
          </Badge>
        </div>
      );
    },
  },

  {
    id: "actions",
    cell: ({ row }) => (
      <div className="mr-12 flex justify-end">
        <DataTableRowActions row={row} />
      </div>
    ),
  },
];
