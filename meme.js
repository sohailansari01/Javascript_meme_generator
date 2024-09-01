const generateBtn = document.querySelector('.generate-button');
const memeTitle = document.querySelector('.meme-title');
const memeImage = document.querySelector('.meme-image');
const authorOutput = document.querySelector('.author');

function getMeme() {
  const data = null;
  const xhr = new XMLHttpRequest();
  xhr.withCredentials = true;

  xhr.addEventListener('readystatechange', function () {
    if (this.readyState === this.DONE) {
      const response = JSON.parse(this.responseText);
      // Select a random meme from the array of memes
      const randomIndex = Math.floor(Math.random() * response.length);
      const meme = response[randomIndex];
      const { id, image, text } = meme;

      memeTitle.innerText = text || "Programming Meme";
      memeImage.src = image;
      authorOutput.innerText = `Meme ID: ${id}`;
    }
  });

  xhr.open('GET', 'https://programming-memes-images.p.rapidapi.com/v1/memes');
  xhr.setRequestHeader('x-rapidapi-key', 'fe73a01a4fmsh14957bd844f88d6p1e9ba4jsn1526717c90e8');
  xhr.setRequestHeader('x-rapidapi-host', 'programming-memes-images.p.rapidapi.com');

  xhr.send(data);
}

getMeme();

generateBtn.addEventListener('click', () => {
  getMeme();
});
