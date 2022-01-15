# Elm adapter for CodeMirror

## Installation

With `npm`:
```bash
npm install --save codemirror-elm
```

With `yarn`:
```bash
yarn add codemirror-elm
```

## Elm Configuration

Go to the `elm.json` file and update the `source-directories` field:

```json
{
  "source-directories": [
    "node_modules/codemirror-elm",
    // other sources
  ],
}
```

If you are using `webpack`, you also need to update the `entry` field:

```js
entry: [
  // other entries
  path.resolve(__dirname, 'node_modules/codemirror-elm'),
],
```

## Usage

```elm
import CodeMirror exposing (codemirror)

codemirror
  { value = "const foo = true;"
  , config =
      { theme = "material"
      , mode = "javascript"
      , lineNumbers = True
      , lineWrapping = True
      , readOnly = "nocursor"
      }
  }
```

See more details in the [CodeMirror docs](https://codemirror.net/).
