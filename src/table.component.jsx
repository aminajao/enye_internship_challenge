import React, { Component } from 'react'
import FormInput from './form.component';
import { Table } from 'antd';


class UserTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: []

        };
    }

    createUser = (newUser) => {
        this.setState({
            users: [...this.state.users, newUser]
        });
        // console.log(this.state.users.firstName);
    }

    render() {

        const columns = [

            {
                title: 'FirstName',
                dataIndex: 'firstName',
            },
            {
                title: 'LastName',
                dataIndex: 'lastName',
            },
            {
                title: 'Date Of Birth',
                dataIndex: 'dateOfBirth',
            },
            {
                title: 'Age',
                dataIndex: 'age',
            },
            {
                title: 'Hobby',
                dataIndex: 'hobby',
            },
        ];
        return (
            <div >
                <FormInput newUser={this.createUser} />
                <Table
                    className='table'
                    columns={columns}
                    dataSource={this.state.users}
                    bordered
                    title={() => <h4>This is the user table</h4>}
                />

            </div>
        )
    }
}

export default UserTable;
