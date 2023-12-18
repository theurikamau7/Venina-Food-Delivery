from flask import Flask, make_response, jsonify, request, session
from flask_sqlalchemy import SQLAlchemy
from models import db, User, Food
from flask_cors import CORS
from flask_migrate import Migrate

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///app.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.json.compact = False

CORS(app)

migrate = Migrate(app, db)

db.init_app(app)

@app.route('/foods', methods = ['GET'])
def get_foods():

        foods = []
        for food in Food.query.all():
            response_body = {
                "id":food.id,
                "name": food.name,
                "image": food.image,
                "description": food.description
            }
            foods.append(response_body)
        response = make_response(
            jsonify(foods),
            200
        )
        return response
    
