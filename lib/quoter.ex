defmodule Quoter do
  use Application
  require Logger

  def start(_type, _args) do
    children = [
      Plug.Adapters.Cowboy.child_spec(:http, Quoter.QuotePlug, [], port: 8080)
    ]

    Logger.info("Application Started")

    Supervisor.start_link(children, strategy: :one_for_one)
  end
end

defmodule Quoter.QuotePlug do
  use Plug.Builder

  plug Plug.Static,
    at: "/",
    from: :quoter

  plug :not_found

  def not_found(conn, _) do
    send_resp(conn, 404, "not found")
  end

end