// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

export default function Home() {
  const [item, setItem] = useState("");
  const [catagory, setCatagory] = useState("");
  const arrObj = [
    {
      item: "Vivo v40 Pro",
      price:"₹ 50,000",
      catagory: "Mobile",
      url: "https://img-prd-pim.poorvika.com/product/vivo-v40-5g-Purple-256gb-8gb-ram-front-back-view-01.png",
    },
    {
      item: "Oppo Reno 12",
      url: "https://oppostoresg.com/cdn/shop/files/A60DTCthumbnail.jpg?v=1714379273&width=1445",
      price: "₹ 40,000",
      catagory: "Mobile"
    },
    {
      item: "Samsung s23",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKmJeP4NjrxACZ0TONq6j2M4xcPdTh4T2HWw&s",
      price: "₹ 55,000",
      catagory: "Mobile"
    },
    {
      item: "Tecno Spark 10 C",
      url: "https://www.reliancedigital.in/medias/Tecno-Spark-10C-493837793-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w1NTQ1NXxpbWFnZS9qcGVnfGltYWdlcy9oYzcvaDlmLzEwMDE1MDM3MjU5ODA2LmpwZ3w3ZmEwNjgzNjkwZGY2Njk3MDc0NjlmNWEyM2YwZDNmZTVjZDgyOWNkMzVhZDE2MjcyOThkZTI0OTE3MjdlMWE2",
      price: "₹ 15,000",
      catagory: "Mobile"
    },
    {
      item: "iPhone 15 pro    ",
      url:"https://www.91-cdn.com/hub/wp-content/uploads/2024/06/iPhone-16-Pro-Max-1200x900.jpg",
      price: "₹ 1,20,000",
      catagory: "Mobile"
    },
    {
      item: "OnePlus 7 pro",
      url: "https://5.imimg.com/data5/SELLER/Default/2021/4/XM/RR/NM/122175801/oneplus9-1.jpg",
      price: "₹ 35,000",
      catagory: "Mobile"
    },
    {
      item: "Xiaomi 14",
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkhTfhaF4hw7c0hlwZ9jtnoj8sWr_UDCwdHQ&s",
      price: "₹ 30,000",
      catagory: "Mobile"
    },
    {
      item: "Motorola H-40",
      url: "https://cdn.awsli.com.br/600x450/328/328143/produto/36539068/4db04f3351.jpg",
      price: "₹ 27,000",      
      catagory: "Mobile"

    },
    {
      item: "Rolex Oyster",
      url:"https://thumbs.dreamstime.com/b/rolex-wrist-watch-isolated-oyster-perpetual-date-stainless-luxury-prestige-status-symbol-116714468.jpg",
      price: "₹ 58,000",
      catagory: "Watch"
    },
    {
      item: "Titan Gold",
      url:"https://www.titan.co.in/dw/image/v2/BKDD_PRD/on/demandware.static/-/Sites-titan-master-catalog/default/dw56a159ca/images/Titan/Catalog/90102BM01_1.jpg?sw=800&sh=800",
      price: "₹ 70,000",
      catagory: "Watch"
    },
    {
      item: "Rado Anatom",
      url:"https://78a8f771.aerocdn.com/image-factory/fb33ed4d316fc546d2a1afeb8fcd6743db35679e~450x450/images/products/q5pxarZ5UjlpG82rKVqN75IwMPEBN5RrSY2EqMkB.jpg",
      price: "₹ 45,000",
      catagory: "Watch"
    },
    {
      item: "Firebolt-039",
      url:"https://www.fireboltt.com/cdn/shop/products/phoenix-pro-black_1_1080x.png?v=1676981521",
      price: "₹ 2,500",
      catagory: "Watch"
    },
    {
      item: "Boat Wavebeat",
      url:"https://images-eu.ssl-images-amazon.com/images/I/61DZclqQ4RL._AC_UL600_SR600,600_.jpg",
      price: "₹ 6,000",
      catagory: "Watch"
    },
    {
      item: "Noise Haloplus",
      url:"https://5.imimg.com/data5/SELLER/Default/2023/5/306205656/GE/TS/BG/155891402/noise-colorfit-ultra-smart-watch-1000x1000-500x500.png",
      price: "₹ 8 ,000",
      catagory: "Watch"
    },
    {
      item:"Golden Neckless",
      url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsV64QICSAH76r18oiainTlq2QMTwUUZXmrsPvGo7-jadM4Exb2WxCWpida0CuGBQgsoU&usqp=CAU",
      price: "₹ 1,60,000",
      catagory: "Jawellery"
    },
    {
      item:"Daimond Ring",
      url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxf7LDDaFxaLc0DhLWn63j3asQmmqSfX_Aeg&s",
      price: "₹ 51,000",
      catagory: "Jawellery"
    },
    {
      item:"Daimond Bracelet",
      url:"https://cdn.caratlane.com/media/catalog/product/J/T/JT01688-1YP600_1_lar.jpg",
      price: "₹ 1,40,000",
      catagory: "Jawellery"
    },
    {
      item:"pendants",
      url:"https://www.candere.com/media/jewellery/images/C025358_1.jpg",
      price: "₹ 28,800",
      catagory: "Jawellery"
    },
    {
      item:"Rosegold cufflinks",
      url:"https://m.media-amazon.com/images/I/41ys5Yr6yNL._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_FMpng_BG255%2C255%2C255.jpg",
      price: "₹ 68,000",
      catagory: "Jawellery"
    },
  ];
  const data = arrObj.filter(
    (e) =>
      e.item.toLowerCase().includes(item.toLowerCase()) &&
      (catagory ? e.catagory.toLowerCase() === catagory.toLowerCase() : true)
  );
  return (
    <>
  <center>
    <br /><br /><br />
    <h1 style={{ color: "#333", marginBottom: "20px" }}>Searching Project</h1>
    <br />
    <input
      type="text"
      placeholder="Enter Item"
      onChange={(e) => setItem(e.target.value)}
    />
    <select
      onChange={(e) => setCatagory(e.target.value)}
      style={{padding: "10px",fontSize: "1.1rem",border: "2px solid #ddd",borderRadius: "5px",width: "200px",}}>
      <option value="">All Category</option>
      <option value="Mobile">Mobile</option>
      <option value="Watch">Watch</option>
      <option value="Jawellery">Jawellery</option>
    </select>
    <br />
    <br />
    {data &&
      data.map((e, i) => {
        return (
          <div id="b1" key={i}>
            <img style={{height:"290px",width:"100%",objectFit:"contain",borderRadius:"10px"}} src={e.url}  alt=""/>
            <p style={{fontSize:"30px",paddingTop:"10px"}}>{e.item}</p>
            <p style={{fontSize:"27px",paddingTop:"10px",color:"red"}}>{e.price}</p>
            <p style={{fontSize:"20px",paddingTop:"10px",display:"none"}}>{e.catagory}</p>
          </div>
        );
      })}
  </center>
</>

  );
}
