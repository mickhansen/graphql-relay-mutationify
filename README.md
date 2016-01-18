# graphql-relay-mutationify
Turn javascript objects into a relay mutation input friendly string.

```js
import mutationify from 'graphql-relay-mutationify';

mutationify({
  firstName: 'Mick',
  lastName: 'Hansen',
  count: 30
}); // {firstName: "Mick", lastName: "Hansen", count: 30}
```

```js
import mutationify from 'graphql-relay-mutationify';

let input = {
  firstName: 'Mick',
  lastName: 'Hansen',
  count: 30
};

let query = `
  mutation {
    updateProfile(input: {profile: ${mutationify(input)}}) {
      profile
    }
  }
`;
```
