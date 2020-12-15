import "./style.css";
import React, { useState, useEffect, useRef } from "react";
import thumbsUp from "./resources/thumbs-up.png";
import loading from "./resources/loading.svg";
import heart from "./resources/heart.png";
import { motion } from "framer-motion";

function Gallery() {
  const [state, setState] = useState({
    likes1: 0,
    likes2: 0,
    loaded1: false,
    loaded2: false,
  });

  const [imageStrings, setStrings] = useState({
    image1: "",
    image2: "",
  });

  const [imageClicked, setImageClicked] = useState({
    image1: false,
    image2: false,
  });

  const [textForm, setTextForm] = useState({
    form1: "",
    form2: "",
  });

  const [comments, setComments] = useState({
    comments1: [],
    comments2: [],
  });

  const [seed, setSeed] = useState("");

  useEffect(() => {
    setSeed("https://picsum.photos/seed/seed" + Math.random() * 100 + "/4000");
  }, []);

  const inputItem = useRef(null);

  const imageLoaded = (e) => {
    const name = e.target.name;
    setState((prevState) => {
      const newState = {
        ...prevState,
      };
      newState[name] = true;
      return newState;
    });
  };

  const handleClickImg = (e) => {
    const name = e.target.name;
    const likeString = "likes" + name.charAt(name.length - 1);
    setImageClicked((prevState) => {
      const newState = {
        ...prevState,
      };
      newState[name] = true;
      return newState;
    });
    setState((prevState) => {
      const newState = {
        ...prevState,
      };
      newState[likeString]++;
      return newState;
    });
    setTimeout(
      () =>
        setImageClicked((prevState) => {
          const newState = {
            ...prevState,
          };
          newState[name] = false;
          return newState;
        }),
      850
    );
  };

  const handleClick = (e) => {
    const name = e.target.value;
    setState((prevState) => {
      const newState = {
        ...prevState,
      };
      newState[name]++;
      return newState;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const formString = "form" + name.charAt(name.length - 1);
    const commentString = "comments" + name.charAt(name.length - 1);
    setComments((prevState) => {
      const newState = {
        ...prevState,
      };
      newState[commentString].push(textForm[formString]);
      return newState;
    });
    setTextForm((prevState) => {
      const newState = {
        ...prevState,
      };
      newState[formString] = "";
      return newState;
    });
  };

  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setTextForm((prevState) => {
      const newState = {
        ...prevState,
      };
      newState[name] = value;
      return newState;
    });
  };

  const FileSubmit = (e) => {
    e.preventDefault();
    const name = inputItem.current.name;
    const file = e.target[name].files[0];
    console.log("name: " + name);
    console.log("File:" + file);

    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setStrings((prevState) => {
          const newState = {
            ...prevState,
          };
          newState[name] = reader.result;
          return newState;
        });
        setState((prevState) => {
          const newState = {
            ...prevState,
          };
          const loadedString = "loaded" + name.charAt(name.length - 1);
          newState[loadedString] = true;
          return newState;
        });
      };
      console.log(imageStrings.image1);
    }
  };

  return (
    <div>
      <motion.h2
        animate={{ scale: 1.5, y: -500, opacity: 0 }}
        transition={{ duration: "7" }}
        className="gallery-popup"
      >
        Try double clicking the pictures!
      </motion.h2>
      <motion.div
        initial={{ scale: 1, opacity: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: "0.7" }}
      >
        <table className="table">
          <tbody>
            <img
              src={seed}
              alt=""
              className="images-inv"
              onLoad={(e) => imageLoaded(e)}
              name="loaded2"
            />
            <tr>
              <td style={{ textAlign: "left" }} className="gallery-element">
                <div>
                  <div>
                    {state.loaded1 ? (
                      <img
                        src={imageStrings.image1}
                        alt=""
                        className="images"
                        onDoubleClick={(e) => handleClickImg(e)}
                        name="image1"
                      />
                    ) : (
                      <img alt="" src={loading} className="loading" />
                    )}
                    <div>
                      <img
                        src={heart}
                        alt=""
                        className={
                          imageClicked.image1 ? "heart-showing" : "heart"
                        }
                      />
                    </div>
                  </div>
                  <table style={{ tableLayout: "fixed" }}>
                    <tbody>
                      <tr>
                        <td
                          style={{ wordWrap: "break-word", maxWidth: "350px" }}
                        >
                          <div
                            style={{ textAlign: "left", position: "relative" }}
                          >
                            <form onSubmit={(e) => FileSubmit(e)}>
                              <input
                                ref={inputItem}
                                type="file"
                                name="image1"
                                id="file"
                                accept=".jpeg, .png, .jpg"
                              />
                              <input type="submit" />
                            </form>
                            <form
                              name="submit1"
                              onSubmit={(e) => handleSubmit(e)}
                              style={{ marginLeft: "2px" }}
                            >
                              <input
                                type="text"
                                placeholder="Comment"
                                value={textForm.form1}
                                onChange={handleChange}
                                name="form1"
                              />
                              <button type="submit" className="button-comment">
                                Submit
                              </button>
                            </form>
                            <div style={{ maxWidth: "230px" }}>
                              {comments.comments1.map((comment, key) => (
                                <h3 className="comment" key={key}>
                                  {comment}
                                  <hr></hr>
                                </h3>
                              ))}
                            </div>
                          </div>
                        </td>
                        <td>
                          <div
                            style={{ textAlign: "right", marginLeft: "5px" }}
                          >
                            <button
                              className="button-img"
                              onClick={(e) => handleClick(e)}
                              value="likes1"
                            >
                              Like
                            </button>
                            <h3 className="comment" style={{ fontSize: 30 }}>
                              <img
                                src={thumbsUp}
                                alt=""
                                width="30px"
                                height="30px"
                              ></img>{" "}
                              {state.likes1}
                            </h3>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </td>

              <td style={{ textAlign: "left" }} className="gallery-element">
                <div>
                  <div>
                    {state.loaded2 ? (
                      <img
                        src={seed}
                        alt=""
                        className="images"
                        onDoubleClick={(e) => handleClickImg(e)}
                        name="image2"
                      />
                    ) : (
                      <img alt="" src={loading} className="loading" />
                    )}
                    <div>
                      <img
                        src={heart}
                        alt=""
                        className={
                          imageClicked.image2 ? "heart-showing" : "heart"
                        }
                      />
                    </div>
                  </div>
                  <table
                    style={{
                      tableLayout: "fixed",
                    }}
                  >
                    {" "}
                    <tbody>
                      <tr>
                        <td
                          style={{ wordWrap: "break-word", maxWidth: "350px" }}
                        >
                          <div
                            style={{ textAlign: "left", position: "relative" }}
                          >
                            <form
                              name="submit2"
                              onSubmit={(e) => handleSubmit(e)}
                            >
                              <input
                                type="text"
                                placeholder="Comment"
                                value={textForm.form2}
                                onChange={handleChange}
                                name="form2"
                              />
                              <button type="submit" className="button-comment">
                                Submit
                              </button>
                            </form>
                            <div style={{ maxWidth: "230px" }}>
                              {comments.comments2.map((comment, key) => (
                                <h3 className="comment" key={key}>
                                  {comment}
                                  <hr></hr>
                                </h3>
                              ))}
                            </div>
                          </div>
                        </td>
                        <td>
                          <div
                            style={{ textAlign: "right", marginLeft: "5px" }}
                          >
                            <button
                              className="button-img"
                              onClick={(e) => handleClick(e)}
                              value="likes2"
                            >
                              Like
                            </button>
                            <h3 className="comment" style={{ fontSize: 30 }}>
                              <img
                                src={thumbsUp}
                                alt=""
                                width="30px"
                                height="30px"
                              ></img>{" "}
                              {state.likes2}
                            </h3>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </motion.div>
    </div>
  );
}

export default Gallery;
