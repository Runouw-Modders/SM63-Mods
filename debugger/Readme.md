# Using the Debugger

### Summary

The debugger comes in two forms. Form **a** uses CinemaMessage, which is reliable but ugly, and form **b** uses AreaTextClipF, which doesn't always work but is much neater.
They both load code from a file named `payload.swf`, which has to be located in the same directory as the SM63 executable.
The supplied `payload.swf` autoruns code in `frame 1` -> `DoAction`.

Usable commands can be found in the SM63 functions/variables [documentation spreadsheet](https://docs.google.com/document/d/13sxWrE0VPPTQm5_gqSrjqK4_DFgGBH04kK6z3PAy2w8/edit?usp=sharing).

You can run the code ingame by pressing the **minus** (**-**) key.

### Usage

Download [payload.swf](https://raw.githubusercontent.com/Runouw-Mods/SM63-Mods/master/debugger/payload.swf) and place it in the same directory as your SM63 executable. Create a new level designer level, place a sign and enter either `<img src="https://raw.githubusercontent.com/Runouw-Mods/SM63-Mods/master/debugger/a.swf">` if you want to use form **a** or `<img src="https://raw.githubusercontent.com/Runouw-Mods/SM63-Mods/master/debugger/b.swf">` if you want to use form **b**. 
Premade level codes are available [here](https://github.com/Runouw-Modders/SM63-Mods/blob/master/debugger/Debugging.md) if you want them.

Test the level and open the sign. Click the `Activate` button to begin debugging or `Deactivate` to end.
Once activated, press **minus** (**-**) to run `payload.swf`.
