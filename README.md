![Perlin Noise](https://i.imgur.com/5xNS0uS.jpg)

# Perlin Noise API
An API for generating Perlin Noise, by [@andyshora](https://twitter.com/andyshora).

[![Build Status](https://travis-ci.org/andyshora/perlin-noise-api.svg?branch=master)](https://travis-ci.org/andyshora/perlin-noise-api)

## Running Locally

1. Clone this repo: `git clone https://github.com/andyshora/perlin-noise-api.git`
2. Install dependencies: `npm i`
3. Start API: `npm start`
4. Open your browser to [http://localhost:3500/noise/100/1](http://localhost:3500/noise/100/1)

## Live API - Give it a spin!

This service is running live at [noise.shora.net](http://noise.shora.net/noise/1000/1). Feel free to use this with your projects. If I experience any large volume of requests or abuse I'll have to take it down, so please be gentle.

## Example requests

A simple array of noise, 1000 elements long:
```
/noise/1000/1
```

[Try the request live](http://noise.shora.net/noise/1000/1)

Example Response:
```
[0.9661401717214197,0.8617638013335318,0.7658141846311228,0.6754176614781082,0.588071107802635,...]
```

---

This will request elements to form multi-dimensional array of noise, suitable for generating a 2D texture, 400px x 1000px:
```
/noise/400/1000
```

[Try the request live](http://noise.shora.net/noise/400/1000)

---

Some options tweaked:
```
/noise/1000/1?octaveCount=7&amplitude=0.5&persistence=0.5
```

[Try the request live](http://noise.shora.net/noise/1000/1?octaveCount=7&amplitude=0.5&persistence=0.5)

---

The **ALL IMPORTANT JSONP callback**, specifying the function you want to call on your page. If you're working purely client-side, you'll probably want to use this.
```
/noise/500/500?jsonp=my_javascript_callback
```

[Try the request live](http://noise.shora.net/noise/5/1?jsonp=my_javascript_callback)

Example Response:
```
my_javascript_callback(0.9661401717214197,0.8617638013335318,0.7658141846311228,0.6754176614781082,0.588071107802635,...);
```

## Response Format

Please note that the response will contain **one-dimensional array** in row-major order, which you are then responsible for parsing into multiple arrays, if required. For example, the request above will be suitable for painting a 500x500 image one pixel at a time, row-by-row, from left-to-right.

Each value in the array will be between 0 and 1.

### 'row-major order'
This means: index = y * width + height

## Options Documentation

A few notes from my own learnings on Perlin Noise options. [Here's a great article](http://libnoise.sourceforge.net/glossary/); they're difficult to find.

> Note: the examples show noise being generated from -1 to 1, but this API generates noise values from 0 to 1.

### Octave Count
The number of noise functions is defined by the Octaves value. A higher value leads to a more detailed result.
> Defaults to 4

![Octave Count = 1](http://libnoise.sourceforge.net/glossary/images/octave1.png)

![Octave Count = 8](http://libnoise.sourceforge.net/glossary/images/octave8.png)

Think blurry image vs detailed image. How many spikes do you want to see?


### Amplitude
The maximum absolute value that a specific coherent-noise function can output. Think biggest change per iteration.
> Defaults to 0.1

### Persistence
A multiplier that determines how quickly the amplitudes diminish for each successive octave in a Perlin-noise function. How scary do you want your rollercoaster?
> Defaults to 0.2

![Persistence = 0.75](http://libnoise.sourceforge.net/glossary/images/persistence34.png)

![Persistence = 0.25](http://libnoise.sourceforge.net/glossary/images/persistence14.png)

## Credits

This project uses the fantastic work done by [Andrew Kelly](https://twitter.com/andy_kelley) which allows us to generate noise from an [npm package](https://www.npmjs.com/package/perlin-noise).

## Today's View

![Today's View](https://i.imgur.com/FMVsxUy.jpg=600x)
I thought I'd start a habit and take a snapshot of where I was when I made this thing! Today, it's a sunny Sunday morning in London and I'm in my flat.
