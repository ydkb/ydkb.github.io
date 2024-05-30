# BLE Series Troubleshooting Guide

This section is designed to help users find and resolve issues. This section is under construction.

> [!yddh] HINT
> - In normal use, occasionally encountered the key is obviously stuck, you can try to restart the keyboard with <kbd>LShift+RShift+R</kbd> to reconnect the Bluetooth to restore normal.
> - In case of an error, first try to turn off the switch or pull out the battery, and then power on to see if it returns to normal.
> - Please follow the steps below to find the problem. Sometimes Bluetooth pairing or connection problems are not caused by the keyboard, but the OS or OS driver.

> [!ydda] ATTENTION!!
> - Before troubleshooting, first confirm that the keyboard can still be recognized and typed by the computer when it is plugged into the USB cable.
> - If not, it may be a firmware error or a problem with the USB interface or cable, first refer to the wired keyboard troubleshooting guide (not yet completed).

<kbd>LShift+RShift+LCtrl+R</kbd> mentioned below, after pressing, there will be a connection indicator prompt. If there is no indication after pressing, it may be that the keyboard firmware is too old, or the key is not pressed correctly.


## Quick troubleshooting and reassurance

1. First, make sure that the keyboard can type out characters when the cable is connected. In this case, there is an 80% probability that the keyboard is fine.
2. When you can type with cable, the text output by <kbd>LShift+RShift+V</kbd> is normal, that is, it is not 12 or 44 or 45. there is an 90% probability that the keyboard is fine. Clearing the pairing information on the keyboard and pairing again usually solves the problem.
3. If the problem has not been solved, then use [Reset BLE](en/ble-series/reset-ble.md) and it is successful, that is, the Bluetooth name can be restored to the default Adafruit Bluefruit LE, and then re-initialized to the keyboard name. Then there is an 99% probability that the keyboard Bluetooth hardware and software is fine. If the problem persists after successfully resetting the Bluetooth, turn the direction of troubleshooting to the computer (such as system bugs or driver problems).

## Bluetooth repeatedly connected/paired

If this is the case, pair it again. But before re-pairing, clear the pairing information in the keyboard as follows:
1. First delete the paired Bluetooth from the host OS's paired devices list.
2. Press <kbd>LShift+RShift+LCtrl+R</kbd> on the keyboard to clear the pairing information saved on the keyboard.
3. The host OS searches for the keyboard and re-pairs it.

> [!yddh] Reminder
> - Please be careful not to press this shortcut key by mistake in normal use which will destroy the pairing information between the keyboard and the computernot. 
> - Firmware after DKAD (2020-10-13) changed to use <kbd>LShift+RShift+LCtrl+R</kbd> Part of the reason is to prevent accidental presses.

## Could not find Bluetooth

### 1 Confirm the Bluetooth function (not the power switch) is on

Connect the keyboard using USB.
1. In the place where you can type, press <key>LShift+RShift+V</key> or a custom key to output text information about battery level.
2. If the result is 12-0 or 120-0, the Bluetooth function is off. If it is not 12 or 120, the Bluetooth function is on.

If the result from the above is that the Bluetooth function is off.
1. If it is 12-0, please use <kbd>LShift+RShift+W</kbd> to turn on the Bluetooth function.
2. If it is 120-0, please turn on the physical switch of the keyboard, and then unplug and plug the USB cable again.

After turning on the Bluetooth function, you may be able to search or connect to the keyboard normally. 

If the problem is still not resolved, then continue.

### 2 Confirm the Bluetooth communication and connection status

Connect the keyboard using USB.
1. The battery result typed with <kbd>LShift+RShift+V</kbd> is in XX-Y format. The XX means level, and the Y represents connection status.
2. If XX is not 44 or 45, of course it cannot be 12. Then when Y is 1, it means that the keyboard itself is connected. So it may be connected to some other device. When Y is 0, try pressing <kbd>LShift+RShift+LCtrl+R</kbd>.
3. If XX is 44 or 45, it means failure to obtain information. This may be the reason for unsuccessful communication or battery service error. In this case, You may need to do  [Reset BLE](en/ble-series/reset-ble.md)


## Bluetooth can be connected but does not work

This problem is specifically described as: Bluetooth can automatically connect, and the status on the computer has always been connected, but the buttons cannot be used.

If it is a Windows system, please refer to [windows pairing](en/ble-series/pairing-windows.md). In some cases such as the first pairing, you need to delete it once after pairing, and then re-pair to connect and use normally.

Other systems and other situations encounter this problem, continue to read.

### 1 Confirm that the keyboard firmware is normal

Turn off the battery switch, disconnect the Bluetooth, and then turn on the switch again to confirm whether the Bluetooth will still become connected. At this time, it still cannot be used, then try to see if the USB connection is available. The firmware should be normal when the USB can be used.

### 2 Confirm that the Bluetooth communication status is normal

Use the text output battery level function, the result is not 44 or 45. If yes, you need to reset the Bluetooth, see here [Reset BLE](en/ble-series/reset-ble.md)

### 3 Try to clear the paired information and re-pair

When the text output battery level is normal, first assume that the problem is on the keyboard side, then try to clear the keyboard side pairing information and then pair again as follows:
1. First delete the paired Bluetooth from the host OS's paired devices list.
2. Press <kbd>LShift+RShift+LCtrl+R</kbd> on the keyboard to clear the pairing information saved on the keyboard.
3. The host OS searches for the keyboard and re-pairs it.

> [!yddh] reminder
> - This part of the operation focuses on the second step of "clearing the pairing information saved in the keyboard". If you don’t do step 2, it can be used after deleting and re-pairing, but the next connection may only show that it is connected but cannot be used.

### 4 Comparison of keyboard connected to other devices

If the above operation still does not work, there may be a computer driver or system bug, you can try to pair the keyboard to other devices, such as mobile phones or other computers, for comparison.


## Bluetooth cannot connect automatically

This problem is specifically described as: After the computer restarts or the keyboard is switched on and off, the Bluetooth fails to connect automatically, but if the paired keyboard on the computer is deleted at this time, and the keyboard is searched again, it can be found, and it can be used after re-pairing.

### 1 Confirm the Bluetooth connection status of the keyboard itself

使用USB连接键盘。
1. The battery level typed with <key>LShift+RShift+V</key> is in XX-Y format. The XX means level, and the Y represents connection status.
2. When Y is 1, it means that the keyboard itself is connected, and it may be connected to some other device.

If you confirm that the keyboard itself reports that it is not connected, continue to look down.

### 2 Try to clear the information and pair again

If this is the case, pair it again. But before re-pairing, clear the pairing information in the keyboard as follows:
1. First delete the paired Bluetooth from the host OS's paired devices list.
2. Press <kbd>LShift+RShift+LCtrl+R</kbd> on the keyboard to clear the pairing information saved on the keyboard.
3. The host OS searches for the keyboard and re-pairs it.

> [!yddh] reminder
> - This part of the operation focuses on the second step of "clearing the pairing information saved in the keyboard". If you don’t do step 2, it can be used after deleting and re-pairing, but the next connection may not be automatically connected.

After the above re-pairing, the keyboard can be used in the Bluetooth state.

### 3 Reconfirm whether the automatic connection is normal
Try to turn off and on the computer’s Bluetooth. Then see if it automatically reconnects and the keyboard is used normally.

### 4 Comparison of keyboard connected to other devices

If the above still does not work, there may be a computer driver or system bug, you can try, for example, pair the keyboard to the phone, and then turn off the Bluetooth of the phone and then turn it on again to see if the phone can automatically connect.

### 5 Reset bluetooth config

After testing above, if the keyboard was connected to all devices, and then disconnected and could not be automatically reconnected.

Then try  [Reset BLE](en/ble-series/reset-ble.md). Compared with clearing the pairing information, the entire Bluetooth configuration will be reinitialized. Bluetooth can be reset correctly and can be re-initialized, generally it can be considered that everything is normal for Bluetooth hardware.


## Bluetooth can be found but unable to connect

Some win10 users have appeared before. The performance is as follows, Bluetooth can be searched, but no connection can be successful.

![](assets/ble_troubleshooting_40.png)

### 1 If this is the first time you have encountered this problem

First confirm that the Bluetooth antenna of the computer is installed. Some motherboards of desktop computers have their own wifi and Bluetooth modules, or they can be installed by themselves. Even if you don't use wifi, but only use Bluetooth, you must install its external antenna. If it is not installed, the Bluetooth signal is also very poor, which is about equal to unusable. When the signal is insufficient, it will occasionally be searchable but the connection is always unsuccessful.

### 2 If this keyboard was normal on this computer before.

This may be a problem with the Bluetooth driver of the win10 system. For example, if the keyboard is paired to a mobile phone or other win10 device at this time, if it is normal, then 90% may be a system problem.

Let’s assume that it’s not a system problem. Before pairing, use <key>LShift+RShift+R</key>, and use <key>LShift+RShift+LCtrl+R</key> for firmware after DKAD to clear the keyboard Pairing information, and then connect, if the problem persists, and also use the keyboard to connect the phone or other win10 computer to confirm that it is normal, then try the following methods.

### 3 If it is a system problem

Let's make it simple. Turn off the computer's Bluetooth, turn it on. Then search and connect to see if it works.

If you can’t,  try restarting the computer, as the saying that restarting can solve 90% of the problems.

If it still doesn't work, try the following operations, and users who have encountered similar problems solved the problem by the following operation.

##### Uninstall and reinstall the Bluetooth driver

1. In the device manager, right-click on the Bluetooth hardware, select uninstall, and pay attention to the `delete the device driver software`.

![](assets/ble_troubleshooting_41.png)

2. Click the right mouse button in the device manager and select  `Scan for hardware changes`. Here the system will automatically rediscover Bluetooth and install the driver. Generally, the automatically updated driver can be used without problems. 

