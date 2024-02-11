import React, { Component } from 'react';
import UserService from '../services/UserService';
import { Link } from 'react-router-dom';
import DataGrid, { Column } from 'devextreme-react/data-grid';

class ViewUserComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props.match.params.id,
            user: {}
        };
    }

    componentDidMount() {
        UserService.getUserById(this.state.id).then(res => {
            this.setState({ user: res.data });
        });
    }

    render() {
        const { user } = this.state;

        return (
            <div style={{ padding: '60px' }}>
    <h2 style={{ textAlign: 'center' }}>Company Details Page</h2>
                <br />
                <Link to="/users" className="btn btn-primary mb-3">Back</Link>
            <br />
                <DataGrid dataSource={[user]} showBorders={true}>
                    <Column dataField="firstName" caption="User First Name" width={120} />
                    <Column dataField="lastName" caption="User Last Name" width={120} />
                    <Column dataField="email" caption="User Email ID" width={120} />
                    <Column dataField="companyName" caption="Company Name" width={120} />
                    <Column dataField="industry" caption="Industry" width={120} />
                    <Column dataField="primaryContact" caption="Primary Contact" width={120}/>
                    <Column dataField="addressLine1" caption="Address Line 1" width={120}/>
                    <Column dataField="addressLine2" caption="Address Line 2" width={120} />
                    <Column dataField="addressState" caption="Address State" width={120}/>
                    <Column dataField="addressCity" caption="Address City" width={120}/>
                    <Column dataField="addressCountry" caption="Address Country" width={140}/>
                    <Column dataField="annualRevenue" caption="Annual Revenue $" width={170}/>
                    <Column dataField="date" caption="Date Added"  width={120}/>
                </DataGrid>
            </div>
        );
    }
}

export default ViewUserComponent;
