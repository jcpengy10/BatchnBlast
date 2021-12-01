/*
* <license header>
*/

import React, {useEffect, useState} from 'react'
import { Heading, View } from '@adobe/react-spectrum'
import SourceConnections from './SourceConnections'

export const Home = (props) => {
    const {ims} = props;
    console.log("print ims: " , ims);

    const [sourceConnections, setConnections] = useState([]);
    console.log("render", sourceConnections);

    // fetch api
    useEffect( ()=> {
        const makeReq = async () => {
            try {
                const resp = await fetch(
                    "https://platform.adobe.io/data/foundation/catalog/datasets/?limit=5&offset=0",
                    {
                        method: "GET",
                        headers: {
                            authorization: "Bearer " + ims.token,
                            "x-gw-ims-org-id": ims.org,
                            "x-api-key": "acp_ui_platform",
                            "x-sandbox-name": "prod"
                        },
                    }
                );

                const rawresults = await resp.json();

                const resultList = Object.keys(rawresults).map((id) => {
                     rawresults[id].id= id;
                    return rawresults[id];
                });
                setConnections(resultList);
            } catch (e) {
                console.error(e);
            }
        };

        makeReq();

    }, []);

    return (
        <View width='size-6000'>
        <Heading level={1}>Dashboard</Heading>
                <SourceConnections sourceConnections = {sourceConnections}/>
                <button id="button1" onclick>Contacts</button>
                <button id="button2">Automation</button>
        </View>
    );
};
