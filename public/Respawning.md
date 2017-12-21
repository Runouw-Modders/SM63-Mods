# Respawning.swf

### Effect(s) of this SWF
This SWF injects code to the `_root.LifeLost();` function (among others), and makes the player restart at the beginning of the current level, rather than exiting to the level designer menu.

### How this SWF should be used
This SWF should be loaded in the level title.

### Level code to load this SWF
`%3Cimg%20src%3D%22https%3A%2F%2Fraw%2Egithubusercontent%2Ecom%2FRunouw%2DModders%2FSM63%2DMods%2Fmaster%2Fpublic%2FRespawning%2Eswf%22%3E`

### Author(s) of this SWF
Forgotten, Jhynjhiruu

### Code
<details/>
  <summary>frame 1</summary>
  <details/>
    <summary>doAction</summary>
    
```
_root.respawnX = Number(_root.startX) + _root.leftWidth * 32;
_root.respawnY = Number(_root.startY);
_root.checkpointlevel = _root.LDCourseName;
if(_root.LevelSplit !== true)
{
   _root.leftWidth = 0;
}
_root.respawnLD = function()
{
   _root.Invincible = false;
   _root.Metal = false;
   _root.Invisible = false;
   _root.WingCap = false;
   _root.PowerTimer = 0;
   _root.newstar = false;
   _root.Course.Char._x = _root.respawnX + _root.Course.BackGFX._x - _root.leftWidth * 32;
   _root.Course.Char._y = _root.respawnY + _root.Course.BackGFX._y;
   _root.Course.Char.xspeed = Number(_root.startXspeed);
   _root.Course.Char.yspeed = Number(_root.startYspeed);
   _root.SaveFluddH = false;
   _root.SaveFluddR = false;
   _root.SaveFluddT = false;
   _root.Fluddpow = "";
   _root.OrangeBlockPLCount = 0;
   _root.CharHP = 8;
   _root.WaterHP = 8;
   _root.Course.Char.attack = false;
   _root.attachMovie("StarIn","Transition",_root.getNextHighestDepth(),{_x:_root.screensizeX / 2,_y:_root.screensizeY / 2});
   _root.PlayMusicAndIntro();
   _root.Camspeed = 1;
   _root.MaxCamspeed = 99999;
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
   else if(_root.checkpointlevel == _root.LDCourseName)
   {
      _root.respawnLD();
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
   _root.Stats.Message.mtext = a;
};
```
   </details>
</details>
