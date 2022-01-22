## React Socket.io-kit

React Hook for Using Socket.io-client.Using Context to pass Socket.io-client Object to every React Component.

```js
// index.js
const socket = io("http://host:port");

ReactDOM.render(
  <SocketProvider socket={socket}>
    <App />
  </SocketProvider>,
  document.getElementById("root")
);
```

```js
// App.js

const App = () => {
  const emit = useEmit();
  return (
    <div>
      <button onClick={() => emit("event")}>Push</button>
    </div>
  );
};
```

---

## Hook API

- useSocketEmit : return `emit` function of socket.io-client `io` object
- useSocketOn: return `on` function of socket.io-client `io` object.
- useSocketOff: return `emit` function of socket.io-client `io` object.
- useSocket: return `io` object, you can use this hook to access other `io` object method.

---

## Example

```js
// Using With Redux

uesEffect(() => {
  on("event", (data) => {
    dispatch({ type: "Action", payload: data });
  });
}, [on]);
```
