// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import { useHistory } from 'react-router-dom';
// import jwt_decode from 'jwt-decode';
// import {
//   getEmailFromCookie,
//   getUserFromCookie,
//   getPhotoFromCookie,
//   removeEmailFromCookie,
//   removeUserFromCookie,
//   removePhotoFromCookie,
//   removeTokenFromCookie,
// } from '../../Utils/CookieUtils';

// const PanelUsers = () => {
//   const [users, setUsers] = useState([]);
//   const [message, setMessage] = useState('');
//   const history = useHistory();

//   const token = localStorage.getItem('token') || '';
//   const decoded = jwt_decode(token);

//   useEffect(() => {
//     if (!token) {
//       history.push('/');
//     }

//     axios
//       .get('http://localhost:8000/usuarios', {
//         headers: { Authorization: `Bearer ${token}` },
//       })
//       .then((res) => {
//         setUsers(res.data.usuarios);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }, [history, token]);

//   const handleLogout = () => {
//     removeTokenFromCookie();
//     removeEmailFromCookie();
//     removeUserFromCookie();
//     removePhotoFromCookie();
//     localStorage.removeItem('token');
//     history.push('/');
//   };

//   return (
//     <div>
//       <h1>Bienvenido al panel de usuarios</h1>
//       <h2>Usuario conectado: {getUserFromCookie()}</h2>
//       <h2>Correo electrónico: {getEmailFromCookie()}</h2>
//       <button onClick={handleLogout}>Cerrar sesión</button>
//       {users.length > 0 ? (
//         <table>
//           <thead>
//             <tr>
//               <th>Nombre</th>
//               <th>Correo electrónico</th>
//               <th>Estado</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.map((user) => (
//               <tr key={user._id}>
//                 <td>{user.user}</td>
//                 <td>{user.email}</td>
//                 <td>{user.status}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       ) : (
//         <p>No hay usuarios disponibles</p>
//       )}
//       <p>{message}</p>
//     </div>
//   );
// };

// export default PanelUsers;
