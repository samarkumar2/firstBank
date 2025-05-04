import React, { useState, useEffect, useCallback } from "react";
import "./Transaction.css"; // Make sure to create a corresponding CSS file for styling
import Card from "react-credit-cards";
import BarCharts from "../../components/barchart/BarChart";
import { Piechart } from "../../components/piechart/Piechart";
import QuickTransfer from "../dashboard/QuickTransfer";
import LineGraph from "../../components/linechart/LineGraph";
import "react-credit-cards/es/styles-compiled.css";
import BarGrpah from "../../components/bar/Bar";
import { useDispatch, useSelector } from "react-redux";
import { addCardDetail } from "../../redux-toolkit/cardSlice";

const Transaction = () => {
  const cardDetail = useSelector((state) => state.detail.cardDetails);
  const [cardData, setCardData] = useState({
    number: "",
    name: "",
    expiry: "",
  });
  const [error, setError] = useState({});
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();

  const handleClose = () => {
    setCardData({ ...cardData, number: "", name: "", expiry: "" });
    setError({});
    setShowModal(false);
  };

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;

    setCardData((user) => ({
      ...user,
      [name]: value,
    }));
    setError((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const addCard = useCallback(() => {
    setShowModal(true);
  },[showModal]);

  const handleSave = () => {
    const newErrors = {};
    if (!cardData.number) {
      newErrors.number = "Card number is required";
    } else if (!/^\d{16}$/.test(cardData.number)) {
      newErrors.number = "Card number must be 16 digits";
    }

    if (!cardData.name) {
      newErrors.name = "Name is required";
    }

    if (!cardData.expiry) {
      newErrors.expiry = "Expiry date is required";
    } else if (!/^\d{2}\/\d{2}$/.test(cardData.expiry)) {
      newErrors.expiry = "Expiry date must be in MM/YY format";
    }

    if (Object.keys(newErrors).length > 0) {
      setError(newErrors);
    } else {
      dispatch(
        addCardDetail({
          ...cardData,
        })
      );
      handleClose();
    }
  };

  return (
    <>
      {showModal && (
        <div
          className="modal fade show"
          style={{ display: "block", margin: "5px" }}
          tabIndex="-1"
          role="dialog"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Add your New Card</h5>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="textBox1"
                      name="number"
                      value={cardData.number}
                      onChange={(e) => handleChange(e)}
                      placeholder="Enter your Card Number"
                    />
                    {error.number && <p className="error">{error.number}</p>}
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="textBox2"
                      name="name"
                      value={cardData.name}
                      onChange={(e) => handleChange(e)}
                      placeholder="Enter Your Name"
                    />
                    {error.name && <p className="error">{error.name}</p>}
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="textBox2"
                      name="expiry"
                      value={cardData.expiry}
                      onChange={(e) => handleChange(e)}
                      placeholder="Enter Expiry Date"
                    />
                    {error.expiry && <p className="error">{error.expiry}</p>}
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={handleClose}
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={handleSave}
                  className="btn btn-primary"
                >
                  Save Card
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="dashboard">
        <div className="row my-card-section">
          <div className="row">
            <div className="col-5 my-card-header">
              <h5>My Cards</h5>
            </div>

            <div className="col-3 see-all-btn">
              <p className="see-all" onClick={() => addCard()}>
                ADD CARD
              </p>
            </div>
            <div className="col-3 ">
              <h5>Recent Transaction</h5>
            </div>
          </div>
          <div className="row">
            <div className="col-8 my-cards">
              {cardDetail?.map((items, index) => (
                <Card
                  key={index}
                  number={items.number}
                  name={items.name}
                  expiry={items.expiry}
                />
              ))}
            </div>
            <div className="col-4">{<BarGrpah />}</div>
          </div>
          <div className="row m-2">
            <div className="row">
              <div className="col-8">
                <h5>Recent Transactions</h5>
              </div>
            </div>

            <div className="row">
              <div className="col-8">
                <BarCharts />
              </div>
              <div className="col-4">
                <Piechart />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Transaction;
