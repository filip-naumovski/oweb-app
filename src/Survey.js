import './style.css';
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

function Survey() {
    const [state, setState] = useState({
        "first name": "",
        "last name": "",
        liked: false,
        rating: 1,
        comment: "",
        gender: ""
    })

    const [submitted, setSubmitted] = useState(false)

    const handleChange = test => (e) => {
        const name = e.target.name
        const type = e.target.type
        const value = e.target.value
        if (type !== "checkbox") {
            setState((prevState) => {
                const newState = {
                    ...prevState
                }
                newState[name] = value
                return newState
            })
            if (name === "rating") {
                setState((prevState) => {
                    const newState = {
                        ...prevState
                    }
                    const tooHigh = newState[name] > 5 ? true : false
                    const tooLow = newState[name] < 1 ? true : false
                    if (tooHigh === true) {
                        newState[name] = 5
                    }
                    if (tooLow === true) {
                        newState[name] = 1
                    }
                    return newState
                })
            }
        }
        else {
            setState((prevState) => {
                const newState = {
                    ...prevState
                }
                newState[name] = !newState[name]
                return newState
            })
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true)
    }

    return (
        <div>
            <h1 className={submitted ? "surveyPopup" : "surveyPopupHidden"}>Thanks for submitting!</h1>
            <motion.div initial={{ scale: 1, opacity: 1, y: 1000 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: '1.2' }}>
                <table className="submitted-table" align="center">
                    {!submitted
                        ?
                        <tr>
                            <td>
                                <h1 style={{ fontSize: 40 }}>Survey:</h1>
                                <form name="submit" className="surveyForm" onSubmit={e => handleSubmit(e)}>
                                    <input type="text" placeholder="First name" value={state.name} onChange={handleChange()} name="first name" required />
                                    <input type="text" placeholder="Last name" value={state.surname} onChange={handleChange()} name="last name" required />
                                    <div className="genderDiv" onChange={handleChange()}>
                                        <div>
                                            <label for="male">Male</label>
                                            <input type="radio" value="Male" name="gender" required />
                                        </div>
                                        <div>
                                            <label for="female">Female</label>
                                            <input type="radio" value="Female" name="gender" required />
                                        </div>
                                    </div>
                                    <div style={{ display: "flex" }}>
                                        <h3>Did you like the site?</h3>
                                        <input style={{ width: '20px', marginTop: '4px' }} id="liked" type="checkbox" value={state.liked} onChange={handleChange()} name="liked" required />
                                    </div>
                                    <div style={{ display: "flex" }}>
                                        <h3>Rating: </h3>
                                        <input style={{ width: '25px' }} type="number" min="1" max="5" value={state.rating} onChange={handleChange()} name="rating" />
                                    </div>
                                    <textarea className="surveyComment" placeholder="Any additional comments?" value={state.comment} onChange={handleChange()} name="comment" />
                                    <button type="submit" className="button-comment-survey" >Submit</button>
                                </form>
                            </td>
                        </tr>
                        :
                        <div>
                            <motion.div initial={{ scale: 1, opacity: 1, y: -1000, zIndex: -999 }} animate={{ opacity: 1, y: 0, zIndex: 1 }} transition={{ duration: '1.2' }}>
                                <tr className="submittedTr">
                                    <td className="submittedTd">
                                        <h1>Name: {state["first name"]}</h1>
                                        <h1>Surname: {state["last name"]}</h1>
                                        <h1>Gender: {state.gender}</h1>
                                        <h1>Rating: {state.rating}</h1>
                                        <h1>Liked: {state.liked ? "Yes" : "No"}</h1>
                                        <h1>Comment: </h1>
                                        <p>{state.comment}</p>
                                    </td>
                                </tr>
                            </motion.div>
                        </div>
                    }
                </table>
            </motion.div>
        </div>
    )
}

export default Survey;
