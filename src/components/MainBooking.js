import { Form, DatePicker, Button, Select, Input, Space, Checkbox } from "antd";
import { useState } from 'react';
import "./MainBooking.scss";
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

export default function MainBooking() {

    const { TextArea } = Input;
    const [form] = Form.useForm();

    const accomList = {
        Room: ["Economy", "Superior", "Deluxe", "Premium"],
        Villa: ["Pine", "Palm", "Coconut", "Coral"]
    }

    dayjs.extend(customParseFormat);
    const beforeToday = (current) => {
        return current && current < dayjs().endOf('day');
    }


    const accomCat = Object.keys(accomList) //.map(option => { return {"value": option, "label": option}})


    const [accomType, setAccomType] = useState(accomList[accomCat[0]]);
    const [currType, setCurrType] = useState(accomList[accomCat[0]][0])


    const HandleAccomCat = (cat) => {
        setAccomType(accomList[cat]);
        setCurrType(accomList[cat][0]);
        form.setFieldsValue({ accomType: accomList[cat][0] })
    }

    const HandleAccomType = (type) => {
        setCurrType(type);
    }

    const Reserve = (value) => {
        alert("Reservation successful. Thank you for choosing Ressy Resort!");
        console.log(value);
    }

    return (
        <div className="MainBooking">

            <Form form={form} onFinish={Reserve}>
                {/*---------------------------Accommodation categories and types fields-----------------------------*/}
                <Space.Compact>
                    <div className="field">
                        <label htmlFor="accomCat">Category: </label>
                        <Form.Item name="accomCat" rules={[
                            {
                                required: true,
                                message: "Please select accommodation category"
                            }
                        ]} initialValue={accomCat[0]}>
                            <Select size="large" style={{width: "90%"}} onChange={HandleAccomCat} options={accomCat.map(option => { return { "value": option, "label": option } })} />
                        </Form.Item>
                    </div>

                    <div className="field">
                        <label htmlFor='accomType'>Type: </label>
                        <Form.Item name="accomType" rules={[
                            {
                                required: true,
                                message: "Please select your room/villa type"
                            }
                        ]} initialValue={accomType[0]} shouldUpdate>
                            <Select size="large" style={{width: "100%"}} value={currType} onChange={HandleAccomType} options={accomType.map(option => { return { "value": option, "label": option } })} />
                        </Form.Item>

                    </div>
                </Space.Compact>
                {/*-----------------------------------Check in out dates fields----------------------------------*/}
                <Space.Compact>
                    <div className="field">
                        <label htmlFor="chkIn">Check-in Date: </label>
                        <Form.Item name="chkIn" rules={[
                            {
                                required: true,
                                message: "Check-in date required"
                            }
                        ]}>
                            <DatePicker style={{width: "90%"}} disabledDate={beforeToday}></DatePicker>
                        </Form.Item>
                    </div>
                    <div className="field">
                        <label htmlFor="chkOut">Check-out Date: </label>
                        <Form.Item name="chkOut" dependencies={['chkIn']} rules={[
                            {
                                required: true,
                                message: "Check-out date required"
                            },
                            ({ getFieldValue }) => ({
                                validator(_, value) {

                                    const inDate = new Date(getFieldValue("chkIn"));
                                    const outDate = new Date(value);

                                    if (inDate < outDate) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject(new Error("Check-out date must be later that Check-in Date"));
                                }
                            })
                        ]}>
                            <DatePicker style={{width: "100%"}} disabledDate={beforeToday}></DatePicker>
                        </Form.Item>
                    </div>
                </Space.Compact>
                {/*---------------------------Name fields-----------------------------*/}
                <Space.Compact>
                    <div className="field">
                        <label htmlFor="FirstName">First Name: </label>
                        <Form.Item name="FirstName" rules={[
                            {
                                required: true,
                                message: "Please enter your first name"
                            },
                            {
                                pattern: "^[a-zA-Z]+$",
                                message: "Enter letters only"
                            }
                        ]}>
                            <Input style={{width: "90%"}}/>
                        </Form.Item>
                    </div>
                    <div className="field">
                        <label htmlFor="LastName">Last Name: </label>
                        <Form.Item name="LastName" rules={[
                            {
                                required: true,
                                message: "Please enter your last name"
                            },
                            {
                                pattern: "^[a-zA-Z]+$",
                                message: "Enter letters only"
                            }
                        ]}>
                            <Input />
                        </Form.Item>
                    </div>
                </Space.Compact>

                <div className='field'>
                    <label htmlFor='Email'>Email:</label>
                    <Form.Item name="email" rules={[
                        {
                            type: 'email',
                            message: 'Please input a valid email',
                        },
                        {
                            required: true,
                            message: 'An email is required',
                        },
                    ]}>
                        <Input />
                    </Form.Item>
                </div>
                {/*---------------------------Telephone fields-----------------------------*/}
                <Space.Compact>
                    <div className='field'>
                        <label htmlFor='CountryCode'>Country/Region Code:</label>

                        <Form.Item name="CountryCode" rules={[
                            {
                                pattern: "^[1-9][0-9]{0,2}$",
                                message: "Invalid country/region code"
                            },
                            {
                                required: true,
                                message: "Please enter country/region code"
                            }
                        ]}>
                            <Input addonBefore="+" style={{width: "90%"}}/>
                        </Form.Item>
                    </div>
                    <div className='field'>
                        <label htmlFor='PhoneNo'>Phone Number:</label>
                        <Form.Item name="PhoneNo" rules={[
                            {
                                required: true,
                                message: "Please enter a phone number"
                            },
                            {
                                pattern: "[0-9]{9}",
                                message: "Please enter a valid phone number"
                            }
                        ]}>
                            <Input />
                        </Form.Item>


                    </div>
                </Space.Compact>

                <div className="field">
                    <label htmlFor="special">Special Request: </label>
                    <Form.Item name="special">
                        <TextArea rows={4} />
                    </Form.Item>
                </div>
                {/*---------------------------Confirmation check boxes-----------------------------*/}
                <div className="field">
                    <Form.Item name="terms" valuePropName="checked" rules={[
                        {
                            validator: (_, value) =>
                                value ? Promise.resolve() : Promise.reject(new Error('Please read and accept the terms of service')),
                        }
                    ]}>
                        <Checkbox>I have read and agree to the Terms of Service</Checkbox>
                    </Form.Item>
                    <Form.Item name="confirm" valuePropName="checked" rules={[
                        {
                            validator: (_, value) =>
                                value ? Promise.resolve() : Promise.reject(new Error('Please re-check all the input information and tick this box to confirm')),
                        }
                    ]}>
                        <Checkbox>I confirm that all the information above is correct</Checkbox>
                    </Form.Item>

                </div>

                <Form.Item>
                    <Button type='primary' htmlType="submit">Book</Button>
                </Form.Item>

            </Form>
        </div>
    );
}