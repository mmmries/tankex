defmodule TankexWeb.PageController do
  use TankexWeb, :controller

  def index(conn, _params) do
    conn
    |> put_layout("game.html")
    |> render("index.html")
  end
end
