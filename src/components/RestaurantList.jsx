import { useState } from "react"

function RestaurantList (){
    const restaurantsDB = [
        {
            id: 1,
            name: 'rest1',
            location: 'location1',
            rating: '1 star'
        },
        {
            id: 2,
            name: 'rest2',
            location: 'location2',
            rating: '2 stars'
        },
        {
            id: 3,
            name: 'rest3',
            location: 'location3',
            rating: '3 stars'
        },
        {
            id: 4,
            name: 'rest4',
            location: 'location4',
            rating: '4 stars'
        },
        {
            id: 5,
            name: 'rest5',
            location: 'location5',
            rating: '5 stars'
        },
    ]
    const [restlist, setRestList] = useState (restaurantsDB)

    return (
    <div data-testid="restaurants-list">
        {restlist.map((id, name, location, rating) => (
            <RestaurantCard key={id} name={name} location={location} rating={rating}/>
        ))}
    </div>
)
}
export default RestaurantList;