# RGB Lights

RGB lights include two kinds:

<table_w30x70>

| Type | Description |
| --- ||
| RGB bottom light | Some keyboard's backlight for switch is monochrome, but has RGB bottom light. |
| Per-switch RGB light | The keyboards with per-switch RGB light generally have RGB bottom light, but some do not. |

</table_w30x70>

No matter whether it is a RGB bottom light or per-switch RGB light, every led can be controlled individually. So  they can bring about a lot of effects.


## Control Method

At present, the way to control RGB light is uniform. 

From **LEDs & Functions**, select the following functions to control RGB light. The function of each button will be explained when the mouse is pointed.

![](/assets/rgblight-01.png?)

A total of 8 RGB control functions can be set, from left to right:
  1. RGB Toggle on/off
  2. RGB mode stepping (move to next until the last, then move to the first)
  3. RGB hue value lower
  4. RGB hue value higher
  5. RGB saturation value lower
  6. RGB saturation value higher
  7. RGB brightness value lower
  8. RGB brightness value higher

Looking at my picture. In fact, I only set 5 of them. There is no need to set all of them. With LShift, you can do more. For example, LShift+RGB mode stepping means moving to the previous mode, LShift+hue higher means make the hue lower.

For the way of RGB color grading.

<div style="width: 400px">

![](/assets/rgblight-02.jpg?400)
</div>

Only some modes support the adjustment of all these three items. In most of the dynamic modes, these three adjustments are invalid.


## Effects for RGB bottom light

Most of the keyboards that support RGB bottom light have the following effects:

<table_w30x70>

| mode | effect |
| --- ||
|1|Fixed color|
|2-5|breathing, four speed|
|6-8|All color change together, three speed |
|9-14|Rainbow color, three speed and two directions|
|15-20|Snake-shaped walk, three speed, two directions|
|21-23|Kinghts, three speed |

</table_w30x70>

<div class="hint">
<subtitle>HINT</subtitle>
<br>Some keyboards have special conditions, such as Minira. When the axis light is in single-on or ripple mode, the bottom light is linked with the axis light instead of the effect of the settings listed in the table above.
</div>

## Effects for per-switch RGB light
Effects for per-switch RGB light, depending on the keyboard, may be slightly different. The effects are as follows (the following table is for reference to the 1800mini)

| Keyboard that supports per-switch RGB light ||||||
| --- ||||||
| 1800mini | Master98 | Sairo64 | X-8086K | | |
| BLE40 | BLUP | Taichi | THX30 | ESWN | |

<table_w30x70>

| mode | effect |
| --- ||
|1|Fixed color|
|2|Single switch lights up when typing|
|3|Color Waves when typing|
|4|layer indication|
|5-6|Auto Snake, two speeds|
|7|Colorful Stars|
|8|Raindrops|
|9|Horse Racing|
|10| Passion Collision|
|11-12|Fixed color breathing, two speeds|
|13-14|All color change together, two speeds|
|15-18|Rainbow color, two speeds and two directions|
|19-22|Snake-shaped walk, two speeds and two directions|
|23-24|Knights, two speeds|

</table_w30x70>
