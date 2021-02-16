## Win10 Pairing

<html><div class="attention"> 
<subtitle>ATTENTION</subtitle>

  - Some users meet that Win10 1903 cannot connect to the Bluetooth keyboard automatically on login screen. Please upgrade to win10 1909.
  - Some systems work after pairing for the first time. But next time, although it shows that it is connected but cannot be used. Just delete and pair again.
  - It may also appear for the first connection after resetting Bluetooth. Same, delete and pair again.
</div></html>


Attention that this part of the instructions is for Windows 10.

  1. To connect to the keyboard with a device, first make sure the keyboard is unconnected so it can be searched.
  2. Search for the keyboard from Bluetooth management and click Connect. 

Some win10 users have installed the driver provided by the bluetooth manufacturer. When pairing, they are required to input the PIN code and the pairing fails like the pic below. This may because the driver does not support bluetooth 4.0.

<div style="width:500px">  

![](/assets/win10_pairing_01.jpg)
</div>

In this case, you need to uninstall the third-part Bluetooth driver, in order to restore the driver to Win10's native driver. The Bluetooth search and connection interface that comes with Win10 is a Modern UI style. In this interface, you can directly connect by clicking the device without entering a PIN code.

<div style="width:500px">

![](/assets/win10_pairing_02.png)
</div>

To add more, there may be some misunderstandings for people who use the Bluetooth keyboard for the first time. Win10 only connected when it is displays the keyboard as **connected** when it is really connected. **Paired** only  means that this computer has paired this device and even when the keyboard is not connected, it still shows that it is paired.

<div style="width:500px">

![](/assets/win10_pairing_03.jpg)
</div>

## If you encounter other problems

<html><font color="blue">If pairing or connection is abnormal, including but not limited to not being able to be paired, not being able to auto-connect after switching on or the computer repeatedly shows that it has been connected and paired, etc. </Font> </html>, You can use <html> <font color = "red"> Delete bonding information (<key>LShift+RShift+R</key> or <key>LCtrl+LShift+RShift+R</key>)</font></html>.

This operation is to clear all paired information in the Bluetooth module. You must perform it before re-pairing on the host device, instead of just deleting the Bluetooth keyboard and re-pairing it on the host device.
