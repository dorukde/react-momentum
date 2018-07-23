# React Momentum

### A read progress bar component for react.

## Installation

```shell
npm i react-momentum
```

## Usage

Just wrap your content in the component. All props are optional.

```jsx
import Momentum from 'react-momentum'

//                                                              || Defaults

<Momentum
  height={2} // Bar height                                      || 2
  duration={300} // animation duration (0) for none             || 300
  color="blue" // the color of the progress bar                 || #5b9aff
  completedColor="green" // the color of the bar on complete    || #40ce80
  easing="ease-out" // easing function                          || 'ease-out'
  position="bottom" // can either be 'top' or 'bottom'          || 'top'
>
  <p>Some content here...</p>
</Momentum>
```
