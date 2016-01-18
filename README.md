# graphql-relay-mutationify
Turn javascript objects into a relay mutation input friendly string

```js
var mutationify = require('graphql-relay-mutationify');

mutationify({
  firstName: 'Mick',
  lastName: 'Hansen',
  count: 30
}); // {firstName: "Mick", lastName: "Hansen", count: 30}
```