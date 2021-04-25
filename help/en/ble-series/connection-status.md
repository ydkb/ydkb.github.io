# Bluetooth Function switch and connection status

These two have a certain correlation, so put them together.


## Some special instructions

Some of the newer keyboards have some hardware modifications, and the software switch for the Bluetooth function has been cancelled. Instead, rely on the hardware switch on the PCB to realize the Bluetooth switch. When the switch turns off the battery power supply, the Bluetooth function is also turned off.

| Keyboards that support physical switch to turn off Bluetooth ||||
| --- | --- |||
| Duang60 | Pearly | Minira v2 | Louise |


## Bluetooth Function switch

<html><div class="attention">
<subtitle>ATTENTION</subtitle>

  - Most people do not need this function. It is designed for those who do not use Bluetooth in some situation. 
  -  If you need to save battery manually in daily use, please use Lock Mode. 
</div></html>
</div></html>


Because the physical switch on the keyboard is just a battery power switch. Even if it is turned off, when the USB cable is plugged in, Bluetooth will still work because of the external power supply from USB.

So in the latest firmware, a Bluetooth Function switch is introduced. You can use it to completely turn off the Bluetooth function of the keyboard. (This setting will be saved after restart)
  Note: This feature is currently in beta and only supported by some keyboards. Details may change in the future.

You can set a key to turn Bluetooth on and off, as shown in the pic below. Or just use the short keys <key>LShift+RShift+W</key> to toggle it.

<div style="width: 550px">

![](/assets/conection_01.png?550)
</div>

In order to prevent accidentally pressing this shortcut command to turn off the Bluetooth function, the following are the latest changes, which will be adopted in the firmware after April 18, 2020:
  - When just pressing the switch Bluetooth or <key>LShift+RShift+W</key>, it always turns on the Bluetooth function
  - When pressing the switch Bluetooth or <key>LShift+RShift+W</key> with <kbd>LCtrl</kbd>, it always turns off the Bluetooth function.

After turning off Bluetooth function, the Bluetooth part of the keyboard no longer works. At this time, it is also recommended to turn off the battery switch.

To tell if Bluetooth Function is off, there are several ways:
  - Every time you plug in or turn on or off the power, there is no longer Bluetooth connection status indication.
  - When using the keyboard with wire, <key>LShift+RShift+S</key> will not show the Bluetooth connection status indication.
  - Use **Output battery level in text** function, the result is 12 and never update.

Because the Bluetooth part is not working, when you turn off Bluetooth Function, if you do not plug it in, you ca n’t turn on Bluetooth again. To turn Bluetooth Function on:
  - Plug in the USB cable and turn on the Bluetooth Function by pressing **LShift+RShift+W**.
  - Refer to the method of wake up from Lock Mode (press **F** and **J** at the same time), you can turn on Bluetooth Function without plugging in the USB Cable.

Method 1 is suitable for all BLE series keyboards, and some keyboards of method 2 are not applicable.


## Bluetooth connection status

The Bluetooth connection status is only displayed when the Bluetooth Function mentioned above is turned on.

It is automatically displayed at each startup and other power state changes. It is also displayed when waking up from deep power-saving mode.

From this indication, you can confirm whether the keyboard is started normally and wake up normally.

Different keyboards display Bluetooth connection status in different ways. 

The LED light flashes quickly when not connected (the longest time is about 15 seconds the it goes off, and it can be terminated manually by **LShift+RShift+S**. After connected, its led light flashes slowly and will be off about three times flashing. If it is an RGB light indication, the colors are also different in the two states. For details, refer to the description of each keyboard individually or the table at the bottom of this article.

While using the keyboard, you can also use <key>LShift+RShift+S</key> to manually check the Bluetooth connection status.

Because of the limited indicator leds, some keyboards that indicate Bluetooth connection status overlap with low-battery indicators. Give priority to low battery, only when the battery is not low, the Bluetooth connection status will be displayed.

The BLE series keyboards that have supported this function are shown in the table below:

<table_w30x70>

| Keybaord | Display method |
| --- | ---- |
| 1800mini | Four indicators flash blue quickly when not connected, green slowly when connected |
| Master98 | Four indicators flash blue quickly when not connected, green slowly when connected |
| Sairo64 | Caps LED flashes blue quickly when not connected,  green slowly when connected |
| X-8086K | Light bar flashes blue quickly when not connected,  green slowly when connected |
| BLE40/BLUP | Tab LED flashes blue quickly when not connected, green slowly when connected |
| CAD66 | Light bar flashes blue quickly when not connected,  green slowly when connected |
| Chicory| Caps LED flashes quickly when not connected, slowly when connected |
| Duang60 / Minira v2 | Caps LED with RGB blue flashes quickly when not connected, slowly with RGB green when connected |
| Just Keyboard| Caps LED flashes quickly when not connected, slowly when connected |
| Minira | Caps LED flashes quickly when not connected, slowly when connected |
| Pearly | LED2 flashes quickly when not connected, LED2 and LED3 flash slowly when connected |
| YD60BLE | Caps LED flashes quickly when not connected, slowly when connected |
| YD67BLE | The indicator led (between CapsLock and A) flashed quickly when not connected, slowly when connected |
| YDP50| Caps LED flashes quickly when not connected, slowly when connected |
| YDPM40BLE| Caps LED flashes quickly when not connected, slowly when connected |
| HHKB BLE | LED3(default green) flashes quickly when not connected. LED2 and LED3 flash slowly when connected |
| BLE660C | Insert LED and caps LED flashes quickly when not connected, slowly when connected |
| BLE980C | Scroll Lock flashes quickly when not connected, slowly when connected |

</table_w30x70>

