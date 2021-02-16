# NKRO and Gaming support

Generally speaking, all keys have no impact, which is somewhat related to the game, so the relevant content will be discussed here. It can also be regarded as a simple knowledge popularization.


## NKRO

NKRO means N-Key Rollover. Most keyboards of YDKB support NKRO in USB mode, just for compatibility, the default is 6KRO.

Generally speaking, when the keyboard supports USB full keys without impact, it means that the keyboard can press many keys at the same time without conflict. This number of keys is generally sufficient for 104 keyboards to be fully pressed, but it is not infinite. Choosing a keyboard that supports full-key no punch also means that it can achieve any 6-key no punch even when the full-key no punch is not turned on in regular use. Note that it is any 6 keys, not the maximum 6 keys.

For example, G80-3000 does not support any 6 keys without punch; while G80-3494 supports any 6 keys without punch in USB mode, and supports full keys without punch in PS2 mode.

Let me add another bit of knowledge. The so-called 6KRO means that in addition to the 8 left and right modifier keys Ctrl, Shift, Alt, and Win, there are 6 other keys that can be pressed simultaneously. These 8 modifier keys can be pressed together with the other 6 keys at the same time. There is no problem. That is to say, if you have to be more serious, in any 6-key non-rush mode, you can press 8+6 at most 14 keys at the same time.

<html><div class="hint">
<subtitle>HINT</subtitle>

  - Most keyboards supported by YDKB are 6KRO by default, so compatibility is better.
  - Under USB connection, it can support NKRO. Toggle with <kbd>LShift+RShift+N</kbd>.
  - It is always 6KRO in Bluetooth mode.
</div></html>

## Button response speed and game support

Speaking of keyboard games, we often talk about several parameters, keyboard response time, and rate of return. I try to be as simple as possible, but the details may be wrong, don't mind.

### 1 System check button frequency

It can be understood as how many times the system checks the USB signal per second. It can only reach 125Hz in USB2.0 Low Speed ​​mode, but it can reach 1000Hz in Full Speed ​​mode. Reference: https://deskthority.net/wiki/Talk:Polling_rate

If there is special driver support and the system default USB driver is not used, higher frequencies can be achieved. For customization, it is not enough to develop and certify special drivers, so the upper limit depends on the system USB support.

### 2 Return rate of keyboard request

How many times the keyboard can send signals to the system per second. As long as the hardware can meet the requirements, it depends on the firmware settings.

<html><div class="hint">
<subtitle>YDKB keyboard polling rate</subtitle>

  - The keyboard supported by YDKB is 1000Hz under USB.
  - The standard HID over GATT service used by the BLE series under Bluetooth, this should be 100 to 125 Hz.
</div></html>

### 3 Key debouncing time

Because the mechanical axis and the contacted reed will jitter, you need to use software to remove this jitter. It takes a certain amount of time here. The amount of time depends on the firmware setting. Some keyboards do not use a very good axis. In order not to hit combo, the debouncing time may be set to a particularly large amount, which will cause a noticeable game delay.

<html><div class="hint">
<subtitle>YDKB keyboard debouncing</subtitle>

  - Most keyboards supported by YDKB have been upgraded to the latest hybrid debouncing (also debouncing for key presses and bounces).
  - When the default is 6KRO, the key debouncing time is 5ms; when NKRO is turned on, the key debouncing time is 1ms.
  - When NKRO is turned on, although the Bluetooth is still 6KRO, the debouncing is also 1ms.
</div></html>

<p></p>

<html><div class="hint">
<subtitle>Suggestions to the Key Switch</subtitle>

  - All of them are customized, there is no need to change some not so good shafts. Therefore, if the default 5ms debouncing axis requires continuous hitting, it is recommended to replace it.
  - If the requirements are higher, the axes that have combos under NKRO will also be replaced. Although they can also be used under 6KRO, they are often de-jittered, and the actual delay caused is more than 5ms.
</div></html>


### 4 Button matrix scanning frequency

For the time being, only the keyboard that needs matrix scanning is explained here (there is also an interrupted method of obtaining keys). This is how many keys can be scanned per second.

If a keyboard displays a polling rate of 1000Hz on the computer, but its own button scanning speed is not so fast, then the response speed is actually dragged down by this.

<html><div class="hint">
<subtitle>YDKB matrix scanning frequency</subtitle>

  - YDKB's general mechanical axis keyboard, the default is 1000Hz.
  - Some keyboard processors are not that powerful, so when you turn on complex RGB lighting effects, the scanning speed may not reach 1000Hz, but it is close.
</div></html>


## Summary and supplement

The above are the main concepts.

Key sending process: Press a key, the keyboard scans until the key is pressed, then after debouncing, sent by the keyboard, and then received by the computer.

The response speed that we usually pay attention to is actually determined by the multiple steps of the whole process. It is not enough to look at a single parameter.

Then add that, with the exception of some audio games, most games do not have such high requirements on the keyboard. such as:

**The REALFORCE keyboard used by professional player Doinb is used to play CS:GO**, reference link: https://post.smzdm.com/p/a992049p/

![](/assets/doinb_realforce.jpg)

Realforce is not a game-optimized keyboard, and even said that its performance is not as good as many ordinary keyboards. For example, Realforce with big forehead, its matrix scanning frequency is 60Hz, the latest I don't have detailed parameters, but if you take HHKB Classic as a reference, then the matrix scanning speed is about 500Hz.

<html><div class="attention">
<subtitle>End</subtitle>
<p style="font-size: 1.2em">So, compared to these parameters, as long as the equipment is not too bad, people (brains and hands) are more important. </p>
</div></html>
