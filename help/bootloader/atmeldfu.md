# Atmel DFU Bootloader

这是AVR一些单片机默认带的Bootloader，也是挺多键盘直接使用的。


## 使用Zadig安装DFU驱动

这个DFU的驱动在同台电脑同系统下，只需要安装一次，下次刷固件可以直接从步骤2开始。如果在这台电脑上已经用于刷新过此Bootloader的键盘，那么已有驱动，不用再重新安装。


### 1 下载Zadig

使用此Bootloader刷固件是必须安装驱动的，使用zadig，这里为了防止安装错设备，可以使用修改版的Zadig for Atmel DFU，下载址址：[https://pan.baidu.com/s/1sltOsrV](https://pan.baidu.com/s/1sltOsrV) 密码: ek5h

当然也可以使用官方版本。搜索“zadig”就能找到官网下载。

### 2 键盘进入DFU模式

先把键盘插上USB，然后按一下刷机按键，它们具体在键盘的哪个位置，就参考对应键盘的说明，一般都是键盘PCB上面的一个很小的按钮。

> [!ydda] 注意
> - 一定要按刷机按键，让键盘进入DFU模式。
> - 如果给非DFU的设备安装了驱动可能导致键盘无法使用。

从下面列表里，找到 `ATm32U4DFU`，或者还有 `LUFA DFU`。

```ad-yddcol0
##### ATm32U4DFU
![](assets/atmel_dfu_01.png)
```

```ad-yddcol1
##### LUFA DFU
![](assets/atmel_dfu_lufa_01.png)
```

> [!ydda] 再次提醒注意，特别是使用原版Zadig：
> - 不要去选 GH60 或者其他的键盘名，如果选择了还了此驱动，该键盘就不能用了，需要卸载驱动或者换个 USB 接口插。

![|600](assets/atmel_dfu_02.png)


### 3 安装驱动
正确的选择 `ATm32U4DFU` 或是 `LUFA DFU` 后，驱动选择 `WinUSB` 点击 Install Driver，安装成功会有提示。

![](assets/atmel_dfu_03.png)

像上图这样，Driver 处显示为 WinUSB 了，表示安装成功。

> [!yddh] 提示
> - 如果安装不成功，请从来，或者尝试以管理员身份运行 zadig.exe。

### 4 补充说明

如果安装不成功WinUSB驱动，或者安装了也无法使用。可能是因为有的精简系统上不支持WinUSB的驱动，那么也可以选择安装LibUSB的驱动。YDKB提供的刷机工具是同时支持libusb和winusb驱动的。

> [!yddh] 如果有使用多个键盘都是DFU刷机的，建议：
> - 有使用tkg刷机的，建议使用WinUSB驱动，因为tkg的刷固件工具使用的是WinUSB。
> - 如果有使用qmk的键盘，建议使用LibUSB驱动，因为qmk的刷固件工具使用的是LibUSB。

## 刷新HEX固件

使用Atmel DFU Bootloader的键盘，一般固件格式为HEX，把HEX文件直接拖到刷机工具（在下载hex固件的位置就有下载刷机工具）里的YDKB Tool.exe上，就会开始刷新了。要注意YDKB Tool在解压的时候，需要把所有内容都解压出去并且保留在同一个文件夹，不要去移动文件或者修改其包括文件的文件名。

![|600](assets/dfu_reflash_01.png)

然后会提示“设备进入刷机模式后自动识别并执行更新”，这时按键盘的刷机按钮，或者说提前按刷机按钮让键盘处于了刷机模式，都会自动开始刷新。如下图，识别到DFU并且刷新固件。

![|600](assets/dfu_reflash_02.png)



