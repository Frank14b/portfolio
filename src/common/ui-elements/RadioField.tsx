import { useCallback, useEffect, useState } from "react";
import { UseFormReturn } from "react-hook-form";
import { Checkbox, Radio } from "@material-tailwind/react";
import useFormStore from "@/store/formStore";

export interface RadioFieldProps {
  formId: string;
  title: string;
  name?: string;
  type?: "radio";
  disabled?: boolean;
  id?: string;
  checked?: boolean;
  value: string;
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
}

export function RadioField({
  data,
}: {
  data: RadioFieldProps & { [key: string]: any };
}) {
  const { reactHookUseForm } = useFormStore();
  const { register, formState, watch } =
    (reactHookUseForm?.[data.formId] as UseFormReturn<any>) ?? {};
  const { errors } = formState ?? {};
  const [error, setError] = useState<any>(null);
  const fieldKey = data?.name ?? data.title.toLowerCase();

  const watchField = watch?.(`${fieldKey}`);

  const checkError = useCallback(() => {
    if (errors?.[fieldKey]) {
      setError(errors[fieldKey]);
    } else {
      setError(null);
    }
  }, [errors, fieldKey]);

  useEffect(() => {
    checkError();
  }, [watchField, checkError]);

  if (!reactHookUseForm?.[data.formId]) return <></>;
  return (
    <>
      <div className="relative">
        <label
          className="w-full"
          htmlFor={data?.id ?? data.title.toLowerCase()}
        >
          <Radio
            className={`${error ? "border-red-400" : ""}`}
            type={data?.type ?? "radio"}
            crossOrigin={""}
            disabled={data?.disabled ?? false}
            placeholder={data?.name ?? data.title}
            id={data?.id ?? data.title?.toLowerCase()}
            label={data.title}
            ripple={true}
            value={data.value}
            defaultChecked={data?.checked ?? false}
            {...register(`${fieldKey}`)}
          />
        </label>

        {/* {error && (
          <div className="text-red-500 px-3 text-sm">{error?.message}</div>
        )} */}
      </div>
    </>
  );
}
