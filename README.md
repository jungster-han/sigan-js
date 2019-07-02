# sigan

### sigan is a time tracking library. 

Creating new object
```
let timer = new Sigan();
or
let timer = Sigan.new();
```
object is intialized with time of creation.

```
timer.getStartTime()
```
returns start time in milliseconds 

```
timer.setStartTime(Date.now())
```
sets new start time to whatever time you would like to set as

```
timer.getElapsedTime()
```
returns milliseconds passed from start time to current time
