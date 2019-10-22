import React, { useState } from 'react';
import { Form, Icon, Input, Button } from 'antd';
import uuid from 'uuid';
import { DatePicker } from 'antd';
import { useDispatch } from 'react-redux'
// import moment from 'moment';


function FormInput() {

    const [user, setUser] = useState({

        firstname: "",
        lastname: "",
        date: null,
        age: "",
        hobby: "",
        id: uuid()
    });



    const dispatch = useDispatch();

    const handleChange = e => {
        const { value, name } = e.target;
        setUser({
            ...user,
            [name]: value
        });


    }
    const handleDatePickerChange = (date, value, dateString) => {
        setUser({ ...user, dateOfBirth: value });
    }
    const handleSubmit = e => {
        e.preventDefault();
        if (user.firstname === '' && user.lastname === '' && user.hobby === '' && user.date === '' && user.age === '') {
            return;
        }
        dispatch({
            type: 'ADD_USER',
            payload: user
        });

        setUser({});
    };

    // const dateFormat = 'YYYY/MM/DD';
    // const { MonthPicker, RangePicker } = DatePicker;

    return (
        <Form className='form'
            layout="inline"
            onSubmit={handleSubmit}>
            <Form.Item>
                <Input
                    required
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="Enter Firstname!"
                    onChange={handleChange}
                    name='firstName'
                    value={user.firstName}
                />
            </Form.Item>

            <Form.Item>
                <Input
                    required
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="text"
                    placeholder="Enter Lastname!"
                    onChange={handleChange}
                    name='lastName'
                    value={user.lastName}
                />
            </Form.Item>

            <Form.Item>
                <DatePicker
                    // defaultValue={moment('2015/01/01', dateFormat)}
                    // format={dateFormat}
                    onChange={(date, value, dateString) => handleDatePickerChange(date, value, dateString)}
                    name='dateOfBirth'
                    required='true'
                    placeholder="Enter date of birth!"
                // value={user.date}
                />
            </Form.Item>

            <Form.Item>
                <Input
                    required
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="number"
                    placeholder="Enter Age!"
                    onChange={handleChange}
                    name='age'
                    value={user.age}
                />
            </Form.Item>

            <Form.Item>
                <Input
                    required
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="text"
                    placeholder="Enter Hobby!"
                    onChange={handleChange}
                    name='hobby'
                    value={user.hobby}
                />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Submit
                     </Button>
            </Form.Item>

        </Form>
    )
}

export default FormInput;





// class FormInput extends Component {
//     constructor() {
//         super();
//         this.state = {
//             firstName: '',
//             lastName: '',
//             dateOfBirth: '',
//             age: '',
//             hobby: ''
//         }

//     }

//     handleChange = e => {
//         this.setState({
//             [e.target.name]: e.target.value
//         });
//     }

//     handleDatePickerChange = (date, value, dateString) => {
//         this.setState({
//             dateOfBirth: value
//         });
//     }

//     handleSubmit = e => {
//         e.preventDefault();
//         this.props.newUser({ ...this.state, id: uuid() });
//         console.log(this.state);
//         this.setState({
//             firstName: '',
//             lastName: '',
//             dateOfBirth: '',
//             age: '',
//             hobby: ''
//         })
//     };

//     render() {
//         const dateFormat = 'YYYY/MM/DD';
//         const { MonthPicker, RangePicker } = DatePicker;
//         return (
//             <Form className='form'
//                 layout="inline"
//                 onSubmit={this.handleSubmit}>
//                 <Form.Item>
//                     <Input
//                         required
//                         prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
//                         placeholder="Enter Firstname!"
//                         onChange={this.handleChange}
//                         name='firstName'
//                         value={this.state.firstName}
//                     />
//                 </Form.Item>

//                 <Form.Item>
//                     <Input
//                         required
//                         prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
//                         type="text"
//                         placeholder="Enter Lastname!"
//                         onChange={this.handleChange}
//                         name='lastName'
//                         value={this.state.lastName}
//                     />
//                 </Form.Item>

//                 <Form.Item>
//                     <DatePicker
//                         defaultValue={moment('2015/01/01', dateFormat)}
//                         format={dateFormat}
//                         onChange={(date, value, dateString) => this.handleDatePickerChange(date, value, dateString)}
//                         name='dateOfBirth'
//                         required='true'
//                         placeholder="Enter date of birth!"
//                     />
//                 </Form.Item>

//                 <Form.Item>
//                     <Input
//                         required
//                         prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
//                         type="number"
//                         placeholder="Enter Age!"
//                         onChange={this.handleChange}
//                         name='age'
//                         value={this.state.age}
//                     />
//                 </Form.Item>

//                 <Form.Item>
//                     <Input
//                         required
//                         prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
//                         type="text"
//                         placeholder="Enter Hobby!"
//                         onChange={this.handleChange}
//                         name='hobby'
//                         value={this.state.hobby}
//                     />
//                 </Form.Item>

//                 <Form.Item>
//                     <Button type="primary" htmlType="submit">
//                         Submit
//                      </Button>
//                 </Form.Item>

//             </Form>
//         );
//     }
// }



// export default FormInput;

