import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Navi from "./Navi";
import Home from "./routes/Home";
import Movies from "./routes/Movies";
import TV from "./routes/TV";
import Search from "./routes/Search";
import Detail from "./routes/Detail";
import Footer from "./Footer";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter basename="/watcher">
        <Navi />
        <Route exact path="/" component={Home} />
        <Route exact path="/Movies" component={Movies} />
        <Route exact path="/TV" component={TV} />
        <Route exact path="/Search" component={Search} />
        <Route exact path="/Detail/:id" component={Detail} />
        <Footer />
      </BrowserRouter>
    </div>
  );
}
