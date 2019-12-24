# Page.swf

### Effect(s) of this SWF
This SWF acts as a companion to the new LDE (not yet released as of 15/12/2019) to implement the layering fixes in a manner that does not disrupt other levels.

### How this SWF should be used
This SWF should be loaded in the level title.

### Level code to load this SWF
`%3Cimg%20src%3D%22https%3A%2F%2Fraw%2Egithubusercontent%2Ecom%2FRunouw%2DModders%2FSM63%2DMods%2Fmaster%2Fpublic%2Flayerfix%5Fclient%2Eswf%22%3E`

### URL for LD2.5
`https://raw.githubusercontent.com/Runouw-Modders/SM63-Mods/master/public/layerfix_client.swf`

### Author(s) of this SWF
Jhynjhiruu

### Code
<details/>
  <summary>frame 1</summary>
  <details/>
    <summary>doAction</summary>
    
```
_root.modLevel = _root.LDCourseName;
if(_root.layerfixinstalled != true)
{
   _root.layerfixinstalled = true;
   _root.currentLayer = 0;
   _root.ItemFrontGFX = function(anum)
   {
      if(_root.LDCourseName == _root.modLevel)
      {
         if(anum == 1)
         {
            _root.currentLayer = 0;
         }
         switch(_root.LDItemArray[anum][0])
         {
            case "r":
               _root.currentLayer = 0;
               break;
            case "b":
               _root.currentLayer = 1;
               break;
            case "f":
               _root.currentLayer = 2;
         }
         if(_root.currentLayer == 2)
         {
            return true;
         }
         return false;
      }
      anum2 = Number(LDItemArray[anum][0]);
      if(anum2 >= 140 && anum2 <= 143)
      {
         return true;
      }
      return false;
   };
   _root.ItemFrontGFXBack = function(anum)
   {
      if(_root.LDCourseName == _root.modLevel)
      {
         if(_root.currentLayer == 1)
         {
            return true;
         }
         return false;
      }
      anum2 = Number(LDItemArray[anum][0]);
      if(anum2 >= 28 && anum2 <= 36 || anum2 >= 102 && anum2 <= 105 || anum2 == 108 || anum2 >= 110 && anum2 <= 118 || anum2 == 121 || anum2 == 122 || anum2 == 124 || anum2 == 125 || anum2 == 128 || anum2 >= 129 && anum2 <= 137 || anum2 == 144 || anum2 == 145)
      {
         return true;
      }
      return false;
   };
   _root.ogPLDL = _root.PlayLevelDesignerLevel;
   _root.PlayLevelDesignerLevel = function(MarioX, MarioY, MarioXspeed, MarioYspeed, transition, messageboolean)
   {
      if(_root.DoReset == true)
      {
         i = 0;
         while(i < LevelItems.length)
         {
            if(LevelItems[i][0] == "1")
            {
               startX = LevelItems[i][1];
               startY = LevelItems[i][2];
               startXspeed = LevelItems[i][3];
               startYspeed = LevelItems[i][4];
               break;
            }
            i++;
         }
         _root.ogPLDL(startX,startY,startXspeed,startYspeed,"",false);
         _root.DoReset = false;
      }
      else
      {
         _root.ogPLDL(MarioX,MarioY,MarioXspeed,MarioYspeed,transition,messageboolean);
      }
   };
   _root.DoReset = true;
   _root.warpframe = true;
}
```
  </details>
</details>
