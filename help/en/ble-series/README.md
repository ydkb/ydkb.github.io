# Use BLE Series (Overview)

The keyboards of the YDKB BLE series have some differences from the normal market bluetooth keyboards in bluetooth pairing and device switching. Please not use this series of YDKB products solely based on previous experience.

YDKB BLE series began with YD60BLE since January 2018. 

BLE series refers to the keyboard supported by YDKB with nrf51 Bluetooth module, the list is as follows.

||> High-end
  - 1800mini
  - Mater98
  - X-8086K
  - Sairo64

||> BLE
  - BLE40
  - BLUP
  - CAD66
  - Chicory
  - Duang60
  - Duang60 v2
  - Chicory
  - Fmini
  - Just60
  - Just66
  - Just660
  - Just68
  - Just68v2
  - Louise
  - Minira
  - Minira v2
  - Pearly
  - Xikii i104
  - Xikii i6x
  - YD60BLE
  - YD67BLE
  - YDP50
  - YDPM40BLE

||>  YDKB Mod
  - BLE660C
  - BLE980C
  - BLE980M
  - HHKB_BLE

The Bluetooth firmware uses Adafruit. References: <br>
https://learn.adafruit.com/introducing-the-adafruit-bluefruit-le-uart-friend/introduction

All references in the text to pressing <key>LShift+RShift+XX</key> or <key>LShift+RShift+LCtrl+XX</key> refer to holding down the left Shift and right Shift(maybe and left Ctrl) first and press XX key once. You can then release the left and right shifts. Only press one command at a time. To press another command, you need to release the left and right Shift keys, and then press the left and right Shift keys again.

!!> Important advice
  - Even if you don't like or need lights, at least please install the caps indicator led of some keyboards. 
  - the caps indicator will also be used to indicate various states of bluetooth, low battery power, flashing state, and so on.



## Bluetooth pairing

First keep the keyboard powered on, such as with a USB cable plugged in, or without the cable plugged in but the battery switch is on. To say more，the physical switch on the keyboard of the BLE series is battery the power switch of battery, not bluetooth.

For desktop pc with a built-in bluetooth module, please install the external antenna，which is needed for not only  wifi but also bluetooth.

The Bluetooth pairing of BLE series is different from some other Bluetooth keyboards. You don't need to press specific key to enter the pairing mode. Keep the followings to make the Bluetooth connectable.
  1. Keyboard's Bluetooth function is not turned off.
  2. Keyboard's Bluetooth is not connected to any device.
  3. Keyboard's Bluetooth is searchable.

The above three are also the default settings. If you still can't find your keyboard, point 1 and 2 can be checked by [Bluetooth switch and connection status](/ble-series/connection-status). If 1 and 2 are okay, 3 can be turned on with a shortcut (LShift+RShift+I).

When the above three conditions are met, and the device supports Bluetooth 4.0, you should be able to search and connect your keyboard.

For the pairing of different systems, please refer to the corresponding description.
  - Windows 7 requires an additional driver because the OS does not support Bluetooth 4.0
  - Bluetooth 4.0 driver in some Linux systems may not work perfectly

<html><font color="blue">If pairing or connection is abnormal, including but not limited to not being able to be paired, not being able to auto-connect after switching on or the computer repeatedly shows that it has been connected and paired, etc. </Font> </html>, You can use <html> <font color = "red"> Delete bonding information</font></html> (<key>LShift+RShift+R</key> or <key>LShift+RShift+LCtrl+R</key> or set it yourself).

This operation is to clear all paired information in the Bluetooth module. You must perform it before re-pairing on the host device, instead of just deleting the Bluetooth keyboard and re-pairing it on the host device.


## Multi-device switching

To switch between Bluetooth and USB, you can set a key by yourself, or use <key>LShift+RShift+U</key>.

Limited by Adafruit's Bluetooth firmware, though multiple Bluetooth devices can be paired, active switching between different Bluetooth devices is not supported. If the two A and B devices are paired, they may be connected to A or B randomly if they are both turned on during Bluetooth connection. A similar effect as device switching is achieved by this feature, see: [multi-device switching](/ble-series/device-switching).


## Indicator description

The Num, Caps, and Scroll Lock indicators are not synchronous with the OS status in Bluetooth mode. They just toggle on or off when pressed. If one indicator is out of sync, you can use Shift + KEY, such as Shift + Capslock. In this way CapsLock will take effect but its indicator won't change. 

They are synchronous in USB mode.


## Charging attention

It is recommended to use the computer's USB port or a regular 5v charger to charge. If the input voltage is too high, even just too high for an instant, it may damage the charging IC.

And using a high-power charger will not increase the charging speed. The default charging current of most BLE series is about 450ma. For details, please refer to the description of each keyboard.


## Power-Saving Mode

Simply talk about my power-saving settings for the BLE series, so that you can use them better.

The power-saving mode is on by default when using the battery. You can use the LShift+RShift+P to toggle it on or off. This setting is not saved. Once the keyboard is restarted, it will return to the default on state.

Then about the power saving mode:
  1. After the keyboard is idle for 15 seconds without pressing any key, it enters the general power saving mode and all leds are off. At this mode, the matrix is scanned every 30ms. If there is any key pressed, it exits the general power saving mode.
  2. If the keyboard's bluetooth is not connected for 90 seconds, or it is idle for more than 2.5 hours, it will turn off bluetooth and enter the deep power saving mode. Press and hold any key for 3 to 5 seconds to wake it up.
  3. Using Lock Mode will directly make the keyboard enter deep power saving mode. The difference from 2 is that by this way, you can press only F and J together to wake it up.


## Background Story
Some of these were written down when I was making 1800mini. They are also the ideas at the beginning of the BLE series. Record them. Those who are interested can take a look.

Many of today's dual-mode or Bluetooth mechanical keyboards are not easy to use. Let me briefly summarize the main reasons.
  1. The Bluetooth connection is unstable.
  2. Slow response from power saving to wake up. Some keyboards may not output the first several keys after the keyboard k energy.
  3. Endurance is weak.
  4. Not programmable.

Therefore, it is mainly to improve on these points. The first point is that there are many reasons for the firmware and the module itself. However, many of the mass-produced keyboards are finished products that you bought, and you can't expect to improve anything. and so,

  1. For 1, use the Bluetooth module as an imported high-quality product, and the Bluetooth firmware is not written by me at such a half-toned level. At the same time, using the Bluetooth module does not need to consider the problem of the antenna. And it turns out that the antenna design effect of this module is very good.
  2. Regarding 2, regardless of the extreme power saving, the BLE40 uses a 1500mah battery. It can be used for 15 hours per day without the light on, and no problem for 1 to 2 months. Although it can not reach the battery life of some keyboard batteries for half a year, but it is enough. At the same time, it also provides the function of temporarily turning off energy saving, so that the keyboard can be in the light stick mode (the keyboard light is always on).
  3. For 3, there are optimizations in hardware to reduce power consumption as much as possible. Even if they are BLE Bluetooth modules, their power consumption can be worse than 10 times when working as HID. At present, when this module is working in Bluetooth, it consumes only 1.xma. Many people may remember BLE60, the CSR1010 module used, the actual power consumption is more than 10ma. Then, with the appropriate energy-saving settings, balance the user experience and battery life.
  4. For 4, the BLE series supports full-key programming, a total of 8 layers can be set.
