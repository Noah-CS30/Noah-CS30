// Objects Books
// Noah J

let myBook; // you cannot init objects here

function setup() {
  createCanvas(windowWidth, windowHeight);
  myBook = new Book("CS30 Text", "Noah",
    7013326, "leatherbound" , 500,
    width * 0.3);
  myBook2 = new Book("Harry Potter", "JK",
    9999, "softcover", 800,
    width * 0.4);
  
}




class Book{
  // 1. constructor 
  constructor(title, author, isbn, cover, pages, x ){
    this.title = title;
    this.author = author;
    this.isbn = isbn;
    this.cover = cover;
    this.pages = pages;
    this.x = x;
 


    //2. Class Methods
    // since we're in a class, we omit
    // function keyword
    display(){
      //render our book object on Canvas
      rectMode(CENTER); textAlign(CENTER, CENTER);
      textSize(20);
    }

    // set fill color based on covertype
    switch(this.cover){
      case "softcover":
        fill(250,200,150); break;
      case "softcover":
        fill(250,200,150); break;
      case "leatherbound":
        fill(250,200,150); break;
    }

    // now draw the book
    push();
    translate(this.x, height/2);
    rect(this.x, height/2, this.pages/10,150);
    fill(255);
    text(this.title[0],0,-50);
    pop();

   
  }
}
function draw() {
  background(220);
  myBook.display
}