import { useContext, useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Input, Radio, Space, Select, Row, Col, Typography } from 'antd';
const { Title } = Typography;

import { validationSchema } from '../../../validation/validationSchema';
import { countries, sessionOptions, formInitialValue as initialValues } from '../../../data/data';
import { UserDataContext } from '../../../context/UserDataContext';


// Images
import sepa from "../../../assets/sepa.png"
import visa from "../../../assets/visa&master.png"

const { Option } = Select;


const MyForm = () => {
    const [formState, setFormState] = useState({});
    const userContext = useContext(UserDataContext)

    const onSubmit = (values) => {
        console.log('Form data', values);
    };
    const onChange = (text) => {
        console.log('onChange:', text);
    };
    const onInput = (value) => {
        console.log('onInput:', value);
    };
    const sharedProps = {
        onChange,
        onInput,
    };

    useEffect(() => {
        userContext.setFormState(formState)
    }, [formState])
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
        // onSubmit={onSubmit}
        >
            {
                ({ values, handleSubmit }) => {
                    useEffect(() => {
                        setFormState(values);
                    }, [values]);
                    return (
                        <>
                            <Form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label htmlFor="loginNumber" className="form_label">
                                        Login phone number
                                        <span>(preferably <u>the student's</u>)</span>
                                    </label>
                                    <Field name="loginNumber">
                                        {({ field }) => (
                                            <Input {...field} id="loginNumber" className="form_input" />
                                        )}
                                    </Field>
                                    <ErrorMessage name="loginNumber" component="div" className="text-red-500 text-sm" />
                                </div>
                                <div>
                                    <label htmlFor="contactNumber" className="form_label">
                                        Login phone number
                                        <span>(preferably <u>the student's</u>)</span>
                                    </label>
                                    <Field name="contactNumber">
                                        {({ field }) => (
                                            <Input {...field} id="contactNumber" className="form_input" />
                                        )}
                                    </Field>
                                    <ErrorMessage name="contactNumber" component="div" className="text-red-500 text-sm" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="form_label">
                                        Contact email address
                                        <span>(preferably <u>the student's</u>)</span>
                                    </label>
                                    <Field name="email">
                                        {({ field }) => <Input {...field} id="email" className="form_input" />}
                                    </Field>
                                    <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
                                </div>
                                <div>
                                    <label htmlFor="contactName" className="form_label">
                                        Contact Name
                                    </label>
                                    <Field name="contactName">
                                        {({ field }) => (
                                            <Input {...field} id="contactName" className="form_input" />
                                        )}
                                    </Field>
                                    <ErrorMessage name="contactName" component="div" className="text-red-500 text-sm" />
                                </div>
                                <div>
                                    <label htmlFor="billingAddress" className="form_label">
                                        Billing Address
                                    </label>
                                    <Row gutter={6}>
                                        <Col sm={18} span={24} className='px-10'>
                                            <Field name="billingAddress">
                                                {({ field }) => <Input {...field} id="billingAddress" placeholder='Address' className="form_input" />}
                                            </Field>
                                            <ErrorMessage name="billingAddress" component="div" className="text-red-500 text-sm" />
                                        </Col>
                                        <Col sm={6} span={24} className='px-10'>
                                            <Field name="addressNumber">
                                                {({ field }) => <Input {...field} id="addressNumber" placeholder='NR' className="form_input" />}
                                            </Field>
                                            <ErrorMessage name="addressNumber" component="div" className="text-red-500 text-sm" />
                                        </Col>
                                        <Col className='mt-4' span={8}>
                                            <Field name="postalCode">
                                                {({ field }) => <Input {...field} placeholder='Postal code' id="postalCode" className="form_input" />}
                                            </Field>
                                            <ErrorMessage name="postalCode" component="div" className="text-red-500 text-sm" />
                                        </Col>
                                        <Col className='mt-4' span={8}>
                                            <Field name="city">
                                                {({ field }) => <Input placeholder='City' {...field} id="city" className="form_input" />}
                                            </Field>
                                            <ErrorMessage name="city" component="div" className="text-red-500 text-sm" />
                                        </Col>
                                        <Col className='mt-4' span={8}>
                                            <Field name="country">
                                                {({ field, form }) => (
                                                    <Select
                                                        {...field}
                                                        showSearch
                                                        defaultValue="HangZhou"
                                                        id="country"
                                                        onChange={(value) => form.setFieldValue('country', value)}
                                                        className="form_input w-full"
                                                        placeholder="Select a country"
                                                    >
                                                        {countries.map((country) => (
                                                            <Option key={country.code} value={country.code}>
                                                                {country.name}
                                                            </Option>
                                                        ))}
                                                    </Select>
                                                )}
                                            </Field>
                                            <ErrorMessage name="country" component="div" className="text-red-500 text-sm" />
                                        </Col>
                                    </Row>
                                    <label htmlFor="sessionType" className="form_label mt-2">
                                        Session Type
                                    </label>
                                    <Field name="sessionType">
                                        {({ field, form }) => (
                                            <>
                                                <Select
                                                    {...field}
                                                    placeholder="Select a person"
                                                    optionFilterProp="label"
                                                    id="sessionType"
                                                    onChange={(value) => form.setFieldValue('sessionType', value)}
                                                    className="form_input w-full"
                                                >
                                                    {sessionOptions.map((option) => (
                                                        <Option key={option.value} value={option.value}>
                                                            {option.label}
                                                        </Option>
                                                    ))}
                                                </Select>

                                            </>
                                        )}
                                    </Field>
                                    <ErrorMessage name="sessionType" component="div" className="text-red-500 text-sm" />
                                </div>
                                <label className='form_label mt-5'>select payment method</label>
                                <Field name="paymentMethod">
                                    {({ field }) => <Radio.Group id='paymentMethod' {...field}>
                                        <Space direction="vertical">
                                            <Radio value="sepa">
                                                <img src={sepa} width={60} alt="Spea" />
                                            </Radio>
                                            <Radio value="visa">
                                                <img src={visa} width={60} alt="Spea" />
                                            </Radio>
                                        </Space>
                                    </Radio.Group>}
                                </Field>
                                {
                                    formState.paymentMethod === 'visa' &&
                                    <Row>
                                        <Col className='mt-4' span={24}>
                                            <Field name="cardHolderName">
                                                {({ field }) => (
                                                    <Input
                                                        {...field}
                                                        id="cardHolderName"
                                                        className="form_input"
                                                        placeholder='Card holder'
                                                    />
                                                )}
                                            </Field>
                                            <ErrorMessage name="cardHolderName" component="div" className="text-red-500 text-sm" />
                                        </Col>
                                        <Col className='mt-4' span={12}>
                                            <div className="relative">
                                                <Field name="cardNumber">
                                                    {({ field }) => <Input {...field} id="cardNumber" className="form_input pt-5" />}
                                                </Field>
                                                <div className="absolute top-1 left-0 flex pl-3 text-label items-start">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="h-4 w-4 text-label"
                                                        viewBox="0 0 24 24"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    >
                                                        <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect>
                                                        <line x1="1" y1="10" x2="23" y2="10"></line>
                                                    </svg>
                                                    <span className="ml-1 text-xs">Card number</span>
                                                </div>
                                            </div>

                                            <ErrorMessage name="cardNumber" component="div" className="text-red-500 text-sm" />
                                        </Col>
                                        <Col className='mt-4' span={6}>
                                            <div className="relative">
                                                <Field name="expirationDate">
                                                    {({ field, form }) => (
                                                        <Input
                                                            {...field}
                                                            id="expirationDate"
                                                            className="form_input pt-5"
                                                            maxLength={5}
                                                            onChange={(e) => {
                                                                const value = e.target.value.replace(/\D/g, '');
                                                                let formattedValue = value;

                                                                if (value.length > 2) {
                                                                    formattedValue = `${value.slice(0, 2)}/${value.slice(2, 4)}`;
                                                                }

                                                                form.setFieldValue('expirationDate', formattedValue);
                                                            }}
                                                        />
                                                    )}
                                                </Field>
                                                <div className="absolute top-1 left-0 flex pl-3 text-label items-start">
                                                    <span className="text-xs">MM/YY</span>
                                                </div>
                                            </div>
                                            <ErrorMessage name="expirationDate" component="div" className="text-red-500 text-sm" />
                                        </Col>
                                        <Col className='mt-4' span={6}>
                                            <div className="relative">
                                                <Field name="cvv">
                                                    {({ field }) => <Input {...field} id="cvv" className="form_input pt-5" />}
                                                </Field>
                                                <div className="absolute top-1 left-0 flex pl-3 text-label items-start">
                                                    <span className="text-xs">CVV</span>
                                                </div>
                                            </div>
                                            <ErrorMessage name="cvv" component="div" className="text-red-500 text-sm" />
                                        </Col>
                                    </Row>
                                }
                                {/* <Title level={5}>With custom display character</Title>
                                <Input.OTP length={3} {...sharedProps} /> */}
                            </Form >
                        </>
                    )
                }
            }
        </Formik >
    );
};

export default MyForm;
