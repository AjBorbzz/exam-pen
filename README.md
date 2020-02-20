# Django and React

#### Goal

Create a web app that makes it easy to track inventory as shipments of items are received and sent. In this scenarios, many users will be using your app for their jobs all day, so it should require as few clicks as possible to accomplish their task, and be intuitive for new users with no training.

##### Requirements:

- Create Product SKU/Types
- Receive quantities of product SKU’s and add to inventory
- Ship quantities of product SKU’s and remove from inventory (only if sufficient product SKU’s is available in inventory)
- Report or dashboard to show product SKU’s and quantities currently in inventory.

##### Comments for this Test

> My work experience was from the backend engineer usually building models, controllers or api endpoints to pass it on to frontend developers. I have little experience to Frontend. I used ReactJs for this exam because it was my interest to learn this framework but this is the first time I tried ReactJs. I tried to learn ReactJs, along with using Redux and Axios, as fast as I could to submit the exam.
> **Blocker**: Redux updating immutable state: My goal is to update amount in Quantity field should be equal to Num. of Stocks field less Num of Shipped field in Model. Due to my limited knowledge in Redux, I failed to do it.

### One Page Web App

- **Add Vendor** - Input Name, Address, Email, Phone_number
- **Add Product** - Input Name, Vendor, Product SKU, Description, Quantity, No. of Stocks
- **Display Product List** - Displays Product list as table
- **Display Vendor List** - Displays Vendor list as table.

### Database Connection

- located in ./exam/settings.py

```sh
        'NAME': 'ship_inventory',
        'USER': 'postgres',
        'PASSWORD': 'password123',
        'HOST': 'localhost'
```

#### Running

```sh
$ docker-compose build
$ docker-compose up
```

There should now be two servers running:

- http://127.0.0.1:5000 is the Django app
- http://127.0.0.1:3000 is the React app

### Tech

- Django
- Django Rest Framework
- PostgreSQL
- ReactJS
- React-Redux
- Axios
- babel
