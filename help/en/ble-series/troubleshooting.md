# BLE Series Troubleshooting Guide

This section is designed to help users find and resolve issues. This section is under construction.

<html><div class="hint">
<subtitle>HINT</subtitle>
<ul><li>In case of an error, first try to turn off the switch or pull out the battery, and then power on to see if it returns to normal.</li>
<li>Please follow the steps below to find the problem. Sometimes Bluetooth pairing or connection problems are not caused by the keyboard, but the OS or OS driver.</li>
</div></html>
<br>
<html><div class="attention">
<subtitle>ATTENTION!!</subtitle>
<ul><li>First of all, it is recommended that the keyboard is still working, such as indicator lights or at least partially working when connected to USB.</li>
<li>On the basis of meeting the previous one, you can check the current working status with the help of the keyboard indicator. </li>
<li>When it is convenient to connect to USB, it is recommended to use the text output battery value for troubleshooting. </li>
</div></html>

All references in the text to pressing <key>LShift+RShift+XX</key> or <key>LShift+RShift+LCtrl+XX</key> refer to holding down the left Shift and right Shift(maybe and left Ctrl) first and press XX key once. You can then release the left and right shifts. Only press one command at a time. To press another command, you need to release the left and right Shift keys, and then press the left and right Shift keys again.


## Bluetooth repeatedly connected/paired

If this is the case, pair it again. But before re-pairing, clear the pairing information in the keyboard as follows:
   1. First delete the paired Bluetooth from the host OS's paired devices list.
   2. Then press <key>LShift+RShift+R</key> once on the keyboard, the firmware after DKAD uses <key>LShift+RShift+LCtrl+R</key>.
   3. The host OS searches for the keyboard and re-pairs it.

<html><div class="hint">
<subtitle>Reminder</subtitle>

  - Please be careful not to press <kbd>LShift+RShift+R</kbd> by mistake in normal use, the pairing will be cleared by mistake, causing the computer to mismatch. 
  - And to avoid this, the firmware after DKAD changed to use <kbd>LShift+RShift+LCtrl+R</kbd>.
</div></html>

## Could not find Bluetooth

When using the indicator light to confirm the status, please refer to [Bluetooth Function switch & connection status](/en/ble-series/connection-status).

For the following content, when you can use the USB connection, it is recommended to select the text output power under the USB connection for troubleshooting.

### 1 Make sure the Bluetooth Function(not the power switch) is not turned off. 

<html>
<two_col>
<div style="float:left;width:48%;">
<col_h5>Use text output battery level</col_h5>
<col_list>1 In the place where you can type, press <key>LShift+RShift+V</key> or a custom key to output text information about battery level.</col_list>
<col_list>2 If the result is 12, the Bluetooth function is turned off. If it is not 12, the Bluetooth function is turned on.</col_list>
</div>
<div style="float:left;width:3%;">&nbsp;</div>
<div style="float:left;width:48%;">
<col_h5>Use the connection status indicator</col_h5>
<col_list>1 When the USB cable is reinserted or <kbd>LShift+RShift+S</kbd> is pressed, the indicator of the connection status is on.</col_list>
<col_list>2 If these operations do not light up the connection status indicator, then the Bluetooth function may be off (or the led is broken).</col_list>
</div>
</two_col>
<div style="clear:both;"></div>
</html>

If the result from the above is that the Bluetooth function is off, please use <kbd>LShift+RShift+W</kbd> to turn on the Bluetooth first, and then re-test step 1 to make sure that the Bluetooth is turned on. At this time the problem is still not solved, then continue.

### 2 Confirm the Bluetooth communication and connection status

<html>
<two_col>
<div style="float:left;width:48%;">
<col_h5>Use text output battery level</col_h5>
<col_list>1 The battery result typed with <key>LShift+RShift+V</key> is in XX-Y format. The XX means level, and the Y represents connection status. </col_list>
<col_list>2 If XX is not 44 or 45, of course it cannot be 12. Then when Y is 1, it means that the keyboard itself is connected. So it may be connected to some other device. </col_list>
<col_list>3 If XX is 44 or 45, it means failure to obtain information. This may be the reason for unsuccessful communication or battery service error. In this case, Bluetooth needs to be reset. </col_list>
</div>

<div style="float:left;width:3%;">&nbsp;</div>
<div style="float:left;width:48%;">
<col_h5>Use the connection status indicator</col_h5>
<col_list>1 When reinserting the USB cable or pressing <kbd>LShift+RShift+S</kbd>, the indicator of the connection status must be on. </col_list>
<col_list>2 If the current indication is connected. Check if it is connected to a device of yours or a device of another person. </col_list>
<col_list>3 If both are not, the flash frequency is actually very random. It may be faster or slower every few times, which means that the correct Bluetooth connection status has not been obtained. At this time, you may need to reset the Bluetooth. </col_list>
</div>

</two_col>
<div style="clear:both;"></div>
</html>

<col_h5>Two possibilities can be obtained from the above:</col_h5>
  - If you need to reset Bluetooth, please refer to [Reset Bluetooth](ble-series/reset-ble)
  - If it is to confirm that the Bluetooth is not connected and the communication status is normal, then try to press <kbd>LShift+RShift+R</kbd>, the firmware after DKAD uses <key>LShift+RShift+LCtrl+R</key >. You should be able to search again.


## Bluetooth can be connected but does not work

This problem is specifically described as: Bluetooth can automatically connect, and the status on the computer has always been connected, but the buttons cannot be used.

### 1 Confirm that the keyboard firmware is normal

Turn off the battery switch, disconnect the Bluetooth, and then turn on the switch again to confirm whether the Bluetooth will still become connected. At this time, it still cannot be used, then try to see if the USB connection is available. The firmware should be normal when the USB can be used.

### 2 Confirm that the Bluetooth communication status is normal

Use the text output battery level function, the result is not 44 or 45. If yes, you need to reset the Bluetooth, see here [Reset Bluetooth](ble-series/reset-ble)

### 3 Try to clear the paired information and re-pair

When the text output battery level is normal, first assume that the problem is on the keyboard side, then try to clear the keyboard side pairing information and then pair again as follows:
   1. First delete the paired Bluetooth from the host OS's paired devices list.
   2. Then press <key>LShift+RShift+R</key> once on the keyboard, the firmware after DKAD uses <key>LShift+RShift+LCtrl+R</key>.
   3. The host OS searches for the keyboard and re-pairs it.

### 4 Comparison of keyboard connected to other devices

If the above operation still does not work, there may be a computer driver or system bug, you can try to pair the keyboard to other devices, such as mobile phones or other computers, for comparison.


## Bluetooth cannot connect automatically

This problem is specifically described as: After the computer restarts or the keyboard is switched on and off, the Bluetooth fails to connect automatically, but if the paired keyboard on the computer is deleted at this time, and the keyboard is searched again, it can be found, and it can be used after re-pairing.

### 1 Confirm the Bluetooth connection status of the keyboard itself

<html>
<two_col>
<div style="float:left;width:48%;">
<col_h5>Use text output battery level</col_h5>
<col_list>1 The battery level typed with <key>LShift+RShift+V</key> is in XX-Y format. The XX means level, and the Y represents connection status. </col_list>
<col_list>2 When Y is 1, it means that the keyboard itself is connected and may be connected to some other device. </col_list>
</div>
<div style="float:left;width:3%;">&nbsp;</div>
<div style="float:left;width:48%;">
<col_h5>Use the connection status indicator</col_h5>
<col_list>1 Press <kbd>LShift+RShift+S</kbd> to check the connection status indicator. </col_list>
<col_list>2 If the current indication is connected. Check if it is connected to a device of yours or a device of another person. </col_list>
</div>
</two_col>
<div style="clear:both;"></div>
</html>

If you confirm that the keyboard itself reports that it is not connected, continue to look down.

### 2 Try to clear the information and pair again
If this is the case, pair it again. But before re-pairing, clear the pairing information in the keyboard as follows:
   1. First delete the paired Bluetooth from the host OS's paired devices list.
   2. Then press <key>LShift+RShift+R</key> once on the keyboard, the firmware after DKAD uses <key>LShift+RShift+LCtrl+R</key>.
   3. The host OS searches for the keyboard and re-pairs it.

After the above re-pairing, the keyboard can be used in the Bluetooth state.

### 3 Reconfirm whether the automatic connection is normal
Try to turn off and on the computer’s Bluetooth, or turn off and on the keyboard’s battery switch. In short, let the Bluetooth disconnect and see if it automatically reconnects. And the keyboard is used normally.

### 4 Comparison of keyboard connected to other devices

If the above still does not work, there may be a computer driver or system bug, you can try, for example, pair the keyboard to the phone, and then turn off the Bluetooth of the phone and then turn it on again to see if the phone can automatically connect.

### 5 Reset bluetooth config

After testing above, if the keyboard was connected to all devices, and then disconnected and could not be automatically reconnected.

Then try [Reset Bluetooth](ble-series/reset-ble). Compared with clearing the pairing information, the entire Bluetooth configuration will be reinitialized. Bluetooth can be reset correctly and can be re-initialized, generally it can be considered that everything is normal for Bluetooth hardware.


## Bluetooth can be found but unable to connect

Some win10 users have appeared before. The performance is as follows, Bluetooth can be searched, but no connection can be successful.

![](/assets/ble_troubleshooting_40.png)

### 1 If this is the first time you have encountered this problem

First confirm that the Bluetooth antenna of the computer is installed. Some motherboards of desktop computers have their own wifi and Bluetooth modules, or they can be installed by themselves. Even if you don't use wifi, but only use Bluetooth, you must install its external antenna. If it is not installed, the Bluetooth signal is also very poor, which is about equal to unusable. When the signal is insufficient, it will occasionally be searchable but the connection is always unsuccessful.

### 2 If this keyboard was normal on this computer before.

This may be a problem with the Bluetooth driver of the win10 system. For example, if the keyboard is paired to a mobile phone or other win10 device at this time, if it is normal, then 90% may be a system problem.

Let’s assume that it’s not a system problem. Before pairing, use <key>LShift+RShift+R</key>, and use <key>LShift+RShift+LCtrl+R</key> for firmware after DKAD to clear the keyboard Pairing information, and then connect, if the problem persists, and also use the keyboard to connect the phone or other win10 computer to confirm that it is normal, then try the following methods.

### 3 If it is a system problem

Let's make it simple. Turn off the computer's Bluetooth, turn it on. Then search and connect to see if it works.

If you can’t,  try restarting the computer, as the saying that restarting can solve 90% of the problems.

If it still doesn't work, try the following operations, and users who have encountered similar problems solved the problem by the following operation.

<col_h5>Uninstall and reinstall the Bluetooth driver</col_h5>
<col_list>1 In the device manager, right-click on the Bluetooth hardware, select uninstall, and pay attention to the **delete the device driver software**. </col_list>

![](/assets/ble_troubleshooting_41.png)

<col_list>2 Click the right mouse button in the device manager and select **Scan for hardware changes**. Here the system will automatically rediscover Bluetooth and install the driver. Generally, the automatically updated driver can be used without problems. </col_list>
