import "./style.css";
import React, { useState, useEffect } from "react";
import portrait from "./resources/portrait.jpg";
import { motion } from "framer-motion";

function Home() {
  useEffect(() => {
    jQuery(function ($) {
      $("#rss-feed").rss("https://www.politico.com/rss/politicopicks.xml", {
        entryTemplate:
          '<div class="newsContent"><a href="{url}" target="_blank"><div>{title}<br/>{teaserImage}</div></a></div>',
        limit: 3,
      });
    });
  }, []);

  return (
    <motion.div
      initial={{ scale: 1, opacity: 1, x: -2000 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: "1.2" }}
    >
      <table>
        <tr>
          <td style={{ alignItems: "left" }}>
            <a href="https://en.wikipedia.org/wiki/Donald_Trump">
              <img
                className="portrait"
                src={portrait}
                alt=""
                style={{ width: "300px", height: "400px" }}
              ></img>
            </a>
          </td>

          <td style={{ alignItems: "left", verticalAlign: "top" }}>
            <h1>
              Donald John Trump (born June 14, 1946) is the 45th and current{" "}
              <a
                style={{ color: "black" }}
                href="https://en.wikipedia.org/wiki/President_of_the_United_States"
              >
                president of the United States
              </a>
              .
            </h1>
            <h2>
              Before entering politics, he was a businessman and television
              personality.
            </h2>
            <p style={{ fontSize: "120%" }}>
              Trump&apos;s political positions have been described as populist,
              protectionist, isolationist, and nationalist. He entered the 2016
              presidential race as a{" "}
              <a
                style={{ color: "black" }}
                href="https://en.wikipedia.org/wiki/Republican_Party_(United_States)"
              >
                Republican
              </a>{" "}
              and was elected in a surprise electoral college victory over{" "}
              <a
                style={{ color: "black" }}
                href="https://en.wikipedia.org/wiki/Democratic_Party_(United_States)"
              >
                Democratic
              </a>{" "}
              nominee{" "}
              <a
                style={{ color: "black" }}
                href="https://en.wikipedia.org/wiki/Hillary_Clinton"
              >
                Hillary Clinton
              </a>{" "}
              while losing the popular vote. He became the oldest first-term
              U.S. president and the first without prior military or government
              service.
            </p>
          </td>
        </tr>
      </table>
      <div id="rss-feed"></div>
    </motion.div>
  );
}

export default Home;
