import React, { Component } from 'react';
import UserService from '../services/UserService';
import DataGrid, { Column, Editing, Paging, FilterRow } from 'devextreme-react/data-grid';
import { Button } from 'devextreme-react/button';

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
        UserService.deleteUser(id.data.id).then(res => {
            this.setState({ users: this.state.users.filter(user => user.id !== id)});
        }).catch(error => {
            console.error("Error deleting user:", error);
        });
    }

    viewUser(id){
        this.props.history.push(`/view-user/${id.row.data.id}`);
        console.log(id, id.row, id.row.data, id.row.data.id)

    }

    editUser(id){
        this.props.history.push(`/add-user/${id}`);
         console.log(id.data)
         delete id.data["date"] 
            UserService.updateUser(id.data, id.data.id).then(res => {
                this.props.history.push('/users');
            },err => this.setState({errorMessage: err.message}));
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
               <div className="row" style={{ padding: '60px', display: 'flex', justifyContent: 'center' }}>
    <h2 style={{ textAlign: 'center' }}>Homepage</h2>
</div>
                 
                 <div className = "row">
                 <button className="btn btn-primary" onClick={this.addUser} > Add New Company</button>
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
                    useIcons={true}
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
                <Column
        caption="View Details"
        type="buttons"
        buttons={[
          {
            text: 'View',
            onClick: (e) => this.viewUser(e)
          },
          // Built-in delete button
        ]}
      />
                <Column type="buttons" width={200}>
                    <button onClick={this.editUser} className="btn btn-info">Edit</button>
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
