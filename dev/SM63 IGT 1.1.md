# Super Mario 63 In-Game Timer version 1.1

### Effect(s) of this romhack
This romhack, specifically made for speedrunners, adds an `in-game timer` to Super Mario 63.
  

### How this SWF should be used
This SWF should be loaded in a sign or level title, preferably level title.

### Level code to load this SWF
`%3Cimg%20src%3D%22https%3A%2F%2Fraw%2Egithubusercontent%2Ecom%2FRunouw%2DModders%2FSM63%2DMods%2Fmaster%2Fpublic%2Ftemplate%2Eswf%22%3E`

### Author(s) of this SWF
Sekanor, Jhynjhiruu

### Code
<details/> 
<summary>frame1_3</summary>
  
    NewgroundsAPI.connectMovie(8160);
    
    // Variable initialisation
    _root.ILTimer = 0;
    _root.ILTimerLastUpdate = 0;
    _root.ILTimerState = "RUN";
    _root.ILTimerAvoidRepeat = 0;
    _root.ILTimerDispMode = "NORMAL";
    _root.ILTimerUpdateMode = "LOADINGZONE";

</details>

<details/>
<summary>defineSprite(822)</summary>

  ```
  if((_root._quality == "BEST" || _root._quality == "HIGH") && _root.AutoQuality == true)
  {
     _root.Qualitynum--;
  }
  qn = _root.Qualitynum;
  qn2 = 0;
  _root._quality = _root.QualityArray[qn];
  time = getTimer();
  count = 0;
  
  // Injected code
  
  // Local variables
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  frtxt = "running";
  txtMinutes = "";
  txtSeconds = "";
  txtMilliseconds = "";
  
  // Functions
  _root.Timer_calculateSeconds = function()
  {
     minutes = Math.floor(_root.ILTimerLastUpdate / (32 * 60));
     seconds = Math.floor(_root.ILTimerLastUpdate / 32) % 60;
     milliseconds = _root.ILTimerLastUpdate % 32;
     milliseconds = Math.floor(milliseconds * (1000 / 32));
     txtMinutes = minutes;
     txtSeconds = seconds;
     txtMilliseconds = milliseconds;
     if(minutes < 10)
     {
        txtMinutes = "0" + txtMinutes;
     }
     if(seconds < 10)
     {
        txtSeconds = "0" + txtSeconds;
     }
     if(milliseconds < 10)
     {
        txtMilliseconds = "00" + txtMilliseconds;
     }
     else if(milliseconds < 100)
     {
        txtMilliseconds = "0" + txtMilliseconds;
     }
  };
  _root.Timer_updateDisplay = function()
  {
     if(_root.ILTimerUpdateMode == "ALWAYS")
     {
        _root.ILTimerLastUpdate = _root.ILTimer;
     }
     if(_root.ILTimerDispMode == "FRAMES")
     {
        _root.TextHint = _root.ILTimerLastUpdate;
     }
     else
     {
        _root.Timer_calculateSeconds();
        _root.TextHint = txtMinutes + ":" + txtSeconds + "." + txtMilliseconds;
     }
  };
  if(_root.ILTimerState == "STOP")
  {
     _root.Timer_start();
  }
  _root.Timer_addTime = function()
  {
     if(_root.ILTimerState == "RUN")
     {
        _root.ILTimer = _root.ILTimer + 1;
     }
  };
  _root.Timer_start = function()
  {
     _root.ILTimer = 0;
     _root.ILTimerLastUpdate = 0;
     _root.ILTimerState = "RUN";
     frtxt = "running";
     _root.Timer_updateDisplay();
  };
  _root.Timer_stop = function()
  {
     _root.Timer_update();
     _root.ILTimerState = "STOP";
     if(_root.ILTimerDispMode == "FRAMES")
     {
        _root.TextHint = _root.ILTimer;
     }
     else
     {
        _root.Timer_calculateSeconds();
        _root.TextHint = txtMinutes + ":" + txtSeconds + "." + txtMilliseconds;
     }
     frtxt = "stopped";
  };
  _root.Timer_toggledisplay = function()
  {
     if(_root.ILTimerDispMode == "NORMAL")
     {
        _root.ILTimerDispMode = "FRAMES";
     }
     else
     {
        _root.ILTimerDispMode = "NORMAL";
     }
     _root.Timer_updateDisplay();
  };
  _root.Timer_input = function()
  {
     if(_root.ILTimerAvoidRepeat > 0)
     {
        _root.ILTimerAvoidRepeat = _root.ILTimerAvoidRepeat - 1;
     }
     if(_root.KeyPlus() and _root.ILTimerAvoidRepeat == 0)
     {
        if(_root.ILTimerState == "RUN")
        {
           _root.Timer_stop();
        }
        else
        {
           _root.Timer_start();
        }
        _root.ILTimerAvoidRepeat = 10;
     }
     if(_root.KeyMinus() and _root.ILTimerAvoidRepeat == 0)
     {
        if(_root.ILTimerUpdateMode == "ALWAYS")
        {
           _root.ILTimerUpdateMode = "LOADINGZONE";
        }
        else
        {
           _root.ILTimerUpdateMode = "ALWAYS";
        }
        _root.ILTimerAvoidRepeat = 10;
     }
  };
  _root.Timer_updateTime = function()
  {
     _root.ILTimerLastUpdate = _root.ILTimer;
  };
  _root.Timer_update = function()
  {
     _root.Timer_updateTime();
     _root.Timer_updateDisplay();
  };
  
  // Code executed when the FPS code loads
  _root.Timer_update();
  stop();
  
  // Code executed on each frame
  onEnterFrame = function()
  {
     if(_root.ILTimerState == "RUN")
     {
        _root.Timer_updateDisplay();
     }
     _root.Timer_input();
     _root.Timer_addTime();
  };
  ```
  
</details>

<details/>
<summary>defineSprite(1002: Shine Sprite Clip)_1</summary>
```
// Code injected onto line 69
if(_root.ILTimerUpdateMode == "ALWAYS")
{
  _root.Timer_stop();
}
else
{
  _root.Timer_update();
}

```

</details>
