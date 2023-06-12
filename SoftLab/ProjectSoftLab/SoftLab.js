const faqs = document.querySelectorAll(".faq");

faqs.forEach(faq => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    } )
})



const dynamicTxts = document.querySelector('.dynamic-txts');
const spans = dynamicTxts.querySelectorAll('span');
const totalSpans = spans.length;
let index = 0;

setInterval(() => {
  dynamicTxts.innerHTML = `<li><span>${spans[index].textContent}</span></li>`;
  index = (index + 1) % totalSpans;
}, 2000);



