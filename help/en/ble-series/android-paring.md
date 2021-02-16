# Android pairing

The Bluetooth part of the BLE series keyboard itself uses the Bluetooth standard HID Over GATT service, because as long as the system hardware and software support BLE HID, there is no problem with pairing. For the current Android phones, those that can be used in your hands should meet the hardware requirements and support Bluetooth 4.0+.

There are too many Linux distributions to illustrate one by one. Most users have tested it normally, but for some modified versions of Android, there may be a problem with direct pairing.

For example (this is in 2018, the latest system is uncertain), some domestic customized Android (Hammer, Huawei, OV) may not be directly connected in the system's Bluetooth direct pairing. In this case, you can use Adafruit Bluefruit LE Connect (online search to find the apk download) to search and pair the connection, then you don't need to open this software again, the keyboard should automatically connect.

The historical version of Adafruit Bluefruit LE Connect can be found and downloaded here: https://apkpure.com/bluefruit-connect/com.adafruit.bluefruit.le.connect/versions
