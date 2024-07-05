import React, { useState, useEffect } from "react";
import "../styles/createEditPost.css";
import axios from "axios";
import { useParams } from "react-router-dom";

const CreateEditPost = ({ post, onSave, onCancel }) => {
  const { post_id } = useParams();
  const [content, setContent] = useState("");


  useEffect(() => {
    axios.get("http://localhost:5003/post/get-post/"+post_id).then(res=>{
      setContent(res.data.content)
    })
  }, [post_id])



  const handleSubmit = (e) => {
    const user = JSON.parse(localStorage.getItem("user"));
    e.preventDefault();

    if(post_id){
      axios
      .put("http://localhost:5003/post/edit/"+post_id, {
        user_id: user?._id,
        content,
      })
      .then((res) => {
        window.location.href = "/";
      });
      return;
    }
    axios
      .post("http://localhost:5003/post/add-new-post", {
        user_id: user?._id,
        content,
      })
      .then((res) => {
        window.location.href = "/";
      });
  };

  return (
    <div className="create-edit-post-container">
      <h2 className="create-edit-post-title">
        {post ? "Edit Post" : "Create Post"}
      </h2>
      <form className="create-edit-post-form" onSubmit={handleSubmit}>
        <textarea
          className="post-content-textarea"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="What's on your mind?"
          required
        />
        <div className="create-edit-post-actions">
          <button type="submit" className="save-post-button">
            {post_id ? "Save" : "Create"}
          </button>
          <button type="button" className="cancel-button" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateEditPost;
