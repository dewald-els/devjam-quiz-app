import parseHtml from '../../utils/parseHtml';
import { Question } from './QuizQuestion';
const DEFAULT_CATEGORY = 15;
const DEFAULT_DIFFICULTY = 'easy';
const DEFAULT_QUESTION_AMOUNT = 10;
const DEFAULT_QUESTION_TYPE = "multiple";
const API_URL = `https://opentdb.com/api.php?type=${DEFAULT_QUESTION_TYPE}`;

let _difficulty = DEFAULT_DIFFICULTY;
let _questionAmount = DEFAULT_QUESTION_AMOUNT;

export const setAPIDifficulty = (difficulty: string): void => {
  _difficulty = difficulty;
};

export const setAPIQuestionsAmount = (amount: number): void => {
  _questionAmount = amount
}

export async function apiFetchQuestions() {
  try {
    const response = await fetch(API_URL + `&difficulty=${_difficulty}&amount=${_questionAmount}`);
    const json = await response.json();
    
    const questions = json.results.map((question: Question) => {
      return {
        ...question,
        question: parseHtml(question.question),
        correct_answer: parseHtml(question.correct_answer),
        incorrect_answers: [...question.incorrect_answers.map(a => parseHtml(a))]
      } as Question
    });   
    return [null, questions];
  } catch (error: any) {
    return [error.message, []];
  }
}
