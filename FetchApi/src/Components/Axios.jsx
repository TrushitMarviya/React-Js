import axios from 'axios'
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'

export default function Axios() {
    const [data,setData] = useState('')
    useEffect(()=>{
        fetchApi()
    })
    const fetchApi = async()=>{
        let res = await axios.get('https://fakestoreapi.com/products')
        console.log(res.data);
    setData(res.data)
    }
  return (
    <>
    <h1>Api using Axios</h1>  
    {
        data && 
        data.map((e,i)=>{
            return (
                <div key={i} 
                     style={{
                        border: " 2px solid ",
                       maxWidth: "500px",
                       padding: "20px", 
                       borderRadius: "15px",  
                       backgroundColor: "#fff", 
                       textAlign: "center", 
                     }}>
                  <img src={e.image} alt="" 
                       style={{
                         height: "25%",
                         width:"25%", 
                         objectFit: "cover", 
                         borderRadius: "10px"
                       }} 
                  />
                  <h1 style={{
                      fontSize: "18px", 
                      margin: "10px 0 5px", 
                      fontWeight: "600", 
                      color: "#333", 
                      position: "relative"
                  }}>
                    {e.title}
                  </h1>
                  <h1 style={{
                      fontSize: "22px", 
                      color: "#e63946", 
                      fontWeight: "700"
                  }}>
                    ₹{e.price}
                  </h1>
                  <p style={{
                      fontSize: "16px", 
                      color: "#555", 
                      textAlign: "justify", 
                      lineHeight: "1.6"
                  }}>
                    {e.description}
                  </p>
                </div>
              );
              })
    }
    </>
  )
}
