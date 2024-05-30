//function myfunc(){
//    alert(document.getElementById("language").value);
//}

var countQues = 0;
var lang;
var score = 0;
var HTMLquestions = [ //


    {
        question: "1. Asagidakilerden hangisi SQL injection saldirisi icin en yaygin kullanilan tekniklerden biri degildir?",
        choices: ["Tek tirnak isareti ('') kullanarak komutlari sizdirma", "Cift tirnak isareti (\"\") kullanarak komutlari sizdirma", "Yorum satirlari kullanarak komutlari sizdirma"],
        answer: 3

    },
    {
        question: "SELECT * FROM users WHERE username = '$username' AND password = '$password';",
        choices: ["$username degiskeninin dogrudan sorguda kullanilmasi", " $password degiskeninin dogrudan sorguda kullanilmasi", "Her iki degiskenin de dogrudan sorguda kullanilmasi", "Hicbiri"],
        answer: 1

    },
    {
        question: "3. Asagidakilerden hangisi SQL injection saldirilarindan korunmak icin en iyi uygulamalardan biridir?",
        choices: ["Kullanici girisi verilerini her zaman parametrize edilmis sorgularla islemek", "Guclu parolalar kullanmak ve bunlari sik sik degistirmek", "Yaziliminizi guncel tutmak\n", "Tumunu yap"],
        answer: 4

    },
    {
        question: "4. Bir web sitesinin giris sayfasinda asagidaki form bulunur. Bu formda hangi alan SQL injection saldirisi icin en riskli alan olabilir?",
        choices: ["Kullanici adi", "Parola", "E-posta adresi", "Hepsi"],
        answer: 2

    },
    {
        question: "5.Bir SQL injection saldirisi gerceklestiginde veritabanina ne gibi zararlar verebilir?",
        choices: ["Hassas verilerin calinmasi veya silinmesi", "Web sitesinin cokmesi veya kullanilamamasi", "Kimlik avi saldirilari icin platform olusturma", "Tumunu yap"],
        answer: 4

    },
    {
        question: "Asagidakilerden hangisi bir SQL injection saldirisinin isareti olabilir?",
        choices: ["Beklenmedik hata mesajlari", "Yanlis veya eksik veriler", "Web sitesinin anormal sekilde davranmasi", "Hepsi"],
        answer: 4

    },
    {
        question: "SQL injection saldirilarindan korunmak icin web gelistiriciler hangi adimlari atabilirler?",
        choices: ["Kullanici girisi verilerini her zaman dogrulamak ve temizlemek", "Guvenli kodlama uygulamalarini takip etmek", "Veritabanlarini guncel tutmak", "Tumunu yap"],
        answer: 4

    },

    {
        question: "Bir web sitesinin URL'sinde asagidaki gibi parametreler gorurseniz, bu durum SQL injection saldirisina isaret ediyor olabilir mi?\n" +
            "\n" + "http://www.example.com/login.php?username=admin&password=12345",
        choices: ["Ever", "Hayir"],
        answer: 1

    },
    {/*10*/
        question: "10. Asagidakilerden hangisi SQL injection ile ilgili degildir?",
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
