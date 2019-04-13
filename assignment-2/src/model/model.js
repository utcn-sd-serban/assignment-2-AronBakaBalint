import { EventEmitter } from "events";

class Model extends EventEmitter {
    constructor() {
        super();
        this.state = {
            questions: [{
                id: 1,
                title: "What is new in Java 8",
                body: "Can anyone list some features?",
                tags: "Java,Programming",
                author: "John",
                creationDate: "4/13/2019 9:49 AM"
            }, {
                id: 2,
                title: "Static fields",
                body: "Difference between statitic in java and c++?",
                tags: "c++,static",
                author: "Kate",
                creationDate: "4/13/2019 9:51 AM"
            }],
            newQuestion: {
                id: "",
                title: "",
                body: "",
                tags: "",
                author: "",
                creationDate: ""
            }
        };
    }

    addQuestion(title, body, tags) {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1;
        var yyyy = today.getFullYear();

        if(dd<10) {
            dd = '0'+dd
        } 

        if(mm<10) {
            mm = '0'+mm
        } 

        today = mm + '/' + dd + '/' + yyyy; 

        this.state = {
            ...this.state,
            questions: this.state.questions.concat([{
                id: 3,
                title: title,
                body: body,
                tags: tags,
                author: "Jack",
                creationDate: today
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
