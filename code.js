// 15.1
// let elem = document.querySelector('#elem');
// 16.1 
// let elem = document.querySelector('#elem');
// let button = document.getElementById("button");
// button.addEventListener("click", function() {
//      console.log(elem.clientWidth);
//      console.log(elem.clientHeight);
//  });
// 17.1
// let elem = document.querySelector('#elem');
// let button = document.getElementById("button");
// button.addEventListener("click", function() {
//      console.log(elem.offsetWidth);
//      console.log(elem.offsetHeight);
//  });
// 17.2
// let elem = document.querySelector('#elem');
// let button = document.getElementById("button");
// button.addEventListener("click", function() {
//     console.log(elem.offsetWidt - elem.clientWidth);
//     console.log(elem.offsetHeight - elem.clientHeight);
// });
// 18.1
// let elem = document.querySelector('#elem');
// let button = document.getElementById("button");
// button.addEventListener("click", function() {
//     console.log(elem.scrollWidth);
//     console.log(elem.scrollHeight);
// });
// 18.2
// let elem = document.querySelector('#elem');
// let button = document.getElementById("button");
// button.addEventListener("click", function() {
//     console.log(elem.scrollWidth - elem.offsetWidth);
//     console.log(elem.scrollHeight - elem.offsetHeight);
// });
// 19.1
// function getTotalScrollHeight() {
//     return elem.scrollHeight;
// }
// 19.2
// button.addEventListener("click", function() {
//     if (elem.scrollTop > 0) {
//         console.log("Прокручивается");
//     } else {
//         console.log("Не прокручивается");
//     }
// });
// 19.3
// button.addEventListener("click", function() {
//     console.log(getTotalScrollHeight());
// });
// 19.4
// function getTotalScrollHeight() {
//     return elem.scrollHeight;
// }
// button.addEventListener("click", function() {
//     console.log(elem.scrollHeight - getTotalScrollHeight());
// });
// 19.5
// function getTotalScrollHeight() {
//     return elem.scrollHeight;
// }
// button.addEventListener("click", function() {
//     console.log(elem.scrollHeight - (elem.offsetHeight + getTotalScrollHeight()));
// });
// 20.1
// button.addEventListener("click", function() {
//     elem.scrollTop = 100;
//     elem.scrollLeft = 50;
// });
// 20.2
// button.addEventListener("click", function() {
//     elem.scrollTop = elem.scrollTop + 50;
// });
// 20.3
// button.addEventListener("click", function() {
//     elem.scrollTop = elem.scrollTop - elem.scrollTop;
// });
// 20.4
// button.addEventListener("click", function() {
//     element.scrollTop = element.scrollHeight;
// });
// 21.1
// button.addEventListener("click", function() {
//     elem.scrollTop = elem.scrollHeight - elem.clientHeight;
// });
// 21.2
// button.addEventListener("click", function() {
// if (isScrolledToBottom) {
//     console.log("Прокручен до конца по вертикали");
// } else {
//     console.log("Не прокручен до конца по вертикали");
// }
// 22
// button.addEventListener("click", function() {
//     elem.style.height = elem.scrollHeight + 'px';
// });
