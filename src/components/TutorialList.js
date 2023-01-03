/*
 * Author : Stu (https://www.eulbyvan.com)
 * Created on : Tue Jan 03 2023 09:43:37
 * Copyright (c) 2023
 */

const TutorialList = ({ data }) => (
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
                    <td>{item.description}</td>
                </tr>
            ))}
        </tbody>
    </table>
);

export default TutorialList;