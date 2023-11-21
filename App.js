import React from "react"
import Header from "./components/Header"
import Card from "./components/Card"
import data from "./data"

export default function App(){
    const cards = data.map(function (item){
        return( 
            <div>
                <Card 
                    key={item.id}
                    item={item}
                />
            </div>
        )
    })
    
    return (
        <div className="app_container">
            <Header />
            {cards}
        </div>
    )
}