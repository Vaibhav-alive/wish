import React from 'react'



const Main = (props) => {
  return (
    <>
        <div className="m-page">
          <div className="bg-blur" />
          <div className="logo">
            <img src={props.l} alt="" />
          </div>
          <div className="head">
            {props.ms}
          </div>
          <div className="desc">
            {props.d}
          </div>
          <div className="line" />
        </div>
    </>
  )
}

export default Main