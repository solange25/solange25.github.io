console.log('It works');
$(document).ready(function () {
  $('.submit').click(function (event) {
    console.log('clicked button');
    let name = $('.name').val();
    let email = $('.email').val();
    let message = $('.message').val();
    let statusElm = $('.status');
    statusElm.empty('');
    if (name.length >= 5) {
      statusElm.append('<div>Name is valid</div>');
    } else {
      event.preventDefault();
      statusElm.append('<div>Name is not valid</div>');
    }
    if (email.length > 5 && email.includes('@') && email.includes('.')) {
      statusElm.append('<div>Email is valid</div>');
    } else {
      event.preventDefault();
      statusElm.append('<div>Email is not valid</div>');
    }
    if (message.length >= 10) {
      statusElm.append('<div>Message is  valid</div>');
    } else {
      event.preventDefault();
      statusElm.append('<div>Message is not valid</div>');
    }
  });
});
