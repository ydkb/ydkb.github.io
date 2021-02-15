# iOS / iPad 的配对

iOS对蓝牙4.0(BLE4.0)的第三方HID设备，兼容不是特别友好。所以出现配对不了搜索不了键盘的情况，按下面进行操作。

首先是正常情况下，很简单，只要不是特别老的iPhone或iPad，硬件都应该支持蓝牙4.0。  

  - 要用一个设备连接到键盘，首先务必保证键盘处于未连接状态，这样才可以被搜索到。
  - 从蓝牙管理里面搜索到键盘，点击连接。在搜索键盘的时候，一开始显示出来的，不一定是键盘名称，可能是一个地址，或者就是直接叫“配件”，一样直接点击连接就好。


## 如果出现无法搜索到的情况：

Mac及iOS对蓝牙服务的要求更严格。

如果这个键盘的固件早于2019.6.20，那么，先将固件升级到最新。之后再 <key>LShift+RShift+r</key> 同时一起按，然后Mac下应该能直接搜索到了。

如果是DKAD（2020.10.13）之后的固件，使用 <key>LShift+RShift+LCtrl+R</key>。

如果还是不行，再尝试下面补充的方法，使用Adafruit Bluefruit LE Connect进行连接。


## 无法搜索到时的补充：

进入App Store，搜索“Bluefruit LE"，找到下面这个应用，安装。

![](/assets/ios_pairing_01.jpg)

然后打开这个应用，在这个应用里，可以搜索到键盘了。

![](/assets/ios_pairing_02.jpg)

点击键盘后面的Connect，会有配对请求的提示。

![](/assets/ios_pairing_03.jpg)

再点配对，完成。从系统设置的蓝牙里，也可以看到蓝牙键盘已经连上了。

![](/assets/ios_pairing_04.jpg)

## 如果遇到其他问题

如果出现<html><font color="blue">配对或连接异常，包括但不限于无法配对，配对后重新开关电源会连接不上,电脑反复显示已连接已配对等</font></html>，可使用键盘的<html><font color="red">清除已配对（<key>LShift+RShift+R</key> or <key>LCtrl+LShift+RShift+R</key>）</font></html>功能，这个操作是清除蓝牙模块内的所有已配对信息，必须执行它之后再在设备上重新配对，而不是仅在设备上删除蓝牙键盘再配对，那样不一定能解决问题。

