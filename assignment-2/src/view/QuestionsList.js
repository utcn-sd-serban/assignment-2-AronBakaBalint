import React from "react";

const QuestionsList = ({ questions, title, onCreateQuestion, onViewDetails }) => (
    <div>
        <h2>{ title || "Questions" }</h2>
        <table border="1">
            <thead>
                <tr>
                    <th>QuestionID</th>
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
        <button onClick={onCreateQuestion}>Add new Question</button>
    </div>
);

export default QuestionsList;