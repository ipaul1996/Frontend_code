let getData = async (url)=> {

    let res = await fetch(url);

    let data = await res.json();

    return data;

}


let append = (data, container) => {

    data.forEach(function({title, price, image}) {
        
        let divC = document.createElement('div');

        let Title = document.createElement('p');

        Title.textContent = title;

        let Image = document.createElement('img');

        Image.src = image;

        let Price = document.createElement('p');

        Price.textContent = price;

        divC.append(Image, Title, Price);

        container.append(divC);

    });

}

export {getData, append}  //Named Export