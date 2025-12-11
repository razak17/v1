"use client";

import { forwardRef } from "react";
import type { FieldError } from "react-hook-form";

import styles from "../styles/Mixins.module.css";

interface InputFieldProps {
  label?: string;
  type?: string;
  placeholder: string;
  textArea?: boolean;
  error?: FieldError;
}

export const TextArea = forwardRef<HTMLTextAreaElement, InputFieldProps>(
  function InputField({ error, ...props }, ref) {
    return (
      <div className={styles.input100}>
        <textarea ref={ref} {...props}></textarea>
        <span>{error?.message}</span>
      </div>
    );
  },
);

export const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
  function InputField({ type = "text", error, ...props }, ref) {
    return (
      <div className={styles.input100}>
        <input type={type} ref={ref} {...props} />
        <span>{error?.message}</span>
      </div>
    );
  },
);
