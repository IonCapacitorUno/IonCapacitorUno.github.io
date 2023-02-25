const myImages = [
    {
        src: "/images/Whaleshark3.jpg",
        description: "A Whaleshark swimming through the Ocean.",
        alt: "caterpillar"
    },
    {
        src: "/images/Whaleshark2.jpg",
        description: "Top down view of the Whaleshark.",
        alt: "chipmunk"
    },
    {
        src: "/images/Whaleshark.jpg",
        description: "A Whaleshark.",
        alt: "hair-do"
    },
];

const showcaseImageElement = document.getElementById('showcase-image');
const showcaseImageDescription = document.getElementById('showcase-description');
const nextButton = document.getElementById('next-button');
const prevButton = document.getElementById('prev-button');

let currentIndex = 0;

showcaseImageElement.src = myImages[currentIndex].src
showcaseImageElement.alt = myImages[currentIndex].alt
showcaseImageDescription.innerText = myImages[currentIndex].description

function changeMyImage(e){
    if (e.target.id === nextButton.id) {
        if (currentIndex < myImages.length -1) {
            currentIndex += 1
        } else {
            currentIndex = 0
        } 
    }   
    if (e.target.id === prevButton.id) {
        if (currentIndex > 0) {
            currentIndex -= 1
        } else {
            currentIndex = myImages.length - 1
        }
    }
    
    showcaseImageElement.src = myImages[currentIndex].src
    showcaseImageElement.alt = myImages[currentIndex].alt
    showcaseImageDescription.innerText = myImages[currentIndex].description
}

nextButton.onclick = changeMyImage;
prevButton.onclick = changeMyImage;
