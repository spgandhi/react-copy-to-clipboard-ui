# React Copy To Clipboard UI

A react component to display text with copy to clipboard option

![alt text](https://i.imgur.com/CxGWM6q.png)


## Installation

Use npm to install

```bash
npm i -S react-copy-to-clipboard-ui
```

## Usage

```python
import ReactCopyToClipboardUI from 'react-copy-to-clipboard-ui';

function MyComponent = () => (
    <ReactCopyToClipboardUI>This is my text</ReactCopyToClipboardUI>
);

```

## Props


| Props | Type  | Default Value | Description  |
|--|-|-|---|
| children | React component or string | ```this is copyable text``` |The text to display
| copyText | string | ```null``` |The text that should be copied to clipboard when action button is clicked. Note: if null, then the value of the children prop will be copied.  |
| btnLabel | string | ```copy``` | The action button label to show when the mouse hovers over the component
| onCopyBtnLabel | string | ```copied``` | The action button label to show after copy action takes place. This label will stay for ``` onCopyBtnLabelDuration``` value
| containerStyle | object | | Style of the container
| aciveContainerStyle | object ||Style of the container when the mouse hovers over the component
|textStyle | object| | Style of the displayed text
|activeTextStyle | object | |style of the displayed text when the mouse hovers over the component
|btnStyle|object||style of the action button
|onCopy|func|null|callback function when action button is clicked. Receives the copied text as the parameter|
|onMouseEnter|func|null|callback function when the mouse enters the component
|onMouseLeave | func |null | callback function when the mouse leaves the component
## License
[MIT](https://choosealicense.com/licenses/mit/)