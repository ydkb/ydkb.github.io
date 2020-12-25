# YDPM40

<table_w30x70>

|Author |YANG |
|:--- |:--- |
|MCU|Atmega328p|

</table_w30x70>


YDPM40算是我第一个画的完整的板子，但也因为才入门，所以硬件上还是有点小坑。背光使用的IO不支持硬件PWM，而软件PWM在vusb上非常的不好使，致使YDPM40的背光仅支持开和关。按键功能除了不支持NKRO外，但支持6KRO，与其他TMK固件键盘无差。


## 展示图
by Prod
![](/assets/ydpm40-01.jpg)


## YDPM40 PCB文件
https://github.com/yangdigi/YDPM40-Keyboard-PCB


## YDPM40固件源码
https://github.com/yangdigi/tmk_keyboard/tree/master/keyboard/ydpm40

