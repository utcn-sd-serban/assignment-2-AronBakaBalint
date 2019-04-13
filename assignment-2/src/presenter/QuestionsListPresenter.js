//import model from "../model/model";

class QuestionsListPresenter {
    onCreateQuestion() {
        window.location.assign("#/create-question");
    }

    onViewDetails(index) {
        window.location.assign("#/question-details/" + index);
    }
}

const questionsListPresenter = new QuestionsListPresenter();

export default questionsListPresenter;