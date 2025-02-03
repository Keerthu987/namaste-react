const par = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child" }, [React.createElement("h1", {}, "heeloh1")])
    , React.createElement("h2", {}, "heeloh2"),React.createElement("div", { id: "child" }, [React.createElement("h1", {}, "heeloh1")])
    , React.createElement("h2", {}, "heeloh2")
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(par);