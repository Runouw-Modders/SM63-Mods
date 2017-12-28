# sound.swf

### Effect(s) of this SWF
This SWF replaces the background music in a level with an .mp3 file inputted through an `audio` tag.

### How this SWF should be used
This SWF should be loaded in the level title, and requires `stringData.swf`.

### Level code to load this SWF
`%3Cimg%20src%3D%22https%3A%2F%2Fraw%2Egithubusercontent%2Ecom%2FRunouw%2DModders%2FSM63%2DMods%2Fmaster%2Fpublic%2Fsound%2Eswf%22%3E`

### Tag(s)
<details/>
  <summary>audio</summary>

`%3Caudio%3AyourMP3URLHere%3E`
</details>

### Author(s) of this SWF
Jhynjhiruu

### Code
<details/>
  <summary>frame 1</summary>
  <details/>
      <summary>DoAction</summary>
        
```
if(_root.installed != true)
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
_root.installed = true;
_root.KeyPlus = function()
{
   _root.installed = false;
   if(Key.isDown(33) || Key.isDown(187))
   {
      return true;
   }
   return false;
};
```
  </details>
</details>
