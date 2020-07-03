function messageConf(){
  var name = document.querySelector('.name').value;
  var message = document.querySelector('.message').value;
  if (name === '' && message === '') {
    event.preventDefault();
    return alert('Please enter your name, email, and a brief message.');
  } else {
    return alert('Thank you, ' + name + " for your message, I will respond as soon as possible.");
  }
}

// Updated 7/3/2020 12:30pm
