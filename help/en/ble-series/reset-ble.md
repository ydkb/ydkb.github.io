# Reset BLE

For some pairing problems, you can press **LShift+RShift+R** to solve.(again, this shortcut key is not Reset BLE).

But in some cases that method it does not work. Thus, consider using **Reset BLE**. Try software reset first. If still no effect, try hardware reset.

<html><div class="hint">
<subtitle>HINT</subtitle>

  - After the reset is successful, the name is re-initialized. It is recommended to restart the keyboard and then pair and connect.
  - Sometimes the pairing works for the first time after resetting, but the keyboard restarts to show that it is connected but cannot be used. Please pair again.
</div></html>


## When BLE Reset is needed

When you follow the steps to [BLE Troubleshooting](en/ble-series/troubleshooting) , you can know when you need to reset.

Here is a brief talk about the more typical errors and judgments that need to be reset.

<table_w30x70>

| Event | Reason |
| --- | --- |
| The keys are not working properly when connected to USB only. | Bluetooth also works when using only USB. The communication between the MCU and the Bluetooth module is always maintained (need to check the power, connection status, etc.). <br>The MCU does not get a timely reply from the Bluetooth module, it will have a wait of up to 100ms, and the button pressed within this 100ms will not respond. |
| The result of outputting battery level in text is 44 or 45 | 44 or 45 means that the correct return value was not obtained. <br>This shows that part of the Bluetooth configuration is abnormal, or the communication between the MCU and the Bluetooth module is unsuccessful. |
</table_w30x70>

<div class="hint">
<subtitle>Suggestion</subtitle>

  - There are not many cases of Bluetooth configuration errors. Once errors occur, you can recall what the latest operation was.
  - If there is a way to stably reproduce the error situation, please contact me. Then there is a way to improve it in the firmware.
</div>



## Software reset and hardware reset

Try software reset fist. If the keyboard controller can still configure the Bluetooth module, software reset will work.

The hardware reset generally requires disassembling the keyboard and shorting the module. When the software reset does not work, try hardware reset. The hardware reset is a function of the Bluetooth module itself. As long as it can power on normally, it should work.

If you can't disassemble the keyboard temporarily, you can use the Bluetooth Function switch in [Bluetooth Function switch & connection status](ble-series/connection-status)  to turn off the Bluetooth function. So you can use it without problem in USB mode. **However, please remember to turn on the Bluetooth function when you reset Bluetooth later.**

<html><div class="attention">
<subtitle>ATTENTION</subtitle>

  - Whether software reset or hardware reset, the sign of <b><u>Successful reset </u></b> is that the name of the Bluetooth reverts to the default <b><u>Adafruit Bluefruit LE</u></b>.
  - And After the keyboard restarts, if this name is correctly configured to the keyboard's default name, there should be no problem with the Bluetooth hardware.
  - If you restart the keyboard too soon, you may not see the name to restore the default, but the keyboard function returns to normal also can indicate a successful reset.
</div></html>
<html>

<div style="width: 600px">

![](/assets/reset-ble-08.jpg?600)
</div>


## How to do Software Reset

This requires firmware support. So be sure to update to the latest firmware first.

Use <kbd>Reset</kbd> in **LEDs & Functions**. You need to set it to your keymap at first.

![](/assets/reset-ble-01.jpg)

Then use <key>LAlt+LWin+Reset</key> or <key>LOpt+LCmd+Reset</key> to perform BLE software reset.

<html><div class="hint">
<subtitle>HINT</subtitle>
<ul><li>The modifier keys that need to be pressed must all be on the left. The one on the right will not trigger a reset.</li>
<li>Generally, <kbd>Reset</kbd> will not be set in Layer 0, so the actual operation may press more than 3 physical buttons.</li><ul>
</div></html>


## Some special instructions

The newer keyboard has some hardware modifications, so its software reset actually performs a hardware reset.

Therefore, in the case of normal firmware, there is no need to manually short-circuit the Bluetooth module. And when the keyboard is performing the reset operation, there is a corresponding light as an indicator.


<table_w30x70>

| Supported keyboard | Indicator for reset |
| --- | --- | 
| Duang60 | Caps LED keeps on for about 5s |
| Pearly | LED1 and LED2 keep on for about 5s |
| HHKB BLE v2.5<br>(BLUE PCB and CHarging led) | LED1 and LED3 keep on for about 5s |
| BLE660C/BLE980C v2.2<br>(BLUE PCB and CHarging led) | All indicators keep on for about 5s |

</table_w30x70>

There are also a small number of keyboards with more than one switch, and the Bluetooth hardware reset can be short-circuited directly by the switch itself.

<table_w30x70>

| Keyboard | Method of resetting Bluetooth with switch |
| --- | --- | 
| Just660 | The DIP switch on the back, 3 and 4 are turned on at the same time, which is equivalent to the short circuit of hardware reset. |
| BLE980M | The DIP switch on the back, 3 and 4 are turned on at the same time, which is equivalent to the short circuit of hardware reset. |

</table_w30x70>


## How to do Hardware Reset

<html><div class="hint">
<subtitle>HINT</subtitle>
<ul><li>As long as the Bluetooth module can be powered, the hardware reset should work.
</li>
<li>If the reset is still not successful, one is to confirm that the Bluetooth function is not turned off; the other is to replace the shorting tool, some of the short-circuited wires may have insulating paint on the surface and are not conductive, or they are too thick to touch the near pin.</li><ul>
</div></html>


This requires disassembling the keyboard and shorting the pins on the Bluetooth module with a wire. 

### 1 Turn off the battery switch on the keyboard. Then, 

The battery is no longer used during the whole process, it is better to be able to unplug the battery (this is not a necessary operation). This is to ensure that only the USB is powered when the keyboard is plugged in, and there is no power when the USB is unplugged.

### 2 delete the paired device on the computer. 

If this keyboard is paired on the computer, delete it. Delete it to be able to search for this keyboard later, and then observe the Bluetooth name.

### 3 Short the Reset Pins on the module

Short the pin Factory Reset and the pin GND as shown below. While keeping them shorted, plug in the USB cable. After a few seconds, the Bluetooth name should revert to Adafruit Bluefruit LE from the Bluetooth searching interface. At this time, you don’t need to keep the shorting. Unplug the USB cable and plug it in again. The name will change back to the default Bluetooth keyboard name. Reset is complete.

Added: some of the keyboard next to the Bluetooth module left two holes, and there is text marked with **BLE Reset**, you can also direct the two short holes. 

![](/assets/reset-ble-07.jpg)

### 4 Restart the keyboard again

After successful reset in step 2 above, it is recommended to unplug the cable and plug it in again, and then connect to Bluetooth.
  


## Observe the reset process

The reset method has been described above, it is simple enough. The instructions below are just to show the reset process in more detail.

<html><font color="red">Before resetting, delete the paired keyboard from the host device and it is recommended to plug in the USB cable</font></html>(To prevent the keyboard entering power-saving mode). You also need a device that can search for Bluetooth normally and respond quickly, such as using Adafruit Bluefruit LE Connect software for Mac. After performing the reset operation, you can see that the name of Bluetooth has changed.

<div style="width: 600px">

![](/assets/reset-ble-02.png?600)
</div>

Then restart the keyboard (unplug the USB cable and plug it in again, or press **LShift+RShift+B**). Bluetooth should be auto configed. And you will see the Bluetooth name changes to the keyboard default name, but there is a UART logo.

<div style="width: 400px">

![](/assets/reset-ble-03.png?400)
</div>

After the Bluetooth configuration is complete, the keyboard will restart automatically. The UART logo will disappear, and the keyboard can also be seen in the system's Bluetooth. It only shows the Bluetooth address, not the name.

<div style="width: 600px">

![](/assets/reset-ble-04.png?600)
</div>

Windows is even simpler. You can see the changes of bluetooth name by using the default Bluetooth search interface.
