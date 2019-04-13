import React from "react";

const FilterResult = ({ questions, onViewDetails }) => (
    <div>
        <h2>{ "Filter Result" }</h2>
        <table border="1" align="center">
            <thead>
                <tr>
                    <th>Question ID</th>
                    <th>Title</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    questions.map((question, index) => (
                        <tr key={index}>
                            <td>{question.id}</td>
                            <td>{question.title}</td>
                            <td><button onClick={() => onViewDetails(index)}>View Details</button></td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
);

export default FilterResult;