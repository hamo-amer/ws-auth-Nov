import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { FormControl, Button } from "react-bootstrap";

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [text, setText] = useState("");

    const addPost = async () => {
        const config = {
            headers: {
                authorization: localStorage.getItem("token"),
            },
        };
        try {
            const res = await axios.post("/post", { text }, config);
            setText("");
            toast.success(res.data.msg);
            fetchPosts();
        } catch (error) {
            toast.error(error.message);
        }
    };
    const fetchPosts = async () => {
        try {
            const res = await axios.get("/post");
            setPosts(res.data.posts);
        } catch (error) {
            toast.error(error.message);
        }
    };
    useEffect(() => {
        fetchPosts();
    }, []);

    return (
        <div>
            <FormControl
                type="text"
                onChange={(e) => setText(e.target.value)}
            />
            <Button onClick={addPost}>add post</Button>
            {posts.map((post) => (
                <div key={post._id}>
                    <h3>{post.userId.username}</h3>
                    <img
                        src={`uploads/${post?.userId.imageUrl}`}
                        alt="avatar"
                        style={{ width: "30px", borderRadius: "50%" }}
                    />
                    <p>{post.text}</p>
                </div>
            ))}
        </div>
    );
};

export default Posts;
