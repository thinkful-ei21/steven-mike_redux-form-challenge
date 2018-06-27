import React from 'react';
import {reduxForm, Field, focus} from 'redux-form';
import Input from './input';
import { required, nonEmpty, numLength, isNum } from '../src/validation';


export class TrackingForm extends React.Component {
 
  
  render() {
    return (
      <div>
        <h2>Report a problem with your delivery</h2>
        <form>
          <Field 
            component={Input}
            type='text' 
            label='Tracking Number' 
            name='tracking-number-input'
            validate={[required, nonEmpty, numLength, isNum]}
          />
          <label htmlFor='issue-selector'>What is your issue?</label>
          <Field
            component='select' 
            name="issue-selector" 
            id="issue"
            label="What is your issue?" >
              <option value="not-delivered">My delivery hasn't arrived</option>
              <option value="wrong-item">The wrong item was delivered</option>
              <option value="missing-part">Part of my order was missing</option>
              <option value="damaged">Some of my order arrived damaged</option>
              <option value="other">Other (give details below)</option>
          </Field>
          <div className="form-input">
            <Field 
            component={Input}
            element="text-area" 
            name="details" 
            id="details"
            label="Give more details"
            />
          </div>
          <button type="submit"
            disabled={this.props.pristine || this.props.submitting}>Submit
          </button>
        </form>
      </div>
    )

  }
}

  export default reduxForm({
    form: 'contact',
    onSubmitFail: (errors, dispatch) =>
      dispatch(focus('contact', Object.keys(errors)[0]))
  })(TrackingForm);