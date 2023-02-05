import Data from "./Data";
import Card from "./Card";

export default function NewCard(){
    const showCard = Data.map(card =>{
        return (<Card key = {card.id} card = {card}/>)
    })
    return(
        <div className="card-parent">
            {showCard}
        </div>
    )
}

// img ={card.img} rating ={card.rating} ratedBy={card.ratedBy} country ={card.country} title = {card.title} price = {card.price} openSpots ={card.openSpots} location = {card.location}