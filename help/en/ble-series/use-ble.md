# BLE Settings and Use

Earlier, we talked about pairing. Here talk about some settings of BLE series. 

The main function setting for BLE series can be found in **LEDs & Functions**. It shows the function description when the mouse is pointing one. Set your wanted functions to your keymap. Some functions have default shortcut keys, which can be used without setting. (see: __[[en:magic-commands|Default command keys]]__)

<div style="width: 400px">

![](/assets/use-ble-01.png?400)
</div>


From left to right, there are some that may not be listed here, and they will be explained separately.
   1. Bluetooth/USB switch
   2. Set up Bluetooth to be discoverable
   3. Set Bluetooth undiscoverable
   4. Clear all paired devices on the keyboard
   5. Lock Mode


## Switch between Bluetooth and USB 

Short keys **LShift+RShift+U**

USB and Bluetooth can be connected to different computers. The keyboard is always in Bluetooth mode when the USB cable is not plugged in. When the keyboard is plugged into USB, it will automatically switch to USB mode. When the keyboard is plugged with a USB cable, you can switch between Bluetooth and USB, you can set a key yourself, or use **LShift+RShift+U**.

In addition, switching between multiple paired Bluetooth devices is not supported.

If multiple Bluetooth devices are paired, to switch from A to B, assuming A is currently connected, you need to turn off A's Bluetooth and turn on B's Bluetooth. This is limited by the module's own firmware that does not support active switching.


## Bluetooth name modification

The name of YDKB BLE series can be modified by yourself. Use YDKB Control (for the time only win64 versions are supported), which is included in reflash tool downloaded from ydkb.io. The main points are three:
  -Choose your own keyboard on the first page
  -Plug in the USB data cable. Renaming is only supported in USB mode
  -Do not open any key test software

In the Bluetooth settings on the last page, input the name you want, and then click the **Change BLE Name** button. Don't disdain this interface being ugly. It is for temporarily use. Something that can work is better than nothing.

<div style="width: 400px">

![](/assets/use-ble-02.png?400)
</div>

There will also be a dialog, which will prompt you to delete the keyboard that has been paired on your computer, then search again and reconnect your keyboard. It should show the modified name.

If the pair is on a Mac, just restart the keyboard, the name on the Mac will be updated automatically when you reconnect.


## Set bluetooth to be Discoverable

Short keys **LShift+RShift+I** 

This setting will be saved after restart. The default is discoverable. Only when bluetooth is discoverable, it can be searched by other devices and paired when it is not connected to any device.


## Set bluetooth to be Not Discoverable

Short keys **LShift+RShift+O**

This setting will be saved after restart. After setting, the device will not be displayed when other devices search for bluetooth in the unconnected device. If you want to pair it, remember to change back to be discoverable.


## Delete bonding information (Note: this is NOT Reest BLE.)

Short keys **LShift+RShift+R**. If it is the firmware after KAD, you also need to hold **LCtrl** at the same time

This is mentioned at the end of each system pairing. The main purpose is to solve the problem when Bluetooth pairing or connection is abnormal (such as repeated pairing and connection).

The use method is:
  -First delete the paired keyboard on the host device.
  -Then press **LShift+RShift+R** once on your keyboard.
  -Search the keyboard and re-pair it.

## Lock Mode

After pressing this key, the keyboard immediately turns off Bluetooth and enters the deep power-saving mode. by only pressing **F** and **J** at the same time, or re-plugging the USB cable, or turning the power on and off again can wake the keyboard up. It is desinged for putting in the bag without turning off the switch.


## Power-saving mode On/Off

Short keys **LShift+RShift+P**

This is not a commonly used feature, and some people even misunderstand it, so there is no choice in **LEDs & Functions**.

By default, the keyboard will enter the power-saving state after being idle for a period of time (15s), and the lights will be turned off at the same time. Press any key again to wake up. This will not affect normal use. Then after a relatively long period of time (after hours), Bluetooth will be turned off directly. At this time, it will take a few seconds to wake up again.

But if you want to turn this off and don't let the keyboard enter power-saving mode.  You can use **LShiftnd+RShift+P** to turn it off, press it again to turn it on. Turning off the power saving mode will greatly shorten the battery life. In addition, when the energy-saving mode is turned off, if the USB is not connected and Bluetooth is not connected for more than 60 seconds (the keyboard is not used in this state), the energy-saving mode will still be forcibly turned on.

To check if the power-saving mode is turned off, the keyboard's light is always on. 

This setting is not saved after restart. Every time you re-plug the USB or switch the power or restart the keyboard, the energy saving mode will return to the default on state. 