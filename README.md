This project was created and implemented by [Thiti Mahawannakit](https://www.facebook.com/thiti.developer)

## 🎓 React-OnScreenSensor

A React Library which provides the ability whether to check if the wrapped elements are being shown or not , most likely benifit in the use of Triggering Animation

## ✨ Features

- [x] Allowed multiple children inside
- [x] Using reference over timestamp [ PATCHED ]
- [x] Callback optional [ PATCHED ]


## 🚀 Getting Started

1. **Install the node modules.**

Installing via yarn / npm , your preference

```sh
yarn add onscreensensor
```

2. **Usage.**

```jsx
import OnScreenSensor from 'react-onscreensensor'
const Example () => {
    return(
        <OnScreenSensor onChange={isVisible => console.log(`Visibility : ${isVisible}`)}>
            <div>Hello , Am i visible?</div>
        </OnScreenSensor>
    )
}
```

### Changelog

## [1.0.3] - Current
- Renamed from onscreensensor to react-onscreensensor (The prefix does make sense)

## [1.0.1] - Deprecated ( old pkg name )
- Added a utils folder to contains separate function
- Fixed operators warning in functions
- Added README.md

## [1.0.0] - Deprecated ( old pkg name )
- Initialized all needed files

<p align="center">
  <b>: Contact me By :</b><br>
  <a href="https://www.facebook.com/thiti.developer">Facebook</a> |
  <a href="https://www.instagram.com/thiti.mwk/">Instagram</a> |
  <a href="https://www.linkedin.com/in/thiti-mahawannakit-558791183/">LinkedIn</a>
  <br><br>
  <img src="https://media.giphy.com/media/h1u6yvxlVKmfLiSryA/giphy.gif" width="250" height="220">
</p>

