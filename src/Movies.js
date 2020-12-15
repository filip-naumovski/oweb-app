import "./style.css";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import YouTube from "react-youtube";
import Inception from "./resources/inception.jpg";
import Revenge from "./resources/revenge.jpg";
import Goodfellas from "./resources/goodfellas.jpg";

function Movies() {
  const [movies, setMovies] = useState({
    inc: false,
    rev: false,
    good: false,
  });

  useEffect(() => {
    document.body.classList.add("movies");
    return () => {
      document.body.classList.remove("movies");
    };
  });

  const handleClick = (e) => {
    const name = e.target.name;
    setMovies((prevState) => {
      const newState = {
        ...prevState,
      };
      for (let prop in newState) {
        newState[prop] = false;
      }
      newState[name] = true;
      return newState;
    });
  };

  return (
    <motion.div
      initial={{ scale: 1, opacity: 0, y: 2000 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: "1.2" }}
      className="musicDiv"
    >
      <h1
        style={{
          textAlign: "center",
          fontFamily: "Verdana",
          marginTop: "2vh",
          fontSize: 40,
        }}
        className="comment"
      >
        Favorite movies:
      </h1>
      <motion.div
        className="verticalMenu"
        initial={{ y: 1000 }}
        animate={{ y: 0 }}
        transition={{ duration: "1" }}
      >
        <button
          className="musicButton"
          onClick={(e) => handleClick(e)}
          name="inc"
        >
          Inception
        </button>
        {movies["inc"] ? (
          <motion.table
            initial={{ y: 1000 }}
            animate={{ y: 0 }}
            transition={{ duration: "1" }}
          >
            <tr>
              <td>
                <YouTube className="video" videoId="YoHD9XEInc0" />
              </td>
              <td>
                <div>
                  <a href="https://www.imdb.com/title/tt1375666/">
                    <img src={Inception} className="musicImages" alt="" />
                  </a>
                </div>
              </td>
              <td className="paragraphTd">
                <div className="paragraph">
                  Inception is a 2010 science fiction action film written and
                  directed by Christopher Nolan, who also produced the film with
                  his wife, Emma Thomas. The film stars Leonardo DiCaprio as a
                  professional thief who steals information by infiltrating the
                  subconscious of his targets. He is offered a chance to have
                  his criminal history erased as payment for the implantation of
                  another person's idea into a target's subconscious. The
                  ensemble cast includes Ken Watanabe, Joseph Gordon-Levitt,
                  Marion Cotillard, Ellen Page, Tom Hardy, Dileep Rao, Cillian
                  Murphy, Tom Berenger, and Michael Caine.
                </div>
              </td>
            </tr>
          </motion.table>
        ) : null}
        <button
          className="musicButton"
          onClick={(e) => handleClick(e)}
          name="rev"
        >
          Star Wars Episode III: Revenge of the Sith
        </button>
        {movies["rev"] ? (
          <motion.table
            initial={{ y: 1000 }}
            animate={{ y: 0 }}
            transition={{ duration: "1" }}
          >
            <tr>
              <td>
                <YouTube className="video" videoId="5UnjrG_N8hU" />
              </td>
              <td>
                <div>
                  <a href="https://www.imdb.com/title/tt0121766/">
                    <img src={Revenge} className="musicImages" alt="" />
                  </a>
                </div>
              </td>
              <td className="paragraphTd">
                <div className="paragraph">
                  Star Wars: Episode III – Revenge of the Sith is a 2005
                  American epic space-opera film written and directed by George
                  Lucas. It stars Ewan McGregor, Natalie Portman, Hayden
                  Christensen, Ian McDiarmid, Samuel L. Jackson, Christopher
                  Lee, Anthony Daniels, Kenny Baker and Frank Oz. It is the
                  final installment in the Star Wars prequel trilogy, the third
                  chapter in the Skywalker saga and the sixth Star Wars film to
                  be released overall.
                </div>
              </td>
            </tr>
          </motion.table>
        ) : null}
        <button
          className="musicButton"
          onClick={(e) => handleClick(e)}
          name="good"
        >
          Goodfellas
        </button>
        {movies["good"] ? (
          <motion.table
            initial={{ y: 1000 }}
            animate={{ y: 0 }}
            transition={{ duration: "1" }}
          >
            <tr>
              <td>
                <YouTube className="video" videoId="2ilzidi_J8Q" />
              </td>
              <td>
                <div>
                  <a href="https://www.imdb.com/title/tt0099685/">
                    <img className="musicImages" src={Goodfellas} alt="" />
                  </a>
                </div>
              </td>
              <td className="paragraphTd">
                <div className="paragraph">
                  Goodfellas (stylized GoodFellas) is a 1990 American crime film
                  directed by Martin Scorsese, produced by Irwin Winkler and
                  distributed by Warner Bros. It is an adaptation of the 1985
                  non-fiction book Wiseguy by Nicholas Pileggi, who co-wrote the
                  screenplay with Scorsese. The film stars Robert De Niro, Ray
                  Liotta, Joe Pesci, Lorraine Bracco and Paul Sorvino. It
                  narrates the rise and fall of mob associate Henry Hill and his
                  friends and family from 1955 to 1980.
                </div>
              </td>
            </tr>
          </motion.table>
        ) : null}
      </motion.div>
    </motion.div>
  );
}

export default Movies;
