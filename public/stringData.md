# stringData.swf

### Effect(s) of this SWF
This SWF creates a function, `_root.stringData();`, which takes two inputs, both strings. This SWF is used to store data in strings, in the format `<myVar:12345>` or `<myVar2:hello world>`. If `<myVar:12345>` were to be put in a level title, `_root.stringData("myVar", _root.LDCourseName);` would return `12345`.

### How this SWF should be used
This SWF should be loaded in the level title.

### Level code to load this SWF
`%3Cimg%20src%3D%22https%3A%2F%2Fraw%2Egithubusercontent%2Ecom%2FRunouw%2DModders%2FSM63%2DMods%2Fmaster%2Fpublic%2FstringData%2Eswf%22%3E`

### Author(s) of this SWF
Forgotten, Jhynjhiruu

### Code
<details/>
  <summary>frame 1</summary>
  <details/>
      <summary>doAction</summary>
      
```
_root.stringData = function(search, string)
{
   if(string.indexOf("<" + search + ":") != -1)
   {
      i = string;
      i = i.slice(i.indexOf("<" + search + ":"));
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
};
```
  </details>
</details>
 
