# BootHID Bootloader

目前来说，YDKB的挺多键盘使用的是这个Bootloader，免驱（使用的是系统自带的HIDUSB驱动）。

基本就是按照键盘对应的说明，按指定按键的同时插入USB线，就进入刷固件模式了。

ydkbs-reflash调用的是HIDBootFlash，参考资料：http://vusb.wikidot.com/project:hidbootflash

Source code for BootHID commandline: [https://github.com/yangdigi/BootHID/tree/master/commandline](https://github.com/yangdigi/BootHID/tree/master/commandline)


## Win下刷固件的方法

固件功能正常的时候，一般是按住键盘左上角按键不放，同时插入USB数据线，键盘进入刷机模式。这时将固件的hex文件拖到YDKB Tool.exe上，固件将自动开始刷新。刷新完成后键盘会重启。

也可以手动使用刷机工具里的bin目录内的HIDBootFlash.exe，然后进行刷新。

如果运行时提示“无法启动，并行配置不正确”，如下图，在bat界面的提示也与这个类似。

![](assets/vc2005sp1_error.jpg)


请安装VC运行库，需要的是vcredist_x86, 官方下载地址如下

<html>
Visual Studio 2005 (VC++ 8.0) SP1<br>
Microsoft Visual C++ 2005 Service Pack 1 Redistributable Package MFC Security Update<br>
<a href="http://www.microsoft.com/download/en/details.aspx?id=26347">http://www.microsoft.com/download/en/details.aspx?id=26347</a>
</html>

打开软件的界面如下：

![|500](assets/hidbootflash.jpg)

步骤如下：
  1. 先按键盘左上角按键不放插入数据线，让键盘进入刷机模式。
  2. 点击 Find Device，会提示检测到设备。
  4. 勾上 Reboot AVR，然后点击Flash Device，等待刷新完成即可。


## Mac下刷固件的方法

在Mac下可以直接使用brew安装bootloadHID，参考 https://formulae.brew.sh/formula/bootloadhid ，

```Terminal
brew install bootloadhid
```

这个默认版本的，支持不超过30KB的固件。刷新的时候使用如下命令。

```Terminal
bootloadHID -r hex路径
```

实际效果如下：

![|600](assets/mac_boothid_01.jpg)

某些键盘现在使用的固件占用的是31KB的空间，直接使用brew安装的版本，无法刷新。会出现如下的错误提示。

![|600](assets/mac_boothid_02.jpg)

这种情况，从 https://github.com/yangdigi/BootHID 下载，编译后，用新编译的bootloadHID来刷新固件即可成功，如下图所示。

![|600](assets/mac_boothid_03.jpg)


## Win下无法正常刷固件时

这里说一下如果无法刷的时候，可能的问题。最新的刷固件软件里面已经加入了检测驱动的功能，如果提示驱动错误，按下吧操作:

1.使用zadig (下载地址：http://zadig.akeo.ie )，选择好option里面的list all，然后让键盘进入刷机模式。查看如下USB ID为16C0 05DF的设置，对应的Driver是不是HidUsb。这个设置可能显示的是名字HIDBoot，也可能只是USB输入设备。总之看对应的USB ID是下图这个才行。

![|600](assets/boothid_driver_01.png)

![|600](assets/boothid_driver_02.png)

上面两个图都是驱动正常的，如果这里显示的不是HidUSB，比如可能是：

![|600](assets/boothid_driver_04.png)

这个驱动是错的，就必须要卸载了。

2.设备管理器里找到设备，非hid的，一般就显示在通用串行总线或者libusb设备等地方。找到，右键点击，选择卸载设备。

![|400](assets/boothid_driver_05.png)

同时卸载时选中删除设备驱动

![|400](assets/boothid_driver_06.png)

卸载后再去zadig里面查看一下，驱动是否恢复为HidUsb了，如果不是，设备管理器里面刷新一下，继续卸载（比如winusb或libusb驱动安装过多次的情况，就需要多次卸载了，直到卸载干净）。


## 补充说明

如果还有遇到特殊情况，比如怎么卸载驱动都回不到HidUSB，那就直接联系我远程处理吧。

