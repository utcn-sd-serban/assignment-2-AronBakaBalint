import model from "../model/model";

class CreateQuestionPresenter {

    onCreateQuestion() {
        model.addQuestion(model.state.newQuestion.title, model.state.newQuestion.body, model.state.newQuestion.tags);
        model.changeNewQuestionProperty("title", "");
        model.changeNewQuestionProperty("body", "");
        model.changeNewQuestionProperty("tags","");
        window.location.assign("#/question-list");
    }

    onCreateAnswer(){
        //window.location.assign("#/question-list");
        model.addAnswer(model.state.newAnswer.answerid, model.state.newAnswer.text); 
        model.changeNewAnswerProperty("answerid","");
        model.changeNewQuestionProperty("text", "");
    }

    onQuestionChange(property, value) {
        model.changeNewQuestionProperty(property, value);
    }

    onAnswerChange(property, value) {
        model.changeNewAnswerProperty(property, value);
    }

}

const createQuestionPresenter = new CreateQuestionPresenter();

export default createQuestionPresenter;