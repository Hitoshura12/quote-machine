import React from 'react'
import 'font-awesome/css/font-awesome.css'


const Quote =(props)=>{
return(
    <div className="quote-box" id="quote-box">
    <div className="text" id="text">
        <i className="fa fa-quote-left" aria-hidden="true"></i>
      <span>{props.quote.quote}</span>
    </div>

        <div className="author" id="author">
            <span>--{props.quote.author}</span>

        </div>
    </div>
)

}

export default Quote