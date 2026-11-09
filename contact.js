// Quote form: validates the fields, then sends the request through Web3Forms
// (https://web3forms.com), which emails it to henkelelectric@sbcglobal.net.
// The access key is public by design; it only lets the form send to the
// inbox it was created for.
var WEB3FORMS_ACCESS_KEY = '8e167f15-e0fb-4f56-a0ef-9b801aa73ee0';
var WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

var form = document.getElementById('quote-form');
var sent = document.getElementById('quote-sent');
var errorBox = document.getElementById('quote-error');
var submitBtn = form.querySelector('.quote-form__submit');
var submitLabel = submitBtn.firstChild; // the "Submit Request" text node
var phone = form.elements.phone;
var email = form.elements.email;

// Phone or email: at least one is required.
function checkContactPair() {
  var hasPhone = phone.value.trim() !== '';
  var hasEmail = email.value.trim() !== '';
  var msg = hasPhone || hasEmail ? '' : 'Please enter a phone number or an email so we can reach you.';
  phone.setCustomValidity(msg);
  email.setCustomValidity(msg);
}
phone.addEventListener('input', checkContactPair);
email.addEventListener('input', checkContactPair);

function value(name) {
  return form.elements[name].value.trim();
}

function showError(message) {
  errorBox.textContent = message;
  errorBox.hidden = false;
}

function setSending(isSending) {
  submitBtn.disabled = isSending;
  submitLabel.nodeValue = isSending ? 'Sending…' : 'Submit Request';
}

form.addEventListener('submit', function (event) {
  event.preventDefault();
  errorBox.hidden = true;

  checkContactPair();
  if (!form.reportValidity()) return;

  if (WEB3FORMS_ACCESS_KEY === 'YOUR_ACCESS_KEY_HERE') {
    showError('This form isn\'t set up yet. Please call us at 847-838-3870.');
    return;
  }

  var name = value('first_name') + ' ' + value('last_name');

  // Each key below becomes a labeled line in the email Henkel Electric receives.
  var payload = {
    access_key: WEB3FORMS_ACCESS_KEY,
    subject: 'New quote request: ' + name + ' (' + value('city') + ')',
    from_name: 'Henkel Electric Website',
    botcheck: form.elements.botcheck.checked,
    'Name': name,
    'City': value('city'),
    'Phone': value('phone') || 'Not provided',
    'Email': value('email') || 'Not provided',
    'Best time to contact': value('best_time'),
    'Job description': value('job_description')
  };
  // Lets Henkel Electric hit "Reply" to answer the customer directly.
  if (value('email')) payload.replyto = value('email');

  setSending(true);

  fetch(WEB3FORMS_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
    body: JSON.stringify(payload)
  })
    .then(function (response) { return response.json(); })
    .then(function (result) {
      if (!result.success) throw new Error(result.message || 'Send failed');
      form.hidden = true;
      sent.hidden = false;
      sent.querySelector('h2').focus();
    })
    .catch(function () {
      showError('Sorry, your request didn\'t go through. Please try again, or call us at 847-838-3870.');
    })
    .then(function () { setSending(false); });
});
