# cinema.swf

### Effect(s) of this SWF
This SWF allows a sign message to be displayed as a CinemaMessage instead, with the border selectable with the `<cinemamessage:x>` tag.

### How this SWF should be used
This SWF should be loaded in the level title. Any signs that will use the mod should have `<cinemamessage:x>`, with `x` representing the selected border, in them; a new bubble can be indicated with `!n`. `stringData.swf` is also required.

### Level code to load this SWF
`%3Cimg%20src%3D%22https%3A%2F%2Fraw%2Egithubusercontent%2Ecom%2FRunouw%2DModders%2FSM63%2DMods%2Fmaster%2Fpublic%2Fcinema%2Eswf%22%3E`

### URL for LD2.5
`https://raw.githubusercontent.com/Runouw-Modders/SM63-Mods/master/public/cinema.swf`

### Author(s) of this SWF
Jhynjhiruu

### Code
<details/>
  <summary>frame 1</summary>
  <details/>
    <summary>doAction</summary>
    
```
if(_root.cinema != true)
{
   _root.cinema = true;
   _root.SetCinemaMessageQueue = function(queue)
   {
      if(queue[-1] != "")
      {
         queue.push("");
      }
      _root.CinemaMessageQueue = queue;
      _root.CinemaMessageIndex = 0;
      _root.CinemaMessage = queue[0];
      _root.DoCinemaMessageUpdate = true;
      _root.PauseGame = true;
      lastframeZ = _root.KeyZ();
      _root.StopMessage();
   };
   _root.UpdateCinemaMessage = function()
   {
      if(_root.KeyZ() == true && lastframeZ !== true && _root.CinemaMessageFinished == true)
      {
         _root.CinemaMessage = _root.CinemaMessageQueue[++_root.CinemaMessageIndex];
      }
      if(_root.CinemaMessage == "")
      {
         _root.DoCinemaMessageUpdate = false;
         _root.PauseGame = false;
         _root.playpause = false;
         _root.Course.Char.attack = false;
         _root.Course.Char.attackFrame = "";
         _root.ZCooldown = 10;
      }
      else
      {
         _root.PauseGame = true;
         _root.playpause = true;
         _root.Course.Char.attack = true;
         _root.Course.Char.attackFrame = "Sign";
      }
      lastframeZ = _root.KeyZ();
   };
   _root.newPM = _root.PlayMessage;
   _root.PlayMessage = function(a)
   {
      if(_root.stringData(a,"cinemamessage") != null)
      {
         _root.CinemaMessageFrame = _root.stringData(a,"cinemamessage");
         _root.SetCinemaMessageQueue(a.split("!n"));
      }
      else
      {
         _root.newPM(a);
      }
   };
   _root.newKP = _root.KeyPlus;
   _root.KeyPlus = function()
   {
      if(_root.DoCinemaMessageUpdate)
      {
         _root.UpdateCinemaMessage();
      }
      return _root.newKP();
   };
   _root.newSM = _root.StopMessage;
   _root.StopMessage = function()
   {
      if(_root.DoCinemaMessageUpdate)
      {
         return undefined;
      }
      _root.newSM();
   };
   _root.ZCooldown = 0;
   _root.newKZ = _root.KeyZ;
   _root.KeyZ = function()
   {
      if(_root.ZCooldown <= 0)
      {
         return _root.newKZ();
      }
      _root.ZCooldown--;
      return false;
   };
}
```
  </details>
</details>
