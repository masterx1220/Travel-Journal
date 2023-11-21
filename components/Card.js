import React from "react"

export default function Card(props){
    {console.log(props)}
    return(
        <main>
            <section>
                <div className="wonder_container">
                    <div className="location_photo_container">
                        <img className="location_photo" src={props.item.imageUrl} />
                    </div>
                    
                    <div>
                        <div className="location_geographics">
                            <img src="./images/location.jpg" className="location_pin" />
                            <p className="located_where">{props.item.location}</p>
                            <a href={props.item.googleMapsUrl} target="_blank">View on Google Earth</a>
                        </div>
                        
                        <div className="title_holder">
                            <h1>{props.item.title}</h1>
                        </div>
                        
                        <div className="location_information">
                            <h4>{props.item.startDate} - {props.item.endDate}</h4>
                            <p>{props.item.description}</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}