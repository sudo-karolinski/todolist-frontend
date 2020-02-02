import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

const renderTextField = ({
  label,
  input,
  meta: { touched, invalid, error },
  ...custom
}) => (
  <TextField
    label={label}
    placeholder={label}
    error={touched && invalid}
    helperText={touched && error}
    {...input}
    {...custom}
  />
);

const AddTodoForm = props => {
  const { handleSubmit, pristine, reset, submitting, classes } = props;

  return (
    <form onSubmit={handleSubmit}>
      <Field name="title" component={renderTextField} label="Title"></Field>
      <Field
        name="description"
        component={renderTextField}
        label="Description"
      ></Field>
      <button type="submit" disabled={submitting}>
        Add new todo
      </button>
    </form>
  );
};

const validate = () => true;

const mapStateToProps = state => ({
  initialValues: state.selectedTodo
});

export default connect(mapStateToProps)(
  reduxForm({
    form: 'AddTodoForm',
    enableReinitialize: true,
    validate
  })(AddTodoForm)
);
