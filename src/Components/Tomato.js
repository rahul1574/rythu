import React from 'react'
import { Link } from 'react-router-dom'
export default function Tomato() {
  return (
    <div>
      <div style={{height:'700px',display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
        <div style={{height:'500px',width:'600px',background:'white',margin:'50px',borderRadius:'10%'}}>
        <img src='/tamato.avif' alt='' style={{height:'500px',width:'600px'}}></img>
        </div>
        <div style={{height:'500px',width:'600px',background:'white',margin:'50px',borderRadius:'10%',alignContent:'center'}}>
            <h3 style={{margin:'20px'}}>RYTHU BAZAR</h3>
            <h1 style={{margin:'20px'}}>TOMATO</h1>
            <p style={{margin:'20px'}}>In stock✅</p>
            <p style={{margin:'20px'}}>Rs.42 per 1kg</p>
            <button style={{margin:'20px',height:'50px',background:'green',width:'500px'}}>Add to cart</button>
            <button style={{margin:'20px',height:'50px',background:'black',width:'500px',color:'white'}}><Link to="/buy">Buy now</Link></button>
            <h4 style={{margin:'20px'}}>Vender Name: Mallaiah</h4>
            <h4 style={{margin:'20px'}}>Item discription</h4>
            <p style={{margin:'20px'}}>Fresh, juicy tomatoes perfect for salads, sauces, and daily cooking. Grown using organic farming practices to ensure top quality and taste. These nutrient-rich tomatoes are packed with vitamins and antioxidants, making them a healthy and flavorful addition to your meals. Enjoy the rich, tangy flavor while supporting sustainable farming.
            </p>

        </div>
      </div>
    </div>
  )
}
