// form store
import { create } from "zustand";
import { FieldValues, UseFormReturn } from "react-hook-form";
import { ObjectKeyDto } from "@/common/types";

export interface StoreType<T extends FieldValues> {
  reactHookUseForm: { [key: string]: UseFormReturn<T> | null } | null;
  setReactHookUseForm: (id: string, useForm: UseFormReturn<T> | null) => void;
}

const useFormStore = create<StoreType<any>>()((set, _) => ({
  reactHookUseForm: null, // Initial state
  setReactHookUseForm: (id: string, useForm: UseFormReturn<any> | null) => {
    const data: ObjectKeyDto = useFormStore.getState().reactHookUseForm ?? {};
    data[id] = useForm;

    set({ reactHookUseForm: data });
  }, // Action to update
}));

export default useFormStore;
