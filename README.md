# Rusty Diesel Rocket
A SandBox project with Coinhive miner running in the background when the user logins.

## Running

  1. To configure the database, set the `.env` file with the correct `DATABASE_URL` then run (must have `diesel_cli` installed):
    ```
    diesel migration run
    ```

  2. Build:
    ```
    npm run build
    ```
  3. Run:
    ```
    cargo run
    ```
