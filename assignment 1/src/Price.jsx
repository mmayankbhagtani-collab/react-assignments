import "./Card.css"
export default function Price({oldp,newp}){

    return <div className = "sub">
       <span style={{textDecoration : "line-through"}}>{oldp}</span>
       <span>{newp}</span>

    </div>
}