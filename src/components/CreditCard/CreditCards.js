import React from 'react'
import "./CreditCards.css"

function CreditCards(props) {
  return (
    <>
        <div className='credit-card'>
            <div className='card-top'>
                <div className='card-info'>
                    <div className='card-balance'>
                        <p className="text-xs">Balance</p>
                        <p className='text-xl'>${props.balance}</p>
                    </div>
                    <img src='./cardchip.png' style={{
                        marginLeft: '65%',
                        height: '34px'
                    }}></img>
                </div>
                <div className='card-info'>
                    <div className='card-holder'>
                        <p className='text-xs text-silver'>CARD HOLDER</p>
                        <p className='text'>{props.customer}</p>
                    </div>
                    <div className='card-validity'>
                        <p className='text-xs text-silver'>VALID THRU</p>
                        <p className='text'>{props.valid}</p>
                    </div>
                </div>
            </div>
            <div className='card-bottom'>
                <div className='card-number'>
                    <p className='text-number'>{props.number}</p>
                        <img src='./cardbrand.png' style={{
                            height: '30px',
                            width: '44px',
                            marginLeft: '30%'
                        }}></img>
                </div>
            </div>
        </div>
    </>
  )
}

export default CreditCards