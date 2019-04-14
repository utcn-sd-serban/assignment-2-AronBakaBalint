import React from "react";

const QuestionDetails = ({ title, body, tags, author, postDate }) => (
    <div>
        <h2>Question</h2>
        <span><font size="18"><b>{ title }</b></font></span>
        <br />
        <span><font size="10">{ body }</font></span>
        <br />
        <br />
        <br />
        <span><font size="6" color="blue">{ author }</font></span>
        <br />
        <span class="badge badge-secondary">{ postDate }</span>
        <br />
        <br/>
        <span class="badge badge-secondary"><font size="4">{ tags }</font></span>
        <br />
    </div>
);

export default QuestionDetails;