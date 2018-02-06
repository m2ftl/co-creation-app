import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from "react-redux";
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

  <div>
    <label className="col-md-auto topTitle">{label}</label>
    <input {...input} type={type} className="form-control" />
    {touched &&
      (error && <span className="errorForm">*{error}</span>)}
  </div>
)

class ContactForm extends Component{
  render() {
    const { handleSubmit, pristine, submitting, invalid } = this.props;
    return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="ml-5 mr-5 mb-5">
            <div>
              <Field
                name="title"
                type="text"
                component={renderField}
                label="Idea Title:"
              />
              <Field
                name="description"
                type="textarea"
                component={renderField}
                label="Idea Description:"
              />
            </div>
        </div>
        <button type="submit" className="btn-primary mt-1" disabled={invalid || pristine || submitting}>
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

ContactForm = createReduxForm(ContactForm)

function mapStateToProps(state) {
  return {
  }
}
export default connect(mapStateToProps)(ContactForm);
