import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const DonateBlood = ({ show, onClose, onConfirm, confirmText }) => {
    const { isLoggedIn } = useSelector(state => state.user);
    const navigate = useNavigate();
    
if (!show) return null;



let title = isLoggedIn ? 'Donate confirmation' : 'Log In';
let description = isLoggedIn ? 'Are you sure you want to donate blood to our organization?' : 'You need to login to donate blood.';
return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        <p className="mb-4">{description}</p>
        <div className="flex justify-end space-x-4">
        <button
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-200"
            onClick={onClose}
        >
            Close
        </button>
        {onConfirm && isLoggedIn &&
            (<button
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-200"
            onClick={onConfirm}
            >
            {confirmText || 'Confirm'}
            </button>
        )}
        {
            !isLoggedIn && <button
                className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-200"
                onClick={() => {navigate('/login-page')}}
            >
                Log In
            </button>
        }
        </div>
    </div>
    </div>
);
};

export default DonateBlood;
