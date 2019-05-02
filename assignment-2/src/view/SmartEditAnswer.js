import React, { Component } from "react";
import EditAnswer from "../view/EditAnswer";
import createQuestionPresenter from "../presenter/createQuestionPresenter";
import model from "../model/model";

export default class SmartCreateQuestion extends Component {

    render() {
        return (
            <EditAnswer
                onEdit={createQuestionPresenter.onAnswerEditFinished}
                onFinish={model.editAnswer}
            />
        );
    }
}