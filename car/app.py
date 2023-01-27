from flask import Flask, jsonify, request
from models import db, CarModel
import json

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://admin:admin@db:3306/lesson'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db.init_app(app)

@app.before_first_request
def create_table():
    db.create_all()

@app.route("/", methods=["GET"])
def hello():
    return jsonify({"Hello": "World"})

@app.route("/car", methods=["GET"])
def get_all_car():
    car = CarModel.query.all()
    return jsonify([i.serialize for i in car])

@app.route("/add", methods=["POST"])
def add():
    data = json.loads(request.data)
    name = data["name"]
    price = data["price"]
    image = data["image"]
    car = CarModel(name = name, price = price, image = image)
    db.session.add(car)
    db.session.commit()
    return jsonify({"message": "Ajout de la voiture", "data": data["name"] + data["price"] + data["image"]})
    #return jsonify(data["a"] + data["b"] + data["c"])

@app.route("/car/<int:id>/delete", methods=["POST"])
def delete(id):
    car = CarModel.query.filter_by(id=id).first()
    db.session.delete(car)
    db.session.commit()
    return jsonify({"message": "suppresion réussi!"})