import * as Yup from 'yup';

export const validationSchema = Yup.object({
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
    cardHolder: Yup.string().required('Invalid card holder'),
    cardNumber: Yup.string().required('Invalid card number')
        .matches(/^[0-9]{14}$/, 'Card number must be a valid 14-digit number')
});