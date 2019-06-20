# stringData.swf

### Effect(s) of this SWF
This SWF creates a function, `_root.stringData();`, which takes two inputs, both strings. This SWF is used to store data in strings, in the format `<myVar:12345>` or `<myVar2:hello world>`. If `<myVar:12345>` were to be put in a level title, `_root.stringData("myVar", _root.LDCourseName);` would return `12345`.
It also creates a function, `_root.stringReplace();`, which takes three inputs, all strings. This function returns the first input with all instances of the second input replaced with the third.

### How this SWF should be used
This SWF should be loaded in the level title.

### Level code to load this SWF
`%3Cimg%20src%3D%22https%3A%2F%2Fraw%2Egithubusercontent%2Ecom%2FRunouw%2DModders%2FSM63%2DMods%2Fmaster%2Fpublic%2FstringData%2Eswf%22%3E`

### URL for LD2.5
`https://raw.githubusercontent.com/Runouw-Modders/SM63-Mods/master/public/stringData.swf`

### Author(s) of this SWF
Forgotten, Jhynjhiruu

### Code
<details/>
  <summary>frame 1</summary>
  <details/>
      <summary>doAction</summary>

```
if(_root.stringDataInstalled == undefined)
{
   _root.stringDataInstalled = true;
   _root.stringData = function(string, tag)
   {
      if(string.indexOf("<" + tag + ":") != -1)
      {
         var _loc3_ = string;
         _loc3_ = _loc3_.slice(_loc3_.indexOf("<" + tag + ":"));
         if(_loc3_.indexOf("<",1) != -1)
         {
            _loc3_ = _loc3_.slice(0,_loc3_.indexOf("<",1));
         }
         if(_loc3_.indexOf(">") != -1)
         {
            _loc3_ = _loc3_.slice(_loc3_.indexOf(":") + 1,_loc3_.indexOf(">"));
            if(isNaN(Number(_loc3_)) == false)
            {
               return Number(_loc3_);
            }
            if(isNaN(Number(_loc3_)) == true)
            {
               return _loc3_;
            }
         }
         return -1;
      }
   };
   _root.stringReplace = function(str, find, replace)
   {
      return str.split(find).join(replace);
   };
}
```
  </details>
</details>
