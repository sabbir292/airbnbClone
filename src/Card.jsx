import "./index.css"

export default function Card(props){
    let stockText
    if(props.card.openSpots ===0){
        stockText = "SOLD OUT"
    }else if(props.card.location ==='online'){
        stockText = "ONLINE"
    }
    return(
        <div className="card-container">
            <img src={props.card.img} className="card-img"/>

            {stockText && <div className="stock">{stockText}</div>}

            <div className="rating-container">
                <img src="/Star.png" className="star"></img>
                <p className="rating">{props.card.rating}</p>
                <p className="ratedby">({props.card.ratedBy})</p>
                <p>-{props.card.country}</p>
            </div>
            <p className="title">{props.card.title}</p>
            <div className="price-person">
                <p className="price bold">${props.card.price}/ <span>person</span></p>
            </div>
        </div>
    )
}