import { Formik, Form, Field } from "formik";
import mapIcon from "../../assets/map.svg";
import css from "./Filter.module.css";

const Filter = ({ onSearch, innerRef }) => {
  return (
    <div className={css.filterContainer}>
      <Formik
        innerRef={innerRef}
        initialValues={{
          location: "",
          form: "",
          engine: "",
          transmission: "",
        }}
        onSubmit={(values) => {
          onSearch({
            ...values,
            location: values.location.trim(),
          });
        }}
      >
        {({ resetForm }) => (
          <Form autoComplete="off">
            <div className={css.formGroup}>
              <label htmlFor="location" className={css.label}>Location</label>
              <div className={css.inputWrapper}>
                <img src={mapIcon} alt="Location" className={css.inputIcon} />
                <Field
                  id="location"
                  name="location"
                  placeholder="City"
                  className={css.input}
                  list="locations"
                />
                <datalist id="locations">
                  <option value="Ukraine, Kyiv" />
                  <option value="Ukraine, Poltava" />
                  <option value="Ukraine, Dnipro" />
                  <option value="Ukraine, Odesa" />
                  <option value="Ukraine, Lviv" />
                  <option value="Ukraine, Kharkiv" />
                  <option value="Ukraine, Sumy" />
                </datalist>
              </div>
            </div>

            <div className={css.formGroup}>
              <p className={css.groupTitle}>Filters</p>
              
              <h3 className={css.subTitle}>Camper form</h3>
              <div className={css.radioList}>
                <label className={css.radioOption}>
                  <Field type="radio" name="form" value="alcove" className={css.radioInput} />
                  <span className={css.radioLabel}>Alcove</span>
                </label>
                <label className={css.radioOption}>
                  <Field type="radio" name="form" value="panelTruck" className={css.radioInput} />
                  <span className={css.radioLabel}>Panel Van</span>
                </label>
                <label className={css.radioOption}>
                  <Field type="radio" name="form" value="fullyIntegrated" className={css.radioInput} />
                  <span className={css.radioLabel}>Integrated</span>
                </label>
                <label className={css.radioOption}>
                  <Field type="radio" name="form" value="semiIntegrated" className={css.radioInput} />
                  <span className={css.radioLabel}>Semi Integrated</span>
                </label>
              </div>
            </div>

            <div className={css.formGroup}>
              <h3 className={css.subTitle}>Engine</h3>
              <div className={css.radioList}>
                <label className={css.radioOption}>
                  <Field type="radio" name="engine" value="diesel" className={css.radioInput} />
                  <span className={css.radioLabel}>Diesel</span>
                </label>
                <label className={css.radioOption}>
                  <Field type="radio" name="engine" value="petrol" className={css.radioInput} />
                  <span className={css.radioLabel}>Petrol</span>
                </label>
                <label className={css.radioOption}>
                  <Field type="radio" name="engine" value="hybrid" className={css.radioInput} />
                  <span className={css.radioLabel}>Hybrid</span>
                </label>
                <label className={css.radioOption}>
                  <Field type="radio" name="engine" value="electric" className={css.radioInput} />
                  <span className={css.radioLabel}>Electric</span>
                </label>
              </div>
            </div>

            <div className={css.formGroup}>
              <h3 className={css.subTitle}>Transmission</h3>
              <div className={css.radioList}>
                <label className={css.radioOption}>
                  <Field type="radio" name="transmission" value="automatic" className={css.radioInput} />
                  <span className={css.radioLabel}>Automatic</span>
                </label>
                <label className={css.radioOption}>
                  <Field type="radio" name="transmission" value="manual" className={css.radioInput} />
                  <span className={css.radioLabel}>Manual</span>
                </label>
              </div>
            </div>

            <div className={css.buttonGroup}>
              <button type="submit" className={css.searchButton}>
                Search
              </button>
              <button 
                type="button" 
                className={css.clearButton} 
                onClick={() => {
                  resetForm();
                  onSearch({ location: "", form: "", engine: "", transmission: "" });
                }}
              >
                ✕ Clear filters
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Filter;
