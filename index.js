const testimonials = [
 {
  name: "Charly Gee ",
  photoUrl: "./img/photo-1563122870-6b0b48a0af09.jpg",
  text: "This is simply unbelievable! I would be lost without Apple. The very best. Not able to tell you how happy I am with Apple."
 },
  {
  name: "Mary Pea ",
  photoUrl: "./img/photo-1563233558-0015df629653.jpg",
  text: "Wow great service, I love it!"
 },
  {
  name: "Mark Peter",
  photoUrl: "./img/photo-1577737327211-f08e462b3eec.jpg",
  text: "Thank you for making it painless, pleasant and most of all hassle free! The very best."
 }
];

const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const usernameEl = document.querySelector(".username");

let idx = 0;

updateTestimonial()

function updateTestimonial() {
 const{name, photoUrl, text} = testimonials[idx];
 imgEl.src = photoUrl;
 textEl.innerText = text;
 usernameEl.innerText = name;
 idx++
 if(idx === testimonials.length) {
  idx = 0;
 }
 setTimeout(() => {
  updateTestimonial()
 }, 10000)
}


