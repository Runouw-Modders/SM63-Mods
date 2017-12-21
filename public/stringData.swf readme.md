# Effect(s) of this SWF
This SWF creates a function, `_root.stringData();`, which takes two inputs, both strings. This SWF is used to store data in strings, in the format `<myVar:12345>` or `<myVar2:hello world>`. If `<myVar:12345>` were to be put in a level title, `_root.stringData("myVar", _root.LDCourseName);` would return `12345`.

# How this SWF should be used
This SWF should be loaded in a sign or level title, preferably level title

# Author(s) of this SWF
Forgotten, Jhynjhiruu

# Code
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
