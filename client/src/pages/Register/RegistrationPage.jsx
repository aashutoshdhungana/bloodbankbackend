import { useNavigate } from 'react-router-dom';
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik"
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import axios from 'axios';

const RegistrationPage = () => {
    const { isLoggedIn, user } = useSelector(state => state.user);
    const navigate = useNavigate();

    useEffect(() => {
        if (isLoggedIn) {
            navigate('/');
        }
    }, [isLoggedIn, navigate])

    const initialValues = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        bloodtype: 0,
        diseases: []
      };
    
      const validationSchema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email address').required('Email is required'),
        password: Yup.string().min(8, 'Password should be at least 8 characters').required('Password is required'),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref('password'), null], 'Passwords must match')
          .required('Confirm password is required'),
        bloodtype: Yup.number().required('Blood group is required').oneOf(
          [1, 2, 3, 4, 5, 6, 7, 8],
          'Invalid blood group selected'
        ),
        diseases: Yup.array().nullable()
      });
    
      const handleSubmit = async (values) => {
        // Handle form submission logic here
        await axios.get('/sanctum/csrf-cookie');
        var result = await axios.post('/api/auth/register', values);
        if (result && result.status === 201) {
            alert('Registered successfully!');
            navigate('/login-page')
        }
        else {
            alert('Failed to register!');
        }
      };
    
      return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <div className="bg-white p-8 rounded-lg shadow-lg w-96 mt-10">
            <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              <Form>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 mb-2">
                    Name
                  </label>
                  <Field
                    type="text"
                    id="name"
                    name="name"
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                  <ErrorMessage name="name" component="div" className="text-red-500" />
                </div>
    
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Email
                  </label>
                  <Field
                    type="email"
                    id="email"
                    name="email"
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                  <ErrorMessage name="email" component="div" className="text-red-500" />
                </div>
    
                <div className="mb-4">
                  <label htmlFor="password" className="block text-gray-700 mb-2">
                    Password
                  </label>
                  <Field
                    type="password"
                    id="password"
                    name="password"
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                  <ErrorMessage name="password" component="div" className="text-red-500" />
                </div>
    
                <div className="mb-6">
                  <label htmlFor="confirmPassword" className="block text-gray-700 mb-2">
                    Confirm Password
                  </label>
                  <Field
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    className="w-full p-2 border border-gray-300 rounded-md"
                  />
                  <ErrorMessage name="confirmPassword" component="div" className="text-red-500" />
                </div>
    
                <div className="mb-4">
                  <label htmlFor="bloodtype" className="block text-gray-700 mb-2">
                    Choose Blood Group
                  </label>
                  <Field
                    as="select"
                    id="bloodtype"
                    name="bloodtype"
                    className="w-full p-2 border border-gray-300 rounded-md"
                  >
                    <option value="0">Choose option</option>
                    <option value="1">A+</option>
                    <option value="2">A-</option>
                    <option value="3">AB+</option>
                    <option value="4">AB-</option>
                    <option value="5">B+</option>
                    <option value="6">B-</option>
                    <option value="7">O-</option>
                    <option value="8">O+</option>
                  </Field>
                  <ErrorMessage name="bloodtype" component="div" className="text-red-500" />
                </div>
    
                <button
                  type="submit"
                  className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition duration-200"
                >
                  Register
                </button>
    
                <div className='flex mt-4 space-x-2 justify-center'>
                  <p>Already have an account?</p>
                  <button onClick={() => navigate('/login-page')} className="text-blue-500 hover:underline">Login Here</button>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      );
};

export default RegistrationPage;
