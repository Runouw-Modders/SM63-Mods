# sound.swf

### Effect(s) of this SWF
This SWF replaces the background music in a level with an .mp3 file input through an `audio` tag.

### How this SWF should be used
This SWF should be loaded in the level title, and requires `stringData.swf`.

### Level code to load this SWF
`%3Cimg%20src%3D%22https%3A%2F%2Fraw%2Egithubusercontent%2Ecom%2FRunouw%2DModders%2FSM63%2DMods%2Fmaster%2Fpublic%2Fsound%2Eswf%22%3E`

### Tag(s)
<details/>
  <summary>audio</summary>

`%3Caudio%3AyourMP3URLHere%3E`
</details>

### URL for LD2.5
`https://raw.githubusercontent.com/Runouw-Modders/SM63-Mods/master/public/sound.swf`

### Author(s) of this SWF
Jhynjhiruu

### Code
<details/>
  <summary>frame 1</summary>
  <details/>
      <summary>DoAction</summary>
        
```
if(_root.playedMusic == undefined)
{
   _root.playedMusic = true;
   _root.PlayMusicAndIntro = function()
   {
      if(_root.stringReplace(_root.LDCourseName,"<audio:","") != _root.LDCourseName)
      {
         _root.audioExt = _root.stringData(_root.LDCourseName,"audio");
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
   _root.testStringDataLoaded = function()
   {
      if(_root.stringData != undefined)
      {
         _root.PlayMusicAndIntro();
         clearInterval(_root.testStringDataInterval);
      }
   };
   _root.testStringDataInterval = setInterval(_root.testStringDataLoaded,31.25);
}
```
  </details>
</details>
