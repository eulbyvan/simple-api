/*
 * Author : Stu (https://www.eulbyvan.com)
 * Created on : Tue Jan 03 2023 10:58:06
 * Copyright (c) 2023
 */

import { useState } from "react";
import axiosInstance from "../config/api";

export const AddTutorial = () => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const postData = async (e) => {
        e.preventDefault();

        const payload = {
            title, body
        };

        setLoading(true)

        try {
            // throw new Error("error")
            const response = await axiosInstance.post("posts", payload);
            console.log(response);
        } catch (e) {
            setError(e);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container mt-2">
            <h1 className="text-center mb-3">Add Tutorial</h1>
            <form onSubmit={postData}>
                <div className="form-floating mb-3">
                    <input
                        id="floatingInput"
                        className="form-control"
                        placeholder="Enter your title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <label htmlFor="floatingInput">Title</label>
                </div>
                <div className="form-floating mb-3">
                    <input
                        id="floatingInput"
                        className="form-control"
                        placeholder="Enter your body"
                        value={body}
                        onChange={(e) => setBody(e.target.body)}
                    />
                    <label htmlFor="floatingInput">Body</label>
                </div>
                <div className="text-center">
                    <button disabled={loading} className="btn btn-primary">
                        Submit
                    </button>
                </div>
            </form>
            {error && <h2>Data gagal dimasukkan...</h2>}
        </div>
    );
};
