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
      <DataTableColumnHeader column={column} title="Imagem" />
    ),
    cell: ({ row }) => (
      <div className="flex justify-center">
        <div className="relative flex size-16 justify-center overflow-hidden rounded-md border">
          <img
            src={row.getValue("image")}
            alt={row.getValue("name")}
            className="object-cover"
          />
        </div>
      </div>
    ),
    enableSorting: false,
  },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Nome" />
    ),
    cell: ({ row }) => (
      <div className="min-w-[150px]">{row.getValue("name")}</div>
    ),
  },
  {
    accessorKey: "description",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Descrição" />
    ),
    cell: ({ row }) => (
      <div className="max-w-[300px] truncate">
        {row.getValue("description")}
      </div>
    ),
  },
  {
    accessorKey: "price",
    header: ({ column }) => (
      <DataTableColumnHeader
        column={column}
        className="flex justify-center"
        title="Preço"
      />
    ),
    cell: ({ row }) => {
      const price = parseFloat(row.getValue("price"));
      return <div className="flex max-w-[300px]">R$ {price.toFixed(2)}</div>;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];
