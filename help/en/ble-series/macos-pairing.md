# macOS Pairing

** Note: ** 

For MacOS 10.13.6, several people reported that there is some problems with using BLE HID. It is not limited to the keyboard but also other BLE HID devices like some mouses. The deivce can be paired and connected, but when typing it is invalid. The solution is to upgrade to OS to 10.14 or 10.15.


## Normal Pairing Steps

Mac is not very friendly with 3rd Bluetooth 4.0 HID devices. If the keyboard cannot be searched, please follow the steps below.

The first is that under normal circumstances, it is very simple, as long as the computer is not particularly old, the hardware should support Bluetooth 4.0.

  1. To connect to the keyboard with a device, first make sure the keyboard is unconnected so that it can be searched.
  2. Search for the keyboard in Bluetooth management and click Connect. When searching for a ydkb's ble series keyboard, what is displayed may be not a name but an address. Just Click it to connect.

<div style="width: 600px">

![](/assets/mac-pairing-001.png)
![](/assets/mac-pairing-002.png)
</div>

## If keyboard cannot be found:

Mac and iOS have stricter requirements for Bluetooth services.

If the keyboard's firmware is before 2019.6.20, please update it. Then press <key>LShift+RShift+R</key>. The keyboard should be searched and the icon displayed after successful connection is a keyboard, not the Bluetooth icon in the screenshot below.


If it is firmware after DKAD (2020.10.13), use <key>LShift+RShift+LCtrl+R</key>.
If that doesn't work, then try the supplementary method below to connect using Adafruit Bluefruit LE Connect.


## Addon note for Cannot be found :

Enter the App Store, search for "Bluefruit LE", find the following application, and install it.
<div style="width: 600px">

![](/assets/mac_pairing_01.png)
</div>

Then open this application, in this application, you can search the keyboard. Click and connect. Then you can use it normally.

![](: assets: Mac_Pairing_02.png)

In Bluetooth preferences, you can also see that the keyboard is connected. When connected with Adafruit software, the icon displayed may be a Bluetooth instead of a keyboard. So try not to use this method.
<div style="width: 600px">

![](/assets/mac_pairing_03.png)
</div>

## If you encounter other problems

<html><font color="blue">If pairing or connection is abnormal, including but not limited to not being able to be paired, not being able to auto-connect after switching on or the computer repeatedly shows that it has been connected and paired, etc. </Font> </html>, You can use <html> <font color = "red"> Delete bonding information (<key>LShift+RShift+R</key> or <key>LCtrl+LShift+RShift+R</key>)</font></html>.

This operation is to clear all paired information in the Bluetooth module. You must perform it before re-pairing on the host device, instead of just deleting the Bluetooth keyboard and re-pairing it on the host device.
