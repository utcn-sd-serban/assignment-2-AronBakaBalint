import { EventEmitter } from "events";

class Model extends EventEmitter {

    constructor() {
        super();
        this.state = {
            questionid: 2,
            searchWord: "",
            questions: [{
                id: 1,
                title: "Java 8",
                body: "What are the new features in Java8?",
                tags: "java,programming",
                author: "John",
                postDate: "4/13/2019 3:26 PM"
            }, {
                id: 2,
                title: "Static",
                body: "Difference between static in Java and C++?",
                tags: "java,C++",
                author: "Kate",
                postDate: "4/13/2019 3:48 PM"
            }],
            newQuestion: {
                title: "",
                body: "",
                tags:""
            }
        };
    }

    getCurrentDate(){
        // get current date
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1; //for January
        var yyyy = today.getFullYear();
        if(dd<10) {
            dd = '0'+dd
        }
        if(mm<10) {
            mm = '0'+mm
        } 
        today = mm + '/' + dd + '/' + yyyy;
        
        return today;
    }


    addQuestion(title, body, tags) {
        
        this.state = {
            ...this.state,
            questionid: this.state.questionid + 1,
            questions: this.state.questions.concat([{
                id: this.state.questionid+1,
                title: title,
                body: body,
                tags: tags,
                author: "Jack",
                postDate: this.getCurrentDate
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

    setSearchWord(value){
        this.state.searchWord = value;
    }

    getSearchWord(){
        return this.state.searchWord;
    }

}

const model = new Model();

export default model;