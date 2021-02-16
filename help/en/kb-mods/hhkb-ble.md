# HHKB BLE Mod

<table_w30x70>

|PCB | YANG |
|:--- |:--- |
|Firmware | YANG |
|Keymap Editor | YANG |
|Solder | YANG / 兰某人 |
|Test | YANG / 兰某人 |
|Seller | YANG / KBDFans |

</table_w30x70>

For sale：https://item.taobao.com/item.htm?id=590221409485  

For installation, please refer to the product introduction on Taobao above.
  
If you knew about Hasu's HHKB Mod, it is easy to understand this one. Simple to say, it is an  power-saving optimized version. The power saving of hardware comes from two ways. One is that the Bluetooth uses a ble module, and the other is that the working voltage needs only 3.3v no 5v. The power saving of software comes from the power saving strategy formulated according to the characteristics of the hardware. Taken together, the battery life may be 6 to 10 times improve from Hasu version. But the biggest hero is still him (the entire HHKB keyboard part of the scanning works), I just stand on the achievements of predecessors and improve the product.

Most information, please refer to the BLE Series Part. Here we mainly talk about some special features of HHKB BLE Mod.

Note: This section is for the latest firmware of ydkb.io.

The firmware changelog can be found at: [HHKB BLE firmware changelog ](changelog/hhkb_ble)


## Bluetooth Pairing

In short, there is no need to enable pairing mode. When Bluetooth is unconnected and discoverable, you can pair it. Mainly refer to this section: [BLE Series](/en/ble-series)

If you have any problem, use this instruction to do troubleshooting: [BLE troubleshooting](/en/ble-series/troubleshooting)


## Hardware Switch of HHKB BLE

There is a physical switch behind the dip switch cover. This is the only switch on the controller. 

<html><div class="attention"> 
<subtitle>ATTENTION:</subtitle>
<ul><li>This switch's function is to turn on/off the battery power supply, not Bluetooth.</li>
<li>Thus when this switch is turned off, if you plug in the USB cable, Bluetooth can still work as in this case USB is the power source.</li></ul>
</div></html>

The switch can be easily dialed by using the cover directly, close to the USB port (left in the figure below) is open, and away from the USB port (right in the figure below) is closed. When the keyboard is working abnormally, it is also necessary to turn off the switch and then turn it on again to restart the keyboard.

<div style="width: 600px">

![](/assets/hhkb_ble_sw.jpg?600)
</div>

If you want to turn off Bluetooth, refer to [Bluetooth switch & connection status](/en/ble-series/connection-status)

<html><div class="hint">
<subtitle>HINT</subtitle>
<ul><li>this software switch is designed to turn off **Bluetooth FUNCTION** completely for people who only or temporarily only use USB. It is recommended to turn off the physical power switch While this switch is off.</li>
<li>It is not designed for turning off Bluetooth daily to save energy as HHKB BLE consumes much more power when standby by using this function than Lock Mode.</li></ul>
</div></html>


## Battery Charging

The charging port and data port are both the small USB port on HHKB, not two large USB female ports.

<html><div class="attention">
<subtitle>It is recommended to use the PC's USB port or 5v charger to charge.</subtitle>
<br>Improper charging(like more than 6v) may broke the charging IC. Using a high-power charger will not increase the charging speed as the default charging current is limited to about 450mA. 
</div></html>

The charging indicator is a red led below the left USB HUB port(if hardware version is more than v2.5, it is a blue led). You can see it from the back. It has three states:

<table_w30x70>

| Charging LED status | Meaning |
| ---- | ---- |
| Low brightness or flicker | abnormal(no battery or battery problem) |
| High brightness | charging |
| Off or extremely low brightness | the battery is fully charged |

</table_w30x70>

Generally it is no need to pay too much attention to this indicator light. You can know how long it takes to charge after one charge.

In win10 1809 or later, the battery percentage display is supported. It is not accurate and is for reference only (especially the error displayed during charging will be greater). Every 10% is a level and the highest is 90%. In addition, the percentage is displayed as x1% during charging which is 1% more than when not charging as the following pic shows.

<div style="width: 450px">

![](/assets/hhkb-ble-charge.png?450)
</div>  

When fully charged, the charging indicator will go off or the brightness will be extremely low.

Mac has blocked the battery service of third-party Bluetooth devices. Thus we can use **Output Battery Percetage as Text** function (default hotkey for HHKB BLE is Fn+E) if we want to know the battery level:__[[ble-series: blebattery | Charge & Battery Information]]__


## Edit Keymap and Reflash Firmware

Open the website https://ydkb.io, select the keyboard **HHKB BLE**, and then there is its flashing method on the page [Mass Storage Device Bootloader (U Disk Mode)] (bootloader/msd-bootloader). Refer to other parts of this document for the description of the key editor.

In addition to pressing the upper left key (usually ESC) to insert the cable to enter the flashing mode, you can also use the <kbd>Reset</kbd> in **LEDs and Functions**, in order to prevent accidental pressing, you need to hold down the < kbd>LCtrl</kbd>, and then press this <kbd>Reset</kbd>, you can jump directly to the flashing mode without unplugging and replugging.

<html><div class="attention">
<subtitle>ATTENTION</subtitle>
<ul><li>In addition to the choice of <b>HHKB BLE</b> for the keyboard, you can also use <b>HHKB BLE S</b>. </li>
<li>This firmware with S has a faster response speed, and it is temporarily unable to guarantee compatibility with all HHKBs. Most of them should be fine. </li>
<li>If your keyboard has no compatibility issues, it is strongly recommended to choose the firmware of <b>HHKB BLE S</b>. </li><ul>
</div></html>


## Indicators and Power Saving

Common functions for indicators can be defined by [LEDMAP](en/features/ledmap) . The indicator lights only when the keyboard is working, not power saving. It is recommended not to set any indicators to a function that may keep it constantly on as that may increase the power consumption and significantly reduce the battery life.

<html><div class="hint">
<subtitle>HINT</subtitle>
<br>As mentioned above, the red light under the USB port on the left is the charging indicator. In addition, the green light below the USB on the right is equivalent to LED3.
</div></html>

Default LEDMAP Setting is LED1 for CapsLock，LED2 for Layer1(fn)，LED3 for Layer2.
The default LEDMAP settings is as below. If you want to modify it yourself, please see [LEDMAP](en/features/ledmap).

<table_w30x70>

| Indicator | Default setting |
|:--- |:--- |
| LED1(default red) | CapsLock |
| LED2(default yellow or white) | Layer1(It will light up when you press Fn/L1.) |
| LED3(default green) | Layer2 | 

</table_w30x70>

<div class="attention">
<subtitle>ATTENTION when in bluetooth mode</subtitle>

  - In bluetooth mode，The Num, Caps, and Scroll Lock indicators are not synchronous with the OS status in Bluetooth mode. 
  - In bluetooth mode, They just toggle on or off when pressed. They are synchronous in USB mode.
  - If one indicator is out of sync, you can use Shift + KEY, such as Shift + Capslock. In this way CapsLock will take effect but its indicator won't change.
  - Reasonable use of this in bluetooth mode to reverse the indicator light, such as turning off the numlock light when numlock is on and light on when it is off, which can save power.
</div>

Besides LEDMAP setting, they have some other special functions.

<table_w30x70>

| State or operation | LED indication method |
|:--- |:--- |
| Flash mode (idle) | The three indicator lights flash together or flash alternately, always on |
| Flash mode (writing) | Based on the above, LED3 flashes quickly |
| Bluetooth disconnection status indication when starting | LED3 flashes, if it has not been connected, it will stop flashing in about 15 seconds |
| Bluetooth connected status indicator at startup | LED2 and LED3 flash slowly at the same time. Each time the light is on is significantly longer than the off time. |
| Press <key>LShift+RShift+s</key> | Indicate Bluetooth connection status as above |
| Manually enter the Lock Mode | Three lights light up at the same time, and then turn off in the order of LED3 LED2 LED1 |
| Wake from Level 2 Energy Saving or Lock Mode | Three lights light up at the same time, and then start to indicate Bluetooth connection status |
| Low battery reminder | When using the keyboard, the three lights flash at the same time; when saving energy, do not flash. It can still be used for two or three days. |
| Very low battery reminder | When using the keyboard, the three lights flash rapidly at the same time; no flash when saving energy. At this time, it is recommended to charge as soon as possible. |

</table_w30x70>


Then about the power saving mode:
  1. After the keyboard is idle for 3 seconds without pressing any key, it enters the general power saving mode. At this mode, the matrix is scanned every 30ms. If there is any key pressed, it exits the general power saving mode.
  2. If the keyboard's bluetooth is not connected for 90 seconds, or it is idle for more than 2.5 hours, it will turn off bluetooth and enter the deep power saving mode. Press and hold any key for 3 to 5 seconds to wake it up.
  3. Using Lock Mode will directly make the keyboard enter deep power saving mode. The difference from 2 is that by this way, you can press and hold only F and J together for 3 to 5 seconds to wake it up.


The black hhkb can't use leds in the front. But with another LED3 below the right USB port, it can show most status.

The power consumption of the deep power saving mode is very low. For daily use you don't need to turn the power switch off, just leave the keybaord to let itselt enter power saving mode. If you want take it away in a bag, it is recommended to make it enter Lock Mode to prevent unexpectedly wake up.


## USB HUB

The built-in interface is a miniUSB, so the USB HUB here supports USB 2.0 high speed at the highest.

In addition to the two USB ports on the HHKB case, there is an extra USB Port on the controller inside the keyboard. It is forbidden to connect high-current devices to these USB ports. The  power supply of the internal USB port is controllable. The control function can be selected in **LEDs & Functions**. <html><button style="text-align: center; line-height: 19px; width: 46px; height : 42px; font-size: 12px">Inner<br>USB</button></html>. You can put an USB Disk in it or just leave it with nothing.


## Use Karabiner-Elements in MacOS

Karabiner-Elements regards the same keyboard Bluetooth mode and wired mode as different keyboards.

Refer to the instructions provided by the user. To use Karabiner-Elements in Bluetooth mode, please use the latest version of the software, as shown in the figure below, and check **[ HHKB BLE(Adafruit Industries)]**.

![](/assets/hhkb_karabiner-elements.jpg)


## Exception Handling

If there is a key press error trigger or random trigger. Please confirm whether the battery is insulated from the hhkb upper keyboard circuit board according to the installation instructions provided by taobao link.

If something goes wrong during work, the quickest way is to re-plug the USB cable or switch the keyboard power switch off and on again to check if it works well again.

And please refer to [BLE Troubleshooting](/en/ble-series/troubleshooting).
 
If any other bugs, email me.


