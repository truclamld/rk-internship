import "./BookForm.scss";
import { useState } from "react";
import { DatePicker, Button, Select, InputNumber, Form } from "antd";
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { useNavigate } from "react-router-dom";

function BookForm() {

    const [form] = Form.useForm();
    const redir = useNavigate();

    dayjs.extend(customParseFormat);
    const beforeToday = (current) => {
        return current && current < dayjs().endOf('day');
    }

    const accomList = {
        Room: ["Economy", "Superior", "Deluxe", "Premium"],
        Villa: ["Pine", "Palm", "Coconut", "Coral"]
    }


    const accomCat = Object.keys(accomList)


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
        console.log(value);
        const dest = "/booking?accomCat="+ value.accomCat + "&accomType="+ value.accomType + "&chkIn="+ value.chkIn + "&chkOut="+ value.chkOut + "&guestNo="+ value.guestNo;
        redir(dest);
    }

    return (
        <div className="booking-container">
            <Form form={form} className="booking-form" onFinish={Reserve}>
                <div className="field">
                    <label htmlFor="chkIn">Check-in Date: </label>
                    {/* <input type="date" name="checkin" id="checkin" onChange={Entering}></input> */}
                    <Form.Item name="chkIn" rules={[
                        {
                            required: true,
                            message: "Check-in date required"
                        }
                    ]}>
                        <DatePicker style={{ width: "100%" }} disabledDate={beforeToday}></DatePicker>
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
                        <DatePicker style={{ width: "100%" }} disabledDate={beforeToday}></DatePicker>
                    </Form.Item>
                </div>
                <div className="field">
                    <label htmlFor="accomCat">Category: </label>
                    <Form.Item name="accomCat" rules={[
                        {
                            required: true,
                            message: "Please select accommodation category"
                        }
                    ]} initialValue={accomCat[0]}>
                        <Select size="large" style={{ width: "100%" }} onChange={HandleAccomCat} options={accomCat.map(option => { return { "value": option, "label": option } })} />
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
                        <Select size="large" style={{ width: "100%" }} value={currType} onChange={HandleAccomType} options={accomType.map(option => { return { "value": option, "label": option } })} />
                    </Form.Item>
                </div>
                <div className="field">
                    <label htmlFor="guestNo">Number of Guests: </label>
                    <Form.Item name="guestNo" rules={[
                        {
                            required: true,
                            message: "Please enter number of staying guest(s)"
                        }
                    ]}>
                        <InputNumber min={1} max={20} />
                    </Form.Item>

                </div>
                <div className="btn-booking">
                    <Form.Item>
                        <Button type='primary' htmlType="submit">Book</Button>
                    </Form.Item>
                </div>
            </Form>
        </div>
    )
}

export default BookForm;