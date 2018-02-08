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
              <Field name="topic.Beginner" id="Beginner" component="input" type="checkbox"  />
              <label className="ml-5"> Advanced </label>
              <Field name="topic.Advanced" id="Advanced" component="input" type="checkbox"  />
              <label className="ml-5"> Expert </label>
              <Field name="topic.Expert" id="Expert" component="input" type="checkbox"  />
              </div>
              <label  className="topTitle" >Select the index of destination</label>
              <div>
              <label> Category 1: to 4.4</label>
              <Field name="topic.Category1" id="Category1" component="input" type="checkbox"  />
              <label className="ml-5"> Category 2: from 4.4 to 11.4 </label>
              <Field name="topic.Category2" id="Category2" component="input" type="checkbox"  />
              <label className="ml-5"> Category 3: from 11.4 to 18.4 </label>
              <Field name="topic.Category3" id="Category 3" component="input" type="checkbox"  />
              <label className="ml-5"> Category 4: from 18.4 to 26.4 </label>
              <Field name="topic.Category4" id="Category4" component="input" type="checkbox"  />
              <label className="ml-5"> Category 5: from 26.4 to 36 </label>
              <Field name="topic.Category5" id="Category5" component="input" type="checkbox"  />
              <label className="ml-5"> Category 6: from 36 to 54 </label>
              <Field name="topic.Category6" id="Category6" component="input" type="checkbox"  />
              </div>
              <label  className="topTitle" >Select the weather of destination</label>
              <div>
              <label> Rain </label>
              <Field name="topic.Rain" id="Rain" component="input" type="checkbox"  />
              <label className="ml-5"> Cold </label>
              <Field name="topic.Cold" id="Cold" component="input" type="checkbox"  />
              <label className="ml-5"> Mild </label>
              <Field name="topic.Mild" id="Mild" component="input" type="checkbox"  />
              <label className="ml-5"> Sunny </label>
              <Field name="topic.Sunny" id="Sunny" component="input" type="checkbox"  />
              </div>

        </div>
        <button type="submit" className="btn submitset" disabled={invalid || pristine || submitting}>
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
      Beginner: true,
      Advanced: true,
      Expert: true,
      Rain: true,
      Cold: true,
      Mild: true,
      Sunny: true,
      Category1: true,
      Category2: true,
      Category3: true,
      Category4: true,
      Category5: true,
      Category6: true
    }
  }
})

Createquestionform = createReduxForm(Createquestionform)

export default Createquestionform;
