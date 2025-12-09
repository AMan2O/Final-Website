document.addEventListener('play', function(e) {
  if (e.target.tagName === 'AUDIO') {
    const allAudios = document.querySelectorAll('audio');
    allAudios.forEach(audio => {
      if (audio !== e.target && !audio.paused) {
        audio.pause();
      }
    });
  }
}, true);

console.log('Audio Manager loaded successfully!');

document.addEventListener('play', function(e) {
  if (e.target.tagName === 'AUDIO') {
    console.log('Audio started playing:', e.target.src);
    const allAudios = document.querySelectorAll('audio');
    allAudios.forEach(audio => {
      if (audio !== e.target && !audio.paused) {
        console.log('Pausing other audio:', audio.src);
        audio.pause();
      }
    });
  }
}, true);


document.getElementById("motivation").addEventListener("submit", reasonVal);

function reasonVal(e) {
  e.preventDefault()
  var choice = document.getElementById('choice').value;
  switch(choice){
    case 'angle':
        break;
    case 'stuck':
    case 'qd':
        document.getElementById('response').innerHTML = "Perfect! You'd probably get more out of my recommendations."
        document.getElementById('callback').innerHTML = "had ideas you needed or wanted to work on, "
        break;
    case 'unsure':
        document.getElementById('response').innerHTML = "Fair response, honestly. You should still stick around and see what I mean later, though."
        document.getElementById('callback').innerHTML = "were on the fence about composition, "
        break;
    case 'distraction':
    case 'notcare':
        document.getElementById('response').innerHTML = "Hey, by all means! Hope the following infodumps are still entertaining."
        document.getElementById('callback').innerHTML = "were just killing time, "
        break;
  }
  
}