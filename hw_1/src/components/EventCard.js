import './EventCard.css';
function EventCard(props) {
    // const propsBoolean = true;
    return (<div className="EventCard">
        <h2><span className='eventCard_title'>Название: </span> {props.title}</h2>
        <h2><span className='eventCard_date'>Дата: </span>{props.date}</h2>
        <h2><span className='eventCard_location'>Место: </span>{props.location}</h2>
    </div>
    )
}

export default EventCard;