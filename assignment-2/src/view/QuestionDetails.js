import React from "react";

const QuestionDetails = ({ title, body, tags }) => (
    <div>
        <h2>Question</h2>
        <span>{ title }</span>
        <br />
        <span>{ body }</span>
        <br />
        <span>{ tags }</span>
        <br />
    </div>
);

export default QuestionDetails;