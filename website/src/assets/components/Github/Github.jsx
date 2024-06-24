import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
function Github() {
//   const [data, setData] = useState({});

//   useEffect(() => {
//     fetch('https://api.github.com/users/Abhaywadkar04')
//       .then(resp => resp.json())
//       .then(data => {
//         setData(data);
//       });
//   }, []);

const data=useLoaderData();
  return (
    <div>Github followers: {data.followers}
    <img  className="flex align-middle"src={data.avatar_url} alt="git picture" />
    </div>
    
  );
}

export default Github;


export const githubInfoLoader=async()=>{
    const response=await fetch('https://api.github.com/users/Abhaywadkar04')

    return response.json()
}