"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { FormField, fieldProps } from "@/components/ui/form-field";
import { Input } from "@/components/ui/input";
import { useLanguage } from "@/hooks/useLanguage";

const EMAIL_RE = /^\S+@\S+\.\S+$/;
const PHONE_RE = /^\+?[0-9\s().-]{6,}$/;

const todayISO = () => new Date().toISOString().slice(0, 10);

// Validation messages are i18n KEYS, translated at render time — the schema
// stays static and visible errors re-translate on language switch.
const schema = z.object({
  name: z.string().min(2, "forms.nameMin"),
  contact: z
    .string()
    .min(1, "forms.required")
    .refine((v) => EMAIL_RE.test(v) || PHONE_RE.test(v), "forms.contactInvalid"),
  date: z
    .string()
    .min(1, "forms.required")
    .refine((v) => v >= todayISO(), "forms.dateInPast"),
  time: z.string().min(1, "forms.required"),
  guests: z.string().min(1, "forms.required"),
});

type FormValues = z.infer<typeof schema>;

// 08:00–21:30 in half-hour steps (kitchen closes before the 22:00 close).
const TIME_SLOTS = Array.from({ length: 28 }, (_, i) => {
  const h = 8 + Math.floor(i / 2);
  return `${h}:${i % 2 === 0 ? "00" : "30"}`;
});

const GUEST_COUNTS = ["1", "2", "3", "4", "5", "6", "7", "8"];

/** Native select styled to match the shadcn Input look. */
const SELECT_CLASS =
  "border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 aria-invalid:border-destructive dark:bg-input/30 md:text-sm";

export function ReservationForm() {
  const { t } = useLanguage();
  const [confirmed, setConfirmed] = useState<FormValues | null>(null);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (values: FormValues) => {
    // Mock submission per SPEC.md §5 — no real backend.
    await new Promise((r) => setTimeout(r, 900));
    setConfirmed(values);
    reset();
  };

  const err = (key?: string) => (key ? t(key) : undefined);

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="grid gap-5 sm:grid-cols-2"
      >
        <FormField
          id="res-name"
          label={t("reservations.nameLabel")}
          error={err(errors.name?.message)}
        >
          <Input
            {...fieldProps("res-name", errors.name?.message)}
            placeholder={t("reservations.namePlaceholder")}
            autoComplete="name"
            {...register("name")}
          />
        </FormField>

        <FormField
          id="res-contact"
          label={t("reservations.contactLabel")}
          error={err(errors.contact?.message)}
        >
          <Input
            {...fieldProps("res-contact", errors.contact?.message)}
            placeholder={t("reservations.contactPlaceholder")}
            autoComplete="tel"
            {...register("contact")}
          />
        </FormField>

        <FormField
          id="res-date"
          label={t("reservations.dateLabel")}
          error={err(errors.date?.message)}
        >
          <Input
            {...fieldProps("res-date", errors.date?.message)}
            type="date"
            min={todayISO()}
            {...register("date")}
          />
        </FormField>

        <div className="grid grid-cols-2 gap-5">
          <FormField
            id="res-time"
            label={t("reservations.timeLabel")}
            error={err(errors.time?.message)}
          >
            <select
              {...fieldProps("res-time", errors.time?.message)}
              className={SELECT_CLASS}
              defaultValue=""
              {...register("time")}
            >
              <option value="" disabled />
              {TIME_SLOTS.map((slot) => (
                <option key={slot} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
          </FormField>

          <FormField
            id="res-guests"
            label={t("reservations.guestsLabel")}
            error={err(errors.guests?.message)}
          >
            <select
              {...fieldProps("res-guests", errors.guests?.message)}
              className={SELECT_CLASS}
              defaultValue="2"
              {...register("guests")}
            >
              {GUEST_COUNTS.map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
          </FormField>
        </div>

        <div className="sm:col-span-2">
          <Button type="submit" size="lg" disabled={isSubmitting}>
            {isSubmitting && (
              <Loader2 aria-hidden="true" className="animate-spin" />
            )}
            {isSubmitting ? t("forms.submitting") : t("reservations.submit")}
          </Button>
          <p aria-live="polite" className="sr-only">
            {isSubmitting ? t("forms.submitting") : ""}
          </p>
          <p className="mt-3 text-xs text-muted-foreground">
            {t("forms.demoNote")}
          </p>
        </div>
      </form>

      <Dialog
        open={confirmed !== null}
        onOpenChange={(open) => !open && setConfirmed(null)}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{t("reservations.successTitle")}</DialogTitle>
            <DialogDescription>
              {confirmed &&
                t("reservations.successBody", {
                  name: confirmed.name,
                  guests: confirmed.guests,
                  date: confirmed.date,
                  time: confirmed.time,
                })}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button onClick={() => setConfirmed(null)}>
              {t("reservations.successClose")}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
