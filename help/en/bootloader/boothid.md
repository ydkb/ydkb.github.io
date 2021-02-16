# BootHID Bootloader 

At present, a few of YDKB's keyboards use this bootloader, which does not need third-party driver(it uses the system's default HIDUSB driver).

The ydkbs-reflash tool calls HIDBootFlash.exe. reference: http://vusb.wikidot.com/project:hidbootflash

Source code for BootHID commandline: [https://github.com/yangdigi/BootHID/tree/master/commandline](https://github.com/yangdigi/BootHID/tree/master/commandline)


## How to reflash firmware under Windows

When the firmware works well, generally press and hold the top-left button on the keyboard and meanwhile insert the USB data cable. Then, drag the hex file of the firmware to **YDKB Tool.exe**, and the firmware will automatically start to refresh. The keyboard will restart when the reflash is complete.

You can also manually use HIDBootFlash.exe in the bin directory of the flashing tool. It needs VS2005SP1.

<html>
Visual Studio 2005 (VC++ 8.0) SP1<br>
Microsoft Visual C++ 2005 Service Pack 1 Redistributable Package MFC Security Update<br>
<a href="http://www.microsoft.com/download/en/details.aspx?id=26347">http://www.microsoft.com/download/en/details.aspx?id=26347</a>
</html>

The interface for opening the software is as follows:

<div style="width: 500px">

![](/assets/hidbootflash.jpg?500)
</div>

Proceed as follows:
  1. Press and hold the key on the top-left corner of the keyboard and insert the USB data cable first to make the keyboard enter the flash mode.
  2. Click "Find Device" and it will prompt that the device is detected.
  3. Click "Open .hex File" and select the firmware to be flashed.
  3. Check "Reboot AVR", then click on "Flash Device" and wait for the reflash to complete.


## How to reflash firmware under Mac

Use the above source code to compile the bootloadHID. Then,

    1  chmod 755 bootloadHID
    2  brew install libusb-compat
    3  ./bootloadHID

If there is no error description here, it is right. 

When you want to reflash the firmware, use

    ./bootloadHID -r hex_path

As the picture below, the reflash is complete with the end address of 0x7c00. The error that appears at the end can be ignored.

<div style="width: 600px">

![](/assets/mac_boothid.jpg?600)
</div>


## If you can not normally reflash firmware under windows

Here to talk about possible problems if you can't reflash. The latest reflash tool has added a function to detect if the driver is wrong.

1.Use zadig (download url: http://zadig.akeo.ie), select "list all" in the option, and then let the keyboard enter the flash mode. Check if the USB ID is 16C0 05DF, and the driver is HidUsb. This setting may display the name HIDBoot or just a USB input device. In short, the USB ID is the one below.

<div style="width: 600px">

![](/assets/boothid_driver_01.png?600)

![](/assets/boothid_driver_02.png?600)
</div>

The two pictures above are all driven normally. If the display here is not HidUSB, for example, it may be:

<div style="width: 600px">

![](/assets/boothid_driver_04.png?600)
</div>

This driver is wrong and must be uninstalled.

2. Find the device in the device manager, non-hid, generally displayed on the universal serial bus or libusb device. Find, right click and select Uninstall Device.

<div style="width: 400px">

![](/assets/boothid_driver_05.png?400)
</div>

Also remove the device driver when uninstalling

<div style="width: 400px">

![](/assets/boothid_driver_06.png?400)
</div>

After uninstalling, go to zadig and check if the driver is restored to HidUsb. If not, refresh the device manager and continue uninstalling (for example, if the winusb or libusb driver is installed multiple times, it will need to be uninstalled multiple times).
