# BootHID Bootloader 

At present, a few of YDKB's keyboards use this bootloader, which does not need third-party driver(it uses the system's default HIDUSB driver).

The ydkbs-reflash tool calls HIDBootFlash.exe. reference: http://vusb.wikidot.com/project:hidbootflash

Source code for BootHID commandline: [https://github.com/yangdigi/BootHID/tree/master/commandline](https://github.com/yangdigi/BootHID/tree/master/commandline)


## How to reflash firmware under Windows

##### Use YDKB Tool.exe to automatically identify and flash firmware

DKB Tool can automatically identify the version of the bootloader, and then start to burn the firmware. The operation steps are as follows:

1. When the firmware works well, generally press and hold the top-left button on the keyboard and meanwhile insert the USB data cable. 
2. Then, drag the hex file of the firmware to `YDKB Tool.exe`, and the firmware will automatically start to refresh. The keyboard will restart when the reflash is complete.

If the wrong firmware is flashed, repeat the above two steps to flash the normal firmware (the dual-mode keyboard should first turn off the battery switch or unplug the battery).

![|500](assets/boothid_win_01.png)

As shown in the above picture (if it is different from the above picture, re-download the latest flashing tool on the website), the refresh is successful, and the following part can be ignored.

##### Use HIDBootFlash to manually flash the firmware

If the above method is not successful, you can also manually use HIDBootFlash.exe in the bin directory of the flashing tool. 

It may need VS2005SP1(vcredist_x86) if you can not run it.

![](assets/vc2005sp1_error.jpg)

<html>
Visual Studio 2005 (VC++ 8.0) SP1<br>
Microsoft Visual C++ 2005 Service Pack 1 Redistributable Package MFC Security Update<br>
<a href="http://www.microsoft.com/download/en/details.aspx?id=26347">http://www.microsoft.com/download/en/details.aspx?id=26347</a>
</html>

The interface for opening the software is as follows:

![|500](assets/hidbootflash.jpg)

Proceed as follows:
  1. Press and hold the key on the top-left corner of the keyboard and insert the USB data cable first to make the keyboard enter the flash mode.
  2. Click "Find Device" and it will prompt that the device is detected.
  3. Click "Open .hex File" and select the firmware to be flashed.
  3. Check "Reboot AVR", then click on "Flash Device" and wait for the reflash to complete.


## How to reflash firmware under Mac

Under Mac can directly use brew to install bootloadHID, reference: https://formulae.brew.sh/formula/bootloadhid 

```Terminal
brew install bootloadhid
```

This default version supports firmware below 30KB. Use the following command to flash.

```Terminal
bootloadHID -r hexFilePath
```

The result is as follows:

![|600](assets/mac_boothid_01.jpg)

The firmware used by some keyboards now occupies 31KB of space(Very few, the new firmware after 2023 will be reduced to within 30K), and the version installed by brew can not be reflashed directly. The following error message will appear.

![|600](assets/mac_boothid_02.jpg)

In this case, download it from https://github.com/yangdigi/BootHID, and after compiling, use the newly compiled bootloadHID to reflash the firmware, as shown in the figure below.

![|600](assets/mac_boothid_03.jpg)


## If you can not normally reflash firmware under windows

Here to talk about possible problems if you can't reflash. The latest reflash tool has added a function to detect if the driver is wrong.

1.Use zadig (download url: http://zadig.akeo.ie), select "list all" in the option, and then let the keyboard enter the flash mode. Check if the USB ID is 16C0 05DF, and the driver is HidUsb. This setting may display the name HIDBoot or just a USB input device. In short, the USB ID is the one below.

![|600](assets/boothid_driver_01.png)

![|600](assets/boothid_driver_02.png)

The two pictures above are all driven normally. If the display here is not HidUSB, for example, it may be:

![|600](assets/boothid_driver_04.png)

This driver is wrong and must be uninstalled.

2. Find the device in the device manager, non-hid, generally displayed on the universal serial bus or libusb device. Find, right click and select Uninstall Device.

![|400](assets/boothid_driver_05.png)

Also remove the device driver when uninstalling

![|400](assets/boothid_driver_06.png)

After uninstalling, go to zadig and check if the driver is restored to HidUsb. If not, refresh the device manager and continue uninstalling (for example, if the winusb or libusb driver is installed multiple times, it will need to be uninstalled multiple times).
