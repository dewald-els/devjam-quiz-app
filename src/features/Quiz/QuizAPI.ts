const DEFAULT_CATEGORY = 15;
const DEFAULT_QUESTION_AMOUNT = 9;
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
    return [null, json.results];
  } catch (error: any) {
    return [error.message, []];
  }
}
