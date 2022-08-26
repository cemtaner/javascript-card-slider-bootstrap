var images = [
    //--add carousel contents
    {
        title: "Corporate Title 1",
        image: 'img/image1.jpg',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        link: 'https://yoursite.com/corporate-title-detail1'
    },
    {
        title: "Corporate Title 2",
        image: 'img/image2.jpg',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        link: 'https://yoursite.com/corporate-title-detail2'
    },
    {
        title: "Corporate Title 3",
        image: 'img/image3.jpg',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        link: 'https://yoursite.com/corporate-title-detail3'
    },
    {
        title: "Corporate Title 4",
        image: 'img/image4.jpg',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        link: 'https://yoursite.com/corporate-title-detail4'
    },
    {
        title: "Corporate Title 5",
        image: 'img/image5.jpg',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        link: 'https://yoursite.com/corporate-title-detail5'
    } 
];

var index = 2; //--start slider index
var imageCount = images.length;
var interval;
var settings = {
    duration: '2000',
    random: false,
};

init(settings);

document.querySelector('.fa-arrow-circle-left').addEventListener('click',function(){
    index--;
    showSlide(index);
});

document.querySelector('.fa-arrow-circle-right').addEventListener('click',function(){
    index++;
    showSlide(index);
});

document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseenter',function(){
        clearInterval(interval);
    })
});

document.querySelectorAll('.arrow').forEach(function(item){
    item.addEventListener('mouseleave',function(){
        init(settings);
    })
});

function init(settings){

    var prev;
    interval=setInterval(function(){

        if(settings.random){
            do{
                index = Math.floor(Math.random() * imageCount);
            }while(index == prev) 
            prev = index;
        }else{
            if(imageCount == index+1){
                index = -1;
            }
            showSlide(index);
            console.log(index);
            index++;
        }
        showSlide(index);

    },settings.duration);

}

function showSlide(i){

    index = i;

    if(i<0){
        index = imageCount -1; 
    }

    if(i >= imageCount){  
        index = 0;
    }

    document.querySelector('.card-title').textContent = images[index].title; 
    document.querySelector('.card-text').textContent = images[index].content;  
    document.querySelector('.card-img-top').setAttribute('src',images[index].image);
    document.querySelector('.card-btn').setAttribute('href',images[index].link);
}

     

 