import "./style.css"
import React, { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"

function Blog() {
	const [posts, setPosts] = useState([])

	const nameRef = useRef(null)
	const contentRef = useRef(null)
	const titleRef = useRef(null)

	const [currentPost, setCurrentPost] = useState({
		name: "",
		title: "",
		content: "",
		date: "",
	})

	const leadingZero = (time) => {
		if (time >= 0 && time <= 9) {
			time = "0" + time
		}
		return time
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		const currentDate = new Date()
		let hours = currentDate.getHours().toString()
		hours = leadingZero(hours)
		let seconds = currentDate.getSeconds().toString()
		seconds = leadingZero(seconds)
		const newDateString =
			currentDate.getDate() +
			"/" +
			parseInt(currentDate.getMonth() + 1) +
			"/" +
			currentDate.getFullYear() +
			" " +
			hours +
			":" +
			currentDate.getMinutes() +
			":" +
			seconds

		setPosts((prevState) => {
			const newState = [...prevState]
			const newObj = {
				name: nameRef.current.value,
				title: titleRef.current.value,
				content: contentRef.current.value,
				date: newDateString,
			}
			newState.push(newObj)
			return newState
		})
	}

	const handleChange = (e) => {
		const value = e.target.value
		const name = e.target.name
		setCurrentPost((prevState) => {
			const newState = {
				...prevState,
			}
			newState[name] = value
			return newState
		})
	}

	return (
		<motion.div
			initial={{ scale: 1, opacity: 0 }}
			animate={{ opacity: 1, x: 0 }}
			transition={{ duration: "1.2" }}>
			<div className="blogDiv">
				<div className="formDiv">
					<form onSubmit={(e) => handleSubmit(e)}>
						<input
							ref={nameRef}
							type="text"
							name="name"
							placeholder="Name"
							value={currentPost.name}
							onChange={(e) => handleChange(e)}
						/>
						<input
							ref={titleRef}
							type="text"
							name="title"
							placeholder="Title"
							value={currentPost.title}
							onChange={(e) => handleChange(e)}
						/>
						<textarea
							ref={contentRef}
							name="content"
							placeholder="Share something!"
							value={currentPost.content}
							onChange={(e) => handleChange(e)}
						/>
						<button className="button" type="submit">
							Submit
						</button>
					</form>
				</div>
				<div className="blog">
					{posts.map((post, key) => (
						<div className="blogPost" key={key}>
							<h1>{post.title}</h1>
							<h3>Date: {post.date}</h3>
							<p>{post.content}</p>
							<h3 className="signature">{post.name}</h3>
						</div>
					))}
				</div>
			</div>
		</motion.div>
	)
}

export default Blog
