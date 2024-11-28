import { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Input, Radio, Space, Select, Row, Col, Typography } from 'antd';
const { Title } = Typography;

import { validationSchema } from '../../validation/validationSchema';
import { countries, sessionOptions } from '../data/data';
import { formInitialValue as initialValues } from '../data/data';

// Images
import sepa from "../../assets/sepa.png"
import visa from "../../assets/visa&master.png"

const { Option } = Select;


const MyForm = () => {
    const [formState, setFormState] = useState({});

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
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
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
                                        <Col span={18} className='px-10'>
                                            <Field name="billingAddress">
                                                {({ field }) => <Input {...field} id="billingAddress" placeholder='Address' className="form_input" />}
                                            </Field>
                                            <ErrorMessage name="billingAddress" component="div" className="text-red-500 text-sm" />
                                        </Col>
                                        <Col span={6} className='px-10'>
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
                                    {({ field }) => <Radio.Group id='paymentMethod' {...field} className="form_input">
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
                                    <>
                                        <Field name="cardHolder">
                                            {({ field }) => <Input {...field} id="cardHolder" placeholder='Card holder' className="form_input" />}
                                        </Field>
                                        <ErrorMessage name="cardHolder" component="div" className="text-red-500 text-sm" />
                                        <Field name="cardNumber">
                                            {({ field }) => <Input {...field} id="cardNumber" placeholder='Card number' className="form_input" />}
                                        </Field>
                                        <ErrorMessage name="cardNumber" component="div" className="text-red-500 text-sm" />

                                    </>
                                }
                                {/* <Title level={5}>With custom display character</Title>
                                <Input.OTP length={8} {...sharedProps} /> */}
                            </Form>
                        </>
                    )
                }
            }
        </Formik >
    );
};

export default MyForm;
