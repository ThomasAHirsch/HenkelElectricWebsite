// PLACEHOLDER: the quote form isn't connected to a sending service yet.
// Submitting only previews the confirmation message; no data leaves the page.
// Replace this handler when a form service is chosen.
var form = document.getElementById('quote-form');
var sent = document.getElementById('quote-sent');

form.addEventListener('submit', function (event) {
  event.preventDefault();
  form.hidden = true;
  sent.hidden = false;
  sent.querySelector('h2').focus();
});
