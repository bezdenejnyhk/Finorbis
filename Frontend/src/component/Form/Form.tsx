import { FC, useEffect, useState } from "react";
import styles from "./Form.module.scss";
import { Button } from "../ui";

export const Form: FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formDataError, setFormDataError] = useState({
    name: false,
    email: false,
  });

  function isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !isValidEmail(formData.email)) {
      setFormDataError({
        name: !formData.name,
        email: !formData.email || !isValidEmail(formData.email),
      });
    } else {
      setFormDataError({
        name: false,
        email: false,
      });
      try {
        const response = await fetch(
          `${process.env.REACT_APP_URL_BACKEND}/send-email-from-Eu-SNG`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: formData.name,
              email: formData.email,
              message: formData.message,
              from: "Mandato Latam",
            }),
          }
        );
        const result = await response.json();
        if (result.success) {
          //@ts-ignore
          console.log("success");
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        } else {
          throw new Error(result.error);
        }
      } catch (error) {
        //@ts-ignore
        console.log("error");
      }
      setFormDataError({
        name: false,
        email: false,
      });
    }
  };

  useEffect(() => {
    if (formData.name && formDataError.name) {
      setFormDataError({
        ...formDataError,
        name: false,
      });
    }
    if (formData.email && formDataError.email) {
      setFormDataError({
        ...formDataError,
        email: false,
      });
    }
  }, [formData.email, formData.name, formDataError]);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <label className={styles.label}>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className={`${styles.label__input} ${
              formDataError.name && styles.error
            }`}
            onChange={handleChange}
          />
          {formDataError.name && (
            <span className={styles.errorText}>Invalid name</span>
          )}
        </div>
        <div>
          <input
            type="text"
            name="email"
            onChange={handleChange}
            placeholder="E-mail address"
            className={`${styles.label__input} ${
              formDataError.email && styles.error
            }`}
          />
          {formDataError.email && (
            <span className={styles.errorText}>Invalid email</span>
          )}
        </div>
        <textarea
          onChange={handleChange}
          name="message"
          placeholder="Message"
          className={styles.label__message}
        ></textarea>
      </label>
      <button className={styles.btn}>SEND</button>
    </form>
  );
};
