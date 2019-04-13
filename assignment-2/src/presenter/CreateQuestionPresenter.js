import model from "../model/model";

class CreateQuestionPresenter {

    onCreate() {
        model.addQuestion(model.state.newQuestion.title, model.state.newQuestion.body, model.state.newQuestion.tags);
        model.changeNewQuestionProperty("title", "");
        model.changeNewQuestionProperty("body", "");
        model.changeNewQuestionProperty("tags", "");
        window.location.assign("#/");
    }

    onChange(property, value) {
        model.changeNewQuestionProperty(property, value);
    }

}

const createQuestionPresenter = new CreateQuestionPresenter();

export default createQuestionPresenter;