const eventEmitter = require("events");

const emitter = new eventEmitter();

emitter.on("anything", data => {
    console.log("ON: anything", data);
});

emitter.emit("anything", { f1: 1, f2: 2 });

class Handler extends eventEmitter {
    subsribe(eventName, callBack) {
        console.log("[Subscribe..]");
        this.on(eventName, callBack);
    }

    dispatch(eventName, data) {
        console.log("[Dispatching..]");
        this.emit(eventName, data);
    }
}

const handler = new Handler();

handler.subsribe("SomeEvent", data => {
    console.log("ON: SomeEvent", data);
});

handler.dispatch("SomeEvent", { test: 123 });
