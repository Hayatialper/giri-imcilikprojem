//function myfunc(){
//    alert(document.getElementById("language").value);
//}

var countQues = 0;
var lang;
var score = 0;
var HTMLquestions = [ //

    {
        question: "1. Aşağıdakilerden hangisi SQL injection saldırısı için en yaygın kullanılan tekniklerden biri değildir?",
        choices: ["Tek tırnak işareti ('') kullanarak komutları sızdırma", "Çift tırnak işareti (\"\") kullanarak komutları sızdırma", "Yorum satırları kullanarak komutları sızdırma", "Yorum satırları kullanarak komutları sızdırma"],
        answer: 3

    },
    {
        question: "SELECT * FROM users WHERE username = '$username' AND password = '$password';",
        choices: ["$username değişkeninin doğrudan sorguda kullanılması", " $password değişkeninin doğrudan sorguda kullanılması", "Her iki değişkenin de doğrudan sorguda kullanılması", "Hiçbiri"],
        answer: 1

    },
    {
        question: "3. Aşağıdakilerden hangisi SQL injection saldırılarından korunmak için en iyi uygulamalardan biridir?",
        choices: ["Kullanıcı girişi verilerini her zaman parametrize edilmiş sorgularla işlemek", "Güçlü parolalar kullanmak ve bunları sık sık değiştirmek", "Yazılımınızı güncel tutmak\n", "Tümünü yap"],
        answer: 4

    },
    {
        question: "4. Bir web sitesinin giriş sayfasında aşağıdaki form bulunur. Bu formda hangi alan SQL injection saldırısı için en riskli alan olabilir?",
        choices: ["Kullanıcı adı", "Parola", "E-posta adresi", "Herhangi biri"],
        answer: 2

    },
    {
        question: "5.Bir SQL injection saldırısı gerçekleştiğinde veritabanına ne gibi zararlar verebilir?",
        choices: ["Hassas verilerin çalınması veya silinmesi", "Web sitesinin çökmesi veya kullanılamaması", "Kimlik avı saldırıları için platform oluşturma", "Tümünü yap"],
        answer: 4

    },
    {
        question: "Aşağıdakilerden hangisi bir SQL injection saldırısının işareti olabilir?",
        choices: ["Beklenmedik hata mesajları", "Yanlış veya eksik veriler", "Web sitesinin anormal şekilde davranması", "Hepsi"],
        answer: 4

    },
    {
        question: "SQL injection saldırılarından korunmak için web geliştiriciler hangi adımları atabilirler?",
        choices: ["Kullanıcı girişi verilerini her zaman doğrulamak ve temizlemek", "Güvenli kodlama uygulamalarını takip etmek", "Veritabanlarını güncel tutmak", "Tümünü yap"],
        answer: 4

    },

    {
        question: "Bir web sitesinin URL'sinde aşağıdaki gibi parametreler görürseniz, bu durum SQL injection saldırısına işaret ediyor olabilir mi?\n" +
            "\n" + "http://www.example.com/login.php?username=admin&password=12345",
        choices: ["Ever", "Hayır"],
        answer: 1

    },
    {/*10*/
        question: "10. Aşağıdakilerden hangisi SQL injection ile ilgili değildir?",
        choices: ["XSS (Cross-Site Scripting)", "CSRF (Cross-Site Request Forgery)", "LDAP enjeksiyonu", "XML enjeksiyonu"],
        answer: 1

    }

];


//alert(questions.length);
document.getElementById("score").textContent = "Score : " + 0;
document.querySelector(".view-results").style.display = "none";
document.querySelector(".quiz").style.display = "none";
document.querySelector(".final-result").style.display = "none";


document.querySelector(".choose-lang").addEventListener("click", function () {

    lang = document.getElementById("language").value + "questions";
    document.getElementById("ques-left").textContent = "Question : " + (countQues + 1) + "/" + window[lang].length;

//    alert(window[lang].length);
    //window["anything"] will convert "anything" string to object because window is also an object
    document.querySelector(".quiz").style.display = "block";

    document.querySelector(".question").innerHTML = "<h1>" + window[lang][countQues].question + "</h1>";
    for (i = 0; i <= 3; i++) {
        document.getElementById("opt" + i).value = window[lang][countQues].choices[i];
        document.getElementById("lb" + i).innerHTML = window[lang][countQues].choices[i];

    }
    ;/*For loop Closed*/

//    window.location.href="#score";

});


document.querySelector(".submit-answer").addEventListener("click", function () {
//     alert(window[lang][countQues].choices[window[lang][countQues].answer-1]);
//     alert(document.querySelector('input[name="options"]:checked').value);

    if (document.querySelector('input[name="options"]:checked').value === window[lang][countQues].choices[window[lang][countQues].answer - 1]) {

        score += 10;
        document.getElementById("score").textContent = "Score : " + score;
        document.getElementById("ques-view").innerHTML += "<div class='ques-circle correct'>" + (countQues + 1) + "</div>";

    } else {

        score -= 5;
        document.getElementById("score").textContent = "Score : " + score;
        document.getElementById("ques-view").innerHTML += "<div class='ques-circle incorrect'>" + (countQues + 1) + "</div>";
    }
    ;

    if (countQues < window[lang].length - 1) {
        countQues++;
    } else {
        document.querySelector(".submit-answer").style.display = "none";
        document.querySelector(".view-results").style.display = "unset";

    }

    document.getElementById("ques-left").textContent = "Question : " + (countQues + 1) + "/" + window[lang].length;
    document.querySelector(".question").innerHTML = "<h1>" + window[lang][countQues].question + "</h1>";
    for (i = 0; i <= 3; i++) {
        document.getElementById("opt" + i).value = window[lang][countQues].choices[i];
        document.getElementById("lb" + i).innerHTML = window[lang][countQues].choices[i];

    }
    ;/*For loop Closed*/

});

document.querySelector(".view-results").addEventListener("click", function () {

    document.querySelector(".final-result").style.display = "block";

    document.querySelector(".solved-ques-no").innerHTML = "You Solved " + (countQues + 1) + " questions of " + document.getElementById("language").value;

    var correct = document.getElementById("ques-view").getElementsByClassName("correct").length;

    document.querySelector(".right-wrong").innerHTML = correct + " were Right and " + ((countQues + 1) - correct) + " were Wrong";

    document.getElementById("display-final-score").innerHTML = "Your Final Score is: " + score;

    if (correct / (countQues + 1) > 0.8) {
        document.querySelector(".remark").innerHTML = "Remark: OutStanding ! :)";
    } else if (correct / (countQues + 1) > 0.6) {
        document.querySelector(".remark").innerHTML = "Remark: Good, Keep Improving.";

    } else if (correct / (countQues + 1)) {
        document.querySelector(".remark").innerHTML = "Remark: Satisfactory, Learn More.";
    } else {
        document.querySelector(".remark").innerHTML = "Remark: Unsatisfactory, Try Again.";
    }

//    window.location.href="#display-final-score";

});

document.getElementById("restart").addEventListener("click", function () {
    location.reload();

});

document.getElementById("about").addEventListener("click", function () {
    alert("Quiz Website Project Created By Digvijay Singh");

});


/*Smooth Scroll*/


$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
});


/*Smooth Scroll End*/
