
const apiKey=`AIzaSyBOU7bEt3nP79KZzpNhUR0DUkMYEJqWNLY`;

let search = async ()=>{
   let query=document.getElementById('query').value;
   let x = await getData(query,apiKey); 
   let data=x.items;
   appendFunc(data);
}

let getData = async(query,apiKey)=> {
    const url=`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=${apiKey}`;
    let res = await fetch(url);
    let data = await res.json(); //This is our required data, let us say y 
    return data;  //This is a promise which has a promise result y
}


let appendFunc = (data) => {
    let container=document.getElementById('container');
    container.innerHTML = '';
    data.forEach(el => {
        el.snippet.thumbnails.medium.url
        let {snippet:{title,thumbnails:{medium:{url}}}}=el;
        divC=document.createElement('div');
        let Image=document.createElement('img');
        Image.src=url;
        let Title=document.createElement('p');
        Title.textContent = title;
        divC.append(Image,Title);
        container.append(divC);
        divC.onclick=function() { //parameter of this anonymous function accepts an event object(pointerEvent) which has been created while the event has been fired. It contains many important properties related to the event.
            saveVideo(el);
        }
    });
}

let saveVideo=(video) => {
    console.log('working');
    console.log(video);
    localStorage.setItem('movie',JSON.stringify(video));
    window.location.href='video.html'
}





