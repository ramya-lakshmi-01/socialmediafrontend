import React, { useEffect, useState } from "react";
import "../styles/post.css";
import { useParams } from "react-router-dom";
import axios from "axios";

const Post = ({ username, date, content, onEdit, onDelete, id }) => {
 

  const [showOptions, setShowOptions] = useState(false);

  return (
    <div className="post-container">
      <div className="post-header">
        <div className="post-info">
          <h3 className="post-username">{username}</h3>
          <span className="post-date">{date}</span>
        </div>
        <div className="post-options">
          <button
            className="post-options-button"
            onClick={() => setShowOptions(!showOptions)}
          >
            ...
          </button>
          {showOptions && (
            <div className="post-options-menu">
              <button
                className="post-option-button"
                onClick={() => {
                  window.location.href = "/edit/" + id;
                }}
              >
                <i className="fas fa-edit"></i> Edit
              </button>
              <button className="post-option-button" onClick={onDelete}>
                <i className="fas fa-trash-alt"></i> Delete
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="post-content">{content}</div>
    </div>
  );
};

export default Post;
