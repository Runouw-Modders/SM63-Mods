# killPan.swf

### Effect(s) of this SWF
This SWF negates much of the panning found throughout SM63.

### How this SWF should be used
This SWF should be loaded in a sign or level title, preferably level title.

### Level code to load this SWF
`%3Cimg%20src%3D%22https%3A%2F%2Fraw%2Egithubusercontent%2Ecom%2FRunouw%2DModders%2FSM63%2DMods%2Fmaster%2Fpublic%2FkillPan%2Eswf%22%3E`

### URL for LD2.5
`https://raw.githubusercontent.com/Runouw-Modders/SM63-Mods/master/public/killPan.swf`

### Author(s) of this SWF
Jhynjhiruu

### Code
<details/>
  <summary>frame 1</summary>
  <details/>
      <summary>DoAction</summary>

```
if(_root.resetPanInstalled == undefined)
{
   _root.resetPanInstalled = true;
   _root.resetPan = function()
   {
      _root.walksound.setPan(0);
      _root.bgsong.setPan(0);
   };
   setInterval(_root.resetPan,31.25);
}

```
  </details>
</details>
