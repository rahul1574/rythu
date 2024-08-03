import React from 'react'
import{Link} from "react-router-dom";
export default function Lady() {
  return (
    <div>
    <div style={{height:'700px',display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
   <div style={{height:'500px',width:'600px',background:'white',margin:'50px',borderRadius:'10%'}}>
   <img src='/llady.webp' alt='' style={{height:'500px',width:'600px'}}></img>
   </div>
   <div style={{height:'500px',width:'600px',background:'white',margin:'50px',borderRadius:'10%',alignContent:'center'}}>
       <h3 style={{margin:'20px'}}>RYTHU BAZAR</h3>
       <h1 style={{margin:'20px'}}>LADY'S FINGER</h1>
       <p style={{margin:'20px'}}>In stock✅</p>
       <p style={{margin:'20px'}}>Rs.32 per 1kg</p>
       <button style={{margin:'20px',height:'50px',background:'green',width:'500px'}}>Add to cart</button>
       <button style={{margin:'20px',height:'50px',background:'black',width:'500px',color:'white'}}><Link to="/buy">Buy now</Link></button>
       <h4 style={{margin:'20px'}}>Vender Name: Ramesh</h4>
       <h4 style={{margin:'20px'}}>Item discription</h4>
       <p style={{margin:'20px'}}>Crisp and fresh lady's finger, ideal for curries, stir-fries, and salads. Grown with care using organic practices to deliver the best quality and flavor. Packed with vitamins, minerals, and fiber, this vegetable adds a nutritious and delicious touch to your meals. Enjoy the versatile flavor while supporting sustainable farming practices.</p>

   </div>
 </div>
</div>
  )
}
