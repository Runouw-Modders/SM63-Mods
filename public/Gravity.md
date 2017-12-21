# Gravity.swf

### Effect(s) of this SWF
This SWF sets the level gravity to a value determined in the `<gravity:x>` tag where `x` is a number. `stringData.swf` is also required.

### How this SWF should be used
This SWF should be loaded in the level title with the gravity indicated in a `<gravity:x>` tag.

### Level code to load this SWF
`%3Cimg%20src%3D%22https%3A%2F%2Fraw%2Egithubusercontent%2Ecom%2FRunouw%2DModders%2FSM63%2DMods%2Fmaster%2Fpublic%2FGravity%2Eswf%22%3E`

### Author(s) of this SWF
Jhynjhiruu

### Code
<details/>
  <summary>frame 1</summary>
  <details/>
    <summary>doAction</summary>
    
```
_root.gravity = Number(_root.stringData("gravity",_root.LDCourseName));
```
  </details>
</details>
