import React, { useEffect, useState } from "react";
import axios from "axios";

const SpaceList = () => {

    const [spaceImage, setSpaceImage] = useState([]);
    useEffect(() => {
        axios
        .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
        .then(response => {
            console.log(response);
            setSpaceImage(response.data);
        })
        .catch(error => console.log(error));
    }, []);
    return (<img className="pictureDiv" src={spaceImage.url}></img>)
};

export default SpaceList;