import { Component } from "react";
import { Question } from "../models/Questions";
import { seedService } from "../services/SeedService";
import "../quiz.css"

interface QuizState {
    questions: Question[];
    currentQuestionIndex: number;
    hasQuestionnaireEnded: boolean;
    score: number;
}

export default class Quiz extends Component<{}, QuizState> {

    constructor(props: {}) {
        super(props);

        this.state = {
            questions: [],
            currentQuestionIndex: 0,
            hasQuestionnaireEnded: false,
            score: 0,
        };
    }

    async componentDidMount() {

        var questions = await seedService.getSeedQuestions();

        this.setState({ questions: questions })
    }

    onAnswerOptionClick = (isCorrect: boolean) => {

        if (isCorrect) {
            this.setState({ score: this.state.score + 1 })
        }

        const nextQuestion = this.state.currentQuestionIndex + 1;

        if (nextQuestion < this.state.questions.length) {
            this.setState({ currentQuestionIndex: nextQuestion })
        } else {
            this.setState({ hasQuestionnaireEnded: true })
        }
    };


    onStateClear = () => {
        this.setState({ hasQuestionnaireEnded: false, currentQuestionIndex: 0, score: 0 })
    }

    renderQuestion = () => {
        let currentQuestion = this.state.questions[this.state.currentQuestionIndex];
        if(currentQuestion == undefined) {
            return "";
        }
        
        return <>
            <div className='question-section'>
                <div className='question-count'>
                    <span>Question {this.state.currentQuestionIndex + 1}</span>/{this.state.questions.length}
                </div>
                <div className='question-text'>{currentQuestion?.questionText}</div>
            </div>
            <div className='answer-section'>
                {currentQuestion?.answerOptions.map((answerOption, index) => (
                    <button key={index} onClick={() => this.onAnswerOptionClick(answerOption?.isCorrect)}>{answerOption?.answerText}</button>
                ))}
            </div>
        </>
    }

    renderQuestionnaireEnded = () => {
        return <>
            <div className='score-section'>
                You scored {this.state.score} out of {this.state.questions.length}

            </div>
            <button className="btn btn-sm-info text-white w-25 h-25" onClick={() => this.onStateClear()}>Back</button>
        </>;
    }

    render() {
        return (
            <div className='app mt-5'>
                {this.state.hasQuestionnaireEnded ? (this.renderQuestionnaireEnded()): (this.renderQuestion())}
            </div>
        );
    }
}
