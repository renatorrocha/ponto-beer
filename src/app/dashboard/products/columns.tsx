/* eslint-disable @next/next/no-img-element */
"use client";

import { type ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "../../../components/table/column-header";
import type { Product } from "~/lib/validations";
import { DataTableRowActions } from "./row-actions";

export const columns: ColumnDef<Product>[] = [
  {
    accessorKey: "image",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Imagem"
        className="text-center"
      />
    ),
    cell: ({ row }) => (
      <div className="flex justify-center py-2">
        <div className="relative flex size-16 shrink-0 items-center justify-center overflow-hidden rounded-md border bg-muted">
          <img
            src={row.getValue("image")}
            alt={row.getValue("name")}
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    ),
    enableSorting: false,
    size: 100,
  },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Nome" />
    ),
    cell: ({ row }) => (
      <div className="flex min-w-[200px] items-center">
        <span className="font-medium">{row.getValue("name")}</span>
      </div>
    ),
    size: 250,
  },
  {
    accessorKey: "description",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Descrição" />
    ),
    cell: ({ row }) => (
      <div className="max-w-[400px]">
        <p className="truncate text-sm text-muted-foreground">
          {row.getValue("description")}
        </p>
      </div>
    ),
    size: 400,
  },
  {
    accessorKey: "price",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        title="Preço"
        className="text-right"
      />
    ),
    cell: ({ row }) => {
      const price = parseFloat(row.getValue("price"));
      const formatted = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
      }).format(price);

      return <div className="text-right font-medium">{formatted}</div>;
    },
    size: 150,
  },
  {
    id: "actions",
    header: () => <div className="text-right">Ações</div>,
    cell: ({ row }) => (
      <div className="flex justify-end pr-4">
        <DataTableRowActions row={row} />
      </div>
    ),
    size: 100,
  },
];
