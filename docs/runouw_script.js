$(function(){

    function stepNumber(thisNumber, thisStep, thisMax, thisMin) {
        var newValue;
        if (thisMax === undefined) {
            thisMax = 999;
        }
        if (thisMin === undefined) {
            thisMin = 0;
        }
        newValue = Number(thisNumber) + Number(thisStep);
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
        finalResult = finalResult.replace(/[!]/g, "%21");
        finalResult = finalResult.replace(/[']/g, "%27");
        finalResult = finalResult.replace(/[(]/g, "%28");
        finalResult = finalResult.replace(/[)]/g, "%29");
        finalResult = finalResult.replace(/[*]/g, "%2A");
        finalResult = finalResult.replace(/[,]/g, "%2C");
        finalResult = finalResult.replace(/[-]/g, "%2D");
        finalResult = finalResult.replace(/[.]/g, "%2E");
        finalResult = finalResult.replace(/[_]/g, "%5F");
        return finalResult;
    }
    
    $("#assemblerMode").change(function(event){
        if ($("#assemblerMode").val() == "automatic") {
            $(".automatic").show();
            $(".custom").hide();
            $("#enableLDE").prop( "checked", true );
        } else {
            $(".automatic").hide();
            $(".custom").show();
            $("#enableLDE").prop( "checked", false );
        }
    });
    $("#enableJumpHeight").change(function(event){
        if ($("#enableJumpHeight").is(":checked")) {
            $("#enableStringData").prop( "checked", true );
        } 
    });
    $("#enableGravity").change(function(event){
        if ($("#enableGravity").is(":checked")) {
            $("#enableStringData").prop( "checked", true );
        } 
    });
    $("#enablePage").change(function(event){
        if ($("#enablePage").is(":checked")) {
            $("#enableStringData").prop( "checked", true );
        } 
    });
    

    $("#levelWidth").keydown(function(event){
        if (event.which == 40) {
            $("#levelWidth").val(stepNumber($("#levelWidth").val(), -1, 999, 25));
        } else if (event.which == 38) {
            $("#levelWidth").val(stepNumber($("#levelWidth").val(), 1, 999, 25));
        }
    });
    $("#levelHeight").keydown(function(event){
        if (event.which == 40) {
            $("#levelHeight").val(stepNumber($("#levelHeight").val(), -1, 999, 17));
        } else if (event.which == 38) {
            $("#levelHeight").val(stepNumber($("#levelHeight").val(), 1, 999, 17));
        }
    });
    $("#jumpHeightValue").keydown(function(event){
        if (event.which == 40) {
            $("#jumpHeightValue").val(stepNumber($("#jumpHeightValue").val(), -1, 99, 1));
        } else if (event.which == 38) {
            $("#jumpHeightValue").val(stepNumber($("#jumpHeightValue").val(), 1, 99, 1));
        }
    });
    $("#gravityValue").keydown(function(event){
        var myResult;
        if (event.which == 40) {
            myResult = stepNumber($("#gravityValue").val(), -0.1, 1, 0.1);
            $("#gravityValue").val(myResult.toPrecision(1));
        } else if (event.which == 38) {
            myResult = stepNumber($("#gravityValue").val(), 0.1, 1, 0.1);
            $("#gravityValue").val(myResult.toPrecision(1));
        }
    });
    $("#pageValue").keydown(function(event){
        if (event.which == 40) {
            $("#pageValue").val(stepNumber($("#pageValue").val(), -1, 999, 1));
        } else if (event.which == 38) {
            $("#pageValue").val(stepNumber($("#pageValue").val(), 1, 999, 1));
        }
    });
    
    $("#generateLevelCode").click(function(event){
        var myLevelCode, myLand, myBackground, myHeight, myWidth, myLevelName, myPayload;
        myLevelCode = $("#levelWidth").val() + "x" + $("#levelHeight").val() + "~";
        myLevelName = myURLEncode($("#levelName").val()); 
        myPayload = "";
        if ($("#levelStyle").val() == "grass"){ //Determine style for flatland
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
            myLevelCode += "0*" + ($("#levelHeight").val() - 2) + "*" + myLand;
        }
        
        if ($("#enableLDE").is(":checked")) {
            myPayload = myURLEncode('<img src="https://raw.githubusercontent.com/Runouw-Modders/SM63-Mods/blob/master/public/LDE.swf">');
        } else {
            if ($("#enableJumpHeight").is(":checked")) {
                myPayload = myURLEncode('<img src="https://raw.githubusercontent.com/Runouw-Modders/SM63-Mods/blob/master/public/jumpHeight.swf">');
                myPayload += myURLEncode("<jumpHeight:" + $("#jumpHeightValue").val() + ">");
            }
            if ($("#enableGravity").is(":checked")) {
                myPayload += myURLEncode('<img src="https://raw.githubusercontent.com/Runouw-Modders/SM63-Mods/blob/master/public/Gravity.swf">');
                myPayload += myURLEncode("<gravity:" + $("#gravityValue").val() + ">");
            }
            if ($("#enablePage").is(":checked")) {
                myPayload += myURLEncode('<img src="https://raw.githubusercontent.com/Runouw-Modders/SM63-Mods/blob/master/public/Page.swf">');
                myPayload += myURLEncode("<page:" + $("#pageValue").val() + ">");
            }
            if ($("#enableRespawning").is(":checked")) {
                myPayload += myURLEncode('<img src="https://raw.githubusercontent.com/Runouw-Modders/SM63-Mods/blob/master/public/Respawning.swf">');
            }
            if ($("#enableStringData").is(":checked")) {
                myPayload += myURLEncode('<img src="https://raw.githubusercontent.com/Runouw-Modders/SM63-Mods/blob/master/public/stringData.swf">');
            }
            if ($("#enableWiiMode").is(":checked")) {
                myPayload += myURLEncode('<img src="https://raw.githubusercontent.com/Runouw-Modders/SM63-Mods/blob/master/public/Wii_Mode.swf">');
            }
            if ($("#enableChaosEdition").is(":checked")) {
                myPayload += myURLEncode('<img src="https://raw.githubusercontent.com/Runouw-Modders/SM63-Mods/blob/master/public/SM63_Chaos_Edition.swf">');
            }
        }
        
        myHeight = ($("#levelHeight").val() * 32) - 128;
        myWidth = ($("#levelWidth").val() * 32) - 128;
        myLevelCode += "~1,0," + myHeight + ",0,0,Right|"; //Mario
        myLevelCode += "6," + myWidth + "," + myHeight; //Shine Sprite
        if ($("#payloadLocation").val() == "title") {
            myLevelCode += myBackground + myLevelName + myPayload; //Load it in the title
        } else {
            myLevelCode += "|73,48," + (myHeight + 32) + "," + myPayload + ","; //Sign with selected options
            myLevelCode += myBackground + myLevelName;
        }
        $("#myOutput").html(myLevelCode);
    });
    
    $("#selectText").click(function(event){
        $("#myOutput").select();
    });
     
    


}); 
 
