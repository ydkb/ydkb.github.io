# BLE module firmware upgrade

YDKB's BLE series Bluetooth modules use Adafruit Bluefruit LE firmware.

For updates, please refer to: https://learn.adafruit.com/introducing-the-adafruit-bluefruit-le-uart-friend/history

The above update log only writes to 0.7.7.

The latest one is 0.8.1. From the actual feedback of many users, 0.8.1 can improve the occasional combo problem, especially the Mac system.

<html><div class="hint">
<subtitle>Suggestion</subtitle>
<ul><li>If the current Bluetooth firmware is 0.7.7, it is recommended to change to 0.8.1 as described below.</li>
<li>Newly released after 2021, the default firmware is 0.8.1, so you don’t need to upgrade it yourself.</li></ul>
</div></html>

## View and update Bluetooth firmware

The software required to update the Bluetooth firmware is Bluefruit LE Connect, which can be downloaded directly from the Apple Store for Mac/iOS/iPadOS.

<html><div class="hint">
<subtitle>Suggestion</subtitle>
<ul><li>The Android version of the software must be refreshed before the file can be manually updated. And this update server is like potatoes.</li>
<li>It is recommended to use Mac or iOS to update, temporarily borrow someone else's, it is only used to connect the keyboard to update the firmware.</li></ul>
</div></html>


### 1 Download and install Bluefruit LE Connect
For Mac / iOS / iPadOS, search for "Bluefruit LE Connect" directly in the app store, then download and install it. Currently, the interfaces of the three versions downloaded and installed in the store are the same, so the following is only for iOS.

### 2 Connect the keyboard with Bluefruit LE Connect
<col_list>1 On the paired device, delete the keyboard whose Bluetooth firmware is to be upgraded, and ensure that the Bluetooth of the keyboard is not connected. </col_list>
<col_list>2 Connect the keyboard to the computer USB, and ensure that it is connected during the entire upgrade process. This is to prevent the keyboard from entering energy saving mode during the upgrade process. </col_list>
<col_list>3 Open the Bluefruit LE Connect software, search for the keyboard here, click and connect. Don't care about those Bluetooth that don't have a name, it's not the target device anyway. </col_list>
<col_list>4 Select Updates, the current Bluetooth firmware version will be displayed at the top. If it is 0.8.1, you don’t need to upgrade. If the above is 0.7.7, then choose one of the following two update methods, it is recommended to manually. </col_list>

<html>
<two_col>
<div style="float:left;width:48%;">
<col_h5>Automatic update</col_h5>
<col_list>5 When Adafruit's upgrade server is normal, the available firmware can be refreshed in the list. Be sure to choose the right one <color red>Version 0.8.1 BLEFRIEND32</color>. <html><br></html>The progress bar at the beginning of the upgrade is to download the firmware from the server. If the download is unsuccessful, you still choose to update manually.
</col_list>

![](/assets/ble_firmware_02.jpg)
</div>

<div style="float:left;width:3%;">&nbsp;</div>
<div style="float:left;width:48%;">
<col_h5>Manual update</col_h5>
<col_list>6 Adafruit's server may have a problem. If the content cannot be refreshed in the list, update the firmware manually. The download address is:

[github](https://github.com/adafruit/Adafruit_BluefruitLE_Firmware/tree/master/0.8.1/blefriend32) or [local download](https://ydkb.io/help/ble-series/blefriend32_0.8.1.zip)
</col_list>


The required files are the following two:
<html><div class="code" style="font-size:10px;border:1px solid #ccc;padding-left:10px;background:#fbfaf9">
blefriend32_s110_xxac_0_8_1_190410_blefriend32.hex
blefriend32_s110_xxac_0_8_1_190410_blefriend32_init.dat
</div></html>

When upgrading, select the file manually. Note that the corresponding Hex File is the larger hex file, and the Init File is the smaller dat file.

![](/assets/ada_51_fw.png)
</div>
</two_col>
<div style="clear:both;"></div>
</html>


## Updated instructions

This firmware only needs to be updated once. After the update is completed, the keyboard may not be used immediately, and the keyboard needs to be restarted. Some may need to pair again.


## View and update Bluetooth firmware under Android

It is strongly recommended to use iOS / iPadOS / Mac to update the firmware. It is really impossible to find or borrow the relevant equipment. Refer to the following instructions to use Android to complete the update of the Bluetooth module firmware.

Although there is Bluefruit LE Connect under Android, there is a bug. When it is not connected to the server, it does not display the option of manual update, causing no further operation.

Therefore, when updating the Bluetooth firmware under Android, the tool used is nRF Connect, you can search and download it yourself, or download the apk file from github: https://github.com/NordicSemiconductor/Android-nRF-Connect/releases

Firmware file package: https://ydkb.io/help/ble-series/blefriend32_0.8.1_nrftool.zip

The following are instructions for use, corresponding to the final picture.
  1. After installing nRF Connect, keep the keyboard unpaired, then find the keyboard here and click **Connect**.
  2. In the menu as shown in the figure, click **Read characteristics**. Then follow the prompts to complete the pairing.
  3. After pairing, you can see the current firmware version in **Software Revision String** in **Device Information**. If it is 0.7.7, it needs to be upgraded.
  4. Click the **DFU** icon in the upper right corner, and then select the zip file. The zip file is the downloaded **blefriend32_0.8.1_nrftool.zip**.
  5. Wait for the automatic update to complete, then the speed and progress will be displayed normally.
  6. Check the firmware version again to see if it has been successfully updated to 0.8.1.

![](/assets/ble_firmware_android.jpg)


