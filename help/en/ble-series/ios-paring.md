# iOS/iPadOS Pairing 

It is very simple, as long as the iPhone or iPad is not particularly old, the hardware should support Bluetooth 4.0.

  1. To connect to the keyboard with a device, first make sure the keyboard is unconnected so it can be searched.
  2. Search for the keyboard from Bluetooth management and click Connect. When searching for a keyboard, what is displayed at the beginning may not be the keyboard name but an address, or called "accessories".

iOS is not particularly friendly to third-party HID devices with Bluetooth 4.0 (BLE4.0). Therefore, when the keyboard cannot be searched, Please follow the steps below.


## If keyboard cannot be found:
Mac and iOS have stricter requirements for Bluetooth services.

If the keyboard's firmware is before 2019.6.20, please update it. Then press <key>LShift+RShift+R</key>. The keyboard should be searched. 

If it is firmware after DKAD (2020.10.13), use <key>LShift+RShift+LCtrl+R</key>.

If that doesn't work, then try the supplementary method below to connect using Adafruit Bluefruit LE Connect.


## Addon note for Cannot be found :

Enter the App Store, search for "Bluefruit LE", find the following application, and install it.

![](/assets/ios_pairing_01.jpg)

Then open this app. In this app, you can search the keyboard.

![](/assets/ios_pairing_02.jpg)

Click Connect behind the keyboard and you will be prompted for a pairing request.

![](/assets/ios_pairing_03.jpg)

Click on pairing to finish. From the Bluetooth settings in the system, you can also see that the Bluetooth keyboard is connected.

![](/assets/ios_pairing_04.jpg)


## If you encounter other problems

<html><font color="blue">If pairing or connection is abnormal, including but not limited to not being able to be paired, not being able to auto-connect after switching on or the computer repeatedly shows that it has been connected and paired, etc. </Font> </html>, You can use <html> <font color = "red"> Delete bonding information (<key>LShift+RShift+R</key> or <key>LCtrl+LShift+RShift+R</key>)</font></html>.

This operation is to clear all paired information in the Bluetooth module. You must perform it before re-pairing on the host device, instead of just deleting the Bluetooth keyboard and re-pairing it on the host device.
