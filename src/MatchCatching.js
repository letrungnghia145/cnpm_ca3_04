import React from 'react'

const MatchCatching = ({name,...props}) => {
    return (
        <div>
            Match-{name}: {props.match.isExact.toString()}
        </div>
    )
}

export default MatchCatching
