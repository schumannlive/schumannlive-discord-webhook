const download = require('image-downloader');

console.log('Schumann downloader loaded');
console.log('Waiting for pictures...');


downloadFilesSchumann = function() {

  var date = new Date();

  saveimg1();
  saveimg2();
  saveimg3();
  saveimg4();
  saveimg5();
  saveimg6();
  saveimg7();
  saveimg8();
  saveimg9();
  saveimg10();
  saveimg11();

  console.log(date.toLocaleString(), 'Saved schumann files to /media!')

}


setInterval(downloadFilesSchumann, 1000*10)


//save russia1

function saveimg1(){

  const options = {
    url: 'http://sosrff.tsu.ru/new/shm.jpg',
    dest: './media/'                
  }

download.image(options).catch((err) => console.error(err))

}

//Save Russia2

function saveimg2(){

  const options = {
    url: 'http://sosrff.tsu.ru/new/sra.jpg',
    dest: './media/'                
  }

download.image(options).catch((err) => console.error(err))

}

//Save Russia3

function saveimg3(){

  const options = {
    url: 'http://sosrff.tsu.ru/new/srf.jpg',
    dest: './media/'                
  }

download.image(options).catch((err) => console.error(err))

}

//Save russia4

function saveimg4(){

  const options = {
    url: 'http://sosrff.tsu.ru/new/srq.jpg',
    dest: './media/'                
  }

download.image(options).catch((err) => console.error(err))

}

//Save cumiana1

function saveimg5(){

  const options = {
    url: 'http://www.vlf.it/cumiana/last_E-VLF.jpg',
    dest: './media/'                
  }

download.image(options).catch((err) => console.error(err))

}

//Save cumiana2

function saveimg6(){

  const options = {
    url: 'http://www.vlf.it/cumiana/last-geomar.jpg',
    dest: './media/'                
  }

download.image(options).catch((err) => console.error(err))

}

//Save cumiana3

function saveimg7(){

  const options = {
    url: 'http://www.vlf.it/cumiana/last-marconi-multistrip-slow.jpg',
    dest: './media/'                
  }

download.image(options).catch((err) => console.error(err))

}

//Save cumiana4

function saveimg8(){

  const options = {
    url: 'http://www.vlf.it/cumiana/last-plotted.jpg',
    dest: './media/'                
  }

download.image(options).catch((err) => console.error(err))

}

//Save romagna1

function saveimg9(){

  const options = {
    url: 'http://www.uevlf.it/test.jpg',
    dest: './media/'                
  }

download.image(options).catch((err) => console.error(err))

}

//Save romagna2

function saveimg10(){

  const options = {
    url: 'http://www.uevlf.it/last-borehole-sogliano.jpg',
    dest: './media/'                
  }

download.image(options).catch((err) => console.error(err))

}

//Save romagna3

function saveimg11(){

  const options = {
    url: 'http://www.uevlf.it/last-ics101-sogliano-pan.jpg',
    dest: './media/'                
  }

download.image(options).catch((err) => console.error(err))

}


