# LDE.swf

### Effect(s) of this SWF
This SWF adds many new features to the level designer. These include respawning, checkpoints, and a manual timer. Some additional code is also present, including stringData, stringReplace and LD saving.

### How this SWF should be used
This SWF should be loaded in the level title. The `<usesTimer:true/false>` tag should be included (although this isn't necessary). Before the timer is started, either user-defined text, inputted through `<preTimer:textGoesHere>` in the level title, or a fallback message, will be displayed in any signs with `%timer%` in them. After the timer has been started, the text in the sign will be displayed, except `%timer%` itself will be replaced with the final time. Pressing **T** will start the timer, and opening a sign with `%timer%` in it will stop the timer.
`%checkpoint%` will be removed from any sign that contains it, and the sign will become a checkpoint.
Additionally, if the `<respawnButton:true/false>` tag is included in the level title and set to `true`, pressing the **R** button ingame will perform a respawn.

### Level code to load this SWF
`%3Cimg%20src%3D%22https%3A%2F%2Fraw%2Egithubusercontent%2Ecom%2FRunouw%2DModders%2FSM63%2DMods%2Fmaster%2Fpublic%2FLDE%2Eswf%22%3E`

### Author(s) of this SWF
Jhynjhiruu, Forgotten, Shad

### Tags
<details/>
  <summary>usesTimer</summary>
  <details/>
    <summary>true</summary>

`%3CusesTimer%3Atrue%3E`
  </details>
  <details/>
    <summary>false</summary>
    
`%3CusesTimer%3Afalse%3E`
  </details>
</details>
<details/>
  <summary>preTimer</summary>

`%3CpreTimer%3AyourTextHere%3E`
  </details>
</details>
<details/>
  <summary>respawnButton</summary>
  <details/>
    <summary>true</summary>

`%3CrespawnButton%3Atrue%3E`
  </details>
  <details/>
    <summary>false</summary>
    
`%3CrespawnButton%3Afalse%3E`
  </details>
</details>

### Code
<details/>
  <summary>frame 1</summary>
  <details/>
      <summary>DoAction</summary>
        
```
_root.stringData = function(search, string)
{
   if(string.indexOf("<" + search + ":") != -1)
   {
      i = string;
      i = i.slice(i.indexOf("<" + search + ":"));
      if(i.indexOf("<",1) != -1)
      {
         i = i.slice(0,i.indexOf("<",1));
      }
      if(i.indexOf(">") != -1)
      {
         i = i.slice(i.indexOf(":") + 1,i.indexOf(">"));
         if(isNaN(Number(i)) == false)
         {
            return Number(i);
         }
         return i;
      }
   }
};
_root.stringReplace = function(str, find, replace)
{
   return str.split(find).join(replace);
};
_root.saveLDData = function(name, data)
{
   _root.ldsaves = SharedObject.getLocal("LDSaves");
   _root.ldsaves.data[_root.LDCourseName][name] = data;
   _root.ldsaves.flush();
};
_root.loadLDData = function(name)
{
   _root.ldsaves = SharedObject.getLocal("LDSaves");
   return _root.ldsaves.data[_root.LDCourseName][name];
};
_root.checkpointX = Number(_root.startX) + _root.leftWidth * 32;
_root.checkpointY = Number(_root.startY);
if(_root.loadLDData("checkpointx") != undefined)
{
   _root.checkpointX = Number(_root.loadLDData("checkpointx"));
   _root.checkpointY = Number(_root.loadLDData("checkpointy"));
}
_root.timerX = Number(_root.startX) + _root.leftWidth * 32;
_root.timerY = Number(_root.startY);
_root.checkpointlevel = _root.LDCourseName;
_root.checkpointfluddh = false;
_root.checkpointfluddr = false;
_root.checkpointfluddt = false;
_root.checkpointfluddpow = "";
_root.inGameTime = 0;
_root.timerRunning = false;
_root.timerOverrun = false;
_root.inGameModifier = "0";
_root.inGameSeconds = 0;
if(_root.LevelSplit != true)
{
   _root.leftWidth = 0;
}
_root.respawnLD = function(type)
{
   _root.Invincible = false;
   _root.Metal = false;
   _root.Invisible = false;
   _root.WingCap = false;
   _root.PowerTimer = 0;
   _root.newstar = false;
   if(type != "timer")
   {
      _root.Course.Char._x = _root.checkpointX + _root.Course.BackGFX._x - _root.leftWidth * 32;
      _root.Course.Char._y = _root.checkpointY + _root.Course.BackGFX._y;
      if(_root.checkpointX == Number(_root.startX) && _root.checkpointY == Number(_root.startY))
      {
         _root.Course.Char.xspeed = Number(_root.startXspeed);
         _root.Course.Char.yspeed = Number(_root.startYspeed);
         _root.checkpointorangepl = 0;
      }
   }
   else
   {
      _root.Course.Char._x = _root.timerX + _root.Course.BackGFX._x - _root.leftWidth * 32;
      _root.Course.Char._y = _root.timerY + _root.Course.BackGFX._y;
      _root.Course.Char.xspeed = Number(_root.startXspeed);
      _root.Course.Char.yspeed = Number(_root.startYspeed);
      _root.checkpointorangepl = 0;
      _root.inGameTime = 0;
   }
   _root.SaveFluddH = _root.checkpointfluddh;
   _root.SaveFluddR = _root.checkpointfluddr;
   _root.SaveFluddT = _root.checkpointfluddt;
   _root.Fluddpow = _root.checkpointfluddpow;
   _root.OrangeBlockPLCount = _root.checkpointorangepl;
   _root.CharHP = 8;
   _root.WaterHP = 8;
   _root.Course.Char.attack = false;
   _root.attachMovie("StarIn","Transition",_root.getNextHighestDepth(),{_x:_root.screensizeX / 2,_y:_root.screensizeY / 2});
   _root.PlayMusicAndIntro();
   _root.Camspeed = 1;
   _root.MaxCamspeed = 99999;
};
_root.setTimer = function(a)
{
   _root.timerRunning = a;
   if(a == true)
   {
      _root.AreaTextClipF("Timer started!",0);
   }
   else
   {
      _root.AreaTextClipF("Timer stopped!",0);
   }
};
_root.KeySPIN = function()
{
   if(Key.isDown(84) && _root.timerKey == false)
   {
      _root.timerKey = true;
      if(_root.stringData("usesTimer",_root.LDCourseName) == "true")
      {
         _root.setTimer(true);
         _root.respawnLD("timer");
      }
   }
   else if(Key.isDown(84) == false)
   {
      _root.timerKey = false;
   }
   if(Key.isDown(82) && _root.respawnKey == false)
   {
      _root.respawnKey = true;
      if(_root.stringData("respawnButton",_root.LDCourseName) != "false")
      {
         if(_root.timerRunning)
         {
            _root.respawnLD("timer");
         }
         else
         {
            _root.respawnLD("regular");
         }
      }
   }
   else if(Key.isDown(82) == false)
   {
      _root.respawnKey = false;
   }
   if(_root.timerRunning)
   {
      if(_root.inGameTime < 319968)
      {
         _root.inGameTime++;
         _root.inGameSeconds = _root.inGameTime / 32;
         if(_root.inGameSeconds / 60 < 10)
         {
            _root.minutesExtra = "0";
         }
         else
         {
            _root.minutesExtra = "";
         }
         if(_root.inGameSeconds % 60 < 10)
         {
            _root.secondsExtra = "0";
         }
         else
         {
            _root.secondsExtra = "";
         }
         _root.timerSeconds = _root.inGameSeconds % 1;
         _root.timerSecondsMaths = Math.floor(_root.inGameSeconds % 60) + _root.timerSeconds;
         _root.timerMinutes = Math.floor(_root.inGameSeconds / 60);
         _root.TextHint = _root.minutesExtra + _root.timerMinutes + ":" + _root.secondsExtra + _root.timerSecondsMaths;
         _root.timerOverrun = false;
      }
      else
      {
         _root.inGameTime = 319968;
         _root.setTimer(false);
         _root.timerOverrun = true;
      }
   }
   if(Key.isDown(88))
   {
      return true;
   }
   return false;
};
_root.resetFunction = function()
{
   _root.KeySPIN = function()
   {
      if(Key.isDown(88))
      {
         return true;
      }
      return false;
   };
};
_root.LifeLost = function()
{
   _root.Invincible = false;
   _root.Metal = false;
   _root.Invisible = false;
   _root.WingCap = false;
   _root.PowerTimer = 0;
   _root.StopBGsong();
   if(_root.PlayingLevelDesigner !== true)
   {
      if(_root.TotalStars == 0)
      {
         _root.CharLives = _root.CharLives + 1;
      }
      _root.CharLives = _root.CharLives - 1;
      if(_root.CharLives < 0)
      {
         _root.CharLives = 4;
         _root.newstar = true;
         _root.LastItemGot = "GameOver";
         _root.RemoveCourse();
         _root.ReturnToCastle();
      }
      else
      {
         _root.attachMovie("LifeLost","LifeLost" + _root.getNextHighestDepth(),_root.getNextHighestDepth(),{_x:_root.screensizeX / 2,_y:_root.screensizeY / 2});
      }
   }
   else if(_root.LDCourseName == _root.checkpointlevel)
   {
      if(_root.timerRunning)
      {
         _root.respawnLD("timer");
      }
      else
      {
         _root.respawnLD("regular");
      }
   }
   else
   {
      _root.Invincible = false;
      _root.Metal = false;
      _root.Invisible = false;
      _root.WingCap = false;
      _root.PowerTimer = 0;
      _root.newstar = false;
      _root.RemoveCourse();
      _root.CreateLevelDesigner();
   }
};
_root.PlayMessage = function(a)
{
   _root.Stats.Message.gotoAndPlay(1);
   if(_root.checkpointlevel == _root.LDCourseName)
   {
      if(_root.stringReplace(a,"%checkpoint%","") != a)
      {
         _root.checkpointX = _root.Course.Char._x - _root.Course.BackGFX._x + _root.leftWidth * 32;
         _root.checkpointY = _root.Course.Char._y - _root.Course.BackGFX._y;
         _root.saveLDData("checkpointx",_root.checkpointX);
         _root.saveLDData("checkpointy",_root.checkpointY);
         _root.checkpointfluddh = _root.SaveFluddH;
         _root.checkpointfluddr = _root.SaveFluddR;
         _root.checkpointfluddt = _root.SaveFluddT;
         _root.checkpointfluddpow = _root.Fluddpow;
         _root.checkpointorangepl = _root.OrangeBlockPLCount;
         _root.AreaTextClipF("Checkpoint updated!",0);
         _root.Stats.Message.mtext = _root.stringReplace(a,"%checkpoint%","");
      }
      if(_root.stringReplace(a,"%timer%","") != a)
      {
         if(_root.timerOverrun == false)
         {
            if(_root.timerRunning)
            {
               _root.setTimer(false);
               _root.Stats.Message.mtext = _root.stringReplace(a,"%timer%",_root.minutesExtra + _root.timerMinutes + ":" + _root.secondsExtra + _root.timerSecondsMaths);
            }
            else if(_root.stringData("preTimer",_root.LDCourseName) != undefined)
            {
               _root.Stats.Message.mtext = _root.stringData("preTimer",_root.LDCourseName);
            }
            else
            {
               _root.Stats.Message.mtext = "Press \'T\' to begin timing (This will restart you at the beginning of the level, but your checkpoints will not be lost.)";
            }
         }
         else if(_root.stringData("overrun",_root.LDCourseName) != undefined)
         {
            _root.Stats.Message.mtext = _root.stringData("overrun",_root.LDCourseName);
         }
         else
         {
            _root.Stats.Message.mtext = "You took way, way too long! Time\'s up!";
         }
      }
   }
   else
   {
      _root.Stats.Message.mtext = a;
   }
};
```
  </details>
</details>
