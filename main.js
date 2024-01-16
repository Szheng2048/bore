let paragraph = document.querySelector("p")
paragraph.style.color = "aqua"
let heading = document.querySelector("h1")
heading.style.fontsize = "15px"
paragraph.innerHTML = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed id urna a libero interdum posuere. Donec vitae aliquet sapien. Vivamus sagittis erat a lacus tincidunt, vel feugiat odio ultrices."
let list = document.querySelector("ul")
list.innerHTML += "<li id=\"item-17\">17</li>"
let listitem = document.querySelectorAll("li")
let imagediv = document.querySelector(".imgDiv")
listitem[12].style.opacity = ".3"
listitem[2].innerHTML = "Greetings!"
imagediv.innerHTML += "<img src=\"https://images.pexels.com/photos/236047/pexels-photo-236047.jpeg?cs=srgb&dl=clouds-cloudy-countryside-236047.jpg&fm=jpg\"/>"
let image = document.querySelectorAll("img")
image[0].src = "https://media.istockphoto.com/id/1470130937/photo/young-plants-growing-in-a-crack-on-a-concrete-footpath-conquering-adversity-concept.webp?b=1&s=170667a&w=0&k=20&c=IRaA17rmaWOJkmjU_KD29jZo4E6ZtG0niRpIXQN17fc="
image[0].style.height = "250px"

listitem[16].innerHTML = "Never gonna give you up"
