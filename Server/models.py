from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
from uuid import uuid4

metadata = MetaData()

db = SQLAlchemy()

def get_uuid():
    return uuid4().hex


class Food(db.Model):

    __tablename__ = 'foods'

    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String, nullable = False)
    image = db.Column(db.String, nullable = False)
    description = db.Column(db.String, nullable = False)

    def __repr__(self):
        return f'Name: {self.name}'
    
class User(db.Model):

    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key = True, unique = True, default = get_uuid())
    email = db.Column(db.String, nullable = False, unique = True)
    password = db.Column(db.String, nullable = False)

    def __repr__(self):
        return f'Name: {self.email}'
    