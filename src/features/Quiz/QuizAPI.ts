import parseHtml from '../../utils/parseHtml';
import { Question } from './QuizQuestion';
const DEFAULT_CATEGORY = 15;
const DEFAULT_QUESTION_AMOUNT = 10;
const DEFAULT_QUESTION_TYPE = "multiple";
const API_URL = `https://opentdb.com/api.php?amount=${DEFAULT_QUESTION_AMOUNT}&type=${DEFAULT_QUESTION_TYPE}`;

let _difficulty = "easy";

export const setAPIDifficulty = (difficulty: string) => {
  _difficulty = difficulty;
};

export async function apiFetchQuestions() {
  try {
    const response = await fetch(API_URL + `&difficulty=${_difficulty}`);
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
