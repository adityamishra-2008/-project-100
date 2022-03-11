var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();
function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();

}
recognition.onresult=function (event){
    console.log(event);

    var content=event.results[0][0].transcript;
    console.log(content);
 document.getElementById("textbox").innerHTML=content;
 
if(content=="take my selfie")
{
    console.log("taking selfie in 5 seconds.");
    speak(),500;
    speak2(),500;
    speak3();
}

}

function speak() {
    var synth=window.speechSynthesis;
    speak_data="taking your selfie in 5 seconds";
    var utterthis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterthis);
    Webcam.attach(camera);
        setTimeout(function(){
            img_id="selfie_1";
            take_snapshot();
           save();
        },5000);
}
function speak2() {
    var synth=window.speechSynthesis;
    speak_data="taking your selfie in 10 seconds";
    var utterthis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterthis);
    Webcam.attach(camera);
        setTimeout(function(){
            img_id="selfie_2";
            take_snapshot();
           save();
        },10000);
}

function speak3() {
    var synth=window.speechSynthesis;
    speak_data="taking your selfie in 15 seconds";
    var utterthis=new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterthis);
    Webcam.attach(camera);
        setTimeout(function(){
            img_id="selfie_3";
            take_snapshot();
           save();
        },15000);
}

Webcam.set({
    width:360,
    height:250,
    image_format:'png',
    png_quality:90
});

camera=document.getElementById("camera");
 
function take_snapshot(){
    console.log(img_id)
    Webcam.snap(function(data_uri){
        if(img_id=="selfie_1"){
        document.getElementById("result").innerHTML=' <img  id="result"style="width:260px; height:300px; "  src="'+data_uri+'" >';
        }
        if(img_id=="selfie_2"){
            document.getElementById("result2").innerHTML='  <img  id="result2" style="width:260px; height:300px;" src="'+data_uri+'" >';
            }
            if(img_id=="selfie_3"){
                document.getElementById("result3").innerHTML='<img  id="result3"  style="width:260px; height:300px;" src="'+data_uri+'" >';
                }
    });
}
function save(){
    link=document.getElementById("link");
    image=document.getElementById("selfie_img").src;
    link.href=image;
    link.click();
}
function save(){
    link=document.getElementById("link");
    image=document.getElementById("selfie_img2").src;
    link.href=image;
    link.click();
}
function save(){
    link=document.getElementById("link");
    image=document.getElementById("selfie_img3").src;
    link.href=image;
    link.click();
}
