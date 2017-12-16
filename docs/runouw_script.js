$(function(){

    function stepNumber(thisNumber, thisStep, thisMax, thisMin) {
        var newValue;
        if (thisMax === undefined) {
            thisMax = 999;
        }
        if (thisMin === undefined) {
            thisMin = 0;
        }
        newValue = thisNumber + thisStep;
        if (newValue < thisMin) {
            newValue = thisMin;
        } else if (newValue > thisMax) {
            newValue = thisMax;
        }
        return newValue;
    }
    function sanityCheck(thisNumber, thisMax, thisMin) {
        var newValue;
        if (thisMax === undefined) {
            thisMax = 999;
        }
        if (thisMin === undefined) {
            thisMin = 0;
        }
        newValue = thisNumber;
        if (newValue < thisMin) {
            newValue = thisMin;
        } else if (newValue > thisMax) {
            newValue = thisMax;
        }
        return newValue;
    }
    
    function myURLEncode(thisString) {
        var finalResult;
        finalResult = encodeURIComponent(thisString);
        finalResult = finalResult.replace(/[,]/g, "%2C");
        finalResult = finalResult.replace(/[.]/g, "%2E");
        return finalResult;
    }
    
    $("#assemblerMode").change(function(event){
        if ($("#assemblerMode").val() == "automatic") {
            $(".automatic").show();
            $(".custom").hide();
        } else {
            $(".automatic").hide();
            $(".custom").show();
        }
    });

    $(".stepValue").keydown(function(event){
        //if (event.which == 40) {
            //$(this).val() = "a"
        //}
        $("#myOutput").html("Key: " + event.which);
    });
    
    $("#generateLevelCode").click(function(event){
        var myLevelCode, myLand, myBackground, myHeight, myWidth, myLevelName, myPayload;
        myLevelCode = $("#levelWidth").val() + "x" + $("#levelHeight").val() + "~";
        myLevelName = myURLEncode($("#levelName").val()); 
        myPayload = ""
        if ($("#levelStyle").val() == "grass"){
            myLand = "2K2M";
            myBackground = "~1~1~";
        } else if ($("#levelStyle").val() == "cave"){
            myLand = "5d5f";
            myBackground = "~7~5~";
        } else if ($("#levelStyle").val() == "snow"){
            myLand = "6K6M";
            myBackground = "~8~6~";
        } else if ($("#levelStyle").val() == "desert"){
            myLand = "8K*2*";
            myBackground = "~10~10~";
        }
        for(i = 0; i < $("#levelWidth").val(); i++) {
            myLevelCode += "0*" + ($("#levelHeight").val() - 2) + "*" + myLand
        }
        if ($("#enableLDE").is(":checked")) {
            myPayload = myURLEncode('<img src="https://raw.githubusercontent.com/Runouw-Modders/SM63-Mods/blob/master/public/LDE.swf">');
        }
        
        myHeight = ($("#levelHeight").val() * 32) - 128;
        myWidth = ($("#levelWidth").val() * 32) - 128;
        myLevelCode += "~1,0," + myHeight + ",0,0,Right|"; //Mario
        myLevelCode += "6," + myWidth + "," + myHeight; // + "|" //Shine Sprite
        //myLevelCode += "73,48," & (myHeight + 32) & "," & mySignText & ","; //Sign with selected options
        myLevelCode += myBackground + myLevelName + myPayload;
        
        $("#myOutput").html(myLevelCode);
    });
    
    $("#selectText").click(function(event){
        $("#myOutput").select();
    });
     
    


}); 
 
