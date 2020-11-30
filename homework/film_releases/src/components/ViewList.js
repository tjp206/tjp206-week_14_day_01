import React from 'react';
import View from './View.js'

const ViewList = ({views}) => {
    const viewNodes = views.map(view => {
        return(
            <View key={view.id}><a href={view.url}>{view.name}</a></View>
        )
    }
    )

    return(
        <div className="view-list">
            {viewNodes}
        </div>
    )
}

export default ViewList;