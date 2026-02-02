import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import css from "./BookingForm.module.css";
import "./DatePicker.css"; // We might need global override for datepicker styles or use :global in module

const BookingSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  bookingDate: Yup.date().required("Booking date is required"),
  comment: Yup.string(),
});

const BookingForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    alert(
      `Booking successful for ${values.name} on ${values.bookingDate}. Confirmation sent to ${values.email}.`
    );
    resetForm();
  };

  return (
    <div className={css.formContainer}>
      <h3>Book your campervan now</h3>
      <p>Stay connected! We are always ready to help you.</p>
      <Formik
        initialValues={{ name: "", email: "", bookingDate: null, comment: "" }}
        validationSchema={BookingSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, values }) => (
          <Form>
            <div className={css.formGroup}>
              <Field name="name" placeholder="Name" className={css.input} />
              <ErrorMessage name="name" component="div" className={css.error} />
            </div>
            <div className={css.formGroup}>
              <Field
                name="email"
                type="email"
                placeholder="Email"
                className={css.input}
              />
              <ErrorMessage name="email" component="div" className={css.error} />
            </div>
            <div className={css.formGroup}>
              <DatePicker
                selected={values.bookingDate}
                onChange={(date) => setFieldValue("bookingDate", date)}
                placeholderText="Booking date"
                className={css.input}
                dateFormat="dd/MM/yyyy"
                minDate={new Date()}
              />
              <ErrorMessage
                name="bookingDate"
                component="div"
                className={css.error}
              />
            </div>
            <div className={css.formGroup}>
              <Field
                name="comment"
                as="textarea"
                placeholder="Comment"
                className={css.textarea}
              />
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