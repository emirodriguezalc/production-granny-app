import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { React, useState } from "react";
import {
  medicineData,
  foodData,
  waterData,
  addMedicine,
} from "./config/tracker";
import MyScore from "./views/myScore";
import {
  home,
  bodyMenu,
  mindMenu,
  mindTrainer,
  medicineMenu,
  haveFunMenu,
  photosHome,
  gameHome,
} from "./config/options";
import { guides } from "./config/meditation";
import { photosFollow } from "./config/follow";
import { playFollow } from "./config/follow";
import Options from "./components/options";
import Tracker from "./components/tracker";
import AddMedicine from "./components/addMedicine";
import ListPage from "./components/listPage";
import Follow from "./components/follow";

import scoreMock from "./mocks/myscore";
import weeklyBoardMock from "./mocks/weeklyBoardMock";
import gameInvitesMock from "./mocks/gameInvitesMock";
import PlayMenu from "./views/playMenu/PlayMenu";
import Game from "./views/tictactoe/Tictactoe";
import PhotosFeed from "./views/photosFeed/PhotosFeed";
import Meditation from "./views/meditation";
import Register from "./views/register";
import Login1 from "./views/login1/Login1";
import Login3 from "./views/login3";
import Landing from "./views/landing";

function App() {
  const [medicines, setMedicines] = useState([]);
  const [token, setToken] = useState(null);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {token ? <Options data={home} /> : <Login1 />}
        </Route>

        <Route path="/foodMenu">
          {token ? (
            <Tracker
              list={foodData.list}
              viewName={foodData.viewName}
              viewTitle={foodData.title}
              backTo={foodData.backTo}
            />
          ) : (
            <Login1 />
          )}
        </Route>

        <Route path="/waterMenu">
          {token ? (
            <Tracker
              list={waterData.list}
              viewName={waterData.viewName}
              viewTitle={waterData.title}
              backTo={waterData.backTo}
            />
          ) : (
            <Login1 />
          )}
        </Route>

        <Route path="/addMedicine">
          {token ? (
            <AddMedicine
              medicines={medicines}
              setMedicines={setMedicines}
              viewName={addMedicine.viewName}
              viewTitle={addMedicine.title}
              backTo={addMedicine.backTo}
            />
          ) : (
            <Login1 />
          )}
        </Route>

        <Route path="/seeMedicines">
          {token ? (
            <Tracker
              list={medicines}
              viewName={medicineData.viewName}
              viewTitle={medicineData.title}
              backTo={medicineData.backTo}
            />
          ) : (
            <Login1 />
          )}
        </Route>

        <Route path="/bodyMenu">
          {token ? <Options data={bodyMenu} /> : <Login1 />}
        </Route>

        <Route path="/medicineMenu">
          {token ? <Options data={medicineMenu} /> : <Login1 />}
        </Route>

        <Route path="/mindMenu">
          {token ? <Options data={mindMenu} /> : <Login1 />}
        </Route>

        <Route path="/meditationMenu">
          {token ? <Meditation view={guides} /> : <Login1 />}
        </Route>

        <Route path="/mindTrainer">
          {token ? <Options data={mindTrainer} /> : <Login1 />}
        </Route>

        <Route path="/haveFunMenu">
          {token ? <Options data={haveFunMenu} /> : <Login1 />}
        </Route>

        <Route path="/gameInvites">
          {token ? (
            <ListPage
              list={gameInvitesMock.list}
              backTo={gameInvitesMock.backTo}
              title={gameInvitesMock.title}
            />
          ) : (
            <Login1 />
          )}
        </Route>

        <Route path="/gameHome">
          {token ? <Options data={gameHome} /> : <Login1 />}
        </Route>

        <Route path="/playMenu">{token ? <PlayMenu /> : <Login1 />}</Route>

        <Route path="/playFollow">
          {token ? <Follow config={playFollow} /> : <Login1 />}
        </Route>

        <Route path="/tictactoe">{token ? <Game /> : <Login1 />}</Route>

        <Route path="/weeklyBoard">
          {token ? (
            <ListPage
              list={weeklyBoardMock.list}
              backTo={weeklyBoardMock.backTo}
              title={weeklyBoardMock.title}
            />
          ) : (
            <Login1 />
          )}
        </Route>

        <Route path="/photosHome">
          {token ? <Options data={photosHome} /> : <Login1 />}
        </Route>

        <Route path="/photosFollow">
          {token ? <Follow config={photosFollow} /> : <Login1 />}
        </Route>

        <Route path="/photosFeed">{token ? <PhotosFeed /> : <Login1 />}</Route>

        <Route path="/myScore">
          {token ? <MyScore data={scoreMock} /> : <Login1 />}
        </Route>

        <Route path="/register">
          <Register setToken={setToken} token={token} />
        </Route>

        <Route path="/landing">
          <Landing />
        </Route>

        <Route path="/login3">{token ? <Login3 /> : <Login1 />}</Route>

        <Route path="/login1">
          {token ? <Options data={home} /> : <Login1 />}
        </Route>
        {/*         <Route>
          <NotFound />
        </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
