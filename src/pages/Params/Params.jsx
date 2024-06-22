// import React, { useEffect, useState } from 'react';
// import s from './Params.module.scss';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';

// const Params = () => {
//   const [productParams, setProductParams] = useState(null);
//   const [error, setError] = useState(null);
//   const params = useParams();
  
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(`http://localhost:3000/db.json?id=${params.id}`);
//         setProductParams(response.data);
//       } catch (err) {
//         setError(err.message);
//       }
//     };

//     if (params.id) {
//       fetchData();
//     }
//   }, [params.id]);

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div className={s.sss}>
//       {productParams ? (
//         <div key={productParams.id}>
//           <img width={300} src={productParams.image} alt={productParams.name} />
//           <h3>{productParams.price}</h3>
//           <h2>{productParams.name}</h2>
//           <button>add to card</button>
//         </div>
//       ) : (
//         <div>Loading...</div>
//       )}
    
//     </div>
//   );
// };

// export default Params;
