import React , { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';

class SurveyList extends Component {

    constructor(props){
        super(props);
        this.state = {
            searchField: ""
        }
    }

    componentDidMount(){
        this.props.fetchSurveys();
    }

    renderSurveys(){
        return this.props.surveys.reverse().map(s => {
            return(
                <div className="card" key={s._id}>
                    <div className="card-content">
                        <span className="card-title">{s.title}</span>
                        <p>{s.subject}</p>
                        <p className="right">Sent on: {new Date(s.dateSent).toLocaleDateString()}</p>
                    </div>
                    <div className="card-action">
                        <a>Yes: {s.yes}</a>
                        <a>No: {s.no}</a>
                        {/* <i className="material-icons right"  style={{color:'gray'}}>delete</i> */}
                    </div>   
                </div>
            )
        })
    }

    renderSurveysSearch(){
        return this.props.surveys.filter(survey => survey.title.toLowerCase().indexOf((this.state.searchField).toLowerCase()) > -1).map(s => {
            return(
                <div className="card" key={s._id}>
                    <div className="card-content">
                        <span className="card-title">{s.title}</span>
                        <p>{s.subject}</p>
                        <p className="right">Sent on: {new Date(s.dateSent).toLocaleDateString()}</p>
                    </div>
                    <div className="card-action">
                        <a>Yes: {s.yes}</a>
                        <a>No: {s.no}</a>
                        {/* <i className="material-icons right"  style={{color:'gray'}} >delete</i> */}
                    </div>   
                </div>
            )
        })
    }

    render() {
        return(
            <React.Fragment>
            <div className="input-field">
                <input id="search" type="search" onChange={(e) => this.setState({ searchField: e.target.value }) }/>
                <label class="label-icon" for="search"><i class="material-icons">{this.state.searchField === "" ? 'search' : null }</i></label>
                <i class="material-icons">close</i>
            </div>
            <div>
                 {this.state.searchField === "" ? this.renderSurveys() : this.renderSurveysSearch()}
            </div>
            </React.Fragment>
        )
    }
}

function mapStateToProps({surveys}){
    return {surveys};
}

export default connect(mapStateToProps, { fetchSurveys } )(SurveyList);