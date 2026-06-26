import { useCallback, useRef, useState } from "react";
import styles from "./Form.module.scss";
import { Button } from "../Button/Button";

const MAX_MESSAGE_LENGTH = 200;
const COUNTER_THRESHOLD = 100;

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

type EmailError = "" | "required" | "invalid";

export type TFormLabels = {
  name: string;
  company: string;
  email: string;
  message: string;
};

export type TFormErrors = {
  emailRequired: string;
  emailInvalid: string;
};

type TFormProps = {
  title: string;
  labels: TFormLabels;
  buttonText: string;
  errorMessages: TFormErrors;
  onSubmit?: (data: {
    name: string;
    company: string;
    email: string;
    message: string;
  }) => Promise<void>;
};

type FormData = {
  name: string;
  company: string;
  email: string;
  message: string;
};

export function Form({ title, labels, buttonText, errorMessages, onSubmit }: TFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    company: "",
    email: "",
    message: "",
  });
  const [emailError, setEmailError] = useState<EmailError>("");
  const [focusedField, setFocusedField] = useState<keyof FormData | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const isFloating = (field: keyof FormData) => focusedField === field || formData[field] !== "";

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
      if (name === "email" && emailError) {
        setEmailError("");
      }
    },
    [emailError]
  );

  const handleTextareaChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      handleChange(e);
      const ta = textareaRef.current;
      if (ta) {
        ta.style.height = "auto";
        ta.style.height = `${ta.scrollHeight}px`;
      }
    },
    [handleChange]
  );

  const handleFocus = useCallback((field: keyof FormData) => {
    setFocusedField(field);
  }, []);

  const handleBlur = useCallback(() => {
    setFocusedField(null);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.email) {
      setEmailError("required");
      return;
    }
    if (!isValidEmail(formData.email)) {
      setEmailError("invalid");
      return;
    }
    setEmailError("");

    if (onSubmit) {
      await onSubmit(formData);
    }
  };

  const emailErrorText =
    emailError === "required" ? errorMessages.emailRequired : errorMessages.emailInvalid;

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <h2 className={styles.title}>{title}</h2>

      <div className={styles.fields}>
        {/* Name */}
        <div className={styles.field}>
          <label
            htmlFor="form-name"
            className={`${styles.label} ${isFloating("name") ? styles.labelFloating : ""}`}
          >
            {labels.name}
          </label>
          <input
            id="form-name"
            name="name"
            type="text"
            autoComplete="name"
            className={styles.input}
            value={formData.name}
            onChange={handleChange}
            onFocus={() => handleFocus("name")}
            onBlur={handleBlur}
          />
        </div>

        {/* Company */}
        <div className={styles.field}>
          <label
            htmlFor="form-company"
            className={`${styles.label} ${isFloating("company") ? styles.labelFloating : ""}`}
          >
            {labels.company}
          </label>
          <input
            id="form-company"
            name="company"
            type="text"
            autoComplete="organization"
            className={styles.input}
            value={formData.company}
            onChange={handleChange}
            onFocus={() => handleFocus("company")}
            onBlur={handleBlur}
          />
        </div>

        {/* Email */}
        <div className={styles.fieldWrapper}>
          <div className={styles.field}>
            <label
              htmlFor="form-email"
              className={`${styles.label} ${isFloating("email") ? styles.labelFloating : ""} ${emailError ? styles.labelError : ""}`}
            >
              {labels.email}*
            </label>
            <input
              id="form-email"
              name="email"
              type="email"
              autoComplete="email"
              className={`${styles.input} ${emailError ? styles.inputError : ""}`}
              value={formData.email}
              onChange={handleChange}
              onFocus={() => handleFocus("email")}
              onBlur={handleBlur}
              aria-invalid={!!emailError}
              aria-describedby={emailError ? "form-email-error" : undefined}
            />
          </div>
          {emailError && (
            <span id="form-email-error" className={styles.errorText} role="alert">
              {emailErrorText}
            </span>
          )}
        </div>

        {/* Message */}
        <div className={styles.field}>
          <label
            htmlFor="form-message"
            className={`${styles.label} ${styles.labelTextarea} ${isFloating("message") ? styles.labelFloating : ""}`}
          >
            {labels.message}
          </label>
          <textarea
            ref={textareaRef}
            id="form-message"
            name="message"
            className={styles.textarea}
            value={formData.message}
            onChange={handleTextareaChange}
            onFocus={() => handleFocus("message")}
            onBlur={handleBlur}
            maxLength={MAX_MESSAGE_LENGTH}
            rows={3}
          />
          {formData.message.length >= COUNTER_THRESHOLD && (
            <span
              className={`${styles.counter} ${formData.message.length === MAX_MESSAGE_LENGTH ? styles.counterMax : ""}`}
              aria-live="polite"
            >
              {formData.message.length}/{MAX_MESSAGE_LENGTH}
            </span>
          )}
        </div>
      </div>

      <div className={styles.btnWrapper}>
        <Button type="submit" theme="red">
          {buttonText}
        </Button>
      </div>
    </form>
  );
}
