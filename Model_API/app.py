from flask import Flask
import flask
from flask_restful import reqparse, abort, Api, Resource
import pickle
import numpy as np
import pandas as pd
import pymongo
import os
import ssl
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.cluster import KMeans

app = Flask(__name__)
api = Api(app)

model = KMeans()
vectorizer = TfidfVectorizer()

clf_path = 'static/kmeans.pkl'
with open(clf_path, 'rb') as f:
    model = pickle.load(f)

vec_path = 'static/tfidf.pkl'
with open(vec_path, 'rb') as f:
    vectorizer = pickle.load(f)
    
CONNECTION_STRING = "mongodb+srv://db:rachit@cluster0.hvszm.mongodb.net/test"
connect = pymongo.MongoClient(CONNECTION_STRING,ssl=True,ssl_cert_reqs=ssl.CERT_NONE)

db = connect['Myntra_Data']
collection = db['Combos']
products = db['products']
    
class PredictCombo(Resource):
        
    def get(self,gx):

        # vectorize the user's query and make a prediction
        self.names = products.find_one({"product_id": gx})['description']
    
    
        uq_vectorized = vectorizer.transform([str(self.names)])
        prediction = model.predict(uq_vectorized)
        
        k = 0
        
        for i,cluster in enumerate(model.labels_,1):
            if cluster == prediction:
                k = i
        
        for dx in collection.find({"_id":k}):
            k = dx['Product Name']
        
        combos = []
        for i in k.split(","):
            combos.append(i.strip())
            
        out = []
        for i in combos:
            for y in products.find({"name": i}):
                out.append(y['product_id'])
        
        # create JSON object
        output = {
            'product_id': out,
            'products':combos
        }
        
        return output
    

api.add_resource(PredictCombo, '/<int:gx>')

if __name__ == '__main__':
    app.run(debug=True)