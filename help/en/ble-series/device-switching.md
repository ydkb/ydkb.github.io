# Multi-device switching

When USB and Bluetooth are connected to different devices, you can switch which one your keyboard is working with.

The switching between multiple Bluetooth devices is limited to the use of Adafruit Bluetooth firmware, so only some functions can be implemented.


## Switching between USB and Bluetooth

USB and Bluetooth can be connected to different computers. The keyboard is always in Bluetooth mode when the USB cable is not plugged in. When the keyboard is plugged into USB, it will automatically switch to USB mode. When the keyboard is plugged with a USB cable, you can switch between Bluetooth and USB, you can set a key yourself, or use LShift+RShift+U.


## Switching between Bluetooth devices

<font color="red" size="+1">!! Be sure to familiarize yourself with the instructions below before using this feature !!</font>

Set the function below to a key. And press it to switch between the connected host devices.

![|180](assets/device_switching_01.jpg)

Limited by Adafruit's firmware, it does not support active switching. So the real action of this function is to disconnect the current device and try to connect another. If it is connected to another device, it indicates that the connection is successful. If not, it keeps trying to connect another until timeout. When timeout, it will connect back to the previous device.

So when using, it is recommended that keyboard only pairs two devices in the same place. In this situation, it is connected to either device A or B when switching, just like switching between device A and B.

The specific pairing steps are

1. Preparations: First delete the paired keyboard on all devices. Then press <kbd>Lshift+RShift+LCtrl+R</kbd> once on the keyboard to clear the pairing information saved on the keyboard.
2. At this time, the keyboard is not connected. Make sure that your setup A and device B can search for the keyboard.
3. Device A is connected to the keyboard first, and after it can be used normally, turn off the Bluetooth of device A. At this time, the keyboard Bluetooth is not connected, and then use device B to connect the keyboard.
4. In this way, YDKB's BLE series keyboard is paired with device A and device B at the same time. You can use the switch device function when the Bluetooth of A and B are turned on at the same time.

When switching, the keyboard indicator will show the connection indication (Refer to [[ble-series: connection-status | Bluetooth Function switch & connection status]]). 

My test results show that switching from iPad to Windows is fast, but switching from Windows to iPad may take several seconds. A Mac or iPhone is similar to the iPad. Switching between Windows is also faster.

Known disadvantages:
  1. It is not possible to know which device is connected from the keyboard, but from the host device.
  2. If you enter the deep power-saving mode and wake the keyboard up again, device A and B are both nearby, it may be connected to A or B randomly, not 100% the last connection before.
  3. In a few cases, the switch may not be successful at one try.

Besides, in fact, the experience of switching devices is acceptable.


## Some Advices

If the devices to be switched are in a local area network, you can also consider using a KVM software, such as: 

```yddcode
0068 0074 0074 0070 0073 003A 002F 002F 0067 0069 0074 0068 0075 0062 002E 0063 006F 006D 002F 0064 0065 0062 0061 0075 0063 0068 0065 0065 002F 0062 0061 0072 0072 0069 0065 0072 0020 
```

Both the mouse and the keyboard can be switched at the same time, and the pasteboard can be shared. As long as the network is not slow(recommend both connected to 5G wifi or wired), the experience is excellent.
