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
  return errors
}

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error }
}) => (
  <div className="form_field">
    <label className="topTitle">{label}</label>
    <input {...input} type={type} placeholder="Your Idea Title" className="form-control formset" />
    {touched &&
      (error && <span className="errorForm">*{error}</span>)}
  </div>
)

const renderTextArea = ({input,label, meta: { touched, error, warning }}) => (
    <div className="form_field">
        <label className="topTitle">{label}</label>
        <div>
            <textarea {...input} className="form-control formset" placeholder="Describe your Idea" />
            {touched && ((error && <span>*{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
    </div>
);

class Createideaform extends Component{
  render() {
    const { handleSubmit, pristine, submitting, invalid } = this.props;
    return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
            <div>
              <Field
                name="title"
                type="text"
                component={renderField}
                label="Idea Title:"
              />
              <Field
              name="description"
              component={renderTextArea}
              label="Idea Description:"
              />
            </div>
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
  form: 'createidea',
  validate
})

Createideaform = createReduxForm(Createideaform)

export default Createideaform;
