$(function(){
    var assemblerVersionNumber = "0.8.3.2a";
    $("title").append(" - Version " + assemblerVersionNumber);
    $(".versionNumberText").html(assemblerVersionNumber);
    $(".lastModifiedText").html(document.lastModified);
    //################################################################ General functions
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
    function sanityCheckString(thisString, thisTarget) {
        var newValue
        if (thisString.indexOf(thisTarget) == -1) {
            newValue = thisString + thisTarget;            
        } else {
            newValue = thisString;
        }
        return newValue
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
    //################################################################ change functions
    $("#assemblerMode").change(function(event){
        if ($("#assemblerMode").val() == "automatic") {
            $(".automatic").show();
            $(".custom").hide();
            $(".manual").hide();
            $("#enableLDE").prop( "checked", true );
        } else if ($("#assemblerMode").val() == "custom") {
            $(".automatic").hide();
            $(".custom").show();
            $(".manual").hide();
            $("#enableLDE").prop( "checked", false );
        } else {
            $(".automatic").hide();
            $(".custom").hide();
            $(".manual").show();
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
    $("#enableStringData").change(function(event){
        if (! $("#enableStringData").is(":checked")) {
            $("#enableJumpHeight").prop( "checked", false );
            $("#enableGravity").prop( "checked", false );
            $("#enablePage").prop( "checked", false );
        } 
    });
    //################################################################ keydown functions
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
    $("#checkpointSignLocation").keydown(function(event){
        if (event.which == 40) {
            $("#checkpointSignLocation").val(stepNumber($("#checkpointSignLocation").val(), -1, $("#levelWidth").val(), 0));
        } else if (event.which == 38) {
            $("#checkpointSignLocation").val(stepNumber($("#checkpointSignLocation").val(), 1, $("#levelWidth").val(), 0));
        }
    });
    //################################################################ blur functions
    $("#levelWidth").blur(function(event){
        $("#levelWidth").val(sanityCheck($("#levelWidth").val(), 999, 25));
    });
    $("#levelHeight").blur(function(event){
        $("#levelHeight").val(sanityCheck($("#levelHeight").val(), 999, 17));
    });
    $("#jumpHeightValue").blur(function(event){
        $("#jumpHeightValue").val(sanityCheck($("#jumpHeightValue").val(), 99, 1));
    });
    $("#gravityValue").blur(function(event){
        $("#gravityValue").val(sanityCheck($("#gravityValue").val(), 1, 0.1));
    });
    $("#pageValue").blur(function(event){
        $("#pageValue").val(sanityCheck($("#pageValue").val(), 999, 1));
    });
    $("#checkpointSignLocation").blur(function(event){
        $("#checkpointSignLocation").val(sanityCheck($("#checkpointSignLocation").val(), $("#levelWidth").val(), 0));
    });
    
    //################################################################ click functions
    
    //################################################################ expand functions
    $("#timerExpandButton").click(function(event){
        if($("#timerExpandButton").html() == "+") {
            $("#timerExpandButton").html("-");
            $("#timerExpandBlock").show();
        } else {
            $("#timerExpandButton").html("+");
            $("#timerExpandBlock").hide();
        }
    });
    $("#checkpointExpandButton").click(function(event){
        if($("#checkpointExpandButton").html() == "+") {
            $("#checkpointExpandButton").html("-");
            $("#checkpointExpandBlock").show();
        } else {
            $("#checkpointExpandButton").html("+");
            $("#checkpointExpandBlock").hide();
        }
    });
    $("#manualLoadExpandButton").click(function(event){
        if($("#manualLoadExpandButton").html() == "+") {
            $("#manualLoadExpandButton").html("-");
            $("#manualLoadExpandBlock").show();
        } else {
            $("#manualLoadExpandButton").html("+");
            $("#manualLoadExpandBlock").hide();
        }
    });
    $("#manualDataExpandButton").click(function(event){
        if($("#manualDataExpandButton").html() == "+") {
            $("#manualDataExpandButton").html("-");
            $("#manualDataExpandBlock").show();
        } else {
            $("#manualDataExpandButton").html("+");
            $("#manualDataExpandBlock").hide();
        }
    });
    $("#manualDisplayExpandButton").click(function(event){
        if($("#manualDisplayExpandButton").html() == "+") {
            $("#manualDisplayExpandButton").html("-");
            $("#manualDisplayExpandBlock").show();
        } else {
            $("#manualDisplayExpandButton").html("+");
            $("#manualDisplayExpandBlock").hide();
        }
    });
    $("#manualEncodeExpandButton").click(function(event){
        if($("#manualEncodeExpandButton").html() == "+") {
            $("#manualEncodeExpandButton").html("-");
            $("#manualEncodeExpandBlock").show();
        } else {
            $("#manualEncodeExpandButton").html("+");
            $("#manualEncodeExpandBlock").hide();
        }
    });
    //################################################################ create code functions
    $("#addCheckpointSign").click(function(event){
        var mySignCode = "|73," + ($("#checkpointSignLocation").val() * 32) + ","; 
        mySignCode += (($("#levelHeight").val() * 32) - 96) + ",";
        mySignCode += myURLEncode($("#checkpointSignText").val());
        mySignCode += myURLEncode("%checkpoint%");
        if($("#signListContents").html() == "List of signs to add goes here.") {
            $("#signListContents").html(mySignCode);
        } else {
            $("#signListContents").append(mySignCode);
        }
    });
    $("#addSWF").click(function(event) {
        if ($("#thisSWFLocation").val() == "sign") {
            var mySignCode = "|73,256,"; 
            mySignCode += (($("#levelHeight").val() * 32) - 96) + ",";
            mySignCode += myURLEncode('<img src="https://raw.githubusercontent.com/Runouw-Modders/SM63-Mods/master/public/' + $("#thisSWFName").val() + '.swf">');
            if($("#signCode").html() == "Contents of sign code goes here.") {
                $("#signCode").html(mySignCode);
            } else {
                $("#signCode").append(mySignCode);
            }
        } else {
            var myTitleCode = myURLEncode('<img src="https://raw.githubusercontent.com/Runouw-Modders/SM63-Mods/master/public/' + $("#thisSWFName").val() + '.swf">');
            if($("#titleCode").html() == "Contents of title code goes here.") {
                $("#titleCode").html(myTitleCode);
            } else {
                $("#titleCode").append(myTitleCode);
            }
        }
    });
    $("#addData").click(function(event) {
        var myTitleCode = "<";
        myTitleCode += $("#thisTagName").val();
        myTitleCode += ":";
        myTitleCode += $("#thisTagData").val();
        myTitleCode += ">";
        if($("#titleCode").html() == "Contents of title code goes here.") {
            myTitleCode = myURLEncode('<img src="https://raw.githubusercontent.com/Runouw-Modders/SM63-Mods/master/public/stringData.swf">') + myTitleCode;
            $("#titleCode").html(myURLEncode(myTitleCode));
        } else {
            $("#titleCode").append(myURLEncode(myTitleCode));
        }
    });
    $("#encodeData").click(function(event) {
        $("#encodeResults").html(myURLEncode($("#encodeSource").val()));
    });
    $("#generateLevelCode").click(function(event){
        var myLevelCode, myLand, myBackground, myHeight, myWidth, myLevelName, myTitlePayload, mySignPayload;
        myLevelCode = $("#levelWidth").val() + "x" + $("#levelHeight").val() + "~";
        myLevelName = myURLEncode($("#levelName").val()); 
        myTitlePayload = "";
        mySignPayload = "";
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
        
        PayloadCalculation:
        if (($("#assemblerMode").val() == "automatic")) {
            if (! $("#enableLDE").is(":checked")) {
                break PayloadCalculation;
            }
            myTitlePayload = myURLEncode('<img src="https://raw.githubusercontent.com/Runouw-Modders/SM63-Mods/master/public/LDE.swf">');
            if ($("#enableLDETimer").is(":checked")) {
                myTitlePayload += myURLEncode("<usesTimer:true>");
                if ($("#preTimerText").val() != "This is the text that displays before you start") {
                    myTitlePayload += myURLEncode("<preTimer:" + $("#preTimerText").val() + ">");
                }
                mySignPayload += "|73," + (($("#levelWidth").val() * 32) - 160) + ",";
                mySignPayload += (($("#levelHeight").val() * 32) - 96) + ",";
                mySignPayload += myURLEncode(sanityCheckString($("#timerSign").val(), "%timer%"));
            }
            if ($("#signListContents").html() != "List of signs to add goes here.") {
                mySignPayload += $("#signListContents").html();
            }
        } else if ($("#assemblerMode").val() == "custom") {
            if ($("#enableJumpHeight").is(":checked")) {
                myTitlePayload = myURLEncode('<img src="https://raw.githubusercontent.com/Runouw-Modders/SM63-Mods/master/public/jumpHeight.swf">');
                myTitlePayload += myURLEncode("<jumpHeight:" + $("#jumpHeightValue").val() + ">");
            }
            if ($("#enableGravity").is(":checked")) {
                myTitlePayload += myURLEncode('<img src="https://raw.githubusercontent.com/Runouw-Modders/SM63-Mods/master/public/Gravity.swf">');
                myTitlePayload += myURLEncode("<gravity:" + $("#gravityValue").val() + ">");
            }
            if ($("#enablePage").is(":checked")) {
                myTitlePayload += myURLEncode('<img src="https://raw.githubusercontent.com/Runouw-Modders/SM63-Mods/master/public/Page.swf">');
                myTitlePayload += myURLEncode("<page:" + ($("#pageValue").val() - 1) + ">");
            }
            if ($("#enableRespawning").is(":checked")) {
                myTitlePayload += myURLEncode('<img src="https://raw.githubusercontent.com/Runouw-Modders/SM63-Mods/master/public/Respawning.swf">');
            }
            if ($("#enableStringData").is(":checked")) {
                myTitlePayload += myURLEncode('<img src="https://raw.githubusercontent.com/Runouw-Modders/SM63-Mods/master/public/stringData.swf">');
            }
            if ($("#enableWiiMode").is(":checked")) {
                myTitlePayload += myURLEncode('<img src="https://raw.githubusercontent.com/Runouw-Modders/SM63-Mods/master/public/Wii_Mode.swf">');
            }
            if ($("#enableChaosEdition").is(":checked")) {
                myTitlePayload += myURLEncode('<img src="https://raw.githubusercontent.com/Runouw-Modders/SM63-Mods/master/public/SM63_Chaos_Edition.swf">');
            }
        } else if ($("#assemblerMode").val() == "manual") {
            if ($("#titleCode").val() != "Contents of title code goes here.") {
                myTitlePayload += $("#titleCode").val();
            }
            if ($("#signCode").val() != "Contents of sign code goes here.") {
                mySignPayload += $("#signCode").val();
            }
        }

        myHeight = ($("#levelHeight").val() * 32) - 128;
        myWidth = ($("#levelWidth").val() * 32) - 128;
        myLevelCode += "~1,0," + myHeight + ",0,0,Right|"; //Mario
        myLevelCode += "6," + myWidth + "," + myHeight; //Shine Sprite
        myLevelCode += mySignPayload + myBackground + myLevelName + myTitlePayload;
        $("#levelCodeContents").html(myLevelCode);
    });
    //################################################################ other functions
    $("#levelCodeSelect").click(function(event){
        $("#levelCodeContents").select();
    });
     
    $("#returnToMain").click(function(event){
        window.location.assign("index.html");
    });


}); 
 
