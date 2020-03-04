## UserStatus Component

- The component will auto update width by measuring itself post-render
- The user details are supplied to the component in the format below

Demo can be found here: [https://asyndesis.github.io/little-demo/]https://asyndesis.github.io/little-demo/

```jsx
import UserStatus from "./components/UserStatus.js"

<UserStatus user={
  imgUrl: "http://trevorbonomi.com/img/trebs.jpg",
  status: "online" || "offline",
  lineOne: "Harry Robinson",
  lineTwo: "Online | 14h"
} />
```

## ToDo

- Tests
- Split user.lineTwo prop in to just time and concatinate the status
- Better validation of props
