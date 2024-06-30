const Popup = ({ show, onClose, title, children, onConfirm }) => {
    if (!show) return null;

    return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
        <h2 className="text-xl font-bold mb-4">{title}</h2>
        <div className="mb-4">
        {children}
        </div>
        <button
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-200 mr-1"
            onClick={onClose}
        >
            Close
        </button>
        {onConfirm && (
            <button
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-200"
              onClick={onConfirm}
            >
              {'Confirm'}
            </button>
          )}
        </div>
    </div>
    );
};

export default Popup;