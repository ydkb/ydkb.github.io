# Load Keymap

This section describes how to read the keymap of the current keyboard.

It is only for reading. After the setting is completed, you still need to download the firmware first, and reflash it to your keyboard.


## Upload your firmware to load

In the top left corner of the page, through READ KEYMAP, you can choose Upload file to upload your previous downloaded firmware to read its keymap.

For keyboards that use Lufa Mass Storage bootloader or UF2 bootloader, you can first make the keyboard enter flash mode, then directly copy the firmware file from the USB disk drive and upload it to ydkb.io to read its keymap.

For keyboards with other bootloaders, you need to save the hex file of the firmware yourself so that it can be uploaded and read later.


## Receive the keyboard (test function)

It is a test function and may change, so please save your own hex file. If the reading progress is not completed, or the data receive is wrong, please try to refresh the webpage and try again.

The keyboard that has <kbd>Send Keymap</kbd> in the **LEDs &Functions** supports this function.

The keyboard is required to update the firmware to later than 2019-10-14. Tested with Chrome browser under Windows and Mac, works well. Actually, this function sends keystrokes to the browser, so the speed is slow. It may take about 10 seconds to complete a read under Win, and a little longer under Mac.

<html>
<two_col>
<div style="float:left;width:48%;">
<col_h5>Method 1：</col_h5>

  1. The keyboard needs to set a key to be <kbd>Send Keymap</kbd> in **LEDs & Functions**
  2. Then open http://ydkb.io and keep this window active.
  3. Press the <kbd>Send Keymap</kbd> key you set on the keyboard. The webpage will start to show the receiving. It is recommended not to operate the computer until the receiving is completed.

</div>
<div style="float:left;width:3%;">&nbsp;</div>
<div style="float:left;width:48%;">
<col_h5>Method 2 (If <kbd>Send Keymap</kbd> is not set.):</col_h5>

  1. Use YDKB Control that is later than 20191014. Open it and select your keyboard.
  2. Then open http://ydkb.io and keep this window active.
  3. Press the keyboard (other keyboards are also available) <kbd>LShift+LAlt+K</kbd>. The webpage will start to show the receiving. It is recommended not to operate the computer until the receiving is completed.
</div>
</two_col>
<div style="clear:both;"></div>
</html>
