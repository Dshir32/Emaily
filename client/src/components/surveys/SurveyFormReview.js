//Shows users their form inputs for review 
import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import formFields from "./formField";
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions/index';

const SurveyFormReview = ({onCancel, formValues, submitSurvey, history}) => {

    const reviewFields = _.map(formFields, field => {
        return (
            <div key={field.name}>
                <label>{field.label}</label>
                <div>{formValues[field.name]}</div>
            </div>
        );
    });
    return(
        <div>
            <h5>Please confirm your entries</h5>

            {reviewFields}

            <button 
                className="yellow darken-3 white-text btn-flat" 
                onClick={onCancel}> Back 
            </button>

            <button 
                onClick={ () => submitSurvey(formValues, history)}
                className="green white-text btn-flat right">
                Send Survey 
                    <i className="material-icons right">email</i>
            </button>
        </div>
    );
};


function mapStateToProps(state){
    return { formValues: state.form.surveyForm.values };
}

//Will connect the props (we assigned them as props from the state in mapStateToProps function) to our component
export default connect(mapStateToProps, actions )(withRouter(SurveyFormReview));