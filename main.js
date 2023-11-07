Webcam.set({
    width: 350,
    height: 300,
    image_format: "png",
    png_quality: 90
});

camera=document.getElementById('camera');
Webcam.attach('#camera');

setTimeout(function ()
{
    image_id = "selfie1";
    take_snapshot();
    speak_data = "Taking your next selfie in 10 seconds."
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
},5000);

setTimeout(function ()
{
    image_id = "selfie2";
    take_snapshot();
    speak_data = "Taking your next selfie in 15 seconds."
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
},10000);

setTimeout(function ()
{
    image_id = "selfie3";
    take_snapshot();
    speak_data = "Selfies Taken."
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
},);

function take_snapshot()
{
    console.log(image_id)

    Webcam.snap(function(data_uri) {
        if(image_id == "selfie1"){
            document.getElementById("result1").innerHTML = '<img id="selfie1" src = "'+data_uri+'"/>';
        }

        if(image_id == "selfie2"){
            document.getElementById("result2").innerHTML = '<img id="selfie2" src = "'+data_uri+'"/>';
        }

        if(image_id == "selfie3"){
            document.getElementById("result3").innerHTML = '<img id="selfie3" src = "'+data_uri+'"/>';
        }
    }
    )
}
