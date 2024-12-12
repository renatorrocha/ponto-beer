/* eslint-disable @typescript-eslint/no-explicit-any */
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
import { FormFieldTypes } from "~/lib/types/form-field";
import { cn } from "~/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

interface IFormFieldBase<TFieldValues extends FieldValues> {
  control: Control<TFieldValues>;
  fieldType: FormFieldTypes;
  name: FieldPath<TFieldValues>;
  defaultValue?: string | number | Date;
  className?: string;
  label?: string;
  placeholder?: string;
  description?: string;
  type?: string;
  disabled?: boolean;
  children?: React.ReactNode;
  renderSkeleton?: (
    field: ControllerRenderProps<TFieldValues, FieldPath<TFieldValues>>,
  ) => React.ReactNode;
}

interface IFormFieldInput<TFieldValues extends FieldValues>
  extends IFormFieldBase<TFieldValues> {
  fieldType: FormFieldTypes.input;
}

interface IFormFieldSelect<TFieldValues extends FieldValues>
  extends IFormFieldBase<TFieldValues> {
  fieldType: FormFieldTypes.select;
  options: { value: string; label: string }[];
}

interface IFormFieldDate<TFieldValues extends FieldValues>
  extends IFormFieldBase<TFieldValues> {
  fieldType: FormFieldTypes.date;
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
  switch (props.fieldType) {
    case FormFieldTypes.input:
      return (
        <FormControl>
          <Input
            {...field}
            defaultValue={props.defaultValue as string}
            placeholder={props.placeholder}
            type={props.type}
          />
        </FormControl>
      );

    case FormFieldTypes.select:
      return (
        <FormControl>
          <Select
            onValueChange={field.onChange}
            defaultValue={(field.value ?? props.defaultValue) as string}
            disabled={props.disabled}
          >
            <SelectTrigger>
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

    case FormFieldTypes.skeleton:
      return props.renderSkeleton ? props.renderSkeleton(field) : null;
    default:
      break;
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
          <RenderField key={name} field={field} props={props} />

          {description && <FormDescription>{description}</FormDescription>}

          <FormMessage className="text-red-400" />
        </FormItem>
      )}
    />
  );
}
