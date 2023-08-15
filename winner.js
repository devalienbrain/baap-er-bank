const danceButton = document.getElementById('dance');
danceButton.addEventListener('click', function () {
  danceButton.style.display = 'none';

  const imgElement = document.createElement('img');
  imgElement.src = 'dance-img.gif';

  const containerDiv = document.getElementById('container');
  containerDiv.appendChild(imgElement);

  const audioElement = document.createElement('audio');
  audioElement.src = 'music.mp3';
  audioElement.autoplay = true;
  containerDiv.appendChild(audioElement);

  const text = document.createElement('p');
  text.innerText = 'id: baap@bank.com pass: secret';
  containerDiv.appendChild(text);

});