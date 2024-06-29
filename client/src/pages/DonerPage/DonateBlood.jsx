// import React, { useState } from 'react'

// const DonateBlood = () => {
//   const [bloodGroup, setBloodGroup] = useState('');
//   const [unit, setUnit] = useState(0);
//   const [disease, setDisease] = useState('');
//   const [age, setAge] = useState('');

//   const handleSubmit = (event) => {
//       event.preventDefault();
//       // Handle form submission logic here
//       console.log('Blood Group:', bloodGroup);
//       console.log('Unit (in ml):', unit);
//       console.log('Disease:', disease);
//       console.log('Age:', age);
//   };
//   return (
 
//       <div className="flex items-center justify-center min-h-screen bg-gray-100">
//         <div className="bg-white p-8 rounded-lg shadow-lg w-96">
//           <h2 className="text-2xl font-bold mb-6 text-center">DONATE BLOOD</h2>
//           <form onSubmit={handleSubmit}>
//             <div className="mb-4">
//               <label htmlFor="bloodGroup" className="block text-gray-700 mb-2">Blood Group</label>
//               <select
//                 id="bloodGroup"
//                 className="w-full p-2 border border-gray-300 rounded-md"
//                 value={bloodGroup}
//                 onChange={(e) => setBloodGroup(e.target.value)}
//                 required
//               >
//                 <option value="">Choose option</option>
//                 <option value="A+">A+</option>
//                 <option value="A-">A-</option>
//                 <option value="B+">B+</option>
//                 <option value="B-">B-</option>
//                 <option value="AB+">AB+</option>
//                 <option value="AB-">AB-</option>
//                 <option value="O+">O+</option>
//                 <option value="O-">O-</option>
//               </select>
//             </div>
//             <div className="mb-4">
//               <label htmlFor="unit" className="block text-gray-700 mb-2">Unit (in ml)</label>
//               <input
//                 type="number"
//                 id="unit"
//                 className="w-full p-2 border border-gray-300 rounded-md"
//                 value={unit}
//                 onChange={(e) => setUnit(e.target.value)}
//                 min="0"
//                 required
//               />
//             </div>
//             <div className="mb-4">
//               <label htmlFor="disease" className="block text-gray-700 mb-2">Disease (if any)</label>
//               <input
//                 type="text"
//                 id="disease"
//                 className="w-full p-2 border border-gray-300 rounded-md"
//                 value={disease}
//                 onChange={(e) => setDisease(e.target.value)}
//                 placeholder="Nothing"
//               />
//             </div>
//             <div className="mb-6">
//               <label htmlFor="age" className="block text-gray-700 mb-2">Age</label>
//               <input
//                 type="number"
//                 id="age"
//                 className="w-full p-2 border border-gray-300 rounded-md"
//                 value={age}
//                 onChange={(e) => setAge(e.target.value)}
//                 min="18"
//                 required
//               />
//             </div>
//             <button type="submit" className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition duration-200">Submit</button>
//           </form>
//         </div>
//       </div>
 
//   )
// }

// export default DonateBlood