import React, {useState} from 'react';
import ViewList from '../components/ViewList';

const ViewBox = () => {
    const[views, setViews] = useState(
        [
            {
                id: 1,
                name: "View more upcoming releases >>>",
                url: "https://www.imdb.com/calendar/?region=gb"

            }
        ]
    )

    return(
        <div className="view-box">
            <ViewList views={views}/>
        </div>
    )
}

export default ViewBox;