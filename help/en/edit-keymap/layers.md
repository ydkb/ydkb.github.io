# Layers (important)

One of the important features of TMK is the layer. Understanding and using the layer is the key to using the keyboard well. Don't rush to understand the whole contents of this article at a glance. The actual use of the keyboard process will gradually deepen your understanding.

Ydkb.io supports 8 layers by default, from Layer 0 to Layer 7.

    Keymap: 8 Layers                   Layer: Keymap
    -----------------                   ---------------------
        ____________ priority                 _______________________
       /           / | High                  / ESC / F1  / F2  / F3   ....
    7 /___________// |                      /-----/-----/-----/-----
    6 /___________// |                     / TAB /  Q  /  W  /  E   ....
    5 /___________/  |                    /-----/-----/-----/-----
    :   _:_:_:_:_:__ |               :   /LCtrl/  A  /  S  /  D   ....
    :  / : : : : : / |               :  /  :     :     :     :
    2 /___________// |               2 `--------------------------
    1 /___________// |               1 `--------------------------
    0 /___________/  V Low           0 `--------------------------
   

Each layer has several keys, for a total of 8 layers. And they all combine as your keymap.

Two important points for Layers: <html><font color="red" size="+1">State, Priority</font></html>

In actual use, the operation similar to Fn+1=F1 is realized by switching the state of the layer. Each layer has two states of on or off. One of the layers is the default layer, and the default layer is always on. When we press a key, what it should be is decided by the key in matrix, the layer state and your keymap.

Layers are prioritized, with layer 7 having the highest priority and layer 0 having the lowest priority. When a key is pressed, the key is searched from the high priority to low. If the layer is on and there is a key at the corresponding position, the keyboard outputs this.

## new layer toggle logic

In the firmware starting from 2023.01.16, according to some actual feedback from users in recent years, the following changes have been made.
- Added priority layer function. The layer that is turned on instantly is also temporarily set as the priority layer. If there is a setting button on this layer, it will respond to it first, and then search from high to low according to the status of all layers.
- The logic of the layers has been changed to separate the momentary switching layer from other layer toggle. Logical operations are now more intuitive.

It will not destroy the previous logic, but with the new logic, it meets more people's expectations for layer switching. For example:
1. When using the momentary open L1, it is more expected to trigger the layer 1 button. Under the new logic, when the upper layer is turned on, the buttons of the lower layer can also be triggered.
2. For example, L1+T1 can be used to turn on or off layer 1, and layer 1 will not be turned off because L1 is released at the end.