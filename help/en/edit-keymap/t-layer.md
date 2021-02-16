# Layer Toggle

Unlike Layer Momentary, Layer Toggle switchs one layer's state when clicked.

For example, if the layer is open, the click a Layer Toggle key, the layer is closed. And if it is closed, it is turned on by clicking.

for example. As shown in the pic below, a key is set to T3(Toggle layer 3) in Layer 0.

<div style="width: 500px">

![](/assets/t-layer-01.png?500)
</div>

Then Layer 3 is like this.

<div style="width: 500px">

![](/assets/t-layer-02.png?500)
</div>

Wen pressing T3 on layer0 first time, layer3 is turned on, and the key set on layer3 is effective. There are also two reasons for placing a T3 in Layer 3 for new user.
  1. If you want to go back to layer 0, remember that the important thing for layers is the state and priority. When layer 3 is open, the priority of layer 3 is always higher than that of layer 0. So to go back to layer 0, the right process is pressing T3 again to close layer 3 instead of setting another T0 that would not work for this.
  2. If nothing is set here, when layer 1 and layer 2 are also transparent here, then this key is still T3. But if layer 1 and layer 2 are other keys here, and layer 1 or layer 2 is on, you can't close layer 3 anymore. 

In general, Layer Toggle has a little more attention when it is used than Layer Momentary. That is when setting a key to open a layer,  you must have a key to close it, or you may go to the dead end of your keymap.

