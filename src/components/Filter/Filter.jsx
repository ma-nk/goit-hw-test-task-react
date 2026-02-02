
import { Formik, Form, Field } from "formik";
import { BsWind, BsDiagram3, BsCupHot, BsTv, BsDroplet, BsGrid1X2, BsGrid, BsGrid3X3 } from "react-icons/bs";
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
          onSearch({
            ...values,
            location: values.location.trim(),
          });
        }}
      >
        <Form>
          <div className={css.formGroup}>
            <label htmlFor="location" className={css.label}>Location</label>
            <Field
              id="location"
              name="location"
              placeholder="City"
              className={css.input}
            />
          </div>

          <div className={css.formGroup}>
            <p className={css.groupTitle}>Filters</p>
            <h3 className={css.subTitle}>Vehicle equipment</h3>
            <div className={css.checkboxGroup}>
              <label className={css.filterOption}>
                <Field type="checkbox" name="equipment" value="AC" className={css.hiddenInput} />
                <div className={css.optionContent}>
                  <BsWind size={32} />
                  <span>AC</span>
                </div>
              </label>
              <label className={css.filterOption}>
                <Field type="checkbox" name="equipment" value="automatic" className={css.hiddenInput} />
                <div className={css.optionContent}>
                  <BsDiagram3 size={32} />
                  <span>Automatic</span>
                </div>
              </label>
              <label className={css.filterOption}>
                <Field type="checkbox" name="equipment" value="kitchen" className={css.hiddenInput} />
                <div className={css.optionContent}>
                  <BsCupHot size={32} />
                  <span>Kitchen</span>
                </div>
              </label>
              <label className={css.filterOption}>
                <Field type="checkbox" name="equipment" value="TV" className={css.hiddenInput} />
                <div className={css.optionContent}>
                  <BsTv size={32} />
                  <span>TV</span>
                </div>
              </label>
              <label className={css.filterOption}>
                <Field type="checkbox" name="equipment" value="bathroom" className={css.hiddenInput} />
                <div className={css.optionContent}>
                  <BsDroplet size={32} />
                  <span>Shower/WC</span>
                </div>
              </label>
            </div>
          </div>

          <div className={css.formGroup}>
            <h3 className={css.subTitle}>Vehicle type</h3>
            <div className={css.radioGroup}>
              <label className={css.filterOption}>
                <Field type="radio" name="form" value="panelTruck" className={css.hiddenInput} />
                <div className={css.optionContent}>
                  <BsGrid1X2 size={32} />
                  <span>Van</span>
                </div>
              </label>
              <label className={css.filterOption}>
                <Field type="radio" name="form" value="fullyIntegrated" className={css.hiddenInput} />
                <div className={css.optionContent}>
                  <BsGrid size={32} />
                  <span>Fully Integrated</span>
                </div>
              </label>
              <label className={css.filterOption}>
                <Field type="radio" name="form" value="alcove" className={css.hiddenInput} />
                <div className={css.optionContent}>
                  <BsGrid3X3 size={32} />
                  <span>Alcove</span>
                </div>
              </label>
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
