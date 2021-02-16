# Layer Tap Key

Click means a key. Long press or when combined with other keys means the instant momentarily opening the layer.

For small keyboard like 40%, this is very useful, or you want to make better use of double spaces or single space as spacefn.

SpaceFn discussion: https://geekhack.org/index.php?topic=51069.0<br>
Dual-role Keys discussion: https://geekhack.org/index.php?topic=41685.0

Let me first talk about the main points of this feature.
  1. Click is a key, the trigger mode is different from the normal key. The normal key is triggered when pressed, and the key here is triggered when released.
  2. Long press is momentarily opening layer. The time of the long press is slightly required, and the response speed is not as fast as Layer Momentary.
  3. If you want to hold the key, because pressing and holding it means Layer Momentary, so you need to double click the key and then keep it held.

If the key is triggered when pressed, there is no way to determine whether the user's next step is clicking or long pressing. So the actual logic is:

The user presses key A to start timing.
  1. If key A is released and the time is within 200ms, then action as key A is clicked once.
  2. Press the key once again within 200ms, and hold it it, this means holding key A.
  3. If another key B is pressed, the action of key A is also momentarily opening a layer. If the time is within 200 when key A is released, then two keys will be sent at a time.
  4. If the time is more that 200ms and no other key is pressed, then the action of key A is directly momentarily opening a layer.

<html><div class="attention"> 
<subtitle>ATTENTION</subtitle>
<br>Point 3 is very important for SpaceFn, especially for single spaces. It must be delayed to ensure that when you type quickly, the button that is pressed immediately after pressing the space will not be recognized as momentarily opening a layer.
</div></html>


However, not all the kyes need to be used in this way, so in the ydkb firmware, another **Layer Tap Key** mode is added.

The difference from the above is mainly in the point 3, as long as another key is pressed, it is directly judged as the momentarily opening a layer without delay. This mode is similar to the win key of the keyboard. The single button is the win button, and the other button combination triggers the corresponding effect immediately.

Most Keyboards of the BLE series have been updated to support Layer(S). 

Then this feature also has a limit

<html><div class="attention"> 
<subtitle>ATTENTION</subtitle>
<br>The "key" triggered when clicked must be a regular key, not mods.
</div></html>


In daily use, the **Layer Tap Key** is not suitable for playing games, and may encounter a problem.

<html><div class="attention"> 
<subtitle>Possible problems</subtitle>

  - Because the key is triggered when released, in some games, pressing a space is a jump, and pressing it for a longer time to jump higher.
  - However, if the space is set to "Layer Tap Key", then each click is only a short trigger, so it is no use here.
</div></html>

<br>

<html><div class="hint"> 
<subtitle>Some suggestions for using this function</subtitle>

  - Note that when it is used as a key, it is effective when released, so there is a slightly delay compared to normal key press. This is easy to get used to.
  - If it is a space or some other key after which another keys may immediately be pressed, It is recommended to use without (S). You should get used to the delay of this function. Keep your typing rhythm, don't let it go too fast.
  - The key is rarely pressed together with other keys, you can use the layer with (S) when you want to momentarily 
 open the layer quickly.
</div></html>

Different people have different operating habits, so it's best to experience the differences between them and then set them flexibly. 

The following shows the setting method.

<div style="width: 500px">

![](/assets/layer-tap-key-01.png?500)
</div>

Another **Layer Tap Key** setting method is to select the Layer X with (S).

<div style="width: 500px">

![](/assets/layer-tap-key-02.png?500)
</div>
