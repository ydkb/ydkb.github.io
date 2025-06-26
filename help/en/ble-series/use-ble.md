# BLE Settings and Use

## Bluetooth pairing connection

The keyboard has normal power supply (USB power supply or battery), and the keyboard Bluetooth is not connected, then you can search for Bluetooth and connect.

> [!yddh] For those who use YDKB BLE series for the first time, there are a few reminders
> - Windows 7's ms driver does not support BLE, so an additional driver needs to be installed.
> - When Windows 10/11 is used for the first time, it needs to be paired once, then deleted and paired again, and then the reconnection will be available.
> - macOS If you cannot see the keyboard when pairing, try to press <kbd>LShift+RShift+LCtrl+R</kbd> once.

For separate pairing instructions for each system, see the link below
- [Windows 7 pairing](en/ble-series/pairing-win7.md)
- [Windows 10/11 pairing](en/ble-series/pairing-windows.md)
- [macOS pairing](en/ble-series/pairing-macos.md)
- [Linux pairing](en/ble-series/pairing-linux.md)
- [iOS / iPadOS pairing](en/ble-series/pairing-ios.md)
- [Android pairing](en/ble-series/pairing-android.md)
- [Niz dongle pairing](en/ble-series/pairing-niz-dongle.md)

In the future use, if you encounter connection problems, you can visit [BLE Troubleshooting](ble-series/troubleshooting.md).


## Bluetooth function keys

The Bluetooth function setting keys are in `LEDs & Functions`.

![|400](assets/use-ble-01.png)

In addition to the ones in the above picture, there are also those added with the later firmware update. There are a total of the following:
  1. Bluetooth/USB switch
  2. Set up Bluetooth to be discoverable
  3. Set Bluetooth undiscoverable
  4. Clear all paired devices on the keyboard
  5. Lock Mode
  6. Bluetooth function switch
  7. Switch to another bluetooth device


## Bluetooth name modification

The name of YDKB BLE series can be modified by yourself. Use YDKB Tool (You can [click here to download](https://ydkb.io/YDKBs-reflash.zip), currently only supports Windows and ydkb.io firmware). The main points are three:
  - Choose your own keyboard on the first page
  - Plug in the USB data cable. Renaming is only supported in USB mode
  - Do not open any key test software

In the Bluetooth settings on the last page, input the name you want, and then click the **Change BLE Name** button. Don't disdain this interface being ugly. It is for temporarily use. Something that can work is better than nothing.

![|400](assets/use-ble-02.png)

There will also be a dialog, which will prompt you to delete the keyboard that has been paired on your computer, then search again and reconnect your keyboard. It should show the modified name.

It modifies the name saved in the keyboard. Therefore, although the modification tool only supports Windows, it is valid for all systems after modification.


## Set bluetooth to be Discoverable

Under normal circumstances, there is no need to change this, just keep the default.


```ad-yddcol0
##### Set discoverable
The shortcut key set to be discoverable is<br> <kbd>LShift+RShift+I</kbd>

The default is discoverable. Only when Bluetooth is discoverable, it can be searched and paired by other devices when it is not connected to any device.
```

```ad-yddcol1
##### Set not discoverable
The shortcut key set to be non-discoverable is<br> <kbd>LShift+RShift+O</kbd>

After setting, in the unconnected device, this device will not be displayed when other devices search for Bluetooth. If you want to pair again, remember to change it back to discoverable.
```
## Delete bonding information

> [!ydda] CAUTION
> - Deleting bonding information is not Reset BLE which is another operation, please do not confuse it.

Short keys <kbd>LShift+RShift+LCtrl+R</kbd> 

The main purpose is to use it when Bluetooth pairing or connection is abnormal. There will be instructions where you need to use it, such as `macOS pairing` and `BLE Troubleshooting`.
