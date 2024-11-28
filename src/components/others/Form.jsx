import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Input, Button, Select, Row, Col } from 'antd';

const { Option } = Select;

const countries = [
    { code: 'US', name: 'United States' },
    { code: 'CA', name: 'Canada' },
    { code: 'GB', name: 'United Kingdom' },
    { code: 'AU', name: 'Australia' },
];

const sessionOptions = [
    { value: '6', label: '6 Months' },
    { value: '9', label: '9 Months' },
    { value: '12', label: '12 Months' },
    { value: '18', label: '18 Months' },
    { value: '24', label: '24Months' },
    { value: '36', label: '36 Months' },
];

const validationSchema = Yup.object({
    loginNumber: Yup.string()
        .required('Login number is required')
        .matches(/^[0-9]{10}$/, 'Login number must be a valid 10-digit number'),
    contactNumber: Yup.string()
        .required('Contact number is required')
        .matches(/^[0-9]{10}$/, 'Contact number must be a valid 10-digit number'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    contactName: Yup.string().required('Contact name is required'),
    billingAddress: Yup.string().required('Billing address is required'),
    addressNumber: Yup.string().required('required'),
    postalCode: Yup.string().required('Postal code is required'),
    city: Yup.string().required('City is required'),

    // Edits
    country: Yup.string().required('Country is required'),
    sessionType: Yup.string().required('Session type is required'),
});

const MyForm = () => {
    const initialValues = {
        loginNumber: '',
        contactNumber: '',
        email: '',
        contactName: '',
        billingAddress: '',
        addressNumber: '',
        postalCode: '',
        city: '',

        country: '',
        sessionType: '',
    };

    const onSubmit = (values) => {
        console.log('Form data', values);
    };

    const onChange = (value) => {
        console.log(`selected ${value}`);
    };

    const onSearch = (value) => {
        console.log('search:', value);
    };
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            {
                ({ handleSubmit }) => (
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
                                            showSearch
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
                        <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                    </Form>
                )}
        </Formik>
    );
};

export default MyForm;
