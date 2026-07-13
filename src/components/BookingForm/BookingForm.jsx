import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import css from "./BookingForm.module.css";
import { FaExclamationCircle } from "react-icons/fa";

const BookingSchema = Yup.object().shape({
  name: Yup.string().required("Please enter your name."),
  email: Yup.string().email("Please enter a valid email.").required("Please enter your email."),
});

const BookingForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    alert(
      `Booking successful for ${values.name}. Confirmation sent to ${values.email}.`
    );
    resetForm();
  };

  return (
    <div className={css.formContainer}>
      <h3 className={css.formTitle}>Book your campervan now</h3>
      <p className={css.formSubtitle}>Stay connected! We are always ready to help you.</p>
      <Formik
        initialValues={{ name: "", email: "" }}
        validationSchema={BookingSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form autoComplete="off">
            <div className={css.formGroup}>
              <div className={`${css.inputWrapper} ${errors.name && touched.name ? css.hasError : ""}`}>
                <Field name="name" placeholder="Name*" className={css.input} />
                {errors.name && touched.name && (
                  <FaExclamationCircle className={css.errorIcon} />
                )}
              </div>
              {errors.name && touched.name && (
                <div className={css.errorText}>{errors.name}</div>
              )}
            </div>

            <div className={css.formGroup}>
              <div className={`${css.inputWrapper} ${errors.email && touched.email ? css.hasError : ""}`}>
                <Field name="email" type="email" placeholder="Email*" className={css.input} />
                {errors.email && touched.email && (
                  <FaExclamationCircle className={css.errorIcon} />
                )}
              </div>
              {errors.email && touched.email && (
                <div className={css.errorText}>{errors.email}</div>
              )}
            </div>

            <button type="submit" className={css.submitButton}>
              Send
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default BookingForm;