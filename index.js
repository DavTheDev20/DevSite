function messageConf(){
  var name = document.querySelector('.name').value;
  //Name Correction
  var firstLetter = name.slice(0,1);
  var restOfName = name.slice(1, name.length);
  var correctedName = (firstLetter.toUpperCase() + restOfName.toLowerCase());
  //Name Correction
  var message = document.querySelector('.message').value;
  if (name === '' && message === '') {
    event.preventDefault();
    return alert('Please enter your name, email, and a brief message.');
  } else {
    return alert('Thank you, ' + correctedName + " for your message, I will respond as soon as possible.");
  }
}

// Updated 8/24/2020 9:00PM
