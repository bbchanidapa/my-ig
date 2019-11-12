import React, { useState, useEffect } from 'react'
import { connect, useStore } from 'react-redux'
import axios from 'axios'
import { getImageCat } from './IGActions'
import './IG.css'

const profileData = {
    avatar: "https://purr.objects-us-east-1.dream.io/i/mjzu8336.jpg",
    name: "Rattham Nirattisaikul",
    description: "Hello my name is ABC"
}

const componentImg = (url, index) => {
    return (
        <div key={index}>
            <img src={url} alt="Cat" width="256" />
            {((index + 1) % 3) === 0 && <br />}
        </div>
    )
}

const IGContainer = (props) => {
    const { listImage, isFetching } = useStore().getState().cat
    
    useEffect(() => {
        props.getImageCat()
    }, [])

    return (
        <div>
            <div className="profile-container">
                <div className="profile-image-container">
                    <img className="profile-image" width="100" src={profileData.avatar} />
                </div>
                <h1 className="profile-name">{profileData.name}</h1>
                <p className="profile-description">{profileData.description}</p>
                <button
                    style={{ width: '30%' }}
                    onClick={() => props.getImageCat()}>
                    Click here!
                    </button>
            </div>
            <div className="image-container">
                {!isFetching && listImage.map((imgObject, index) => componentImg(imgObject.file, index))}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        imgData: state.cat.listImage,
        isFetching: state.cat.isFetching,
    }
}

export default connect(mapStateToProps, {
    getImageCat
})(IGContainer)
