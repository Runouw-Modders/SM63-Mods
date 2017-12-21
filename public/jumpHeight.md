# jumpHeight.swf

### Effect(s) of this SWF
This SWF sets the level jump height to a value determined in the `<jumpHeight:x>` tag where `x` is a number. `stringData.swf` is also required.

### How this SWF should be used
This SWF should be loaded in the level title with the jump height indicated in a `<jumpHeight:x>` tag.

### Level code to load this SWF
`%3Cimg%20src%3D%22https%3A%2F%2Fraw%2Egithubusercontent%2Ecom%2FRunouw%2DModders%2FSM63%2DMods%2Fmaster%2Fpublic%2FjumpHeight%2Eswf%22%3E`

### Author(s) of this SWF
Jhynjhiruu

### Code
```actionscript
_root.Mariojumpspeed = Number(_root.stringData("jumpHeight",_root.LDCourseName));
_root.Luigijumpspeed = Number(_root.stringData("jumpHeight",_root.LDCourseName));
_root.jumpspeed = Number(_root.stringData("jumpHeight",_root.LDCourseName));
```
