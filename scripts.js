// @ts-check

const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  try {
    const entries = new FormData(event.target);
    const { dividend, divider } = Object.fromEntries(entries);

    if (!dividend || !divider) {
      result.innerText = 'Division not performed. Both values are required in inputs. Try again.'
    } else if (isNaN(dividend) || isNaN(divider)) {
      result.innerText = 'Something critical went wrong. Please reload the page.';
      throw new Error('Critical Error: NaN Provided');
    } else if (dividend > divider) {
      result.innerText = 'Division not performed. Invalid number provided. Try again.'
      console.error('Invalid Numbers Entered');
    } else {
      result.innerText = Math.floor(dividend / divider);
    }
  } catch (error) {
    console.error(error.stack)
  }
});