"use client";

import type { ReactNode } from "react";

import { Label } from "@/components/ui/label";

interface FormFieldProps {
  id: string;
  label: string;
  error?: string;
  children: ReactNode;
}

/**
 * Label + control + validation message with the aria plumbing wired once:
 * pass `fieldProps(id, error)` spread onto the control so `aria-invalid`
 * and `aria-describedby` always point at the rendered error element.
 */
export function FormField({ id, label, error, children }: FormFieldProps) {
  return (
    <div className="space-y-1.5">
      <Label htmlFor={id}>{label}</Label>
      {children}
      {error && (
        <p id={`${id}-error`} className="text-sm text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}

/** Spread onto the input/select/textarea inside <FormField>. */
export function fieldProps(id: string, error?: string) {
  return {
    id,
    "aria-invalid": error ? true : undefined,
    "aria-describedby": error ? `${id}-error` : undefined,
  };
}
