import { useEffect, useState } from "react";
import axiosInstance from "../config/api";

/*
 * Author : Stu (https://www.eulbyvan.com)
 * Created on : Tue Jan 03 2023 09:43:37
 * Copyright (c) 2023
 */

const renderList = (data) => (
    <table>
        <thead>
            <tr>
                <th>id</th>
                <th>title</th>
                <th>description</th>
            </tr>
        </thead>
        <tbody>
            {data?.map((item, index) => (
                <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.body}</td>
                </tr>
            ))}
        </tbody>
    </table>
);

const TutorialList = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const getData = async () => {
        setLoading(true);
        try {
            const response = await axiosInstance.get("posts");
            setData(response?.data);
        } catch (e) {
            setError(e);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    if (error) return <h2>Error...</h2>;
    if (loading) return <h2>Loading...</h2>;
    return renderList(data);
};

export default TutorialList;