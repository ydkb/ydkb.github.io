# STM32 HID Bootloader

YDKB的STM60早期有部分使用的是这个Bootloader，免驱（使用的是系统自带的HIDUSB驱动）。

这个 BL 对 USB线和一些USB接口有点兼容问题，会挑。所以不再使用了，也不建议使用。

STM60后续改为了 [UF2 Bootloader](bootloader/uf2-bootloader.md)。

这里提供 STM60 更新到最新 UF2 BL的方法，具体见： [STM60说明页面](keyboards/stm60.md) 。



