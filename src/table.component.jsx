import React from 'react'
// import FormInput from './form.component';
import { Table } from 'antd';
import { useSelector } from 'react-redux'


function UserTable() {

    const allUsers = useSelector((state) => (state.users));
    console.log(allUsers);

    const columns = [

        {
            title: 'FirstName',
            dataIndex: 'firstName',
            key: 'firstname'
        },
        {
            title: 'LastName',
            dataIndex: 'lastName',
            key: 'lastname'
        },
        {
            title: 'Date Of Birth',
            dataIndex: 'dateOfBirth',
            key: 'dob'
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age'
        },
        {
            title: 'Hobby',
            dataIndex: 'hobby',
            key: 'hobby'
        },

    ];
    return (

        <div >

            <Table
                className='table'
                columns={columns}
                dataSource={allUsers}
                bordered
                title={() => <h4>This is the user table</h4>}
                rowKey={allUsers => allUsers.id}
            />
        </div>
    )
}


export default UserTable;
