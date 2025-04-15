import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap'
import axios from 'axios';

const QuickTransfer = () => {
  const [amount, setAmount] = useState(525.50);
const [repo,setRepo]  =useState([])
  const handleSend = () => {
    // Add send functionality here
    console.log(`Amount sent: ${amount}`);
  };

console.log(repo);
  const getData = () =>{
    axios.get('https://jsonplaceholder.typicode.com/photos')
    .then((res)=>{
    const data= res.data;
    setRepo(data);
  })
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <div className="card" style={{ width: '25rem'  }}>
    <div className="card-body">
      <Carousel>
        {repo.slice(1,5).map((items, index) => (
          <Carousel.Item key={index}>
            <div className="text-center">
              <img 
                
                src={items.url} 
                alt="Livia Bator"
                className="rounded-circle"
                style={{ width: '60px', height: '60px' }}
              />
              <p className="mb-0">Livia Bator</p>
              <p className="text-muted">CEO</p>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
      <div className="input-group mb-3" >
        <span className="input-group-text" id="basic-addon1">Write Amount</span>
        <input 
          type="number"
          className="form-control"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <button onClick={handleSend} className="btn btn-primary btn-sm" style={{marginLeft: '320px'}} >
        Send
      </button>
    </div>
  </div>
  );
};

export default QuickTransfer;
