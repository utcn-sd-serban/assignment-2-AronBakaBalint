import React from "react";

const QuestionsList = ({ questions, onCreateQuestion, onViewDetails, onFilterByTitle, onFilterByTag }) => (
    <div>
        <h2>{ "Stack Overflow" }</h2>
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
        <button onClick={onCreateQuestion}>Add new Question</button>
        <br/>
        <hr></hr>
        <input/>
        <button onClick={onFilterByTitle}>Filter By Title</button>
        <button onClick={onFilterByTag}>Filter By Tag</button>
    </div>
);

export default QuestionsList;