import { Question } from "../models/Questions";

class SeedService {
    getSeedQuestions = () : Question[] => {
        return  [
            {
                questionText: 'What is the capital of Pakistan?',
                answerOptions: [
                    { answerText: 'Lahore', isCorrect: false },
                    { answerText: 'Karachi', isCorrect: false },
                    { answerText: 'Islamabad', isCorrect: true },
                    { answerText: 'KPK', isCorrect: false },
                ],
            },
            
            {
                questionText: `How many times has England won the men's football World Cup?`,
                answerOptions: [
                    { answerText: 'Once (1966)', isCorrect: true },
                    { answerText: 'Two (1966-2001)', isCorrect: false },
                    { answerText: 'Zero', isCorrect: false },
                    { answerText: 'Three (1966-2001', isCorrect: false },
                ],
            },
            {
                questionText: 'In what year did Tony Blair become British Prime Minister?',
                answerOptions: [
                    { answerText: '1999', isCorrect: false },
                    { answerText: '1998', isCorrect: false },
                    { answerText: '1996', isCorrect: false },
                    { answerText: '1997', isCorrect: true },
                ],
            },
        ];
    };

}

var seedService = new SeedService();

export { seedService };
