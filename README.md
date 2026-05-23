# Focus Timer

A minimal [Pomodoro](https://en.wikipedia.org/wiki/Pomodoro_Technique) timer that runs entirely in the browser. No build step, no dependencies, no server — it's a single `index.html` file.

## Features

- **Work / break cycles** with a circular progress ring and live countdown.
- **Configurable durations** for focus, short break, and long break.
- **Long break every 4 rounds**, then the cycle repeats.
- **Auto-start** of the next phase for an uninterrupted flow.
- **Desktop notifications** and an audio chime when each phase ends.
- **Daily session log** with focus stats, saved in your browser via `localStorage`.
- **Dark, responsive UI** that works on desktop and mobile.

## Usage

Open `index.html` in any modern browser — that's it.

```sh
# macOS
open index.html

# or just double-click the file in your file manager
```

Set your work, break, and long-break lengths in the inputs, then press **Start**.

## Keyboard shortcuts

| Key     | Action        |
| ------- | ------------- |
| `Space` | Start / pause |
| `R`     | Reset         |
| `S`     | Skip phase    |

## Notes

- Notifications require granting permission the first time you start the timer.
- The session log keeps your most recent entries in `localStorage`; clearing your browser data resets it.
