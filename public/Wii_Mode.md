# Wii_Mode.swf

### Effect(s) of this SWF
This SWF loads a menu with 3 buttons: Activate, Deactivate and 100% File; Activate activates Wii Mode, Deactivate deactivates it, and 100% File sets File A to 100% completed.

### How this SWF should be used
This SWF should be loaded in a sign.

### Level code to load this SWF
`%3Cimg%20src%3D%22https%3A%2F%2Fraw%2Egithubusercontent%2Ecom%2FRunouw%2DModders%2FSM63%2DMods%2Fmaster%2Fpublic%2FWii%5FMode%2Eswf%22%3E`

### Author(s) of this SWF
Sekanor, Jhynjhiruu

### Code
<details/>
  <summary>DefineButton2 (5)</summary>
  <details/>
    <summary>BUTTONCONDACTION</summary>
    
```
on(press){
   i = 1;
   while(i <= 64)
   {
      _root.Star[i] = true;
      _root.StarCoin[i] = true;
      i++;
   }
   _root.BowserKey1 = true;
   _root.BowserKey2 = true;
   _root.BowserKey3 = true;
   _root.CalculateStars();
   _root.CalculateStarCoins();
   _root.SaveFile();
}
```
  </details>
</details>
<details/>
  <summary>DefineButton2 (9)</summary>
  <details/>
    <summary>BUTTONCONDACTION</summary>
    
```
on(press){
   _root.WiiMode = true;
}
```
  </details>
</details>
<details/>
  <summary>DefineButton2 (12)</summary>
  <details/>
    <summary>BUTTONCONDACTION</summary>
    
```
on(press){
   _root.WiiMode = false;
}
```
  </details>
</details>
