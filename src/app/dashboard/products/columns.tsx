"use client";

import { type ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "../../../components/table/column-header";
import { DataTableRowActions } from "../../../components/table/row-actions";
import { ChevronRight, ChevronDown } from "lucide-react";
import { Button } from "~/components/ui/button";

type Item = {
  name: string;
  description: string;
  price: number;
  image: string;
  id: string;
  groupId: string;
};

type Group = {
  name: string;
  id: string;
  items: Item[];
};

export const columns: ColumnDef<Group>[] = [
  {
    id: "expander",
    header: () => null,
    cell: ({ row }) => {
      return row.getCanExpand() ? (
        <Button
          variant="ghost"
          onClick={row.getToggleExpandedHandler()}
          className="h-6 w-6 p-0"
        >
          {row.getIsExpanded() ? (
            <ChevronDown className="h-4 w-4" />
          ) : (
            <ChevronRight className="h-4 w-4" />
          )}
        </Button>
      ) : null;
    },
  },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Nome do Grupo" />
    ),
    cell: ({ row }) => {
      return row.original.name;
    },
  },
  {
    accessorKey: "items",
    header: "Itens",
    cell: ({ row }) => {
      return row.original.items.length;
    },
  },
];

export const subColumns: ColumnDef<Item>[] = [
  {
    accessorKey: "image",
    header: "Imagem",
    cell: ({ row }) => (
      <div className="relative h-12 w-12 overflow-hidden rounded-md">
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
