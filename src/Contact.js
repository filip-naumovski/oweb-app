import "./style.css";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

function Contact() {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(() => {
      return true;
    });
    console.log(isLoaded);
  }, []);

  return (
    <motion.div
      className="contact-box"
      initial={{ scale: 1, opacity: 0 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: "1.2" }}
    >
      <h1
        style={{
          textAlign: "left",
          fontFamily: "Verdana",
          marginTop: "5vh",
          marginLeft: "1vw",
        }}
      >
        Contact information:
      </h1>
      <h2
        style={{
          textAlign: "left",
          fontFamily: "Verdana",
          marginTop: "5vh",
          marginLeft: "1vw",
        }}
      >
        Email:{" "}
        <a href="mailto:kti52018@feit.ukim.edu.mk">kti52018@feit.ukim.edu.mk</a>
      </h2>
      <h2
        style={{
          textAlign: "left",
          fontFamily: "Verdana",
          marginTop: "5vh",
          marginLeft: "1vw",
        }}
      >
        Phone: <a href="tel:+38945123456">+389 45/123-456</a>
      </h2>
      <h2
        style={{
          textAlign: "left",
          fontFamily: "Verdana",
          marginTop: "5vh",
          marginLeft: "1vw",
        }}
      >
        Fax: <a href="fax:+38945123456">+389 45/123-456</a>
      </h2>
      <h2
        style={{
          textAlign: "left",
          fontFamily: "Verdana",
          marginTop: "5vh",
          marginLeft: "1vw",
        }}
      >
        Mobile Phone: <a href="tel:+38975123456">+389 75/123-456</a>
      </h2>
    </motion.div>
  );
}

export default Contact;
