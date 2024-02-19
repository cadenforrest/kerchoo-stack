# kerchoo stack

This template uses:

- Django
- Next.JS
- pnpm
- Python 3.11.6

## Setup

1. Install [pnpm](https://pnpm.io/installation)
2. Install dev dependencies: `pnpm install`
3. Migrate database: `python api/manage.py migrate`
4. Create superuser: `python api/manage.py createsuperuser`
5. Run the development servers: `pnpm dev`

`pnpm dev` will start the Django server and the Next.JS server concurrently. The Django server will be available at `http://localhost:5328` and the Next.JS server will be available at `http://localhost:3000`.

Note: I used [asdf](https://asdf-vm.com/) to manage Python versions. You can install Python 3.11.6 with `asdf install python 3.11.6` and set it as the local version with `asdf local python 3.11.6`. After installing asdf, you can install the Python plugin with `asdf plugin add python`.

## Proof of concept

You can visit https://localhost:3000/admin and log in with your superuser. After logging in, you can see that the Django admin panel is embedded in the Next.JS app. This is possible because of the rewrites we defined in `next.config.js`, where we proxy requests to `/admin/*` (and `/static/*`) to the Django server.

After logging in, you can visit https://localhost:3000 and see that the session and CSRF token is preserved under the `sessionid` and `csrftoken` cookies. In theory we should be able to now make authenticated requests to the Django server from the Next.JS app.

## TODO

- [ ] Add a `fetch` example in the Next.JS app that makes an authenticated request to the Django server
- [*] Dockerize
- [*] Postgres
- [ ] Client side session info fetching (e.g. get user info from Django server and store it in the Next.JS app's state?)
- [ ] Log in with something other than the admin panel (e.g. a custom login form for plebs)
- [ ] Prove that it works in production
