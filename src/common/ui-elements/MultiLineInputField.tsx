import { useCallback, useEffect, useState } from "react";
import { Textarea } from "@material-tailwind/react";
import useFormStore from "@/store/formStore";
import { UseFormReturn } from "react-hook-form";
import TipTapTextEditor from "./TipTapTextEditor";

export interface MultiLineInputFieldProps {
  formId: string;
  title: string;
  name?: string;
  id?: string;
  value?: string;
  placeholder?: string;
  isEditor?: boolean;
  onChange?: (e: React.FormEvent<HTMLInputElement>) => void;
}

export function MultiLineInputField({
  data,
}: {
  data: MultiLineInputFieldProps & { [key: string]: any };
}) {
  const { reactHookUseForm } = useFormStore();
  const { register, formState, setValue, watch } =
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

  const handleOnChange = (e: any) => {
    setValue(`${fieldKey}`, e.target.value, {
      shouldValidate: true,
    });
  };

  const editorCallBack = useCallback(
    (content: string) => {
      setValue(`${fieldKey}`, content, {
        shouldValidate: true,
      });
    },
    [fieldKey, setValue]
  );

  if (!reactHookUseForm?.[data.formId]) return <></>;

  return (
    <>
      <div className="w-full">
        <div className="mt-2">
          {!data.isEditor ? (
            <label
              htmlFor={data?.id ?? data.title.toLowerCase()}
              className={`rounded-md relative shadow-sm ring-0 ring-inset ring-gray-700 w-full`}
            >
              <Textarea
                //   variant={"static"}
                error={error ? true : false}
                id={data?.id ?? data.title.toLowerCase()}
                autoComplete={data.title}
                label={data.title}
                className={`block w-full bg-transparent py-1.5 pl-2 ${
                  data?.type == "password" ? "pr-8" : ""
                } text-gray-900 placeholder:text-gray-400 ${
                  data.isDark ? "text-gray-100" : ""
                } ring-0 sm:text-sm sm:leading-6`}
                // placeholder={data?.placeholder ?? data.title}
                {...register(`${fieldKey}`, { onChange: handleOnChange })}
              ></Textarea>
            </label>
          ) : (
            <>
              <small className="px-0">{data.title}</small>
              <TipTapTextEditor
                content={watchField}
                callback={editorCallBack}
              />
            </>
          )}
        </div>
      </div>
      {error && (
        <div className="text-red-500 text-sm px-1 mt-2">{error?.message}</div>
      )}
    </>
  );
}
