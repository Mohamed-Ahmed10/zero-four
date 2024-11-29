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
    cardHolderName: Yup.string()
        .required('Cardholder name is required')
        .test(
            'is-full-name',
            'Cardholder name must contain exactly three words',
            (value) => {
                if (!value) return false;
                const words = value.trim().split(/\s+/);
                return words.length === 3;
            }
        )
        .matches(/^[a-zA-Z\s]+$/, 'Cardholder name must only contain letters and spaces'),
    cardNumber: Yup.string().required('Invalid card number')
        .matches(/^[0-9]{14}$/, 'Card number must be a valid 14-digit number'),
    expirationDate: Yup.string().required('Expiration date is required')
        .matches(
            /^(0[1-9]|1[0-2])\/([0-9]{2})$/,
            'Expiration date must be in MM/YY format and valid'
        )
        .test('is-future-date', 'Expiration date must be in the future', (value) => {
            if (!value) return false;

            const [month, year] = value.split('/').map(Number);
            const now = new Date();
            const currentYear = parseInt(now.getFullYear().toString().slice(-2), 10);
            const currentMonth = now.getMonth() + 1;

            return (
                (year > currentYear || (year === currentYear && month >= currentMonth))
            );
        }),
    cvv: Yup.string().required("CVV is required").matches(/[0-9]{3}/, 'CVV must be a number')
});