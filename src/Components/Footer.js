import React from 'react'
// import{Link} from "react-router-dom";
export default function Footer() {
  return (
    <div>
         <div style={{height:'800px',display:'flex',flexDirection:'row',background:'black'}}>
      <div style={{height:'800px'}}>
      <img src='photo.jpg' alt='' style={{height:'800px'}}></img>
      </div>
      <div style={{height:'800px',background:'#fb8500'}}>
        <p style={{height:'800px',margin:'10px'}} ><h1>About Us</h1>

       <h4>Welcome to Rythu Bazar!</h4>

       <h4>We are Akhil Kathi and Rahul Mudavath, two passionate individuals dedicated to supporting our local community through technology. Our mission is to create a seamless platform that connects local buyers and sellers of fresh vegetables and other essential products.</h4>

       <h3>Our Story:</h3>

       <h4>The idea for Rythu Bazar was born out of a desire to make local produce more accessible and to support small-scale farmers and vendors in our community. As residents of Hyderabad, we understand the challenges faced by both buyers and sellers in the traditional market setup. By leveraging our skills in web development, we aim to bridge this gap and create a vibrant, sustainable marketplace for everyone.</h4>

       <h3> Our Vision</h3>

       <h4>Rythu Bazar is more than just a marketplace; it's a community hub. We envision a platform where local vendors can thrive, offering their fresh produce and services directly to buyers who value quality and convenience. Our platform also supports service listings like gardening and delivery services, further enhancing the community's access to essential services.</h4>

       <h3> Our Commitment</h3>

       <h4>We are committed to continuously improving Rythu Bazar to meet the evolving needs of our users. Our goal is to provide a user-friendly, reliable, and secure platform that benefits both buyers and sellers. We believe in the power of community and are excited to contribute to the growth and prosperity of our local market.</h4>

       <h4>Thank you for being a part of Rythu Bazar. Together, we can build a stronger, more connected community.</h4>
       </p>
      </div>
    </div>
    <div style={{height:'500px',background:'#ffbe0b',display:'flex',flexDirection:'row'}}>
      <div style={{}}>
       <div style={{fontSize:'50px',margin:'20px'}}>FAQ</div>
       <p style={{margin:'20px'}}><h3> Check out the most common questions our customers asked and if you Still have questions, Contact our customer support.</h3></p>
      </div>
      <div style={{background:'green',margin:'100px',borderRadius:'5%'}}>
        <p style={{margin:'20px'}}><h3>How much time does it takes for shipping?</h3></p>
        <p style={{margin:'20px'}}><h4>It takes around 4-6 days for your order to get delivered.</h4></p>
        <p style={{margin:'20px'}}><h3>Do you accept the returns and refunds?</h3></p>
        <p style={{margin:'20px'}}><h4>No, We do not accept returns and refunds due to the nature of the product.</h4></p>
        <p style={{margin:'20px'}}><h3>What payment gateways do you accept?</h3></p>
        <p style={{margin:'20px'}}><h4>At the moment we offer Cash On Delivery.</h4></p>
      </div>
    </div>
       <section style={{height:'500px',display:'flex',flexDirection:'row',justifyContent:'space-evenly'}}>
      <div style={{height:'600px',margin:'20px',width:'200px'}}>
        <div><h1>Sign up to newsletter</h1></div>
        <input placeholder='Email id' style={{margin:'30px',height:'50px'}}></input>
      </div>
      <div style={{height:'600px',margin:'20px'}}>
        <ul>
          <h2>Customer Care</h2>
          <h4>FAQ</h4>
          <h4>Shipping Policy</h4>
          <h4>Refund Policy</h4>
          <h4>Cancellation Policy</h4>
          <h4>Privacy Policy</h4>
          <h4>Terms of Service</h4>
          <h4>Contact Information</h4>
        </ul>
      </div>
      <div style={{height:'600px',margin:'20px'}}>  <ul>
          <h2>Contact  info </h2>
          <h4>Trade Name : Rythu bazar (local community market)</h4>
          <h4>Email Support : rythubazar@gmail.com</h4>
          <h4>Customer Care Number :9494171574, 9908227930</h4>
          <h4>Customer Support Timings : 10:30am to 6:30pm</h4>
          <h4>Address: 16-1-486, Saidabad, Hyderabad, Telangana, Pin - 500089</h4>
          <h4>FSSAI : 23623028001252</h4>
        </ul></div>
    </section>
    </div>
  )
}
