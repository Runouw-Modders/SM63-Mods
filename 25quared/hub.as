if(_root.hub25quared != true)
{
   _root.hub25quared = true;
   trace("25quared hub mod installed successfully, v0.1.0");
   _root.helpSign = function()
   {
      _root.PlayMessage("Welcome to the 6th 25quared LDC\'s hub level! Confused? Open the sign on the far left to open Last Legacy: Null Space - note that there isn\'t a level hub in LL:NS, nor any LL:NS levels in this LDC. The bottom left sign in the grid is megar\'s level, the bottom right sign opens Sapi\'s, the top left is FL\'s entry and the top right is Charcoal\'s submission. Finally, press \'H\' at any time while in the hub to display this help.");
      _root.Course.Char.yspeed = 0;
      _root.Course.Char.xspeed = 0;
      _root.Course.Char.attack = true;
      _root.Course.Char.attackFrame = "Sign";
      _root.exitSign = function()
      {
         if(_root.KeyZ())
         {
            _root.StopMessage();
            clearInterval(_root.exitSignInterval);
            _root.Course.Char.attack = false;
            _root.Course.Char.attackFrame = "";
            _root.keyHPressed = false;
            _root.doOpenHelpSign = true;
         }
      };
      _root.exitSignInterval = setInterval(_root.exitSign,31.25);
   };
   _root.helpSign();
   _root.keyHPressed = false;
   _root.openHelpSign = function()
   {
      if(_root.keyHPressed == false && Key.isDown(72))
      {
         _root.keyHPressed = true;
         _root.doOpenHelpSign = false;
         _root.helpSign();
      }
   };
   _root.KeyPlus = function()
   {
      if(_root.doOpenHelpSign)
      {
         _root.openHelpSign();
      }
      if(Key.isDown(33) || Key.isDown(187))
      {
         return true;
      }
      return false;
   };
   _root.loadCourseFromURL = function(url)
   {
      _root.data = new LoadVars();
      _root.data.onData = function(content)
      {
         _root.levelCodeToLoad = content.toString();
         _root.RemoveCourse();
         _root.TestLevel();
         _root.defaultCourse();
         _root.doOpenHelpSign = false;
      };
      _root.data.load(url);
   };
   _root.stringData = function(a, b)
   {
      if(string.indexOf("<" + a + ":") != -1)
      {
         i = b;
         i = i.slice(i.indexOf("<" + a + ":"));
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
      return null;
   };
   _root.stringReplace = function(str, find, replace)
   {
      return str.split(find).join(replace);
   };
   _root.defaultCourse = function()
   {
      _root.data = new LoadVars();
      _root.data.onData = function(content)
      {
         _root.levelCodeToLoad = content.toString();
      };
      _root.data.load("https://raw.githubusercontent.com/Runouw-Modders/SM63-Mods/master/25quared/hub.txt");
   };
   _root.PlayMessage = function(a)
   {
      if(_root.stringData("ll",a) == "load")
      {
         _root.loadMovie("https://raw.githubusercontent.com/Runouw-Modders/SM63-Mods/master/25quared/lastlegacy.swf");
      }
      _root.toLoad = _root.stringData("level",a);
      trace(_root.toLoad);
      if(_root.toLoad != null && _root.toLoad != "" && _root.toLoad != undefined)
      {
         _root.loadCourseFromURL("https://raw.githubusercontent.com/Runouw-Modders/SM63-Mods/master/25quared/" + _root.toLoad + ".txt");
      }
      else
      {
         _root.Stats.Message.gotoAndPlay(1);
         _root.Stats.Message.mtext = a;
      }
   };
   _root.RemoveCourse = function()
   {
      if(_root.levelCodeToLoad != null)
      {
         _root.doOpenHelpSign = true;
         trace(_root.levelCodeToLoad);
         _root.LoadCourseFromCode(_root.levelCodeToLoad);
         _root.levelCodeToLoad = null;
         _root.RemoveLevelDesigner();
      }
      _root.pointer.removeMovieClip(_root.pointer);
      _root.Stats.removeMovieClip(_root.Stats);
      _root.Course.removeMovieClip(_root.Course);
      _root.BGCourse.removeMovieClip(_root.BGCourse);
      _root.MidBackground.removeMovieClip(_root.MidBackground);
      _root.BGCloseCourse.removeMovieClip(_root.BGCloseCourse);
      _root.FarBackground.removeMovieClip(_root.FarBackground);
      _root.Blackout.removeMovieClip(_root.Blackout);
      _root.onEnterFrame = null;
   };
   _root.PlayMusicAndIntro = function()
   {
      if(_root.stringReplace(_root.LDCourseName,"<audio:","") != _root.LDCourseName)
      {
         _root.audioExt = _root.stringData("audio",_root.LDCourseName);
         _root.bgsong.stop();
         _root.bgsong = new Sound(soundLoader);
         _root.bgsong.loadSound(_root.audioExt,true);
         _root.bgsong.onSoundComplete = function()
         {
            _root.bgsong.loadSound(_root.audioExt,true);
         };
      }
      else if(_root.SongIntro !== undefined && _root.SongIntro !== "None")
      {
         _root.StopBGsong();
         _root.bgsong.stop();
         _root.bgsong = new Sound(this);
         _root.bgsong.attachSound(_root.SongIntro);
         if(_root.MuteBGMusic == false)
         {
            _root.bgsong.start(0,1);
         }
         _root.bgsong.setVolume(_root.BgVolume);
         _root.bgsong.onSoundComplete = function()
         {
            _root.bgsong.attachSound(_root.SongRepeat);
            if(_root.MuteBGMusic == false)
            {
               _root.bgsong.start(0,999);
            }
            _root.bgsong.setVolume(_root.BgVolume);
         };
      }
      else
      {
         _root.StopBGsong();
         _root.bgsong.stop();
         _root.bgsong = new Sound(this);
         _root.bgsong.attachSound(_root.SongRepeat);
         if(_root.MuteBGMusic == false)
         {
            _root.bgsong.start(0,999);
         }
         _root.bgsong.setVolume(_root.BgVolume);
         _root.bgsong.onSoundComplete = function()
         {
            _root.bgsong.attachSound(_root.SongRepeat);
            if(_root.MuteBGMusic == false)
            {
               _root.bgsong.start(0,999);
            }
            _root.bgsong.setVolume(_root.BgVolume);
         };
      }
   };
   _root.resetPan = function()
   {
      _root.walksound.setPan(0);
      _root.bgsong.setPan(0);
      _root.Course.Char.watersoundclip.setPan(0);
   };
   setInterval(_root.resetPan,31.25);
}
