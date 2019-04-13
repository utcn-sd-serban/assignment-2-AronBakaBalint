import React from "react";

const QuestionDetails = ({ title, body, tags, author, creationDate }) => (
    <div>
        <h2>Question</h2>
        <label>Title: </label>
        <span>{ title }</span>
        <br />
        <label>Text: </label>
        <span>{ body }</span>
        <br />
        <label>Tags: </label>
        <span>{ tags }</span>
        <br />
        <label>Author: </label>
        <span>{ author }</span>
        <br />
        <label>Creation Date: </label>
        <span>{ creationDate }</span>
        <br />
    </div>
);

export default QuestionDetails;