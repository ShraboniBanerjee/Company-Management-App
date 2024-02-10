import React, { Component } from 'react';
import UserService from '../services/UserService';
import DataGrid, { Column, Editing, Paging, FilterRow } from 'devextreme-react/data-grid';

class ListUserComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: []
        };

        this.addUser = this.addUser.bind(this);
        this.editUser = this.editUser.bind(this);
        this.deleteUser = this.deleteUser.bind(this);
        this.viewUser = this.viewUser.bind(this);
    }

    deleteUser(id){
        UserService.deleteUser(id).then(res => {
            this.setState({ users: this.state.users.filter(user => user.id !== id)});
        }).catch(error => {
            console.error("Error deleting user:", error);
        });
    }

    viewUser(id){
        this.props.history.push(`/view-user/${id}`);
    }

    editUser(id){
        this.props.history.push(`/add-user/${id}`);
    }

    componentDidMount(){
        UserService.getUsers().then((res) => {
            if (res.data == null) {
                this.props.history.push('/add-user/_add');
            } else {
                this.setState({ users: res.data});
            }
        }).catch(error => {
            console.error("Error fetching users:", error);
        });
    }

    addUser(){
        this.props.history.push('/add-user/_add');
    }

    render() {
        return (
            <div>
                 <h2 className="text-center">Company List</h2>
                 <div className = "row">
                    <button className="btn btn-primary" onClick={this.addUser} style={{marginRight:'5px'}}> Add New Company</button>
                   <button onClick={this.viewUser} className="btn btn-success">View Details</button> </div>
                 <br></br>

                 
                 <div className = "row">
                 <DataGrid
                dataSource={this.state.users}
                showBorders={true}
                columnAutoWidth={true}
                allowColumnReordering={true}
                onRowUpdated={this.editUser}
                onRowRemoved={this.deleteUser}
            >
                <Paging defaultPageSize={10} />
                <Editing
                    mode="row"
                    allowUpdating={true}
                    allowDeleting={true}
                    allowAdding={true}
                />
                <FilterRow visible={true} />
                <Column dataField="firstName" caption="User First Name" />
                <Column dataField="lastName" caption="User Last Name" />
                <Column dataField="email" caption="User Email Id" />
                <Column dataField="companyName" caption="Company Name" />
                <Column dataField="industry" caption="Industry" />
                <Column dataField="primaryContact" caption="Primary Contact" />
                <Column dataField="addressLine1" caption="Address Line 1" />
                <Column dataField="addressLine2" caption="Address Line 2" />
                <Column dataField="addressState" caption="Address State" />
                <Column dataField="addressCity" caption="Address City" />
                <Column dataField="addressCountry" caption="Address Country" />
                <Column dataField="annualRevenue" caption="Annual Revenue" />
                <Column dataField="date" caption="Date" dataType="date" />
                <Column type="buttons" width={200}>
                    <button onClick={this.editUser} className="btn btn-info">Update</button>
                    <button onClick={this.deleteUser} className="btn btn-danger">Delete</button>
                    <button onClick={this.viewUser} className="btn btn-info">View</button>
                </Column>
            </DataGrid>
  
</div>
                 

            </div>
        )
    }
}

export default ListUserComponent
