import './style.css';
import React, { useState, useEffect } from 'react'
import thumbsUp from './thumbs-up.png'
import loading from './loading.gif'
import heart from './heart.png'
import { CSSTransition } from 'react-transition-group'
import { motion } from 'framer-motion'

function Gallery() {
    const [isLoaded, setIsLoaded] = useState(false)
    useEffect(() => {
        setIsLoaded(() => {
            return true;
        })
    }, [])

    const [state, setState] = useState({
        likes1: 0,
        likes2: 0,
        loaded1: false,
        loaded2: false
    });

    const [imageClicked, setImageClicked] = useState({
        image1: false,
        image2: false
    })

    const imageLoaded = imageName => () => {
        if (imageName === "image1") {
            setState((prevState) => {
                const newState = {
                    ...prevState
                }
                newState.loaded1 = true
                return newState
            }
            )
        }
        else if (imageName === "image2") {
            setState((prevState) => {
                const newState = {
                    ...prevState
                }
                newState.loaded2 = true
                return newState
            }
            )
        }
    }

    const handleClickImg = imageName => () => {
        if (imageName === "image1") {
            setImageClicked((prevState) => {
                const newState = {
                    ...prevState
                }
                newState.image1 = true
                return newState
            })
            setState((prevState) => {
                const newState = {
                    ...prevState
                }
                newState.likes1++
                return newState
            })
            setTimeout(() => setImageClicked((prevState) => {
                const newState = {
                    ...prevState
                }
                newState.image1 = false
                return newState
            }), 850)
        }
        else if (imageName === "image2") {
            setImageClicked((prevState) => {
                const newState = {
                    ...prevState
                }
                newState.image2 = true
                return newState
            }
            )
            setState((prevState) => {
                const newState = {
                    ...prevState
                }
                newState.likes2++
                return newState
            })
            setTimeout(() => setImageClicked((prevState) => {
                const newState = {
                    ...prevState
                }
                newState.image2 = false
                return newState
            }), 850)
        }
    }

    const handleClick = (e) => {
        const name = e.target.value;
        if (name === "button1") {
            setState((prevState) => {
                const newState = {
                    ...prevState
                }
                newState.likes1++
                return newState
            }
            )
        }
        else if (name === "button2") {
            setState((prevState) => {
                const newState = {
                    ...prevState
                }
                newState.likes2++
                return newState
            }
            )
        }
    }

    const variants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, scale: 1.1 }
    }

    return (
        <motion.div initial={{ scale: 1, opacity: 1, x: -2000 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: '1.2' }}>
            <table>
                <tbody>
                    <motion.h2 animate={{ scale: 1.5, y: -500, opacity: 0 }} transition={{ duration: '7' }} className="gallery-popup">Try double clicking the pictures!</motion.h2>
                    <img src='https://picsum.photos/seed/picsum/4000' alt="" className="images-inv" onLoad={imageLoaded("image1")} />
                    <img src='https://picsum.photos/seed/pics/4000' alt="" className="images-inv" onLoad={imageLoaded("image2")} />
                    <tr>
                        <td style={{ textAlign: "left" }} className="gallery-element">
                            <div>
                                <div>
                                    {state.loaded1 ? <img src='https://picsum.photos/seed/picsum/4000' alt="" className="images" onDoubleClick={handleClickImg("image1")} /> : <img alt="" src={loading} className="loading" />}
                                    <div>
                                        <img src={heart} alt="" className={imageClicked.image1 ? "heart-showing" : "heart"} />
                                    </div>
                                </div>
                                <div>
                                    <button className="button-img" onClick={e => handleClick(e)} value="button1">Like</button>
                                    <h3 style={{ fontSize: 30 }}><img src={thumbsUp} alt="" width="30px" height="30px"></img> {state.likes1}</h3>
                                </div>
                            </div>
                        </td>

                        <td style={{ textAlign: "left" }} className="gallery-element">
                            <div>
                                <div>
                                    {state.loaded2 ? <img src='https://picsum.photos/seed/pics/4000' alt="" className="images" onDoubleClick={handleClickImg("image2")} /> : <img alt="" src={loading} className="loading" />}
                                    <div>
                                        <img src={heart} alt="" className={imageClicked.image2 ? "heart-showing" : "heart"} />
                                    </div>
                                </div>
                                <div>
                                    <button className="button-img" onClick={e => handleClick(e)} value="button2">Like</button>
                                    <h3 style={{ fontSize: 30 }}><img src={thumbsUp} alt="" width="30px" height="30px"></img> {state.likes2}</h3>
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table >
        </motion.div>
    )
}

export default Gallery;
