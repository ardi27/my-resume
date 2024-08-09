import { Description, Field, Input, Label } from "@headlessui/react";

const InputField = (props: any) => (
  <>
    <Field className="w-full space-y-2">
      <Label>{props.label}</Label>
      <Input
        className="w-full px-2 py-3 rounded-lg border border-solid "
        name={props.name}
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
      />
      {props.description && (
        <Description className="text-sm text-sky-600">
          {props.description}
        </Description>
      )}
    </Field>
  </>
);

export default InputField;
