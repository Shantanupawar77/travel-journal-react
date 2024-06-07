import React from "react"
import ReactDOM from "react-dom"
import "../index.css"
import logo from "../logo.svg"
import sample from "../sample.jpg"

// export default function Card(){
//     return (
//         <div className="parent">
//             <div className="card">
//                 <div>
//                     <img src={image} alt="" width={"125px"} height={"168px"} />
//                 </div>
//                 <div>  
//                     <img src={logo} alt="" className="location-logo" />
//                     <p>Japan View on google</p>
//                 </div>
//                  <div className="heading">
//                     <h2>Mount Fuji</h2>
//                 </div>
//                 <div className="date-format">
//                     <p><b>12 Jan, 2021-24 Jan, 2021</b></p>
//                 </div>
//                 <div className="card-desc">
//                     <p>Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.</p>

//                 </div>
//                 </div>
//             <hr />
//             <div className="card">
//                 hello i am card
//             </div>
//             <hr />
//         </div>
        
        
//     )
// }

export default function Card(props){
    return (
        <div className="parent">
            <div className="card">
                <div>
                    <img src={props.imageUrl} alt="" width={"125px"} height={"168px"} />
                </div>
                <div className="right-side">
                    <div>
                        {/* <span className="logo-location">
                            <img src={logo} alt="" />
                        </span> */}
                        <p>{props.location} View on google</p>
                    </div>
                    <div className="heading">
                        <h2>{props.title}</h2>

                    </div>
                    <div className="date-format">
                        <p><b>{props.startDate}-{props.endDate}</b></p>
                    </div>
                    <div className="card-desc">
                        <p>{props.description}</p>
                    </div>

                </div>
                
                </div>
            
            <hr />
        </div>
        
        
    )
}