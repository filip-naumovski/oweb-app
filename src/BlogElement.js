import "./style.css";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

function BlogElement(prop) {
  return (
    <div className={prop.class}>
      <h1>{prop.post.title}</h1>
      <h3>{prop.post.date}</h3>
      <br></br>
      <p>{prop.post.content}</p>
      <button onClick={() => prop.handleDelete(prop.post.id)}>Delete</button>
      <h3 className="signature">{prop.post.name}</h3>
    </div>
  );
}

export default BlogElement;
