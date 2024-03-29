import React from "react";
import RestaurantList from "./RestaurantList";
import { useState } from "react";

export default function RestaurantCard (props){
    return(
        <div className="card">
            <h1 data-testid='restaurant-name'>{props.name}</h1>
            <h2 data-testid='restaurant-location'>{props.location}</h2>
            <h3 data-testid='restaurant-rating'>{props.rating}</h3>
        </div>
    )
}