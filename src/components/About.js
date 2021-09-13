import React from 'react'
import './About.css'
export default function About(props) {
//    const [myStyle, setmyStyle] = useState( {
//         color:'black',
//         backgroundColor:'white',
//     })
       let myStyle = {
           color : props.mode ==='dark'? 'white' : '#042743',
           backgroundColor : props.mode ==='dark'?'rgb(36 74 104)':'white',

       }
 
//   const [btntext, setBtnText] = useState("Enable light Mode")  
//   const toggleStyle = () =>{
//         if(myStyle.color === 'white'){
//             setmyStyle({
                
//                     color:'black',
//                     backgroundColor:'white',
//             })
//             setBtnText("Enable light Mode");
//         }
//         else{
//             setmyStyle({
                
//                 color:'white',
//                 backgroundColor:'black',
//                 border:'2px solid white',
//         })
//         setBtnText("Enable Dark Mode");
//      }
//     }
    return (
        <div className="abcontainer" style = {myStyle}>
            <h1 className="my-3">About Us</h1>
            <div className="accordion my-3" id="accordionExample">
            <div className="accordion-item " >
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    <strong> Analyze Your text </strong>  
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body " style = {myStyle}>
                   TextUtils gives you a way to analyze your text quickly and efficiently.Be it word count, characters count or
                </div>
                </div>
            </div>
            <div className="accordion-item my-3 " style={myStyle}>
                <h2 className="accordion-header" id="headingTwo" style={myStyle}>
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <strong> Free to use </strong> 
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body mx-2 my-2">
                TextUtils is a free characters counter tool that provides instant character count & word count statistics for a given text.
                    TextUtils reports the number of words and characters.Thus it is suitable for writing text with word/character limit.
                </div>
                </div>
            </div>
            <div className="accordion-item my-3" style={myStyle}>
                <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                <strong> Browser Compatible </strong> 
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body mx-2 my-2" style={myStyle}>
                This word counter software works in any web browsers such as chorme,Firefox,Internet Explore, safari, oprea.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, blanditiis.
                </div>
                </div>
            </div>
            </div>
            {/* <div className="container my-3">
             <button onClick={toggleStyle} type="button" className="btn btn-primary">{btntext}</button>
            </div> */}
        </div>
    )
}
