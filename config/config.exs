# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# Configures the endpoint
config :tankex, TankexWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "Yfi8L6eGHz8w6Bi5TbptyWHPwiVXZKseax0LyJpzMoDeE8siTPLzuiyq//579Y14",
  render_errors: [view: TankexWeb.ErrorView, accepts: ~w(html json)],
  pubsub: [name: Tankex.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:user_id]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"
