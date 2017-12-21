# SM63_Chaos_Edition.swf

### Effect(s) of this SWF
This SWF displays a menu with 3 options: Activate, Randomise and Return to title; Activate activates Chaos Edition, Randomise performs a randomisation, if the Activate button has already been pressed, and Return to title returns the game to the title screen.

### How this SWF should be used
This SWF should be loaded in a sign.

### Level code to load this SWF
`%3Cimg%20src%3D%22https%3A%2F%2Fraw%2Egithubusercontent%2Ecom%2FRunouw%2DModders%2FSM63%2DMods%2Fmaster%2Fpublic%2FSM63%5FChaos%5FEdition%2Eswf%22%3E`

### Author(s) of this SWF
Forgotten, Jhynjhiruu

### Code
```actionscript
_root.randomCounter = 0;
_root.importantLevels = [["8-12","H"],["8-16",""],["8-E2-2",""],["8-E5-4",""]];
_root.badCourses = ["C-13","8-15"];
_root.songRandomCounter = 0;
_root.bGRandomCounter = 0;
_root.debugMode = false;
_root.randomisations = [true,true,true,true,true,true,true,true,true];
_root.availableChars = ["Mario","Luigi"];
_root.Fludds = ["","","","","","","","","H","H","H","H","H","H","H","H","H","H","H","H","H","H","H","H","R","R","R","R","R","R","R","R","T","T","T","T","S"];
_root.randomSongs = [["Bombomb Battlefield Intro","Bombomb Battlefield Repeat"],["Boos Mansion - Intro","Boos Mansion - Repeat"],["BowserTrapIntro","BowserTrapRepeat"],["Bowsers Theme - Intro","Bowsers Theme - Repeat"],["BuoyBaseGalaxy(Dry)-Intro","BuoyBaseGalaxy(Dry)-Repeat"],["None","Danger Ahead"],["Gritzy Desert (SSBB) Intro","Gritzy Desert (SSBB) Repeat"],["HazyMazeCave-Intro","HazyMazeCave-Haze"],["HazyMazeCave-Intro","HazyMazeCave-Rock"],["None","InsidetheCastleWalls"],["Melty Molten Galaxy - Intro","Melty Molten Galaxy - Repeat"],["NSMBLandIntro","NSMBLandRepeat"],["PrincessPeachesCastle-Intro","PrincessPeachesCastle-Repeat"],["Rainbow Ride - Intro","Rainbow Ride - Repeat"],["Secret Course - Intro","Secret Course - Repeat"],["Snowmans Land - Intro","Snowmans Land - Repeat"],["SuperMarioGalaxyPurpleCoin-Intro","SuperMarioGalaxyPurpleCoin-Repeat"]];
_root.randomBGs = ["GrassandHillsBG","CastleColoredBGHigh","CastleColoredBG","C-13BG","3-BG","5-5BG","GrassandHillsBG2","7-MountainsBG","7-MountainsBG2","8-13BG","8-14BG","8-15BG","8-16BG","BC-1BG","BC-2BG","BC-3BG"];
_root.randomFarBGs = ["CloudBackground","CastleColoredFarBG","K-1FarBG","4-farBG","C-13FarBG","1-FarBG","SecretLevelBG","2-farBG","3-farBG","4-1BG","5-5FarBG","6-farBG","MovingCloudsBackground","SpaceFarBG","SpaceFarBG2","BowsersTrap1BG","1UpBG","M1-Background","LD-Black"];
_root.randomMidBGs = ["2-1MidBG","2-2AMidBG","5-3MidBG","5-1CloseBG","5-5MidBG","8-2MidBG","8-InsideFarBG","8-7MidBG","8-UpperInsideMidBG","8-15MidBG","8-16MidBG","M1-1MidBG","M2-3MidBG"];
_root.randomCloseBGs = ["5-1CloseBG","5-2CloseBG","5-3CloseBG","5-4CloseBG","5-5CloseBG","5-8CloseBG","7-6CloseBG","8-1CloseBG","8-2CloseBG","8-InsideCloseBG","8-UpperInsideCloseBG","8-13CloseBG","8-16CloseBG","BC-1CloseBG","BC-2CloseBG","BC-3CloseBG","8-E1-1CloseBG","8-E1-2CloseBG","8-E1-2-2CloseBG","8-E5-4CloseBG","9-02CloseBG","M1-1CloseBG","M1-2CloseBG","M2-1CloseBG","M2-3CloseBG","M3-1CloseBG","M3-2CloseBG","LD-CastleLavaCloseBG"];
_root.trueFalse = [true,false];
_root.WiiMode = false;
_root.checkDebug = function()
{
   if(!(Key.isDown(84) || Key.isDown(79)))
   {
      _root.debugKey = false;
   }
};
_root.toggleDebug = function()
{
   if((Key.isDown(84) || Key.isDown(79)) && _root.debugKey == false)
   {
      _root.debugKey = true;
      if(_root.debugMode == false)
      {
         _root.debugMode = true;
      }
      else
      {
         _root.debugMode = false;
      }
      _root.AreaTextClipF("Debug mode = " + _root.debugMode,24);
   }
};
_root.randomise = function()
{
   _root.randomisePlayer();
   _root.randomiseWiiMode();
   _root.randomiseGravity();
   _root.randomiseJumpSpeed();
   _root.randomisePowerups();
};
_root.randomisePlayer = function()
{
   if(_root.randomisations[0] == true)
   {
      _root.CurrentPlayer = _root.availableChars[random(2)];
   }
   if(_root.randomisations[1] == true)
   {
      _root.doFluddRandom = true;
      _root.randomiseFludd();
   }
};
_root.randomiseWiiMode = function()
{
   if(_root.randomisations[2] == true)
   {
      _root.WiiMode = _root.trueFalse[random(2)];
   }
};
_root.randomiseGravity = function()
{
   if(_root.randomisations[3] == true)
   {
      _root.gravity = (random(9) + 1) / 12.5;
   }
};
_root.randomiseJumpSpeed = function()
{
   if(_root.randomisations[4] == true)
   {
      _root.Mariojumpspeed = (random(99) + 10) / 7;
      _root.Mariojumpspeed = _root.Mariojumpspeed ^ 3;
      _root.Mariojumpspeed = _root.Mariojumpspeed + 1;
      _root.Luigijumpspeed = (random(99) + 10) / 7;
      _root.Luigijumpspeed = _root.Luigijumpspeed ^ 3;
      _root.Luigijumpspeed = _root.Luigijumpspeed + 1;
      _root.jumpspeed = (random(99) + 10) / 7;
      _root.jumpspeed = _root.jumpspeed ^ 3;
      _root.jumpspeed = _root.jumpspeed + 1;
   }
};
_root.randomisePowerups = function()
{
   if(_root.randomisations[5] == true)
   {
      _root.PowerTimer = random(1000000);
      _root.Invincible = _root.trueFalse[random(2)];
      _root.Metal = _root.trueFalse[random(2)];
      _root.Invisible = _root.trueFalse[random(2)];
      _root.WingCap = _root.trueFalse[random(2)];
   }
};
_root.randomBG = function()
{
   if(_root.randomisations[7] == true)
   {
      iii = _root.FarBackground.getDepth();
      _root.attachMovie(_root.randomFarBGs[random(18)],"FarBackground",iii,{_x:_root.screensizeX / 2,_y:_root.screensizeY / 2});
      ii = _root.BGCourse.getDepth();
      iii = _root.BGCourse.BG.getDepth();
      _root.BGCourse.removeMovieClip();
      _root.createEmptyMovieClip("BGCourse",ii);
      _root.BGCourse._y = _root.screensizeY / 2;
      _root.BGCourse._x = _root.screensizeX / 2;
      _root.BGCourse.attachMovie(_root.randomBGs[random(15)],"BG",iii,{_x:0,_y:0});
      ii = _root.MidBackground.getDepth();
      iii = _root.MidBackground.BG.getDepth();
      _root.MidBackground.removeMovieClip();
      _root.createEmptyMovieClip("MidBackground",ii);
      _root.MidBackground._y = _root.screensizeY / 2;
      _root.MidBackground._x = _root.screensizeX / 2;
      _root.MidBackground.attachMovie(_root.randomMidBGs[random(12)],"BG",iii,{_x:0,_y:0});
      ii = _root.BGCloseCourse.getDepth();
      iii = _root.BGCloseCourse.BG.getDepth();
      _root.BGCloseCourse.removeMovieClip();
      _root.createEmptyMovieClip("BGCloseCourse",ii);
      _root.BGCloseCourse._y = _root.screensizeY / 2;
      _root.BGCloseCourse._x = _root.screensizeX / 2;
      _root.BGCloseCourse.attachMovie(_root.randomCloseBGs[random(27)],"BG",iii,{_x:0,_y:0});
   }
};
_root.randomiseFludd = function()
{
   if(_root.doFluddRandom == true)
   {
      _root.Fluddpow = _root.Fludds[random(37)];
      _root.doFluddRandom = false;
      fluddchanged = true;
   }
};
_root.randomiseBGSong = function()
{
   if(_root.randomisations[6] == true)
   {
      _root.songRandom = random(16);
      _root.SongIntro = _root.randomSongs[_root.songRandom][0];
      _root.SongRepeat = _root.randomSongs[_root.songRandom][1];
      _root.PlayMusicAndIntro();
   }
};
_root.KeySHIFT = function()
{
   return false;
};
_root.ChangeFludd = function()
{
   if(fluddchanged == true)
   {
      _root.Mariosound = new Sound(this);
      _root.Mariosound.attachSound("FluddSwitch");
      _root.Mariosound.start(0,1);
      _root.Mariosound.setVolume(_root.MarioVolume);
      fluddchanged = false;
   }
};
_root.KeyPlus = function()
{
   _root.checkDebug();
   _root.toggleDebug();
   _root.KeyMinus = function()
   {
      if(Key.isDown(34) || Key.isDown(189))
      {
         if(_root.debugMode == true)
         {
            _root.CinemaMessage = unescape("%20%3Cimg%20src%3D%22%2Fpayload%2Eswf%22%3E");
         }
         return true;
      }
      return false;
   };
   _root.CanSwitchFludd = false;
   _root.randomCounter++;
   if(_root.randomCounter >= 900)
   {
      _root.randomCounter = random(900);
      _root.randomise();
   }
   _root.songRandomCounter++;
   if(_root.songRandomCounter >= 900)
   {
      _root.songRandomCounter = random(900);
      _root.randomiseBGSong();
   }
   _root.bGRandomCounter++;
   if(_root.bGRandomCounter >= 900)
   {
      _root.bGRandomCounter = random(900);
      _root.randomBG();
   }
   i = 0;
   while(i < 4)
   {
      if(_root.playingcourse == _root.importantLevels[i][0])
      {
         _root.Fluddpow = _root.importantLevels[i][1];
      }
      i++;
   }
   _root.randomisations[7] = true;
   j = 0;
   while(j < 4)
   {
      if(_root.playingcourse == _root.badCourses[j])
      {
         _root.randomisations[7] = false;
      }
      j++;
   }
   if(Key.isDown(33) || Key.isDown(187))
   {
      return true;
   }
   return false;
};
_root.generateRandomString = function(strlen)
{
   _root.randomChars = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9"];
   charsLen = 61;
   strOut = "";
   strCount = 0;
   while(strCount < strlen)
   {
      strOut = strOut + randomChars[random(61)];
      strCount++;
   }
   return strOut;
};
_root.PlayMessage = function(a)
{
   if(_root.randomisations[8] == true)
   {
      _root.Stats.Message.gotoAndPlay(1);
      _root.Stats.Message.mtext = _root.generateRandomString(7);
   }
   else
   {
      _root.Stats.Message.gotoAndPlay(1);
      _root.Stats.Message.mtext = a;
   }
};
```
