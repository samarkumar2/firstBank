import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ModalComponent = (props) => {
  const [showModal, setShowModal] = useState(props.flag);

  const handleClose = () => setShowModal(!props.flag);

  return (
    <div>
  
    </div>
  );
};

export default ModalComponent;
