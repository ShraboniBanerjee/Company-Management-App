import React, { Component } from 'react'
import UserService from '../services/UserService';
import 'devextreme-react/text-area';
//import DateBox from 'devextreme-react/date-box';

import { Row, Col } from 'react-bootstrap';




class CreateUserComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            
            id: this.props.match.params.id,
            firstName: '',
            lastName: '',
            email: '',
            companyName: '',
            industry: '',
            primaryContact: '',
            addressLine1: '',
            addressLine2: '',
            addressState: '',
            addressCity: '',
            addressCountry: '',
            annualRevenue: '',
            date: '',
            errorMessage: '',
            industries: ['Manufacturing', 'Marketing', 'Finance', 'Health'], // Array of industry options
            selectedIndustry: '' // State to store the selected industry
      
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.saveOrUpdateUser = this.saveOrUpdateUser.bind(this);
    }

    componentDidMount() {
       
        if (this.state.id === '_add') {
            return
        } else {
            UserService.getUserById(this.state.id).then((res) => {
                let user = res.data;
                this.setState({
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                    companyName: user.companyName,
                    industry: user.industry.toString(),
                    primaryContact: user.primaryContact,
                    addressLine1: user.addressLine1,
                    addressLine2: user.addressLine2,
                    addressState: user.addressState,
                    addressCity: user.addressCity,
                    addressCountry: user.addressCountry,
                    annualRevenue: user.annualRevenue,
                    date: user.date
                });
            });
        }
    }
    
    saveOrUpdateUser = (e) => {
        e.preventDefault();
        
        let user = { firstName: this.state.firstName, 
            lastName: this.state.lastName, email: this.state.email, companyName: this.state.companyName, 
            industry: this.state.selectedIndustry,
            primaryContact: this.state.primaryContact,
            addressLine1: this.state.addressLine1,
            addressLine2: this.state.addressLine2,
            addressState: this.state.addressState,
            addressCity: this.state.addressCity,
            addressCountry: this.state.addressCountry,
            annualRevenue: this.state.annualRevenue,
            date: new Date(this.state.date).toISOString()
        };
        console.log('user => ' + JSON.stringify(user));
     
        if (this.state.id === '_add') {
            UserService.createUser(user).then(res => {
                this.props.history.push('/users');
            },err => this.setState({errorMessage: err.message}));
        } else {
            UserService.updateUser(user, this.state.id).then(res => {
                this.props.history.push('/users');
            },err => this.setState({errorMessage: err.message}));
        }
    }

    changeFirstNameHandler = (event) => {
        this.setState({ firstName: event.target.value });
    }

    changeLastNameHandler = (event) => {
        this.setState({ lastName: event.target.value });
    }

    changeEmailHandler = (event) => {
        this.setState({ email: event.target.value });
    }
    changeCompanyNameHandler = (event) => {
        this.setState({ companyName: event.target.value });
    }
    

    changeIndustryHandler = (event) => {
        this.setState({ selectedIndustry: event.target.value });
    }


    changePrimaryContactHandler = (event) => {
        this.setState({ primaryContact: event.target.value });
    }

    changeAddressLine1Handler = (event) => {
        this.setState({ addressLine1: event.target.value });
    }

    changeAddressLine2Handler = (event) => {
        this.setState({ addressLine2: event.target.value });
    }

    changeAddressStateHandler = (event) => {
        this.setState({ addressState: event.target.value });
    }
    changeAddressCityHandler = (event) => {
        this.setState({ addressCity: event.target.value });
    }
    changeAddressCountryHandler = (event) => {
        this.setState({ addressCountry: event.target.value });
    }

    changeAnnualRevenueHandler = (event) => {
        this.setState({ annualRevenue: event.target.value });
    }
   
    changeDateHandler = (e) => {
        this.setState({ date: e.target.value });
        console.log(e.target.value)
    }
    
    cancel() {
        this.props.history.push('/users');
    }




    getTitle() {
        if (this.state.id === '_add') {
            return <h4 className="text-center">Add Your Data</h4>
        } else {
            return <h4 className="text-center">Update Your Data</h4>
        }
    }
    render() {
        return (
            <div style={{padding:'60px'}}>
                 <h1 style={{ textAlign: 'center' }}>Add Company page</h1>
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            {
                                this.getTitle()
                            }
                            <div className="card-body">
                                <form>
                                <Row>
                    <Col>
                        <div className="form-group">
                            <label>First Name:</label>
                            <input
                                placeholder="First Name"
                                name="firstName"
                                className="form-control"
                                value={this.state.firstName}
                                onChange={this.changeFirstNameHandler}
                            />
                        </div>
                    </Col>
                    <Col>
                        <div className="form-group">
                            <label>Last Name:</label>
                            <input
                                placeholder="Last Name"
                                name="lastName"
                                className="form-control"
                                value={this.state.lastName}
                                onChange={this.changeLastNameHandler}
                            />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="form-group">
                            <label>Email Id:</label>
                            <input
                                placeholder="Email Address"
                                name="email"
                                className="form-control"
                                value={this.state.email}
                                onChange={this.changeEmailHandler}
                            />
                        </div>
                    </Col>
                    <Col>
                        <div className="form-group">
                            <label>Company Name:</label>
                            <input
                                type="text"
                                name="companyName"
                                className="form-control"
                                value={this.state.companyName}
                                onChange={this.changeCompanyNameHandler}
                            />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="form-group">
                            <label>Industry:</label>
                            <select
                                name="selectedIndustry"
                                className="form-control"
                                value={this.state.selectedIndustry}
                                onChange={this.changeIndustryHandler}
                            >
                                <option value="">Select Industry</option>
                                {this.state.industries.map((industry) => (
                                    <option key={industry} value={industry}>
                                        {industry}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </Col>
                    <Col>
                        <div className="form-group">
                            <label>Primary Contact:</label>
                            
                            <input
                                type="text"
                                name="primaryContact"
                                className="form-control"
                                value={this.state.primaryContact}
                                onChange={this.changePrimaryContactHandler}
                            />
                        </div>
                    </Col>
                </Row>


                <Row>
    <Col>
        <div className="form-group">
            <label>Address Line 1:</label>
            <input
                type="text"
                name="addressLine1"
                className="form-control"
                value={this.state.addressLine1}
                onChange={this.changeAddressLine1Handler}
            />
        </div>
    </Col>
    <Col>
        <div className="form-group">
            <label>Address Line 2:</label>
            <input
                type="text"
                name="addressLine2"
                className="form-control"
                value={this.state.addressLine2}
                onChange={this.changeAddressLine2Handler}
            />
        </div>
    </Col>
</Row>
<Row>
    <Col>
        <div className="form-group">
            <label>Address State:</label>
            <input
                type="text"
                name="addressState"
                className="form-control"
                value={this.state.addressState}
                onChange={this.changeAddressStateHandler}
            />
        </div>
    </Col>
    <Col>
        <div className="form-group">
            <label>Address City:</label>
            <input
                type="text"
                name="addressCity"
                className="form-control"
                value={this.state.addressCity}
                onChange={this.changeAddressCityHandler}
            />
        </div>
    </Col>
</Row>
<Row>
    <Col>
        <div className="form-group">
            <label>Address Country:</label>
            <input
                type="text"
                name="addressCountry"
                className="form-control"
                value={this.state.addressCountry}
                onChange={this.changeAddressCountryHandler}
            />
        </div>
    </Col>
    <Col>
        <div className="form-group">
            <label>Annual Revenue $:</label>
            <input
                type="number"
                name="annualRevenue"
                className="form-control"
                value={this.state.annualRevenue}
                onChange={this.changeAnnualRevenueHandler}
            />

        </div>
    </Col>
</Row>
<Row>
    <Col>
        <div className="form-group">
        <label style={{ display: 'block' }}>Date:</label>
            <input type='date'
        value={this.state.date}
        onChange={this.changeDateHandler}
        style={{ borderRadius: '0.25rem', border: '1px solid #ced4da', padding: '0.375rem 0.75rem', lineHeight: '1.5', fontSize: '1rem' }}
      
    />
        </div>
    </Col>
</Row>
<button className="btn btn-success" onClick={this.saveOrUpdateUser}>Submit</button>
<button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{ marginLeft: "10px" }}>Back</button>
{this.state.errorMessage && (
    <h5 className="alert alert-danger">{this.state.errorMessage}</h5>
)}

              
              </form>
     

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default CreateUserComponent
