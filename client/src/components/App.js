import React ,{ Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Landing from './Landing';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';

class App extends Component {
    componentDidMount(){
        this.props.fetchUser();
    }

    
    render() {
        return (
            <div className="container">
                <BrowserRouter>
                    <div className="container">
                        <Header />
                        <Route path="/" component={Landing} exact></Route>
                        <Route path="/surveys" component={Dashboard} exact></Route>
                        <Route path="/surveys/new" component={SurveyNew}></Route>                        
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default connect(null, actions)(App); //First arg for connect is for props which were not gonna use here