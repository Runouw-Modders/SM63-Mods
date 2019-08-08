# Respawning.swf

### Effect(s) of this SWF
This SWF injects code to the `_root.LifeLost();` function (among others), and makes the player restart at the beginning of the current level, rather than exiting to the level designer menu.

### How this SWF should be used
This SWF should be loaded in the level title.

### Level code to load this SWF
`%3Cimg%20src%3D%22https%3A%2F%2Fraw%2Egithubusercontent%2Ecom%2FRunouw%2DModders%2FSM63%2DMods%2Fmaster%2Fpublic%2FRespawning%2Eswf%22%3E`

### URL for LD2.5
`https://raw.githubusercontent.com/Runouw-Modders/SM63-Mods/master/public/Respawning.swf`

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
   _root.attachMovie("StarIn","Transition",_root.getNextHighestDepth(),{_x:_root.screensizeX / 2,_y:_root.screensizeY / 2});
   _root.RestartFludd();
   _root.Fluddpow = "";
   _root.Restartcoins();
   for(var _loc2_ in _root.Course.BackGFX)
   {
      if(_loc2_.substr(0,10) == "SilverStar" || _loc2_.substr(-5,4) == "Coin" || _loc2_.substr(-4,4) == "Coin" || _loc2_.substr(0,15) == "ShineSpriteClip")
      {
         tmpDepth = _root.Course.BackGFX[_loc2_].getDepth();
         tmpX = _root.Course.BackGFX[_loc2_]._x;
         tmpY = _root.Course.BackGFX[_loc2_]._y;
         _root.Course.BackGFX[_loc2_].removeMovieClip(_loc2_);
         _root.Course.BackGFX.attachMovie(_loc2_.substr(0,_loc2_.length - 1),_loc2_,tmpDepth,{_x:tmpX,_y:tmpY,LevelDesigner:true});
      }
   }
   _root.newstar = false;
   _root.Course.Char._x = _root.respawnX + _root.Course.BackGFX._x - _root.leftWidth * 32;
   _root.Course.Char._y = _root.respawnY + _root.Course.BackGFX._y;
   _root.Course.Char.xspeed = Number(_root.startXspeed);
   _root.Course.Char.yspeed = Number(_root.startYspeed);
   _root.OrangeBlockPLCount = 0;
   _root.Course.Char.attack = false;
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
```
   </details>
</details>
