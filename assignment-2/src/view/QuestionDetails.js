import React from "react";

const QuestionDetails = ({ title, body, tags, author, postDate }) => (
    <div>
        <h2>Question</h2>
        <span>{ title }</span>
        <br />
        <span>{ body }</span>
        <br />
        <span>{ tags }</span>
        <br />
        <span>{ author }</span>
        <br />
        <span>{ postDate }</span>
        <br />
    </div>
);

export default QuestionDetails;