const DEFAULT_CATEGORY = 15;
const DEFAULT_QUESTION_AMOUNT = 10;
const DEFAULT_QUESTION_TYPE = "multiple";
const API_URL = `https://opentdb.com/api.php?amount=${DEFAULT_QUESTION_AMOUNT}&category=${DEFAULT_CATEGORY}&type=${DEFAULT_QUESTION_TYPE}`;

export async function apiFetchQuestions() {
  try {
    const response = await fetch(API_URL);
    const json = await response.json();
    return [null, json.results];
  } catch (error: any) {
    return [error.message, []];
  }
}
