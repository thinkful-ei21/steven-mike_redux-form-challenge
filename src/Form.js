import React from 'react';
import {reduxForm, focus} from 'redux-form';


export class TrackingForm extends React.Component {
 
  
  render() {
    return (
      <div>
        <h2>Report a problem with your delivery</h2>
        <form>
          <label htmlFor='tracking-number-input'>Tracking Number</label>
          <input 
            type='text' 
            label='tracking-number' 
            name='tracking-number-input'
          />
          <label htmlFor='issue-selector'>What is your issue?</label>
          <select name="issue-selector" id="issue">
          <option value="not-delivered">My delivery hasn't arrived</option>
          <option value="wrong-item">The wrong item was delivered</option>
          <option value="missing-part">Part of my order was missing</option>
          <option value="damaged">Some of my order arrived damaged</option>
          <option value="other">Other (give details below)</option>
          </select>
          <div className="form-input">
            <label htmlFor="details">Give more details (optional)</label>
            <textarea name="details" id="details"></textarea>
          </div>
          <button type="submit">Submit</button>
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