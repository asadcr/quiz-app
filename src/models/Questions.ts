export interface Question {
    questionText : string;
    answerOptions : Options[]
} 

export interface Options {
    answerText : string;
    isCorrect : boolean;
}