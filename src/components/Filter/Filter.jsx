
import { Formik, Form, Field } from "formik";
import css from "./Filter.module.css";

const Filter = ({ onSearch }) => {
  return (
    <div className={css.filterContainer}>
      <Formik
        initialValues={{
          location: "",
          equipment: [],
          form: "",
        }}
        onSubmit={(values) => {
          onSearch(values);
        }}
      >
        <Form>
          <div className={css.formGroup}>
            <label htmlFor="location">Location</label>
            <Field
              id="location"
              name="location"
              placeholder="City"
              className={css.input}
            />
          </div>

          <div className={css.formGroup}>
            <p>Filters</p>
            <div className={css.checkboxGroup}>
              <Field type="checkbox" name="equipment" value="AC" id="ac" />
              <label htmlFor="ac">AC</label>
              <Field
                type="checkbox"
                name="equipment"
                value="automatic"
                id="automatic"
              />
              <label htmlFor="automatic">Automatic</label>
              <Field
                type="checkbox"
                name="equipment"
                value="kitchen"
                id="kitchen"
              />
              <label htmlFor="kitchen">Kitchen</label>
              <Field type="checkbox" name="equipment" value="TV" id="tv" />
              <label htmlFor="tv">TV</label>
              <Field
                type="checkbox"
                name="equipment"
                value="bathroom"
                id="shower"
              />
              <label htmlFor="shower">Shower/WC</label>
            </div>
          </div>

          <div className={css.formGroup}>
            <p>Vehicle type</p>
            <div className={css.radioGroup}>
              <Field type="radio" name="form" value="panelTruck" id="van" />
              <label htmlFor="van">Van</label>
              <Field
                type="radio"
                name="form"
                value="fullyIntegrated"
                id="fully-integrated"
              />
              <label htmlFor="fully-integrated">Fully Integrated</label>
              <Field type="radio" name="form" value="alcove" id="alcove" />
              <label htmlFor="alcove">Alcove</label>
            </div>
          </div>

          <button type="submit" className={css.searchButton}>
            Search
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default Filter;
