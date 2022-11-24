# Setup file template to upload data to MongoDB Atlas
mongoimport --uri "mongodb://127.0.0.1:27017/qkart" --drop --collection users --file data/export_qkart_users.json
mongoimport --uri "mongodb://127.0.0.1:27017/qkart" --drop --collection products --file data/export_qkart_products.json
