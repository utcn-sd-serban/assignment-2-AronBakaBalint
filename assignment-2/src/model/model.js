import { EventEmitter } from "events";

class Model extends EventEmitter {

    constructor() {
        super();
        this.state = {
            questionid: 2,
            answerid: 3,
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
            answers: [{
                answerid: 1,
                questionid: 1,
                text: "I don't know",
                author: "Caitlin",
                postDate: "5/1/2019 10:37 AM"
            },{
                answerid: 2,
                questionid: 1,
                text: "Probably I can help you",
                author: "James",
                postDate: "5/1/2019 11:05 AM"
            },{
                answerid: 3,
                questionid: 1,
                text: "Ask somebody else",
                author: "Tina",
                postDate: "5/1/2019 11:05 AM"
            }],
            newAnswer: {
                anserid: "",
                text: ""
            },
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

    getAnswersByQuestionId(questionId){
        var result = new Array(0);
        var k=0;
        for(var i=0;i < this.state.answers.length;i++){
            if(this.state.answers[i].questionid === questionId){
                result[k++]=(this.state.answers[i]);
            }
        }

        return result;
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
                postDate: this.getCurrentDate()
            }])
        };
        this.emit("change", this.state);
    }

    addAnswer(questionid, text){
        this.state = {
            ...this.state,
            answerid: this.state.answerid+1,
            answers: this.state.answers.concat([{
                questionid: questionid,
                text: text,
                author: "James",
                postDate: this.getCurrentDate()
            }])
        };
        this.emit("change", this.state);
    }

    //splice did not work form me so I wrote my own delete function
    deleteById(answerList, id){
        var resultElements = new Array(0);
        var k=0;
        for(var i=0;i < answerList.length; i++){
            if(answerList[i].answerid !== id){
                resultElements[k++] = answerList[i];
            }
        }

        return resultElements;
    }

    deleteAnswer(id){
        this.state = {
            ...this.state,
            answers: this.deleteById(this.state.answers, id)
        }
        this.emit("change", this.state);
    }

    changeNewAnswerProperty(property, value) {
        this.state = {
            ...this.state,
            newAnswer: {
                ...this.state.newAnswer,
                [property]: value
            }
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