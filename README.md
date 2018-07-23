# A read progress bar component for react.

Gives you a reading progress bar for things like blog posts and articles.

## Installation

```shell
npm i react-read-progess
```

## Usage

Just wrap your content in the component. All props are optional.

```jsx
//                                                              || Defaults

<ReadProgress
  height={2} // Bar height                                      || 2
  duration={300} // animation duration (0) for none             || 300
  color="blue" // the color of the progress bar                 || #5b9aff
  completedColor="green" // the color of the bar on complete    || #40ce80
  easing="ease-out" // easing function                          || 'ease-in-out'
  position="bottom" // can either be 'top' or 'bottom'          || 'bottom'
>
  <p>Some content here...</p>
</ReadProgress>
```
