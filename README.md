# mtof

Convert MIDI note number to corresponding frequency. Based on Max's [`mtof`](https://docs.cycling74.com/max5/refpages/max-ref/mtof.html)

## installation
```bash
$ npm install --save mtof
```

## usage
#### mtof(midiNote, concertPitch = 440)
Convert MIDI note number to frequency. Second parameter sets concert pitch, defaulting to A = 440 Hz. 

_Works with decimals too! Consider this a **feature**!_
```js
var mtof = require('mtof');

mtof(69);
// => 440
```

## see also
- [`ftom`](https://github.com/kedromelon/ftom)
