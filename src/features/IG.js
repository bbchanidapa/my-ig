import React from 'react'
import axios from 'axios'
import './IG.css'

const data = [
    {"file":"https://purr.objects-us-east-1.dream.io/i/mjzu8336.jpg"},
    {"file":"https://purr.objects-us-east-1.dream.io/i/mjzu8336.jpg"},
    {"file":"https://purr.objects-us-east-1.dream.io/i/mjzu8336.jpg"},
    {"file":"https://purr.objects-us-east-1.dream.io/i/mjzu8336.jpg"},
    {"file":"https://purr.objects-us-east-1.dream.io/i/mjzu8336.jpg"},
    {"file":"https://purr.objects-us-east-1.dream.io/i/mjzu8336.jpg"},
    {"file":"https://purr.objects-us-east-1.dream.io/i/mjzu8336.jpg"},
    {"file":"https://purr.objects-us-east-1.dream.io/i/mjzu8336.jpg"},
    {"file":"https://purr.objects-us-east-1.dream.io/i/mjzu8336.jpg"},
]

const profileData = {
    avatar: "https://purr.objects-us-east-1.dream.io/i/mjzu8336.jpg",
    name:   "Rattham Nirattisaikul",
    description:    "Hello my name is ABC"  
}

const componentImg = (url, index)=> {
    return (
        <div style={{ display: "inline"}}>
            <img key={index} src={url} alt="Cat" width="256" />
            { ((index + 1) % 3) === 0 && <br/> }
        </div>
    )
}

const IG = () => {
    return (
        <div>
            <div className="profile-container">
                <div className="profile-image-container">
                    <img className="profile-image" width="100" src={profileData.avatar} />
                </div>
                <h1 className="profile-name">{profileData.name}</h1>
                <p className="profile-description">{profileData.description}</p>
            </div>
            <div className="image-container">
                { data.map( (imgObject, index) => componentImg(imgObject.file, index) ) }
            </div>
        </div>
    )
}

export default IG