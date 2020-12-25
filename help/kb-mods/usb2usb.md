# USB2USB转换器
此说明针对新的USB2USB转换器，这个固件不适用于使用32u4主控的USB2USB。

USB2USB只能转换键盘上的常规按键，不支持键盘自带的Fn键，以及多媒体键。

USB2USB仅能支持部分鼠标，且能转换的仅限于鼠标的移动方向（这个不支持自定义），左右中前进后退和滚轮上下（可以自定义成其他功能）。鼠标移动起来会有延迟的。不建议通过USB2USB使用鼠标，除非有特殊作用。

## 载入自定义布局

有两种方法载入自定义布局：
  - 点页面上的 **导入自定义布局**，然后选择一个适合ydkb.io使用的布局文件，html格式的。只需要导入一次，不过建议还是保存这个html文件，以后可能还会用到。
  - 在使用了上面1的方法后，下载了bin文件，那么之后就可以在 **读取KEYMAP** 上传bin文件时，直接从这个bin文件里读取自定义布局。如果要更换布局，就重新执行一次1中的操作导入html文件。


## 创建自定义布局
需要自己编写布局的html文件，一些示例参考。如下是YD40w的：

    <div style="height: 238px; width: 54px; padding: 10px 0 0 220px">
        <div class="mycase">
            <div class="kbdbg-border" style="width:660px;height:228px;"></div>
            <div class="kbdbg-mask" style="width:660px;height:228px;"></div>
        </div>
        <div class="mykeycap3">Esc</div>
        <div class="mykeycap1 col100">Q</div>
        <div class="mykeycap1 col200">W</div>
        <div class="mykeycap1 col300">E</div>
        <div class="mykeycap1 col400">R</div>
        <div class="mykeycap1 col500">T</div>
        <div class="mykeycap1 col600">Y</div>
        <div class="mykeycap1 col700">U</div>
        <div class="mykeycap1 col800">I</div>
        <div class="mykeycap1 col900">O</div>
        <div class="mykeycap1 col1000">P</div>
        <div class="mykeycap2 col1100">Backspace</div>
        <div class="mykeycap2 w125 row100">RCtrl</div>
        <div class="mykeycap1 row100 col125">A</div>
        <div class="mykeycap1 row100 col225">S</div>
        <div class="mykeycap1 row100 col325">D</div>
        <div class="mykeycap1 homing row100 col425">F</div>
        <div class="mykeycap1 row100 col525">G</div>
        <div class="mykeycap1 row100 col625">H</div>
        <div class="mykeycap1 homing row100 col725">J</div>
        <div class="mykeycap1 row100 col825">K</div>
        <div class="mykeycap1 row100 col925">L</div>
        <div class="mykeycap3 w175 row100 col1025">Enter</div>
        <div class="mykeycap2 w175 row200">Shift</div>
        <div class="mykeycap1 row200 col175">Z</div>
        <div class="mykeycap1 row200 col275">X</div>
        <div class="mykeycap1 row200 col375">C</div>
        <div class="mykeycap1 row200 col475">V</div>
        <div class="mykeycap1 row200 col575">B</div>
        <div class="mykeycap1 row200 col675">N</div>
        <div class="mykeycap1 row200 col775">M</div>
        <div class="mykeycap1 row200 col875">,</div>
        <div class="mykeycap2 row200 col975">.</div>
        <div class="mykeycap2 w125 row200 col1075">RShift</div>
        <div class="mykeycap2 w125 row300">Ctrl</div>
        <div class="mykeycap2 row300 col125">Win</div>
        <div class="mykeycap2 w125 row300 col225">Alt</div>
        <div class="mykeycap1 space w225 row300 col350">RAlt</div>
        <div class="mykeycap1 space w275 row300 col575">Space</div>
        <div class="mykeycap2 w125 row300 col850">Left</div>
        <div class="mykeycap2 row300 col975">Down</div>
        <div class="mykeycap2 w125 row300 col1075">Right</div>
    </div>

就文件内容先胡乱说一些关键地方：

  - 第一行里面的height代表一共要占的高度，计算方法就是大于kbdbg-border里面的height加上padding里面的第一个值。width: 54px这个保持不变不要去修改。 padding这里主要改第一个和第四个值，第一个值是距离上方，第四个值是距离左边，这样可以决定载入布局后在页面中的显示位置。
  - mycase里面主要是用来定义外壳的，最简单的方法就是一个方形的只管width和height就好了。它们的计算方法就看键盘长宽占多少个键位，比如上面例子里的是4x12，那么width就是(12x54+12)px ,height就是(12x54+12)px,那个12是额外留给边框的。更复杂的用法会html的可以自己再加。
  - 其中mykeycap1 2 3，对应的是三种键帽样式，1主要是用于主键区，2是大键位，3则是Esc和Enter这种特殊位置，这个只影响键帽显示外观。
  - colxxx rowxxx，对应的是键帽的坐标，只能以25为步进，这个坐标不是键帽的中心，而是键盘的左上角，可以参考kle的坐标。
  - wxxx是对应的键帽的宽度，hxxx对应键帽的高度，一样都只能以25为步进，且只支持标准的键帽长度，像一些特殊没见的3.25，3.75 10等，不支持。
  - class里加home代表是定位键，加space代表是空格键，不影响功能，只影响外观。

最关键的是按键名称的写法，因为编辑器是靠这个名称来识别按键的，所以务必写对（大小写无所谓）。

  - 按键A到Z直接写大写字母A到Z
  - 主键区的数字键直接写数字
  - F区的按键直接写作F多少
  - 修饰键左边对应直接写Ctrl Shift Alt Win, 右边的写作RCtrl RShift RAlt RWin
  - 方向键写作英文的Up Down Left Right
  - 其他一些符号键如果-_ += [{ ]}这些，只需要写不按shift时的就行了，即- + [ ]这样
  - 数字键盘上的按键都加一个P，比如数字就是P1 P2，数字键盘上的点就是"P."
  - Page Up，Print Screen这些按键，照正常写就是了，不要换行，中间有空格，也可如下图简写

可以参考下面对应按键写：  

<html> 
<head> 
    <style type="text/css">
.keyboard-set,.row .keyboard-set {
    display: table-cell;
    background: #d5d9dc repeat-x;
    border-radius: 7px;
    padding: 2px 5px 5px;
    box-shadow:inset 0 0 8px #bbb,0 1px 0 #aaa,0 4px 0 #bbb,0 10px 30px #ddd;
}
.key-set{
    display: table-cell;
    float: left;
    color: #888;
    font-family: "Arial";
    font-weight: normal;
    text-decoration: none;
    text-align: center;
    line-height: 19px;
    width: 42px;
    height: 40px;
    margin: 4px;
    background: #eff0f2;
    font-family: "Helvetica", "Arial", sans-serif;
    font-size:13px;
    border-radius: 4px;
    border-top: 1px solid #f5f5f5;
    box-shadow: inset 0 0 25px #e8e8e8,0 1px 0 #c3c3c3,0 2px 0 #c9c9c9,0 2px 3px #333;
    text-shadow: 0px 1px 0px #f5f5f5;
    vertical-align: middle;
    cursor: pointer;
    line-height: 40px;
}
.rowstart{clear: left} .rowend{clear: right;}
.key-set.low{
    height: 24px;line-height: 24px;
}
.key-set.t1{
    line-height: 40px;
}
.key-set.s1{
   line-height: 40px;font-size: 24px;
}
.key-set.sl1{
    height: 24px;line-height: 24px;font-size: 20px;
}
.key-set.w25{width:4.5px}.key-set.w50{width:17px}.key-set.w75{width:29.5px}.key-set.w100{width:42px}.key-set.w125{width:54.5px}.key-set.w150{width:67px}.key-set.w175{width:79.5px}.key-set.w200{width:92px}.key-set.w225{width:104.5px}.key-set.w250{width:117px}.key-set.w275{width:129.5px}.key-set.w300{width:142px}.key-set.w325{width:154.5px}.key-set.w350{width:167px}.key-set.w375{width:179.5px}.key-set.w400{width:192px}.key-set.w425{width:204.5px}.key-set.w450{width:217px}.key-set.w475{width:229.5px}.key-set.w500{width:242px}.key-set.w525{width:254.5px}.key-set.w550{width:267px}.key-set.w575{width:279.5px}.key-set.w600{width:292px}.key-set.w625{width:304.5px}.key-set.w650{width:317px}.key-set.w675{width:329.5px}.key-set.w700{width:342px}.key-set.w725{width:354.5px}.key-set.w750{width:367px}.key-set.w775{width:379.5px}.key-set.w800{width:392px}.key-set.w825{width:404.5px}.key-set.w850{width:417px}.key-set.w875{width:429.5px}.key-set.w900{width:442px}.key-set.w925{width:454.5px}.key-set.w950{width:467px}.key-set.w975{width:479.5px}.key-set.h200 {height: 88px;line-height: 88px;margin-bottom: -48px}
.key-set.spc25{margin-left:16.5px}.key-set.spc50{margin-left:29px}.key-set.spc75{margin-left:41.5px}.key-set.spc100{margin-left:54px}.key-set.spc125{margin-left:66.5px}.key-set.spc150{margin-left:79px}.key-set.spc175{margin-left:91.5px}.key-set.spc200{margin-left:104px}.key-set.spc225{margin-left:116.5px}.key-set.spc250{margin-left:129px}.key-set.spc275{margin-left:141.5px}.key-set.spc300{margin-left:154px}.key-set.spc325{margin-left:166.5px}.key-set.spc350{margin-left:179px}.key-set.spc375{margin-left:191.5px}.key-set.spc400{margin-left:204px}.key-set.spc425{margin-left:216.5px}.key-set.spc450{margin-left:229px}.key-set.spc475{margin-left:241.5px}.key-set.spc500{margin-left:254px}.key-set.spc525{margin-left:266.5px}.key-set.spc550{margin-left:279px}.key-set.spc575{margin-left:291.5px}.key-set.spc600{margin-left:304px}.key-set.spc625{margin-left:316.5px}.key-set.spc650{margin-left:329px}.key-set.spc675{margin-left:341.5px}.key-set.spc700{margin-left:354px}.key-set.spc725{margin-left:366.5px}
</style>

</head> 
    <div style="margin-left: -225px; margin-top: -50px">
        <div class="keyboard-set" style="min-width:1140px;transform:scale(0.6,0.6)">
            <ul style="margin:0px 0 0 -21px">
                <li class="key-set low rowstart" id="code-41" title="Esc">Esc</li>
                <li class="key-set spc100 low" id="code-58" title="F1">F1</li>
                <li class="key-set low" id="code-59" title="F2">F2</li>
                <li class="key-set low" id="code-60" title="F3">F3</li>
                <li class="key-set low" id="code-61" title="F4">F4</li>
                <li class="key-set spc50 low" id="code-62" title="F5">F5</li>
                <li class="key-set low" id="code-63" title="F6">F6</li>
                <li class="key-set low" id="code-64" title="F7">F7</li>
                <li class="key-set low" id="code-65" title="F8">F8</li>
                <li class="key-set spc50 low" id="code-66" title="F9">F9</li>
                <li class="key-set low" id="code-67" title="F10">F10</li>
                <li class="key-set low" id="code-68" title="F11">F11</li>
                <li class="key-set low" id="code-69" title="F12">F12</li>
                <li class="key-set spc25 low name_win" id="code-70" title="Print Screen">PrtScr</li>
                <li class="key-set low name_win" id="code-71" title="Scroll Lock">ScrLk</li>
                <li class="key-set low name_win" id="code-72" title="Pause Break">Pause</li>
                <li class="key-set rowstart" id="code-53" title="` ~">~<br>`</li>
                <li class="key-set" id="code-30" title="1 !">1</li>
                <li class="key-set" id="code-31" title="2 @">2</li>
                <li class="key-set" id="code-32" title="3 #">3</li>
                <li class="key-set" id="code-33" title="4 $">4</li>
                <li class="key-set" id="code-34" title="5 %">5</li>
                <li class="key-set" id="code-35" title="6 ^">6</li>
                <li class="key-set" id="code-36" title="7 &amp;">7</li>
                <li class="key-set" id="code-37" title="8 *">8</li>
                <li class="key-set" id="code-38" title="9 (">9</li>
                <li class="key-set" id="code-39" title="0 )">0</li>
                <li class="key-set" id="code-45" title="- _">-</li>
                <li class="key-set" id="code-46" title="= +">=</li>
                <li class="key-set w200 t1 name_win" id="code-42" title="Backspace">Backspace</li>
                <li class="key-set spc25 t1 name_win" id="code-73" title="Insert">Ins</li>
                <li class="key-set t1" id="code-74" title="Home">Home</li>
                <li class="key-set t1" id="code-75" title="Page Up">PgUp</li>
                <li class="key-set spc25 name_win" id="code-83" title="Num Lock">NumLk</li>
                <li class="key-set t1" id="code-84" title="Keypad /">P/</li>
                <li class="key-set t1" id="code-85" title="Keypad *">P*</li>
                <li class="key-set t1" id="code-86" title="Keypad -">P-</li>
                <li class="key-set w150 rowstart t1" id="code-43" title="Tab">Tab</li>
                <li class="key-set t1" id="code-20" title="Q">Q</li>
                <li class="key-set t1" id="code-26" title="W">W</li>
                <li class="key-set t1" id="code-8" title="E">E</li>
                <li class="key-set t1" id="code-21" title="R">R</li>
                <li class="key-set t1" id="code-23" title="T">T</li>
                <li class="key-set t1" id="code-28" title="Y">Y</li>
                <li class="key-set t1" id="code-24" title="U">U</li>
                <li class="key-set t1" id="code-12" title="I">I</li>
                <li class="key-set t1" id="code-18" title="O">O</li>
                <li class="key-set t1" id="code-19" title="P">P</li>
                <li class="key-set" id="code-47" title="[ {">[</li>
                <li class="key-set" id="code-48" title="] }">]</li>
                <li class="key-set w150" id="code-49" title="\ |">\</li>
                <li class="key-set spc25 t1" id="code-76" title="Del">Del</li>
                <li class="key-set t1" id="code-77" title="End">End</li>
                <li class="key-set t1" id="code-78" title="Page Down">PgDn</li>
                <li class="key-set spc25 name_win" id="code-95" title="Keypad 7">P7</li>
                <li class="key-set name_win" id="code-96" title="Keypad 8">P8</li>
                <li class="key-set name_win" id="code-97" title="Keypad 9">P9</li>
                <li class="key-set h200" id="code-87" title="Keypad +">P+</li>
                <li class="key-set w175 rowstart t1" id="code-57" title="CapsLock">CapsLock</li>
                <li class="key-set t1" id="code-4" title="A">A</li>
                <li class="key-set t1" id="code-22" title="S">S</li>
                <li class="key-set t1" id="code-7" title="D">D</li>
                <li class="key-set t1" id="code-9" title="F">F</li>
                <li class="key-set t1" id="code-10" title="G">G</li>
                <li class="key-set t1" id="code-11" title="H">H</li>
                <li class="key-set t1" id="code-13" title="J">J</li>
                <li class="key-set t1" id="code-14" title="K">K</li>
                <li class="key-set t1" id="code-15" title="L">L</li>
                <li class="key-set" id="code-51" title="; :">;</li>
                <li class="key-set" id="code-52" title="' &quot;">'</li>
                <li class="key-set" id="code-50" title="ISO ~#">ISO#</li>
                <li class="key-set w125 t1 name_win" id="code-40" title="Enter">Enter</li>
                <li class="key-set spc350 name_win" id="code-92" title="Keypad 4">P4</li>
                <li class="key-set name_win" id="code-93" title="Keypad 5">P5</li>
                <li class="key-set name_win" id="code-94" title="Keypad 6">P6</li>
                <li class="key-set w125 rowstart t1" id="code-225" title="Left Shift">Shift</li>
                <li class="key-set" id="code-100" title="ISO |\">ISO\</li>
                 <li class="key-set t1" id="code-29" title="Z">Z</li>
                <li class="key-set t1" id="code-27" title="X">X</li>
                <li class="key-set t1" id="code-6" title="C">C</li>
                <li class="key-set t1" id="code-25" title="V">V</li>
                <li class="key-set t1" id="code-5" title="B">B</li>
                <li class="key-set t1" id="code-17" title="N">N</li>
                <li class="key-set t1" id="code-16" title="M">M</li>
                <li class="key-set" id="code-54" title=", <">,</li>
                <li class="key-set" id="code-55" title=". >">.</li>
                <li class="key-set" id="code-56" title="/ ?">/</li>
                <li class="key-set w275 t1" id="code-229" title="Right Shift">RShift</li>
                <li class="key-set spc125" id="code-82" title="Up">Up</li>
                <li class="key-set spc125 name_win" id="code-89" title="Keypad 1">P1</li>
                <li class="key-set name_win" id="code-90" title="Keypad 2">P2</li>
                <li class="key-set name_win" id="code-91" title="Keypad 3">P3</li>
                <li class="key-set h200 name_win" id="code-88" title="Keypad Enter">PEnter</li>
                <li class="key-set w125 rowstart t1" id="code-224" title="Left Control">Ctrl</li>
                <li class="key-set w125 t1 name_win" id="code-227" title="Left Windows">Win</li>
                <li class="key-set w125 t1 name_win" id="code-226" title="Left Alt">Alt</li>
                <li class="key-set w625 t1" id="code-44" title="Space">Space</li>
                <li class="key-set w125 t1 name_win" id="code-230" title="Right Alt">RAlt</li>
                <li class="key-set w125 t1 name_win" id="code-231" title="Right Windows">RWin</li>
                <li class="key-set w125 t1" id="code-101" title="Menu on Win">Menu</li>
                <li class="key-set w125 t1" id="code-228" title="Right Control">RCtrl</li>
                <li class="key-set spc25 t1" id="code-80" title="Left">Left</li>
                <li class="key-set t1" id="code-81" title="Down">Down</li>
                <li class="key-set t1" id="code-79" title="Right">Right</li>  
                <li class="key-set spc25 w200 name_win" id="code-98" title="Keypad 0">P0</li>
                <li class="key-set name_win" id="code-99" title="Keypad .">P.</li>
            </ul>
        </div>
    </div>
</html> 