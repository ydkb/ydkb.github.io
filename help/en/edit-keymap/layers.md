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

For example, the operation of Fn+1=F1: Layer 0 is generally the default layer, which is enabled by default. In this example, the actual Fn corresponds to L1, which means momentarily opening layer 1. Then, its actual operation logic is:
  1. When Fn(L1) is pressed and held,  momentarily open layer 1. The states of the 8 layers is that layer 0 and layer 1 are on, and the others are off.
  2. When pressing "1" again, from layer 8 to layer 0, find that layer 1 is on, and this key of layer 1 is F1. So output F1.
  3. When Fn(L1) is released, close layer 1. At this time, only the default layer of layer 0 is on. Pressing 1 at this time will only output 1.

By default, the key is transparent if it is not set. And it will search the low priority layer. If you don't want it to be checked, just want that key to be invalid, you can set the button to **disable in that layer.** As shown below, the key in the blue box is set **disable**. You can also use the red box key if you want to reset it back to transparent.

<div style="width: 660px">

![](/assets/layers-01.png?660)
</div>
