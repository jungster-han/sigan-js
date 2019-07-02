# sigan

### sigan is a time tracking library. 

Creating new object, default time is time of object instatiation
```
let timer = new Sigan();
or
let timer = Sigan.new();
```

Returns start time in milliseconds 

```
timer.getStartTime()
```

Set new start time to whatever time you would like to set as

```
timer.setStartTime(Date.now())
```

Return time passed from start time to current time in milliseconds
```
timer.getElapsedTime()
```
