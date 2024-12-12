import React from "react";
import type {
  Control,
  ControllerRenderProps,
  FieldPath,
  FieldValues,
} from "react-hook-form";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { cn } from "~/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export enum FormFieldTypes {
  input = "input",
  textarea = "textarea",
  select = "select",
  date = "date",
  skeleton = "skeleton",
}

interface IFormFieldBase<TFieldValues extends FieldValues> {
  control: Control<TFieldValues>;
  name: FieldPath<TFieldValues>;
  label?: string;
  description?: string;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
  leftIcon?: React.ReactNode;
}

interface IFormFieldInput<TFieldValues extends FieldValues>
  extends IFormFieldBase<TFieldValues> {
  fieldType: FormFieldTypes.input;
  type?: string;
  defaultValue?: string | number;
}

interface IFormFieldTextarea<TFieldValues extends FieldValues>
  extends IFormFieldBase<TFieldValues> {
  fieldType: FormFieldTypes.textarea;
  defaultValue?: string;
}

interface IFormFieldSelect<TFieldValues extends FieldValues>
  extends IFormFieldBase<TFieldValues> {
  fieldType: FormFieldTypes.select;
  options: { value: string; label: string }[];
  defaultValue?: string;
}

interface IFormFieldDate<TFieldValues extends FieldValues>
  extends IFormFieldBase<TFieldValues> {
  fieldType: FormFieldTypes.date;
  defaultValue?: Date;
}

interface IFormFieldSkeleton<TFieldValues extends FieldValues>
  extends IFormFieldBase<TFieldValues> {
  fieldType: FormFieldTypes.skeleton;
  renderSkeleton: (
    field: ControllerRenderProps<TFieldValues, FieldPath<TFieldValues>>,
  ) => React.ReactNode;
}

type IFormField<TFieldValues extends FieldValues> =
  | IFormFieldInput<TFieldValues>
  | IFormFieldTextarea<TFieldValues>
  | IFormFieldSelect<TFieldValues>
  | IFormFieldDate<TFieldValues>
  | IFormFieldSkeleton<TFieldValues>;

function RenderField<TFieldValues extends FieldValues>({
  field,
  props,
}: {
  field: ControllerRenderProps<TFieldValues, FieldPath<TFieldValues>>;
  props: IFormField<TFieldValues>;
}) {
  const { leftIcon } = props;

  switch (props.fieldType) {
    case FormFieldTypes.input:
      return (
        <FormControl>
          <div className="relative">
            {leftIcon && (
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                {leftIcon}
              </div>
            )}
            <Input
              {...field}
              type={props.type}
              placeholder={props.placeholder}
              className={cn(leftIcon && "pl-10")}
              disabled={props.disabled}
            />
          </div>
        </FormControl>
      );

    case FormFieldTypes.textarea:
      return (
        <FormControl>
          <div className="relative">
            {leftIcon && (
              <div className="pointer-events-none absolute left-3 top-3">
                {leftIcon}
              </div>
            )}
            <Textarea
              {...field}
              placeholder={props.placeholder}
              className={cn(leftIcon && "pl-10")}
              disabled={props.disabled}
            />
          </div>
        </FormControl>
      );

    case FormFieldTypes.select:
      return (
        <FormControl>
          <Select
            onValueChange={field.onChange}
            defaultValue={field.value as string}
            disabled={props.disabled}
          >
            <SelectTrigger className={cn(leftIcon && "pl-10")}>
              {leftIcon && <span className="absolute left-3">{leftIcon}</span>}
              <SelectValue placeholder={props.placeholder} />
            </SelectTrigger>
            <SelectContent>
              {props.options.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </FormControl>
      );

    case FormFieldTypes.date:
      // Implement date picker here
      return null;

    case FormFieldTypes.skeleton:
      return props.renderSkeleton(field);

    default:
      return null;
  }
}

export default function CustomFormField<TFieldValues extends FieldValues>(
  props: IFormField<TFieldValues>,
) {
  const { control, name, label, description, className } = props;

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={cn("flex-1", className)}>
          {label && <FormLabel>{label}</FormLabel>}
          <RenderField field={field} props={props} />
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage className="text-red-400" />
        </FormItem>
      )}
    />
  );
}
