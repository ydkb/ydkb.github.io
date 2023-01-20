# Layers (important)

The firmware of ydkb.io supports up to 8 layers, from Layer 0 to Layer 7.

```mono text
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
```   
   

> [!ydda] Two important points for Layers
> - State
> - Priority


```ad-yddcol0
##### State
For example, Fn+1=F1 is realized as:
1. Fn (usually L1) to open layer 1
2. Then press button 1, in layer 1 is set F1
3. Keyboard output key F1

```

```ad-yddcol1
##### Priority
Layers are prioritized, with layer 7 being the highest. When a key is pressed:
1. Find the key from high to low to find the enabled layer
2. If no button is set for this layer, continue to find the enabled layer and button.
3. Find the key that meets the conditions, and the keyboard outputs the key
```


## new layer toggle logic

In the firmware starting from 2023.01.16, according to some actual feedback from users in recent years, the following changes have been made.

```mindmap
> -a -vh 0.6
YDKB
  Layer Switch
    Layer Momentary,Priority layer(With key pressed)
      Layer Momentary
      Layer Tap Toggle
      Layer Tap Key
      Layer Mods
    Layer Toggle(Savable state)
      Layer Toggle
      Layer Tap Toggle
      To Layer
    Default Layer(always-on layer)
      Layer 0 is always on
      Default Layer Set
```


There are some changes in the logic of the layer, and all layer functions are divided into three categories:
- `Layer Momentary`, which means that the layer will be opened only when the button is pressed. As long as the button is released, its state will be restored and will not be saved.
- Layers that are turned on momentarily are also set as priority layers. If there is a button in this layer, it will respond first, and then search from high to low according to the status of all layers.
- Using `Layer Toggle`, the state of the layer is saved, it will not be turned off by the momentary open layer.
- Setting the `Default Layer`, will also be saved, but it will not be turned off by switch layers or instant on layers. Layer 0 is always on.

It will not destroy the previous logic, but with the new logic, it meets more people's expectations for layer switching. For example:
1. When using the momentary open L1, it is more expected to trigger the layer 1 button. Now when a higher layer is turned on, because layer 1 is the priority layer after pressing and holding L1, the buttons on layer 1 can also be triggered.
2. For example, L1+T1 can be used to turn on or off layer 1, and layer 1 will not be turned off because L1 is released at the end. Because now the state change of the momentary open layer will not affect the toggled layer.
