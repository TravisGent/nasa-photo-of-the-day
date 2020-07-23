import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from 'styled-components';

const SpaceList = () => {
    const [spaceImage, setSpaceImage] = useState([]);

    const ImageStyle = styled.img`
        width: 64%;
        height: 36%;
        background-position: center;
        padding-top: 2%;
    `;
    const PImageTitle = styled.p`
        font-size: 1.4rem;
        padding-top: 1%;
    `;
    const DivImageExplanation = styled.div`
        width: 60%;
        font-size: 1rem;
        margin: 1% auto;
    `;
    useEffect(() => {
        axios
        .get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
        .then(response => {
            console.log(response);
            setSpaceImage(response.data);
        })
        .catch(error => console.log(error));
    }, []);
    return (
        <div>
            <ImageStyle src={spaceImage.url}></ImageStyle>
            <PImageTitle>{spaceImage.title}{". Image Taken: "}{spaceImage.date}</PImageTitle>
            <DivImageExplanation>{spaceImage.explanation}</DivImageExplanation>
        </div>
    )
};

export default SpaceList;