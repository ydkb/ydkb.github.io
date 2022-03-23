# Difference Between Apple and PC keyboards

```yddcode
0075 0072 006C FF1A 0068 0074 0074 0070 003A 002F 002F 0078 0061 0068 006C 0065 0065 002E 0069 006E 0066 006F 002F 006B 0062 0064 002F 0061 0070 0070 006C 0065 005F 0070 0063 005F 006B 0062 005F 0064 0069 0066 0066 002E 0068 0074 006D 006C 000A 
```

The above article is very detailed, you can take a look if you are interested in understanding

The following are some of the differences summarized by YDKB.


## Capslock key
The function of this key under Mac and Win is the same, but there is a difference in application. According to the instructions of http://support.apple.com/kb/TS1578, Capslock needs to be pressed for a while under Mac to be effective, while under Win, just press it to trigger.

![](assets/mac_capslock.jpg)

Therefore, if a key in the firmware is set to **key|modified key** or **key|momentary on layer**, because the key here is triggered in an instant, between pressing and releasing The interval is within 1ms, so the Mac judges it to not trigger. It is not recommended to set CapsLock to the above two-in-one function under Mac.



