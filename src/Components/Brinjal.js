import React from 'react'
import{Link} from "react-router-dom";
export default function Brinjal() {
  return (
    <div>
         <div style={{height:'700px',display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
        <div style={{height:'500px',width:'600px',background:'white',margin:'50px',borderRadius:'10%'}}>
        <img src='/brijal.webp' alt='' style={{height:'500px',width:'600px'}}></img>
        </div>
        <div style={{height:'500px',width:'600px',background:'white',margin:'50px',borderRadius:'10%',alignContent:'center'}}>
            <h3 style={{margin:'20px'}}>RYTHU BAZAR</h3>
            <h1 style={{margin:'20px'}}>BRINJAL</h1>
            <p style={{margin:'20px'}}>In stock✅</p>
            <p style={{margin:'20px'}}>Rs.55 per 1kg</p>
            <button style={{margin:'20px',height:'50px',background:'green',width:'500px'}}>Add to cart</button>
            <button style={{margin:'20px',height:'50px',background:'black',width:'500px',color:'white'}}><Link to="/buy">Buy now</Link></button>
            <h4 style={{margin:'20px'}}>Vender Name: Ravi</h4>
            <h4 style={{margin:'20px'}}>Item discription</h4>
            <p style={{margin:'20px'}}>Fresh and tender brinjal, perfect for a variety of dishes including curries, stir-fries, and grilled recipes. Grown using organic methods to ensure superior taste and quality. Rich in vitamins, minerals, and antioxidants, these brinjals add a flavorful and nutritious touch to your meals. Enjoy the delicious and versatile flavor while supporting sustainable farming practices.</p>

        </div>
      </div>
    </div>
  )
}
