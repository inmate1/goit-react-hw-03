import { Formik, Form, Field } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';
import PropTypes from 'prop-types';

import css from './ContactForm.module.css';

const nameReg = /^[A-Z][a-z]*\s[A-Z][a-z]*$/;
const phoneReg = /^\d{3}-\d{2}-\d{2}$/;
const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .matches(
      nameReg,
      'Name must be in the format "First and Last" name with capitalized first letters'
    )
    .required('Input "First and Last" name'),
  number: Yup.string()
    .min(2, 'Too Short!')
    .max(9, 'Too Long!')
    .matches(phoneReg, 'Phone number must be in the format "111-11-11"')
    .required('Input number'),
});

const initialValues = {
  name: '',
  number: '',
};

const ContactForm = ({ onAdd }) => {
  const nameFieldId = useId();
  const phoneFieldId = useId();

  const handleSubmit = (values, actions) => {
    const contactItemId = Date.now();

    onAdd({
      id: contactItemId,
      name: values.name,
      number: values.number,
    });
    actions.resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={FeedbackSchema}>
        {({ errors, touched }) => (
          <Form className={css.form}>
            <div className={css.fieldWrapper}>
              <label htmlFor={nameFieldId}>Name</label>
              <Field
                className={css.field}
                type='text'
                name='name'
                id={nameFieldId}
                placeholder='First Last'
              />
              {touched.name && errors.name ? (
                <div className={`${css.message} ${css.error}`}>
                  {errors.name}
                </div>
              ) : (
                touched.name && (
                  <div className={`${css.message} ${css.required}`}>
                    Required
                  </div>
                )
              )}
            </div>

            <div className={css.fieldWrapper}>
              <label htmlFor={phoneFieldId}>Number</label>
              <Field
                className={css.field}
                type='tel'
                name='number'
                id={phoneFieldId}
                placeholder='111-11-11'
              />
              {touched.number && errors.number ? (
                <div className={`${css.message} ${css.error}`}>
                  {errors.number}
                </div>
              ) : (
                touched.number && (
                  <div className={`${css.message} ${css.required}`}>
                    Required
                  </div>
                )
              )}
            </div>

            <button className={css.btn} type='submit'>
              Add contact
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};


ContactForm.propTypes = {
  onAdd: PropTypes.func.isRequired
}
export default ContactForm;
