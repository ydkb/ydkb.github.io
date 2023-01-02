# STM60

|Author |YANG |
|:--- |:--- |
|MCU|STM32F103C8T6|

对非AVR系列的MCU的初次尝试，此PCB以性价比为主，目前仅支持有线模式。

PCB支持多种配列，在这方面与YD60BLE一致。

另外还有衍生的版本，Ver.B是全1u的版本，装在GH60外壳上螺丝位置只有三个可以对应，其他的需要自己加螺丝柱或者不装。 还有Ver.C。


## Hardware info

|COL|0|1|2|3|4|5|6|7|8|9|10|11|12|13|14|
|---|-|-|-|-|-|-|-|-|-|-|-|-|-|-|-|
|PIN|B15|A2|B0|B1|B10|B11|B12|B13|B14|B9|B8|B3|B4|B5|A15|

|ROW|0|1|2|3|4|
|---|-|-|-|-|-|
|PIN|A3|A4|A5|A6|A7|

|CapsLock LED|Backlight|
|---|-|
|PC13|PA8|


## STM60 PCB文件：
https://github.com/yangdigi/STM60-Keyboard-PCB


##  更新到UF2 Bootloader

2019年3月8日前售出的STM60使用的是STM32 HID Bootloader，本站已经不再支持，这里提供更新到 UF2 BL的方法。

2019年3月到6月售出的部分STM60，使用的UF2 Bootloader不是最新版，在Mac下可能无法显示U盘，也可以使用下面方法更新的最新的。这部分，在进入刷机模式后，查看U盘里显示的 INFO_UF2.TXT 的第一行内容，如果低于v2.0.5，就可以更新。

这是需要的文件，已经分类打包好： [ydkb_uf2boot_stm60.zip](keyboards/assets/ydkb_uf2boot_stm60.zip ':ignore')

>  [!ydda: 注意]
> - 压缩包内的 `固件更新器v2.1.exe`，如果你的电脑提示不安全，临时关闭一下杀毒软件，再使用它。
> - 下文中提到使用固件更新器的地方，必须用压缩包里的这个版本。
> - 更新BL的操作类似电脑更新BIOS，所以请务必不要因碰到线材等原因而导致意外中断。那样可能变砖，需要外接烧录器才能刷回了。

文件夹里包含如下文件，后面标有 星号 的，是操作时要接触到的。
```
1A. flash_UPDT-BL.bat *
1A. UPDT_BL_APP-16K_for_stm60hid.bin
1B. UPDT_BL_APP_16K_for_stm60uf2_v20x.uf2 *
2A. flash_UF2BOOT_stm60.bat *
2A. YDKB_UF2BOOT_stm60_v205.bin
hid-flash.exe
固件更新器v2.1.exe
```

操作方法是：
1. 先按Esc不放插线，键盘进入刷机模式。（这一步刷错无风险）
-  如果当前是STM32 HID Bootloader，点击运行`1A. flash_UPDT-BL.bat`，待烧录完成显示OK。
-  如果当前是旧的UF2 Bootloader，将文件 `1B. UPDT_BL_APP_16K_for_stm60uf2_v20x.uf2` 复制到刷机模式下的U盘里。
2. 拔线重插，查看 `设置 -- 蓝牙和其他设备`，最下方`更多设备和打印机设置`里，是否有名为 `UPDT-BL`的在其他设备里。
3. 如果第2步没有，那么重新尝试第1步，确认第1步操作完成。或者尝试换个USB接口或USB线再试试。
4. 在第2步看到有看到`UPDT-BL`了，那直接点击运行 `2A. flash_UF2BOOT_stm60.bat`。待进度条100%完成。这样已经完成了更新到 `UF2 Booloader v2.0.5`。（这一步是风险操作，中途不能断线，一定要刷完）。
5. 最后一步则是拔线，然后重新按Esc不放时插USB线，键盘进入到了UF2的刷机模式，显示为一个STM60的U盘。重新在ydkb.io网站上下载STM60的.UF2格式的固件，复制到STM60里完成固件烧录。
