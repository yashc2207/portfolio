function reveal() {
    var reveals = document.querySelectorAll("#skill-1")
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100;
        console.log(reveals[i])
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        } else {
          reveals[i].classList.remove("active");
        }
      }
    }

    window.addEventListener("scroll", reveal);

    function reveal2() {
        var reveals = document.querySelectorAll("#skill-2")
        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 100;
            console.log(reveals[i])
            if (elementTop < windowHeight - elementVisible) {
              reveals[i].classList.add("active");
            } else {
              reveals[i].classList.remove("active");
            }
          }
        }
    
        window.addEventListener("scroll", reveal2);



function contact() {
  var con = document.querySelector(".contact")
  con.scrollIntoView({behavior: "smooth"});
}

function education() {
  var edu = document.querySelector(".education-scroll")
  edu.scrollIntoView({behavior: "smooth"});
}

function projects() {
  var p = document.querySelector(".project-scroll")
  p.scrollIntoView({behavior: "smooth"});
}

function f1() {
  window.open("https://yashc2207.github.io/f1-2022/", '_blank');
}

function curr() {
  window.open("https://yashc2207.github.io/currencies/", '_blank');
}

function login() {
  window.open("https://yashc2207.github.io/logging_in/", '_blank');
}

function f12() {
  window.open("https://github.com/yashc2207/f1-2022", '_blank');
}

function curr2() {
  window.open("https://github.com/yashc2207/currencies", '_blank');
}

function login2() {
  window.open("https://github.com/yashc2207/logging_in", '_blank');
}

function mailme() {
  window.location.href = "mailto:yash.m.chandnani@gmail.com";
}

function smsme() {
  window.location.href = "sms:+919082071696";
}