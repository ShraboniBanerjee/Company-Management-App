import React, { Component } from 'react'
import UserService from '../services/UserService'

class ViewUserComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            user: {}
        }
    }

    componentDidMount(){
        UserService.getUserById(this.state.id).then( res => {
            this.setState({user: res.data});
        })
    }

    render() {
        return (
            <div style={{padding:'60px'}}>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> View Details</h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label> User First Name: </label>
                            <div> { this.state.user.firstName }</div>
                        </div>
                        <div className = "row">
                            <label> User Last Name: </label>
                            <div> { this.state.user.lastName }</div>
                        </div>
                        <div className = "row">
                            <label> User Email ID: </label>
                            <div> { this.state.user.email }</div>
                        </div>
                        <div className = "row">
                            <label> Company Name: </label>
                            <div> { this.state.user.companyName }</div>
                        </div>
                        <div className = "row">
                            <label> Industry: </label>
                            <div> { this.state.user.companyName }</div>
                        </div>
                        <div className = "row">
                            <label> Primary Contact: </label>
                            <div> { this.state.user.primaryContact }</div>
                        </div>
                        
                        <div className = "row">
                            <label> Address Line 1: </label>
                            <div> { this.state.user.addressLine1 }</div>
                        </div>
                        
                        <div className = "row">
                            <label> Address Line 2: </label>
                            <div> { this.state.user.addressLine2 }</div>
                        </div>
                        

                        <div className = "row">
                            <label> Address State: </label>
                            <div> { this.state.user.addressState }</div>
                        </div>
                        
                        <div className = "row">
                            <label> Address City: </label>
                            <div> { this.state.user.addressCity }</div>
                        </div>

                        <div className = "row">
                            <label> Address Country: </label>
                            <div> { this.state.user.addressCountry }</div>
                        </div>

                        <div className = "row">
                            <label> Annual Revenue: </label>
                            <div> { this.state.user.annualRevenue }</div>
                        </div>
                        <div className = "row">
                            <label> Date Added: </label>
                            <div> { this.state.user.date }</div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default ViewUserComponent
