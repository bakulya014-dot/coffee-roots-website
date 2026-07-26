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
import { Textarea } from "@/components/ui/textarea";
import { useLanguage } from "@/hooks/useLanguage";
import { isDemoMode, sendEmail } from "@/lib/booking";

// Validation messages are i18n KEYS, translated at render time (see
// reservation-form.tsx for the rationale).
const schema = z.object({
  name: z.string().min(2, "forms.nameMin"),
  email: z.email("forms.emailInvalid"),
  message: z.string().min(10, "forms.messageMin"),
});

type FormValues = z.infer<typeof schema>;

export function ContactForm() {
  const { t } = useLanguage();
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (values: FormValues) => {
    await sendEmail({
      subject: `Website message — ${values.name}`,
      message: values.message,
      replyTo: values.email,
    });
    setSent(true);
    reset();
  };

  const err = (key?: string) => (key ? t(key) : undefined);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} noValidate className="grid gap-5">
        <FormField
          id="ct-name"
          label={t("contact.nameLabel")}
          error={err(errors.name?.message)}
        >
          <Input
            {...fieldProps("ct-name", errors.name?.message)}
            autoComplete="name"
            {...register("name")}
          />
        </FormField>

        <FormField
          id="ct-email"
          label={t("contact.emailLabel")}
          error={err(errors.email?.message)}
        >
          <Input
            {...fieldProps("ct-email", errors.email?.message)}
            type="email"
            placeholder={t("contact.emailPlaceholder")}
            autoComplete="email"
            {...register("email")}
          />
        </FormField>

        <FormField
          id="ct-message"
          label={t("contact.messageLabel")}
          error={err(errors.message?.message)}
        >
          <Textarea
            {...fieldProps("ct-message", errors.message?.message)}
            rows={5}
            placeholder={t("contact.messagePlaceholder")}
            {...register("message")}
          />
        </FormField>

        <div>
          <Button type="submit" size="lg" disabled={isSubmitting}>
            {isSubmitting && (
              <Loader2 aria-hidden="true" className="animate-spin" />
            )}
            {isSubmitting ? t("forms.submitting") : t("contact.submit")}
          </Button>
          <p aria-live="polite" className="sr-only">
            {isSubmitting ? t("forms.submitting") : ""}
          </p>
          {isDemoMode && (
            <p className="mt-3 text-xs text-muted-foreground">
              {t("forms.demoNote")}
            </p>
          )}
        </div>
      </form>

      <Dialog open={sent} onOpenChange={setSent}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{t("contact.successTitle")}</DialogTitle>
            <DialogDescription>
              {isDemoMode ? t("contact.successDemo") : t("contact.successBody")}
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button onClick={() => setSent(false)}>
              {t("contact.successClose")}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
