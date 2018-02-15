import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import "../../App.css";

const validate = values => {
  const errors = {}

  if (!values.description) {
    errors.description = 'Required';
  }
  if (!values.title) {
    errors.title = 'Required';
  }
  if (!values.question) {
    errors.question = 'Required';
  }
  return errors
}

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error }
}) => (
  <div>
    <label className="topTitle">{label}</label>
    <input {...input} type={type} placeholder={label} className="form-control formset" />
    {touched &&
      (error && <span className="errorForm">*{error}</span>)}
  </div>
)

const renderTextArea = ({input,label, meta: { touched, error, warning }}) => (
    <div>
        <label className="topTitle">{label}</label>
        <div>
            <textarea {...input} placeholder={label} className="form-control formset"  />
            {touched && ((error && <span>*{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
    </div>
);

class Createtestform extends Component{
  render() {
    const { handleSubmit, pristine, submitting, invalid } = this.props;
    return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
              <Field
                name="title"
                type="text"
                component={renderField}
                label="Test Title"
              />
              <Field
                name="picture"
                type="text"
                component={renderField}
                label="Test Picture"
              />
              <Field
              name="description"
              component={renderTextArea}
              label="Test description"
              />
              <Field
              name="question"
              component={renderTextArea}
              label="Precise the waiting feedback"
              />
        </div>
        <button type="submit" className="btn submitset dashboard_button" disabled={invalid || pristine || submitting}>
            Submit
        </button>
      </form>
    </div>
    )
  }
}

let createReduxForm = reduxForm({
  form: 'createtest',
  validate
})

Createtestform = createReduxForm(Createtestform)

export default Createtestform;
