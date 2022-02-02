// api.openweathermap.org/data/2.5/weather?q=tehran&appid=ef63f80f5a5c0911ad58d8352bdac767&units=metric

const form = document.querySelector('.top-banner form');
const input = document.querySelector(".top-banner input");
const massage = document.querySelector(".massage");
const list = document.querySelector('.cities');

form.addEventListener("submit" , function(event){
    event.preventDefault();
    let inputValue = input.value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=ef63f80f5a5c0911ad58d8352bdac767&units=metric`
    fetch(url)
        .then(Response => Response.json())
        .then(data => {
            const {main , name , sys , weather} = data;
            const icon = `http://openweathermap.org/img/wn/${weather[0]["icon"]}.png`
            const li = document.createElement("li");
            li.classList.add("my-3");
            li.classList.add("mx-1");
            li.classList.add("d-inline-block");
            li.classList.add("li-hight");
                const markap = 
                `<div class="card">
                    <div class="card-body">
                        <h4 class="card-title">
                            <span>${name}</span>
                            <span class="badge rounded-pill bg-secondary">${sys.country}</span>
                        </h4>
                        <p class="card-text h1">${Math.round(main.temp)}</p>
                        <figure>
                            <img class="card-img" src="${icon}" alt="${weather[0].description}">
                            <figcaption>${weather[0].description}</figcaption>
                        </figure>
                    </div>
                </div>`
            li.innerHTML = markap;
            list.appendChild(li); 
            input.value = "";
            massage.innerHTML = "";
        })
        .catch(()=>{
            massage.innerHTML = "<p class='red'>Search for a valid city</p>"
        })
});
