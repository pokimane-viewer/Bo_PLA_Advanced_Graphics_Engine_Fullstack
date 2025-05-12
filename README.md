 python.exe -m pip uninstall -y graphql
 python.exe -m pip install --upgrade pip setuptools whee
 python.exe -m pip install "graphql-core>=3.2"



Install Dependencies

bash
Copy
pip install -r requirements.txt
bash
Copy
cd frontend
npm install
npm run build
This places a production-ready React app into frontend/build.

Run Django Server (Channels + GraphQL)

bash
Copy
python manage.py migrate
python manage.py runserver
Your app is now available at http://127.0.0.1:8000.

Login with Bcrypt / Django Auth

By default, you can create a superuser:

bash
Copy
python manage.py createsuperuser
Then go to http://127.0.0.1:8000/login (POST username/password) or use the included form on the root page if your React build references it.

GraphQL Subscriptions

The subscription endpoint is handled by the Channels WebSocket at ws://127.0.0.1:8000/ws/subscriptions/.

Example subscription:

javascript
Copy
subscription {
  watchSimulation(interval: 2.0) {
    status
    detail
  }
}
Tools like Altair or GraphiQL can connect and test.

J-20 PL-15 CAD Upgrade & War Game

The run_cad_upgrade endpoint triggers the advanced PyTorch + OpenCV pipeline for the J-20 PL-15 system.

The runWargame logic (in src/App.js) calls /api/run_wargame or similar endpoints that you can implement in your Django views to simulate war games over Taiwan.

You now have a fully integrated Django+Channels+GraphQL system, with:

bcrypt-powered login (Django’s built-in authentication with bcrypt hasher).

d3graph (or direct D3) for advanced visualization.

PyTorch + OpenCV for J-20 + PL-15 CAD upgrade plan.

React front-end bundling everything together.
