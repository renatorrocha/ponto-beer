/* eslint-disable @next/next/no-img-element */
"use client";

import { type ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "../../../components/table/column-header";
import type { Item } from "~/lib/validations";
import { DataTableRowActions } from "./row-actions";

export const columns: ColumnDef<Item>[] = [
  {
    accessorKey: "image",
    header: "Imagem",
    cell: ({ row }) => (
      <div className="relative size-16 overflow-hidden rounded-md">
        <img
          src={row.getValue("image")}
          alt={row.getValue("name")}
          className="object-cover"
        />
      </div>
    ),
  },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Nome" />
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
      <DataTableColumnHeader column={column} title="Preço" />
    ),
    cell: ({ row }) => {
      const price = parseFloat(row.getValue("price"));
      return `R$ ${price.toFixed(2)}`;
    },
  },

  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];
