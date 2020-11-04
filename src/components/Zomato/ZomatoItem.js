import React from 'react';

const ZomatoItem = ( { restaurant, myKey } ) => {


    return(
        <div>

            <h1>
                {myKey}. {restaurant.name}
            </h1>

            <h3>
                {restaurant.cuisines}
            </h3>
        </div>
    )


}


export default ZomatoItem; 