import React from 'react';


const SourceConnections = ({ sourceConnections }) => {
    return (
        <ul>
            {
                sourceConnections.map(conn=> (
                    <li key={conn.id}>{conn.name}</li>
                ))

            }
        </ul>
    )
};

export default SourceConnections;

