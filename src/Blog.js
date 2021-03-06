import "./style.css";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import BlogElement from "./BlogElement";

function Blog() {
  const [posts, setPosts] = useState([]);
  const currentDate = new Date(Date.now());

  useEffect(() => {
    fetch("http://localhost:5000/api/BlogPosts", {
      mode: "cors",
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setPosts(data);
      })
      .then(() => {
        setPosts((prevState) => {
          const newState = [...prevState];
          newState.forEach((element) => {
            const newDate = new Date(element.date + "Z");
            element.date = newDate.toString();
          });
          return newState;
        });
      });
  }, []);

  const [currentPost, setCurrentPost] = useState({
    name: "",
    title: "",
    content: "",
    date: "",
    id: 0,
  });

  const [clicked, setClicked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:5000/api/BlogPosts", {
      mode: "cors",
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: currentPost.name,
        title: currentPost.title,
        content: currentPost.content,
        date: currentDate.toISOString(),
      }),
    }).then(() => {
      setPosts((prevState) => {
        const newState = [...prevState];
        const newId =
          newState.length != 0 ? newState[newState.length - 1].id + 1 : 1;
        const newObj = {
          name: currentPost.name,
          title: currentPost.title,
          content: currentPost.content,
          date: currentDate.toString(),
          id: newId,
        };
        newState.push(newObj);
        return newState;
      });
      setClicked(true);
      setTimeout(() => {
        setClicked(false);
      }, 100);
    });
  };

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setCurrentPost((prevState) => {
      const newState = {
        ...prevState,
      };
      newState[name] = value;
      return newState;
    });
  };

  const handleDelete = (cId) => {
    const id = cId;
    console.log(id);
    fetch("http://localhost:5000/api/BlogPosts/" + id, {
      mode: "cors",
      method: "DELETE",
    }).then(() => {
      setPosts((prevState) => {
        const newState = [...prevState];
        const indexToRemove = newState.findIndex((x) => x.id === id);
        newState.splice(indexToRemove, 1);
        console.log(newState);
        return newState;
      });
      setClicked(true);
      setTimeout(() => {
        setClicked(false);
      }, 100);
    });
  };

  return (
    <motion.div
      initial={{ scale: 1, opacity: 0 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: "1.2" }}
    >
      <h1
        className="blogHeader"
        style={{
          fontSize: "60px",
          textAlign: "center",
          fontFamily: "sans-serif",
        }}
      >
        BLOG
      </h1>
      <div className="blogDiv">
        <div className="formDiv">
          <form onSubmit={(e) => handleSubmit(e)}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={currentPost.name}
              onChange={(e) => handleChange(e)}
            />
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={currentPost.title}
              onChange={(e) => handleChange(e)}
            />
            <textarea
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
          {posts.map((post, key) => {
            return (
              <BlogElement
                key={post.id}
                className={clicked ? "blogPostClicked" : "blogPost"}
                post={post}
                handleDelete={handleDelete}
              />
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}

export default Blog;
