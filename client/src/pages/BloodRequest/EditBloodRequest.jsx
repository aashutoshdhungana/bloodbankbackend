import { useParams, useNavigate } from 'react-router-dom';
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import axios from 'axios';

const EditBloodRequest = () => {
const { id } = useParams();
const { isLoggedIn, user } = useSelector(state => state.user);
const navigate = useNavigate();

const [initialValues, setInitialValues] = useState({
    user_id: user.id,
    name: user.name,
    email: user.email,
    phone: '',
    bloodtype: user.bloodtype,
    units: 0,
    message: ''
  });

useEffect(() => {
if (!isLoggedIn) {
navigate('/login-page'); // Redirect to login page if the user is not logged in
}
}, [isLoggedIn, navigate]);

useEffect(() => {
    const fetchRequest = async () => {
        try {
          const response = await axios.get(`/api/bloodrequest/${id}`);
          console.log(response)
          if (response.status === 200) {
            setInitialValues({
                user_id: response.data.user_id,
                name: response.data.user?.name,
                email: response.data.user?.email,
                phone: response.data.phone,
                bloodtype: response.data.bloodtype,
                units: response.data.units,
                message: response.data.message
            });
          }
        } catch (error) {
          console.error('Error fetching blood request data', error);
        }
      };
  
      fetchRequest();
}, [id])

const validationSchema = Yup.object().shape({
    user_id: Yup.number().required('Requester name is required'),
    phone: Yup.string().matches(/^\d{10}$/, 'Contact number must be 10 digits').required('Contact number is required'),
    bloodtype: Yup.number().required('Blood type is required').oneOf(
    [1, 2, 3, 4, 5, 6, 7, 8],
    'Invalid blood type selected'
    ),
    units: Yup.number().required('Quantity is required').min(1, 'At least 1 unit is required'),
    message: Yup.string().nullable()
});
    
const handleSubmit = async (values) => {
try {
const result = await axios.patch(`/api/bloodrequest/${id}`, values);
if (result && result.status === 200) {
alert('Blood request edited successfully!');
navigate('/myrequests');
} else {
alert('Failed to edit blood request!');
}
} catch (error) {
console.error('Request error', error);
alert('Failed to edit blood request!');
}
};

return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-96 mt-10">
            <h2 className="text-2xl font-bold mb-6 text-center">
                Place Blood Request
            </h2>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
                enableReinitialize
            >
                <Form>
                    <div className="mb-4 hidden">
                        <label
                            htmlFor="user_id"
                            className="block text-gray-700 mb-2"
                        >
                            Requester Name
                        </label>
                        <Field
                            type="text"
                            id="user_id"
                            name="user_id"
                            className="w-full p-2 border border-gray-300 rounded-md"
                            disabled={true}
                        />
                        <ErrorMessage
                            name="user_id"
                            component="div"
                            className="text-red-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            htmlFor="name"
                            className="block text-gray-700 mb-2"
                        >
                            Requester Name
                        </label>
                        <Field
                            type="text"
                            id="name"
                            name="name"
                            className="w-full p-2 border border-gray-300 rounded-md"
                            disabled={true}
                        />
                        <ErrorMessage
                            name="requesterName"
                            component="div"
                            className="text-red-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label
                            htmlFor="email"
                            className="block text-gray-700 mb-2"
                        >
                            Email
                        </label>
                        <Field
                            type="email"
                            id="email"
                            name="email"
                            className="w-full p-2 border border-gray-300 rounded-md"
                            disabled={true}
                        />
                        <ErrorMessage
                            name="email"
                            component="div"
                            className="text-red-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label
                            htmlFor="phone"
                            className="block text-gray-700 mb-2"
                        >
                            Contact Number
                        </label>
                        <Field
                            type="text"
                            id="phone"
                            name="phone"
                            className="w-full p-2 border border-gray-300 rounded-md"
                        />
                        <ErrorMessage
                            name="phone"
                            component="div"
                            className="text-red-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label
                            htmlFor="bloodtype"
                            className="block text-gray-700 mb-2"
                        >
                            Blood Type Needed
                        </label>
                        <Field
                            as="select"
                            id="bloodtype"
                            name="bloodtype"
                            className="w-full p-2 border border-gray-300 rounded-md"
                        >
                            <option value="">Choose option</option>
                            <option value="1">A+</option>
                            <option value="2">A-</option>
                            <option value="3">AB+</option>
                            <option value="4">AB-</option>
                            <option value="5">B+</option>
                            <option value="6">B-</option>
                            <option value="7">O-</option>
                            <option value="8">O+</option>
                        </Field>
                        <ErrorMessage
                            name="bloodtype"
                            component="div"
                            className="text-red-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label
                            htmlFor="units"
                            className="block text-gray-700 mb-2"
                        >
                            Quantity Needed (Units)
                        </label>
                        <Field
                            type="number"
                            id="units"
                            name="units"
                            className="w-full p-2 border border-gray-300 rounded-md"
                        />
                        <ErrorMessage
                            name="units"
                            component="div"
                            className="text-red-500"
                        />
                    </div>

                    <div className="mb-4">
                        <label
                            htmlFor="message"
                            className="block text-gray-700 mb-2"
                        >
                            Additional Message
                        </label>
                        <Field
                            as="textarea"
                            id="message"
                            name="message"
                            className="w-full p-2 border border-gray-300 rounded-md"
                        />
                        <ErrorMessage
                            name="message"
                            component="div"
                            className="text-red-500"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition duration-200"
                    >
                        Place Request
                    </button>
                </Form>
            </Formik>
        </div>
    </div>
);
}

export default EditBloodRequest;
