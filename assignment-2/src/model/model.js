import { EventEmitter } from "events";

class Model extends EventEmitter {
    constructor() {
        super();
        this.state = {
            questions: [{
                id: 1,
                title: "Java 8",
                body: "What are the new features in Java8?",
                tags: "java,programming"
            }, {
                id: 2,
                title: "Static",
                body: "Difference between static in Java and C++?",
                tags: "java,C++"
            }],
            newQuestion: {
                title: "",
                body: "",
                tags:""
            }
        };
    }

    addQuestion(title, body, tags) {
        this.state = {
            ...this.state,
            questions: this.state.questions.concat([{
                title: title,
                body: body,
                tags: tags
            }])
        };
        this.emit("change", this.state);
    }

    changeNewQuestionProperty(property, value) {
        this.state = {
            ...this.state,
            newQuestion: {
                ...this.state.newQuestion,
                [property]: value
            }
        };
        this.emit("change", this.state);
    }
}

const model = new Model();

export default model;