import React from 'react'
import{Link} from "react-router-dom";
export default function Log() {
  return (
    <div>
        <div id='start'style={{height:'150px',display:'flex',flexDirection:'column',justifyContent:'space-evenly',alignItems:'center',background:'#fb8500'}}>
      <div style={{display:'flex',flexDirection:'column',justifyContent:'space-around',alignItems:'center'}}>
       <h1>RYTHU BAZAR</h1>
       <h3>(local community market)</h3>
      </div>
    </div>
    <div style={{background:'#283618',height:'50px',color:'black',display:'flex',flexDirection:'row',justifyContent:'space-evenly'}}>
      <p style={{color:'white'}}><Link to='/start' style={{color:'white'}}>Home</Link></p>
      <div style={{color:'white',display:'flex',flexDirection:'row'}}>
        <p style={{margin:'10px',fontSize:'20px'}}>Area wise:</p>
        <p style={{margin:'10px'}}><Link to="/location1" style={{color:'white'}}><p>Saroornagar</p></Link></p>
        <p style={{margin:'10px'}} ><Link to="/location2"  style={{color:'white'}}><p>Malakpet</p></Link></p>
        <p style={{margin:'10px'}}><Link to="/location3"  style={{color:'white'}}><p>Saidabad</p></Link></p>
        <p style={{margin:'10px'}}><Link to="/location4"  style={{color:'white'}}><p>Champapet</p></Link></p>
        <p style={{margin:'10px'}}><Link to="/location5"  style={{color:'white'}}><p>Karmanghat</p></Link></p>
      </div>
      <div style={{color:'white',display:'flex',flexDirection:'row'}}>
        <p style={{margin:'10px',fontSize:'20px'}}>Vendor list:</p>
        <p style={{margin:'10px'}}><Link to="/tomato" style={{color:'white'}}><p>Malliah</p></Link></p>
        <p style={{margin:'10px'}} ><Link to="/brijal"  style={{color:'white'}}><p>Ravi</p></Link></p>
        <p style={{margin:'10px'}}><Link to="/lady"  style={{color:'white'}}><p>ramesh</p></Link></p>
      </div>
      {/* <select>
        <option>vegetables wise</option>
      </select>
      <select>
        <option>complaints/suggestons</option>
      </select> */}
    </div>
    </div>
  )
}
