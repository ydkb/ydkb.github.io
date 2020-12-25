# LEDMAP

YDKB所支持的键盘，大部分的指示灯功能，是可以自定义的。

默认作为连接状态指示灯或低电量指示，这些是预置的无法修改。自定义主要是指如下文所说的功能。


## 指示类类型

如果键盘支持LEDMAP功能，在选择层的最后面显示有一个** [ LEDMAP ]** 的标签。

<html>
<two_col>
<div style="float:left;width:48%;">

![](/assets/ledmap_01.png?)
</div>
<div style="float:left;width:3%;">&nbsp;</div>
<div style="float:left;width:48%;">

![](/assets/ledmap_03.png?)
</div>
</two_col>
<div style="clear:both;"></div>
</html>

指示灯大致分为三类。

<table_w30x70>

| LED类型 | 说明 |
| --- | --- |
| 单色指示灯 | 只能设置功能。另外有的RGB某个特定颜色也有作为单色指示灯来设置|
| RGB指示灯 | 除了设置指示功能外，还可以指定颜色。 |
| 不可定义指示灯 | 这部分比如充电指示灯，还有一些特定用途的，不支持在LEDMAP里修改，它本身也有特定的指示作用 |

</table_w30x70>


## 指示灯功能

<div style="width: 600px">

![](/assets/ledmap_02.png?600)
</div>

目前支持最多的8个指示灯，每个指示灯可以单独指定它的功能，支持的功能在它的下拉列表里。鼠标指向时会有说明。

<table_w30x70>

| 功能 | 说明 |
| --- | --- |
| 未设置 | 即不设置此指示灯，保持让它默认 |
| 禁用 | 用于设置一些背光和RGB灯。未安装或不想使用选择此项，更加节能 |
| Num Lock<br>Caps Lock<br>Scroll Lock | 传统键盘状态指示灯 <html><br></html>需要注意的是蓝牙模式下与系统不是同步的 <html><br></html>具体参看本页最后说明 |
| Win Lock | 配合对应功能使用，当Win键锁定时亮起 |
| Layer 1...7 | 当前该层为打开状态时，则亮起该指灯 |
| Default Layer 1...7  | 当前默认层为设置的值时，则亮起该指灯 |
| 工作模式(部分键盘有) | 指示灯亮时为USB连接，不亮时为蓝牙 |
| 接蓝牙模块(部分键盘有) | 部分键盘接蓝牙模块需占用LED灯的IO，需要设置此项 |
| WS2812 RGB(部分键盘有) | 部分键盘使用RGB灯需占用LED灯的IO，需要设置此项 |

</table_w30x70>


## 蓝牙模式下指示灯

<div class="attention">
<subtitle>蓝牙模式下指示灯使用注意</subtitle>

  - 在蓝牙模式下，Num Lock, Caps Lock, Scroll Lock这些指示灯，无法同步显示电脑的这三者状态。
  - 蓝牙模式下，实际是按一下按键就切换显示一次对应指示灯。只有在USB模式下是同步显示的。
  - 不同步时，可使用<kbd>Shift</kbd>+对应按键，如<kbd>Shift</kbd>+<kbd>Capslock</kbd>，这时CapsLock会生效但其指示灯不会变。
  - 合理利用这一点可在蓝牙下反转指示灯使用，如让numlock灯在亮时关，灭时开，可以省电。
</div>
