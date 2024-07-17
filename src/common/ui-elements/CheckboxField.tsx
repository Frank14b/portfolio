import { useCallback, useEffect, useState } from "react";
import { UseFormReturn } from "react-hook-form";
import { Checkbox } from "@material-tailwind/react";
import useFormStore from "@/store/formStore";

export interface CheckboxFieldProps {
  title: string;
  name?: string;
  type?: "checkbox" | "radio";
  disabled?: boolean;
  id?: string;
  checked?: boolean;
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
}

export function CheckboxField({
  data,
}: {
  data: CheckboxFieldProps & { [key: string]: any };
}) {
  const { reactHookUseForm } = useFormStore();
  const { register, formState, watch } =
    (reactHookUseForm as UseFormReturn<any>) ?? {};
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

  if (!reactHookUseForm) return <></>;
  return (
    <>
      <div className="relative">
        <label
          className="w-full"
          htmlFor={data?.id ?? data.title.toLowerCase()}
        >
          <Checkbox
            className={`${error ? "border-red-400" : ""}`}
            type={data?.type ?? "checkbox"}
            crossOrigin={""}
            disabled={data?.disabled ?? false}
            placeholder={data?.name ?? data.title}
            id={data?.id ?? data.title.toLowerCase()}
            label={data.title}
            ripple={true}
            defaultChecked={data?.checked ?? false}
            {...register(`${fieldKey}`)}
          />
        </label>

        {error && (
          <div className="text-red-500 px-3 text-sm">{error?.message}</div>
        )}
      </div>
    </>
  );
}
