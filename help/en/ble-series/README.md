# Use BLE Series (Overview)

The keyboards of the YDKB BLE series have some differences from the normal market bluetooth keyboards in bluetooth pairing and device switching. Please not use this series of YDKB products solely based on previous experience.

YDKB BLE series began with YD60BLE since January 2018. 

BLE series refers to the keyboard supported by YDKB with nrf51 Bluetooth module.

The Bluetooth firmware uses Adafruit. References: <br>
https://learn.adafruit.com/introducing-the-adafruit-bluefruit-le-uart-friend/introduction

> [!ydda] Important advice
> - Even if you don't like or need lights, at least please install the caps indicator led of some keyboards. 
> - the caps indicator will also be used to indicate various states of bluetooth, low battery power, flashing state, and so on.



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
