//Survey Form here shows a for a user to add input
import _ from 'lodash';
import React , { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom'
import SurveyField from './SurveyField';
import validateEmails from "../../utils/validateEmails";
import formFields from "./formField";

class SurveyForm extends Component {
    renderFields(){
        return _.map(formFields, ({name, label}) => {
            return <Field component={SurveyField} type="text" label={label} name={name} key={name}/>
        })
    }

    renderFields2(){ // same as the above with es6 destructuring
        return _.map(formFields, field => {
            return <Field component={SurveyField} type="text" label={field.label} name={field.name}/>
        })
    }

    renderFields1(){ // SAME AS CREATING THE ABOVE
        return(
            <div>
                <Field label="Survey Title" type="text" name="title" component={SurveyField} />
                <Field label="Subject Line" type="text" name="subject" component={SurveyField} />
                <Field label="Email Body" type="text" name="body" component={SurveyField} />
                <Field label="Recipient list" type="text" name="emails" component={SurveyField} />
            </div>        
        );
    }

    render(){
        return (
            //handle submit is a redux-form function (that helps us handle the form on submit.)
            <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
                {this.renderFields()}
                <Link to="/surveys" className="red btn-flat white-text">Cancel</Link>
                <button type="submit" className="teal btn-flat right white-text">
                    Next
                    <i className="material-icons right">done</i>
                </button>
            </form>
        );
    }
}

function validate(values){
    const errors = {};

    errors.recipients = validateEmails(values.recipients || "");

    _.each(formFields, ({name}) => {
        if(!values[name]){
            errors[name] = "This field is required!"
        }
    });


    return errors
}

// function validateBeforEes6Destructuring(values){
//     const errors = {};

//     if(!values.title) 
//     {errors.title = 'You must provide a title!'}

//     if(!values.subject) 
//     {errors.title = 'You must provide a subject!'}

//     if(!values.body) 
//     {errors.title = 'You must provide a body text!'}

//     return errors
// }

export default reduxForm({
    validate,
    form: 'surveyForm',
    destroyOnUnmount:false
}) (SurveyForm);