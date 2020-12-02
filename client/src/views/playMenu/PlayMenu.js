import React from "react";
import Header from "../../components/header";
import "./PlayMenu.css";

import chessBoard from "../../media/chess-board.png";
import tictactoe from "../../media/tictactoe.png";
import { Link } from "react-router-dom";

const PlayMenu = () => {
  return (
    <section className="play-menu">
      <Header title="Play Menu" backTo="/gameInvites" />
      <section className="content-wrapper">
        <Link to="/tictactoe">
          <article className="game-card">
            <h2>Tic-tac-toe</h2>
            <p>(tap to select)</p>
            <img src={tictactoe} alt="tic tac toe" />
          </article>
        </Link>

        <article className="game-card">
          <h2>Chess</h2>
          <p>(tap to select)</p>
          <img src={chessBoard} alt="chess" />
        </article>
      </section>
    </section>
  );
};

export default PlayMenu;
