import React , {Component} from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from '../components/Payments'

class Header extends Component {
    renderContent() {
        switch (this.props.auth) {
            case null:
                return;
            case false:
                return <li>
                    <a href="/auth/google">Login with google</a>
                </li>;
            default:
                return [ 
            <li key="1"><Payments /></li>,
            <li key="2" style={{margin: '0 10px'}}>Credits : {this.props.auth.credits}</li>,
            <li key="3">
                <a href="/api/logout">Logout</a>
            </li>
            ];
        }
    }

    render() {
        return (
            <React.Fragment>
            <nav>
                <div className="nav-wrapper">
                    <Link 
                    to={this.props.auth ? '/surveys' : '/' } 
                    className="left brand-logo">
                        Emaily
                    </Link>
                    <ul id="nav-mobile" className="right">
                        {this.renderContent()}
                    </ul>
                </div>
            </nav>
            </React.Fragment>
        );
    }
}

function mapStatToProps({auth}){
    return{ auth };
}
export default connect(mapStatToProps)(Header);