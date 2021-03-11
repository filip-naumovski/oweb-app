import "./style.css";
import React, { useState, useEffect, useRef } from "react";

const BlogElement = ({
  post: { date, title, content, id, name },
  className,
  handleDelete,
}) => (
  <div className={className}>
    <h1>{title}</h1>
    <h3>{date}</h3>
    <br />
    <p>{content}</p>
    <button onClick={() => handleDelete(id)}>Delete</button>
    <h3 className="signature">{name}</h3>
  </div>
);

export default BlogElement;
