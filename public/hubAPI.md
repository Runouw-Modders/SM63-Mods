# hubAPI.swf

### Effects of this SWF
This SWF adds code to allow anyone to make a level hub.

### How this SWF should be used
This SWF should be loaded in a sign or level title, preferably level title. Put `<url:(url)>` in a sign to load level data from a URL, or `<id:(level ID)>` to load level data from runouw.com.

### Level code to load this SWF
`%3Cimg%20src%3D%22https%3A%2F%2Fraw%2Egithubusercontent%2Ecom%2FRunouw%2DModders%2FSM63%2DMods%2Fmaster%2Fpublic%2FhubAPI%2Eswf%22%3E`

### URL for LD2.5
`https://raw.githubusercontent.com/Runouw-Modders/SM63-Mods/master/public/hubAPI.swf`

### Author of this SWF
Jhynjhiruu

### Code
<details/>
  <summary>frame 1</summary>
  <details/>
      <summary>DoAction</summary>
        
```
if(_root.hubAPIInstalled != true)
{
   System.security.allowDomain("https://raw.githubusercontent.com/");
   System.security.loadPolicyFile("https://raw.githubusercontent.com/Runouw-Modders/SM63-Mods/master/crossdomain.xml");
   _root.hubAPIInstalled = true;
   trace("hubAPI v1.1.2 installed");
   _root.loadCourseFromData = function(data)
   {
      _root.levelCodeToLoad = data.toString();
      _root.RemoveCourse();
      _root.TestLevel();
      _root.defaultCourse();
   };
   _root.getDataFromID = function(id)
   {
      _root.idCode = new LoadVars();
      _root.idCode.onLoad = function(success)
      {
         trace(_root.idCode.code);
         if(success)
         {
            _root.loadCourseFromData(_root.idCode.code);
         }
         else
         {
            trace("Error connecting to server, runouw.com is probably down");
            _root.loadCourseFromData("50x30~0*28*2K2M0*28*2K2M0*28*2K2M0*28*2K2M0*28*2K2M0*28*2K2M0*28*2K2M0*28*2K2M0*28*2K2M0*28*2K2M0*28*2K2M0*28*2K2M0*28*2K2M0*28*2K2M0*28*2K2M0*28*2K2M0*28*2K2M0*28*2K2M0*28*2K2M0*28*2K2M0*28*2K2M0*28*2K2M0*28*2K2M0*28*2K2M0*28*2K2M0*28*2K2M0*28*2K2M0*28*2K2M0*28*2K2M0*28*2K2M0*28*2K2M0*28*2K2M0*28*2K2M0*28*2K2M0*28*2K2M0*28*2K2M0*28*2K2M0*28*2K2M0*28*2K2M0*28*2K2M0*28*2K2M0*28*2K2M0*28*2K2M0*28*2K2M0*28*2K2M0*28*2K2M0*28*2K2M0*28*2K2M0*28*2K2M0*28*2K2M~1,64,832,0,0,Right~1~1~My%20Level");
         }
      };
      _root.getServer = new LoadVars();
      _root.getServer.id = id;
      _root.getServer.sendAndLoad("http://runouw.com/levels/leveldesigner/getstats.php",_root.idCode,"POST");
   };
   _root.loadCourseFromURL = function(url)
   {
      _root.data = new LoadVars();
      _root.data.onData = function(content)
      {
         _root.loadCourseFromData(content);
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
      trace("default course set to " + _root.originalCode);
      _root.levelCodeToLoad = _root.originalCode;
   };
   _root.PlayMessage = function(a)
   {
      _root.toLoadID = _root.stringData("id",a);
      _root.toLoadURL = _root.stringData("url",a);
      trace(_root.toLoadID);
      trace(_root.toLoadURL);
      if(_root.toLoadID != null && _root.toLoadID != "" && _root.toLoadID != undefined)
      {
         _root.originalCode = _root.GetCode();
         _root.getDataFromID(_root.toLoadID);
      }
      else if(_root.toLoadURL != null && _root.toLoadURL != "" && _root.toLoadURL != undefined)
      {
         _root.originalCode = _root.GetCode();
         _root.loadCourseFromURL(_root.toLoadURL);
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
   _root.playWalkSound = function()
   {
      if(_root.playedStepSound != _root.StepSound)
      {
         _root.playedStepSound = _root.StepSound;
         _root.walksound = new Sound(this);
         _root.walksound.attachSound(_root.StepSound);
      }
      _root.walksound.start(0,1);
      _root.walksound.setVolume(_root.MarioVolume);
   };
   _root.resetPan = function()
   {
      _root.bgsong.setPan(0);
      _root.Course.Char.watersoundclip.setPan(0);
   };
   setInterval(_root.resetPan,31.25);
}
```
  </details>
</details>
