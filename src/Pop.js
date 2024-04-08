import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import "./pop_style.css"
const Pop = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
      <button onClick={() => setIsOpen(!isOpen)}>Click me</button>
      <Popup open={isOpen} onClose={() => setIsOpen(false)} >
        <div style={{ display: 'flex', alignItems: 'center' ,gap:'20px'}}>
            <div>
                <img src='images.jpeg' style={{width:'70px'}}/>
            </div>
            <div>
                <h2 style={{height:'10px'}}>Deep sweets</h2>
                <p style={{height:'10px'}}>Palwal City</p>
            </div>
            <div>
            <button style={{ backgroundColor: 'red', border: 'none', width: '30px', height: '30px', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' ,borderRadius:'3px',opacity: 0.6,position:'absolute',right:'50px',top:'30px'}} onClick={() => setIsOpen(!isOpen)}>X</button>
            </div>
        </div>
        <div style={{overflow: 'scroll',height:'30%',marginBottom:'10px'}}>
            <div style={{ display: 'flex', gap: '30px', marginTop: '30px', alignItems: 'center' }}>
                <div>
                    {/* <img src='./nonveg.webp' style={{width:'30px'}}></img> */}
                    <img src='./veg.webp' style={{width:'30px'}}></img>
                </div>
                <div style={{ minWidth: '50px' }}>
                    Samosas
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <button style={{ backgroundColor: 'red', border: 'none', width: '30px', height: '30px', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' ,borderRadius:'3px',opacity: 0.6}}>-</button>
                    <span>4</span>
                    <button style={{ backgroundColor: 'green', border: 'none', width: '30px', height: '30px', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center',borderRadius:'3px',opacity: 0.6 }}>+</button>
                </div>
                <div>
                    Rs. xyz
                </div>
                <div>
                <button style={{ backgroundColor: 'red', border: 'none', width: '50px', height: '30px', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' ,borderRadius:'3px',opacity: 0.6}}>delete</button>
                </div>
            </div>
            <div style={{ display: 'flex', gap: '30px', marginTop: '30px', alignItems: 'center' }}>
                <div>
                    <img src='./nonveg.webp' style={{width:'30px'}}></img>
                    {/* <span style={{width:'5px'}}></span> */}
                </div>
                <div style={{ minWidth: '50px' }}>
                    Samosas
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <button style={{ backgroundColor: 'red', border: 'none', width: '30px', height: '30px', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' ,borderRadius:'3px',opacity: 0.6}}>-</button>
                    <span>4</span>
                    <button style={{ backgroundColor: 'green', border: 'none', width: '30px', height: '30px', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center',borderRadius:'3px',opacity: 0.6 }}>+</button>
                </div>
                <div>
                    Rs. xyz
                </div>
                <div>
                <button style={{ backgroundColor: 'red', border: 'none', width: '50px', height: '30px', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' ,borderRadius:'3px',opacity: 0.6}}>delete</button>
                </div>
            </div>
            <div style={{ display: 'flex', gap: '30px', marginTop: '30px', alignItems: 'center' }}>
                <div>
                    <img src='./veg.webp' style={{width:'30px'}}></img>
                </div>
                <div style={{ minWidth: '50px' }}>
                    Samosas
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <button style={{ backgroundColor: 'red', border: 'none', width: '30px', height: '30px', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' ,borderRadius:'3px',opacity: 0.6}}>-</button>
                    <span>4</span>
                    <button style={{ backgroundColor: 'green', border: 'none', width: '30px', height: '30px', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center',borderRadius:'3px',opacity: 0.6 }}>+</button>
                </div>
                <div>
                    Rs. xyz
                </div>
                <div>
                <button style={{ backgroundColor: 'red', border: 'none', width: '50px', height: '30px', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' ,borderRadius:'3px',opacity: 0.6}}>delete</button>
                </div>
            </div>
            <div style={{ display: 'flex', gap: '30px', marginTop: '30px', alignItems: 'center' }}>
                <div>
                    <img src='./nonveg.webp' style={{width:'30px'}}></img>
                    {/* <span style={{width:'5px'}}></span> */}
                </div>
                <div style={{ minWidth: '50px' }}>
                    Samosas
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <button style={{ backgroundColor: 'red', border: 'none', width: '30px', height: '30px', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' ,borderRadius:'3px',opacity: 0.6}}>-</button>
                    <span>4</span>
                    <button style={{ backgroundColor: 'green', border: 'none', width: '30px', height: '30px', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center',borderRadius:'3px',opacity: 0.6 }}>+</button>
                </div>
                <div>
                    Rs. xyz
                </div>
                <div>
                <button style={{ backgroundColor: 'red', border: 'none', width: '50px', height: '30px', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' ,borderRadius:'3px',opacity: 0.6}}>delete</button>
                </div>
            </div>
        </div>
        

        <div style={{ display: 'flex', alignItems: 'center' ,height:'30px'}}>
            <h4>Bill Details</h4>
        </div>
        <div style={{ display: 'flex', gap:'123px', height:'30px'}}>
            <p>Item Total</p>
            <p>Rs xyz</p>
        </div>
        <div style={{ display: 'flex', gap:'60px',height:'30px'}}>
            <p>Delivery partner fee</p>
            <p>Rs xyz</p>
        </div>
        <hr/>
        <div style={{ display: 'flex', gap:'110px',height:'30px'}}>
            <p>Platform fee</p>
            <p>Rs xyz</p>
        </div>
        <div style={{ display: 'flex', gap:'108px',height:'30px'}}>
            <p>GST charges</p>
            <p>Rs xyz</p>
        </div>
        <hr/>
        <div style={{ display: 'flex', gap:'123px',height:'30px'}}>
            <h3>TO PAY</h3>
            <p>Rs xyz</p>
        </div>
        <div >
        <button style={{ backgroundColor: 'orange', border: 'none', width: '60px', height: '30px', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' ,borderRadius:'3px',opacity: 0.6,position:'absolute',right:'50px'}} onClick={() => setIsOpen(!isOpen)}>Order</button>
        </div>
      </Popup>
    </div>
  );
};

export default Pop;
