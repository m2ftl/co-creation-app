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
  <div>
    <label className="topTitle">{label}</label>
    <input {...input} type={type} placeholder="Your question Title" className="form-control formset" />
    {touched &&
      (error && <span className="errorForm">*{error}</span>)}
  </div>
)

const renderTextArea = ({input,label, meta: { touched, error, warning }}) => (
    <div>
        <label className="topTitle">{label}</label>
        <div>
            <textarea {...input} className="form-control formset" placeholder="Write your question" />
            {touched && ((error && <span>*{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
    </div>
);

class Createquestionform extends Component{
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
                label="Question Title:"
              />
              <Field
              name="description"
              component={renderTextArea}
              label="Question:"
              />
              <label  className="topTitle" >Select the level of destination</label>
              <div>
              <label> Beginner </label>
              <Field name="topic.beginner" id="beginner" component="input" type="checkbox"  />
              <label className="ml-5"> Advanced </label>
              <Field name="topic.advanced" id="advanced" component="input" type="checkbox"  />
              <label className="ml-5"> Expert </label>
              <Field name="topic.expert" id="expert" component="input" type="checkbox"  />
              </div>
              <label  className="topTitle" >Select the index of destination</label>
              <div>
              <label> Category 1: to 4.4</label>
              <Field name="topic.category1" id="category1" component="input" type="checkbox"  />
              <label className="ml-5"> Category 2: from 4.4 to 11.4 </label>
              <Field name="topic.category2" id="category2" component="input" type="checkbox"  />
              <label className="ml-5"> Category 3: from 11.4 to 18.4 </label>
              <Field name="topic.category3" id="category 3" component="input" type="checkbox"  />
              <label className="ml-5"> Category 4: from 18.4 to 26.4 </label>
              <Field name="topic.category4" id="category4" component="input" type="checkbox"  />
              <label className="ml-5"> Category 5: from 26.4 to 36 </label>
              <Field name="topic.category5" id="category5" component="input" type="checkbox"  />
              <label className="ml-5"> Category 6: from 36 to 54 </label>
              <Field name="topic.category6" id="category6" component="input" type="checkbox"  />
              </div>
              <label  className="topTitle" >Select the weather of destination</label>
              <div>
              <label> Rain </label>
              <Field name="topic.rain" id="rain" component="input" type="checkbox"  />
              <label className="ml-5"> Cold </label>
              <Field name="topic.cold" id="cold" component="input" type="checkbox"  />
              <label className="ml-5"> Mild </label>
              <Field name="topic.mild" id="mild" component="input" type="checkbox"  />
              <label className="ml-5"> Sunny </label>
              <Field name="topic.sunny" id="sunny" component="input" type="checkbox"  />
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
  form: 'createquestion',
  validate,
  initialValues: {
    topic: {
      beginner: true,
      advanced: true,
      expert: true,
      rain: true,
      cold: true,
      mild: true,
      sunny: true,
      category1: true,
      category2: true,
      category3: true,
      category4: true,
      category5: true,
      category6: true
    }
  }
})

Createquestionform = createReduxForm(Createquestionform)

export default Createquestionform;
