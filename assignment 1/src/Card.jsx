import "./Card.css"
import Price from "./Price"
import image1 from "./assets/image1.jpg"
import image2 from "./assets/image2.jpg"
import image3 from "./assets/image3.jpg"
import image4 from "./assets/image4.jpg"
export default function Card({title,idx}){
let im = [image1,image2,image3,image4]
let decp1 = ["Best Laptop in the World","Best Mobile in the World","Best PS5 in the World","Best FitBit in the World"]
let decp2 = ["With Amazing Features","With Amazing Camera","With Amazing Games","With Amazing Tech"]
let old = ["80,000","50,000","40,000","15,000"]
let neww = ["70,000","40,000","30,000","10,000"]
    return <div className="card">
        <h2>{title}</h2>
        <img src={im[idx]} ></img>
        <p>{decp1[idx]}</p>
        <p>{decp2[idx]}</p>
        <Price oldp={old[idx]} newp={neww[idx]} />
    </div>
}