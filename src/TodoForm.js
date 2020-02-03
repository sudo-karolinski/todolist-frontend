import React from 'react';
import TextField from '@material-ui/core/TextField';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { Button } from '@material-ui/core';
import './TodoForm.scss';

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
    variant={'outlined'}
    margin={'normal'}
    fullWidth
    {...input}
    {...custom}
  />
);

const renderTextFieldMulti = ({
  label,
  input,
  meta: { touched, invalid, error },
  ...custom
}) => (
  <TextField
    label={label}
    placeholder={label}
    variant={'outlined'}
    error={touched && invalid}
    multiline
    margin={'normal'}
    fullWidth
    rows={'4'}
    helperText={touched && error}
    {...input}
    {...custom}
  />
);

const TodoForm = props => {
  const { handleSubmit, submitting, invalid, pristine } = props;
  console.log(props);
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field name="title" component={renderTextField} label="Title"></Field>
      </div>
      <div>
        <Field
          name="description"
          component={renderTextFieldMulti}
          label="Description"
        ></Field>
      </div>
      <div className="bottom">
        <Button
          size="large"
          type="submit"
          disabled={submitting || invalid || pristine}
        >
          Submit
        </Button>
      </div>
    </form>
  );
};

const validate = values => {
  const { title, description } = values;

  const errors = {};

  if (title && description) {
    return errors;
  }

  errors.title = 'Required';
  errors.description = 'Required';

  return errors;
};

const mapStateToProps = state => ({
  initialValues: state.selectedTodo
});

export default connect(mapStateToProps)(
  reduxForm({
    form: 'TodoForm',
    enableReinitialize: true,
    validate
  })(TodoForm)
);
