# Android的配对

BLE系列键盘的蓝牙部分，本身使用的是的蓝牙标准的HID Over GATT服务，因为只要系统硬件和软件都支持BLE HID，那么配对使用无问题。以目前安卓手机来说，还能在各位手上使用的，应该硬件条件都是满足支持蓝牙4.0+的。

Linux的发行版本太多所以无法一一举例说明。大部分用户测试正常，但是一些改版的安卓，可能直接配对会是到一点有问题。

比如（这是2018年时的，最新系统不确定），部分国产定制安卓（锤子，华为，OV的），可能在系统的蓝牙直接配对里，直接连不上。这种情况下，可以使用Adafruit Bluefruit LE Connect（网上搜索能找到apk下载）搜索并配对连接，之后就不用再打开此软件，键盘应该会自动连接了。

Adafruit Bluefruit LE Connect的历史版本可以在这里找到下载：https://apkpure.com/bluefruit-connect/com.adafruit.bluefruit.le.connect/versions