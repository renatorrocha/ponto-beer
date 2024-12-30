/* eslint-disable @next/next/no-img-element */
"use client";

import { type ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "../../../components/table/column-header";
import type { Group } from "~/lib/validations";
import { DataTableRowActions } from "./row-actions";

export const columns: ColumnDef<Group>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Nome" />
    ),
  },
  {
    accessorKey: "products",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Produtos" />
    ),
    cell: ({ row }) => {
      const products = row.original.products;
      return <div>{products.length}</div>;
    },
  },

  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
];
