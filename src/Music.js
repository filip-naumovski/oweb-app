import "./style.css";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import YouTube from "react-youtube";
import kanye from "./resources/kanye.jpg";
import metallica from "./resources/metallica.png";
import kendrick from "./resources/kendrick.png";

function Music() {
  const [artists, setArtists] = useState({
    ye: false,
    met: false,
    ken: false,
  });

  useEffect(() => {
    document.body.classList.add("music");
    return () => {
      document.body.classList.remove("music");
    };
  });

  const handleClick = (e) => {
    const name = e.target.name;
    setArtists((prevState) => {
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
        Favorite artists:
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
          name="ye"
        >
          Kanye West
        </button>
        {artists["ye"] ? (
          <motion.table
            initial={{ y: 1000 }}
            animate={{ y: 0 }}
            transition={{ duration: "1" }}
          >
            <tr>
              <td>
                <YouTube className="video" videoId="ZmYdIykD5g8" />
              </td>
              <td>
                <div>
                  <a href="https://en.wikipedia.org/wiki/Kanye_West">
                    <img src={kanye} className="musicImages" alt="" />
                  </a>
                </div>
              </td>
              <td className="paragraphTd">
                <div className="paragraph">
                  Kanye Omari West (/ˈkɑːnjeɪ/; born June 8, 1977) is an
                  American rapper, record producer, and fashion designer.
                  Throughout his career, West has been responsible for cultural
                  movements and musical progressions within mainstream hip-hop
                  and popular music at large. Born in Atlanta and raised in
                  Chicago, he was first known as a producer for Roc-A-Fella
                  Records in the early 2000s, producing singles for several
                  mainstream artists. Intent on pursuing a solo career as a
                  rapper, West released his debut album The College Dropout in
                  2004 to critical and commercial success, and founded the
                  record label GOOD Music. In 2020, West said he would be
                  running for president under the Birthday Party.
                </div>
              </td>
            </tr>
          </motion.table>
        ) : null}
        <button
          className="musicButton"
          onClick={(e) => handleClick(e)}
          name="met"
        >
          Metallica
        </button>
        {artists["met"] ? (
          <motion.table
            initial={{ y: 1000 }}
            animate={{ y: 0 }}
            transition={{ duration: "1" }}
          >
            <tr>
              <td>
                <YouTube className="video" videoId="Ckom3gf57Yw" />
              </td>
              <td>
                <div>
                  <a href="https://en.wikipedia.org/wiki/Metallica">
                    <img src={metallica} className="musicImages" alt="" />
                  </a>
                </div>
              </td>
              <td className="paragraphTd">
                <div className="paragraph">
                  Metallica is an American heavy metal band. The band was formed
                  in 1981 in Los Angeles by vocalist/guitarist James Hetfield
                  and drummer Lars Ulrich, and has been based in San Francisco
                  for most of its career. The band's fast tempos, instrumentals
                  and aggressive musicianship made them one of the founding "big
                  four" bands of thrash metal, alongside Megadeth, Anthrax and
                  Slayer. Metallica's current lineup comprises founding members
                  and primary songwriters Hetfield and Ulrich, longtime lead
                  guitarist Kirk Hammett, and bassist Robert Trujillo. Guitarist
                  Dave Mustaine (who went on to form Megadeth after being fired
                  from the band) and bassists Ron McGovney, Cliff Burton (who
                  died in a bus accident in Sweden in 1986) and Jason Newsted
                  are former members of the band.
                </div>
              </td>
            </tr>
          </motion.table>
        ) : null}
        <button
          className="musicButton"
          onClick={(e) => handleClick(e)}
          name="ken"
        >
          Kendrick Lamar
        </button>
        {artists["ken"] ? (
          <motion.table
            initial={{ y: 1000 }}
            animate={{ y: 0 }}
            transition={{ duration: "1" }}
          >
            <tr>
              <td>
                <YouTube className="video" videoId="J87pJrxvJ5E" />
              </td>
              <td>
                <div>
                  <a href="https://en.wikipedia.org/wiki/Kendrick_Lamar">
                    <img src={kendrick} className="musicImages" alt="" />
                  </a>
                </div>
              </td>
              <td className="paragraphTd">
                <div className="paragraph">
                  <p>
                    Kendrick Lamar Duckworth (born June 17, 1987) is an American
                    rapper, songwriter, and record producer. Since his debut
                    into the mainstream with Good Kid, M.A.A.D City (2012),
                    Lamar has been regarded as one of the most influential
                    artists of his generation, as well as one of the greatest
                    rappers and lyricists of all time. Aside from his solo
                    career, he is also known as a member of the hip hop
                    supergroup Black Hippy alongside his Top Dawg Entertainment
                    (TDE) label-mates Ab-Soul, Jay Rock, and Schoolboy Q.
                  </p>
                  <p>
                    Raised in Compton, California, Lamar embarked on his musical
                    career as a teenager under the stage name K-Dot, releasing a
                    mixtape that garnered local attention and led to his signing
                    with indie record label Top Dawg Entertainment.
                  </p>
                </div>
              </td>
            </tr>
          </motion.table>
        ) : null}
      </motion.div>
    </motion.div>
  );
}

export default Music;
