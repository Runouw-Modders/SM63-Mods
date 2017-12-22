# Super Mario 63 IG Timer v1.1

### Effect(s) of this romhack
This romhack, specifically made for ~~April~~ speedrunners, adds an in-game timer to Super Mario 63.
  
### How to use
Use the **Plus** key to stop the timer, or to manually start it if it's stopped.
The timer has been designed to automatically start at every loading zone, if it's not running.
The **Minus** key is used to toggle between two update modes:
  - Timer updates at every loading zone
  - Timer always updates


### How to install
Download the `.zip` file and execute it with the `.exe` file.
If you want to use another flash player, the `.swf` is included in the compressed folder as well.

### Author(s) of this romhack
Sekanor, Jhynjhiruu

### Code
<details/>
  <summary>DefineSprite (822)</summary>
  <details/>
      <summary>frame 1</summary>
      <details/>
        <summary>DoAction</summary>

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
minutes = 0;
seconds = 0;
milliseconds = 0;
frtxt = "running";
txtMinutes = "";
txtSeconds = "";
txtMilliseconds = "";
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
_root.Timer_update();
stop();
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
  </details>
</details>
<details/>
  <summary>DefineSprite (1002: ShineSpriteClip)</summary>
  <details/>
      <summary>frame 1</summary>
      <details/>
        <summary>DoAction</summary>

```
stop();
if(invis == undefined)
{
   invis = false;
}
if(LevelDesigner == undefined)
{
   LevelDesigner = false;
}
if(firstrun == undefined)
{
   if(LevelDesigner == true)
   {
      trace(_root.LDRedCoin);
      if(_root.LDRedCoin > 0 || _root.LDSilverStar > 0)
      {
         invis = true;
      }
   }
   firstrun = true;
}
onEnterFrame = function()
{
   if(invis == false)
   {
      if(_root.Star[starnum] == true)
      {
         if(alternateoldframe !== true)
         {
            gotoAndStop(2);
         }
         else
         {
            _alpha = 50;
            gotoAndStop(1);
         }
      }
      else
      {
         gotoAndStop(1);
      }
      if(this.box.hitTest(_root.Course.Char._x * _root.coursescale / 100 + _root.Course._x,(_root.Course.Char._y - 20) * _root.coursescale / 100 + _root.Course._y,true))
      {
         if(LevelDesigner !== true)
         {
            if(_root.Star[starnum] == false)
            {
               _root.Star[starnum] = true;
               _root.LastItemGot = "gotStar";
            }
            else
            {
               _root.LastItemGot = "oldStar";
            }
            _root.newstar = true;
            _root.lastPlayinglevel = _root.Playinglevel;
            _root.lastStarnamenum = starnum;
         }
         _root.Invincible = false;
         _root.Metal = false;
         _root.Invisible = false;
         _root.PowerTimer = 0;
         _root.Course.Char.attack = true;
         _root.Course.Char.attackFrame = "Star";
         _root.Course.Char.xspeed = 0;
         _root.Course.Char.yspeed = _root.Course.Char.yspeed / 2;
         _root.Course.Char._x = _X + _parent._x;
         _root.Course.Char._y = _Y + _parent._y + 20 * _root.coursescale / 100;
         if(_root.ILTimerUpdateMode == "ALWAYS")
         {
            _root.Timer_stop();
         }
         else
         {
            _root.Timer_update();
         }
         gotoAndStop("Gone");
      }
   }
   else
   {
      gotoAndStop("Invis");
   }
};
if(invis == false)
{
   if(_root.Star[starnum] == true)
   {
      if(alternateoldframe !== true)
      {
         gotoAndStop(2);
      }
      else
      {
         _alpha = 50;
         gotoAndStop(1);
      }
   }
   else
   {
      gotoAndStop(1);
   }
}
else
{
   gotoAndStop(3);
}
```
   </details>
  </details>
</details>
<details/>
  <summary>frame 1</summary>
  <details/>
      <summary>DoAction_3</summary>
  
```
NewgroundsAPI.connectMovie(8160);
frtxt = "running";
_root.ILTimer = 0;
_root.ILTimerLastUpdate = 0;
_root.ILTimerState = "RUN";
_root.ILTimerAvoidRepeat = 0;
_root.ILTimerDispMode = "NORMAL";
_root.ILTimerUpdateMode = "LOADINGZONE";
```
  </details>
</details>
