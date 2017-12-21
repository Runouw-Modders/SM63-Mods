# Page.swf

### Effect(s) of this SWF
This SWF sets the level portal page to a value determined in the `<page:x>` tag where `x` is a number, plus 1 because SM63 is weird. `stringData.swf` is also required.

### How this SWF should be used
This SWF should be loaded in the level title with the required page number indicated in a `<page:x>` tag.

### Level code to load this SWF
`%3Cimg%20src%3D%22https%3A%2F%2Fraw%2Egithubusercontent%2Ecom%2FRunouw%2DModders%2FSM63%2DMods%2Fmaster%2Fpublic%2FPage%2Eswf%22%3E`

### Author(s) of this SWF
Jhynjhiruu

### Code
<details/>
  <summary>frame 1</summary>
  <details/>
    <summary>doAction</summary>
```
_root.Page = _root.stringData("page",_root.LDCourseName);
```
  </details>
</details>
