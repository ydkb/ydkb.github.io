# Apple/Mac Keyboard Fn

Apple’s own keyboard has an Fn button, which is different from the Fn on non-Apple keyboards.

Generally, the Fn of the keyboard is handled by the keyboard itself. For example, Fn+F12 is a volume increase. When Fn+F12 is pressed, the key sent by the keyboard to the system is a volume increase. On the Apple keyboard, Fn is also a common key. When Fn+F12 is pressed, the keyboard sends Fn+F12 to the system, and then the system handles the volume increase function.

There is a little explanation on tmk's wiki, see: https://github.com/tmk/tmk_keyboard/wiki/FAQ-Keymap#user-content-applemac-keyboard-fn

The implementation method mentioned above by tmk has also been discussed on qmk: https://github.com/qmk/qmk_firmware/issues/2179

In short, Apple's Fn is a special function of its first party. At present, it seems that the third party has to achieve only a similar hack into Apple's first party device. This has some potential risks, so generally it will not provide support by default. .


## Achieve it in another way

Mac supports custom shortcut keys. For Apple keyboards, Fn+F4 is the launch pad. It is not an Apple keyboard, which does not have this function. However, you can check this item in the keyboard and shortcut keys and assign a set of shortcut keys to it. As shown in the figure below, the shortcut key for it is **OPT+CMD+L**

<div style="width: 600px">

![](/assets/apple-fn-01.jpg?600)
</div>

Then press **OPT+CMD+L** on the keyboard to display the starter. Of course, it can also be set to a similar Fn+F4 method. The method is to set F4 in the firmware corresponding to the layer of Fn (layer switching, which layer switching depends on your own) in the firmware, and set F4 there as a [modifier key ( Combination key)](edit-keymap/mods-key), the corresponding key is **OPT+CMD+L**.

It is not necessary to set to the F4 position, you can set it to any position on the keyboard.

The above is just an example of the launch pad. In fact, the shortcut keys of the Mac are set up. With the combination of the keyboard keys, there are many things that can be achieved.

<div style="width: 600px">

![](/assets/apple-fn-02.jpg?600)
</div>
