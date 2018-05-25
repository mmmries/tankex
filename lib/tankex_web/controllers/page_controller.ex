defmodule TankexWeb.PageController do
  use TankexWeb, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
