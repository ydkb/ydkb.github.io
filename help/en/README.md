# Welcome to use YDKB 
Currently some documentations for English are missing. You can use online translation service.

> [!yddh] HINT
> - It is recommended to use Chrome or Edge browser for best compatibility.
> - The latest versions of Firefox and Safari are currently supported as well.
> - This document may have some lack of rigor and uniformity, please forgive me.

This document is for the use of https://ydkb.io. You can also visit: https://ydkb.github.io.

> [!ydda] ATTENTION
> - The website of ydkb.io is only used to generate firmware with your keymap. It can not read or write any information from or to the keyboard.
> - The reason is that <u>the firmware of YDKB does not plan to add any additional interfaces except keyboard functions, so online key modification is not supported</u>.
> - If you need to change the keys online, [via | vial firmware](en/other-firmware/vial.md) is also provided here (some keyboards provide this firmware).

Here, too, are some basic rules from the beginning of my own vision:
  1. Try not to download software to complete the firmware update. (This needs the MSD Bootloader)
  2. Only under the condition of human intervention can keyboard information be read or written. This includes updating firmware, reading keymap, etc.
  3. No need to run any driver software for daily use.

The firmware of YDKB has been simplified and modified on the basis of TMK. The purpose is to make it easier to use, do not need any programming foundation. The functions it currently supports are roughly as follows:

```mindmap
YDKB
  Key Functions
    Normal Key
      The regular keyboard keys.
      keys only on keyboards of some countries
    Combo Keys(Mods Keys)
      Mods with key like Win+Shift+S
      Mods without key like Hyper(Ctrl+Shift+Cmd+Opt)
    Multimedia and system keys
      System volume control
      Music playback control
      Calculator, brightness, etc.
    Mouse emulation keys
      Mouse Move
      Mouse Wheel
      Mouse Button, etc.
  Layer Switch
    Layer Momentary,Priority layer(With key pressed)
      Layer Momentary
      Layer Tap Toggle
      Layer Tap Key
      Layer Mods
    Layer Toggle(Savable state)
      Layer Toggle
      Layer Tap Toggle
      To Layer
    Default Layer(always-on layer)
      Layer 0 is always on
      Default Layer Set
  Special Functions
    LEDs and Functions
      Monochrome backlight control
      RGB light control
      Additional User Functions
      Bluetooth control, etc.
    Fire keys
    Built-in preset macros (custom macro not yet)
      Launch shortcut(windows)
```


> [!yddh] Useless knowledge
> - About YDKB's name, YD is mainly from a comic named "Ultimate Otaku Teacher".
> - **やりだいのことかやるだけ(do only what you want to do), take the first letter of や(YA)だ(DA).**

