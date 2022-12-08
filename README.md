## Profile page nested routing

Generated 5 profile components (`main`, `my-profile`, `edit-profile`, `settings-profile`, `delete-profile`) with nested routing.

Flow:

1. User signs up
2. User signs in
3. User uses app (Dashboard page & Profile page) [NEW]
4. User signs out

*Note 1: Initial relative URL --> redirect to the Dashboard component (instead of Sign in component)*

*Note 2: Added Dashboard button in menu + routing*

*Note 3: Added Profile icon button in menu + routing*

---

## Setup

1. Clone the repo: `git clone https://github.com/cervus-camelopardalis/angular-nested-routing.git`
2. Create PostgreSQL database (see `database.sql` file)
3. Insert your database user and password (edit `db.js` file)
4. Install Express modules: `C:\Users\xxxxx\xxxxx\xxxxx\express-server>npm i`
5. Install Angular modules: `C:\Users\xxxxx\xxxxx\xxxxx\angular-client>npm i`
6. Start Express server: `C:\Users\xxxxx\xxxxx\xxxxx\express-server>nodemon server`
7. Run Angular app: `C:\Users\xxxxx\xxxxx\xxxxx\angular-client>ng serve -o`

---

## Screenshot

Flow:

![Flow](https://github.com/cervus-camelopardalis/angular-nested-routing/blob/main/01-screenshot-flow.gif)