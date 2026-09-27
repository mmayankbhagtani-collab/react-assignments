import {useState} from 'react';
export default function Assi({addnewinfo}) {
    let [formdata, setformdata] = useState({username: "", email: "", mob:"",tech:"",text:""})
    let handel = (event)=>{
        setformdata((data)=>{
            return {...data, [event.target.name]: event.target.value}
        })
    }
    //validation usestate
    let [isvalid,setvalid] = useState(true)
    let def = (event)=>{
        event.preventDefault()
        if(!formdata.username || !formdata.email || formdata.mob.length != 10 || formdata.text){
            setvalid(false)
            return
        }
        addnewinfo(formdata)
        setvalid(true)
        console.log(formdata)
        setformdata({username: "", email: "", mob:"",tech:"",text:""})
    }
    return<>
        <form onSubmit={def}>
            <input type="text" name='username' placeholder='Enter your name' value={formdata.username} onChange={handel}></input>
            {!isvalid && !formdata.username && <p style={{color:"red"}}>This Field Cannot Be Empty</p>}
            <br></br>
            <br></br>
            <input type="email" name='email' placeholder='Enter your email' value={formdata.email} onChange={handel}></input>
            {!isvalid && !formdata.email && <p style={{color:"red"}}>This Field Cannot Be Empty</p>}
            <br></br>
            <br></br>
            <input type="tel" name='mob' placeholder='Enter your mobile number' value={formdata.mob} onChange={handel}></input>
            {!isvalid && !formdata.mob &&  <p style={{color:"red"}}>This Field Cannot Be Empty</p> || formdata.mob && formdata.mob.length != 10  && <p style={{color:"red"}}>Mobile No. must be 10 Digit</p>}
            <br></br>
            <br></br>
            <input id="mern" type="radio" name='tech' value="MERN Stack" checked={formdata.tech==="MERN Stack"} onChange={handel}></input>
            <label htmlFor="mern">MERN Stack</label>
            <input id="data" type="radio" name='tech' value="Data Analyst" checked={formdata.tech==="Data Analyst"} onChange={handel}></input>
            <label htmlFor="data">Data Analyst</label>
            <input id="aiml" type="radio" name='tech' value="AI/ML" checked={formdata.tech==="AI/ML"} onChange={handel}></input>
            <label htmlFor="aiml">AI/ML</label>
            <br></br>
            <br></br>
            <textarea name='text' placeholder='Enter your message' value={formdata.text} onChange={handel}></textarea>
            {!isvalid && !formdata.text && <p style={{color:"red"}}>This Field Cannot Be Empty</p>}

            <br></br>
            <br></br>
            <button>Register</button>
        </form>
    </>
}