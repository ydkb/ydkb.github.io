
# 蓝牙的配对与使用


## 蓝牙配对连接

键盘有正常供电(USB电源或电池)，且键盘蓝牙未连接，这时就可以搜索到蓝牙并连接。

> [!yddh] 对于初次使用YDKB BLE系列的来说，有几项提醒
> - Windows 7 微软的蓝牙驱动是不支持BLE设备的，所以需要安装额外驱动。
> - Windows 10/11 在初次使用时，需配对一次然后删除再重新配对，之后重连接才会可用。
> - macOS 在配对时如果看不到键盘，可以按一次键盘的 <kbd>LShift+RShift+LCtrl+R</kbd>。

各系统单独配对说明，见如下链接
- [Windows 7 配对](ble-series/pairing-win7.md)
- [Windows 10/11 配对](ble-series/pairing-windows.md)
- [macOS 配对](ble-series/pairing-macos.md)
- [Linux 配对](ble-series/pairing-linux.md)
- [iOS / iPadOS 配对](ble-series/pairing-ios.md)
- [Android 配对](ble-series/pairing-android.md)
- [Niz 接收器 配对](ble-series/pairing-niz-dongle.md)

在以后的使用过程中，如果遇到连接问题，可以根据 [BLE 系列排错指南](ble-series/troubleshooting.md) 排查问题。

## 蓝牙功能键设置
蓝牙功能设置按键，在 `灯光及增强功能` 里。

![|400](assets/use-ble-01.png)

除了上图里的，还有随着后来固件更新时加入的，一共有如下这些: 
  1. 蓝牙/USB切换
  2. 设置蓝牙可发现
  3. 设置蓝牙不可发现
  4. 清除键盘端所有已配对设备
  5. Lock Mode(锁定模式) 
  6. 蓝牙功能开关
  7. 切换到另一个蓝牙设备

其中大多还有支持 <kbd>LShift+RShift+XX</kbd> 的快捷键，有的一般也用不到或很少用，所以不用都设置到键盘上。

## 蓝牙名称修改

YDKB的大部分BLE键盘蓝牙名称都是可以自己修改的。用YDKB Tool（可以[点此下载](http://ydkb.io/YDKBs-reflash.zip)，暂仅支持windows）。然后要点是三个：
  1. 在第一页选择好自己的键盘
  2. 插上USB数据线，只有USB模式下支持修改名称
  3. 尽量不要开启按键测试软件

在最后一页蓝牙设置里，输入新名称，再点击 <kbd>修改蓝牙名称</kbd>。先请不要嫌弃界面丑，先用，有比没有强。  

![|400](assets/use-ble-02.png)

之后会有弹窗口提示，删除电脑上已经配对的该键盘，然后重新搜索并配对，就是显示修改过的名称了。

它修改的是键盘内保存的名称。所以修改工具虽然只支持Windows，但是修改后对所有系统都有效。


## 设置蓝牙可发现

一般情况下不需要改动这个，保持默认使用即可。

```ad-yddcol0
##### 设置可发现
设置为可发现的快捷键是 <kbd>LShift+RShift+I</kbd> 

默认就是可发现，只有蓝牙处于可发现时，才能在它本身没有连接任何设备时，被其他设备搜索到并配对使用。
```

```ad-yddcol1
##### 设置不可发现
设置为不可发现的快捷键是 <kbd>LShift+RShift+O</kbd> 

设置后，在未连接设备里，其他的设备搜索蓝牙时不会显示这个设备。如果自己要重新配对时，记住务必改回可发现。
```


## 清除蓝牙设备信息

> [!ydda] 特别强调：
> - 这个清除配对信息不是重置蓝牙，重置蓝牙是别的操作，请勿混淆。

快捷键  <kbd>LShift+RShift+LCtrl+R</kbd> 

主要用途就是在蓝牙配对或连接出现异常时，可以使用。具体在要用到的地方会有说明，比如 `macOS的配对` 还有 `排错指南` 里。

