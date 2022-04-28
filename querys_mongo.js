//01. Escriu una consulta per mostrar tots els documents en la col·lecció Restaurants
db.restaurant.find().pretty()
//02. Escriu una consulta per mostrar el restaurant_id, name, borough i cuisine de tots els documents en la col·lecció Restaurants
db.restaurant.find({},{restaurant_id : 1 , name : 1 , borough : 1 , cuisine : 1}).pretty()
//03. Escriu una consulta per mostrar el restaurant_id, name, borough i cuisine, però excloure  el camp _id per tots els documents en la col.lecció Restaurants
db.restaurant.find({},{restaurant:1 , name:1, borough:1, cuisine:1, _id:0}).pretty()
//04. Escriu una consulta per mostrar restaurant_id, name, borough i zip code, però excloure el camp _id per tots els documents en la col.lecció Restaurants
db.restaurant.find({},{restaurant:1 , name:1, borough:1, address:{zipcode:1}}).pretty()
//05. Escriu una consulta per mostrar tots els restaurants que estan en el Bronx
db.restaurant.find({borough:"Bronx"}).pretty()
//06. Escriu una consulta per mostrar els primers 5 restaurants que estan en el Bronx
db.restaurant.find({borough: "Bronx"}).limit(5).pretty()
//07. Escriu una consulta per mostrar els 5 restaurants després de saltar els primers 5 que que siguin del Bronx
db.restaurant.find({borough: "Bronx"}).skip(5).limit(5).pretty()
//08. Escriu una consulta per trobar els restaurants que tenen algun score més gran de 90
db.restaurant.find({"grades.score": {$gt: 90}}).pretty() //$gte seria mayor o igual
//09. Escriu una consulta per trobar els restaurants que tenen un score més gran que 80 però menys que 100
db.restaurant.find({"grades.score": {$gt: 80, $lt:100}}).pretty()
//10. Escriu una consulta per trobar els restaurants que estan situats en termes de latitud inferiors a -95.754168
db.restaurant.find({"address.coord": {$lt:-95.754168}}).pretty()
//11. Escriu una consulta de MongoDB per a trobar els restaurants que no cuinen  menjar 'American' i tenen algun score superior a 70 i latitud inferior a -65.754168
db.restaurant.find({$and:[{cuisine:{$ne:"American "}, "grades.score":{$gt: 70}, "address.coord":{$lt: -65.754168}}]}) //me cago en el espacio de "American "  qò_óp
//12 Escriu una consulta per trobar els restaurants que no preparen menjar 'American' i tenen algun score superior a 70 i que, a més,  és localitzen en longituds inferiors a -65.754168. Nota : Fes aquesta consulta sense utilitzar operador $and 
db.restaurant.find({cuisine:{$ne:"American "},"grades.score":{$gt:70},"address.coord":{$lt:-65.754168}}).pretty()
//13. Escriu una consulta per trobar els restaurants que no preparen menjar  'American ', tenen alguna nota 'A' i no pertanyen a Brooklyn. S'ha de mostrar el document segons la cuisine en ordre descendent
db.restaurant.find({cuisine:{$ne:"American "},"grades.grade":'A', borough:{$ne:"Brooklyn"}}).sort({"cuisine":-1}).pretty()
//14. Escriu una consulta per trobar el restaurant_id, name, borough i cuisine per a aquells restaurants que contenen 'Wil' en les tres primeres lletres en el seu nom
db.restaurant.find({name:{$regex:/^wil/i}}, {restaurant_id:1, name: 1, borough:1, cuisine:1}).pretty() // /^a.*/y /^a.*$/son más lentos. /^a/ puede dejar de escanear después de hacer coincidir el prefijo. El siguiente ejemplo utiliza la (i)opción realizar una coincidencia que no distingue entre mayúsculas y minúsculas.
//15. Escriu una consulta per trobar el restaurant_id, name, borough i cuisine per a aquells restaurants que contenen 'ces' en les últimes tres lletres en el seu nom
db.restaurant.find({name: {$regex: /ces$/}}, {restaurant_id:1, name: 1, borough:1, cuisine:1}).pretty()
//16. Escriu una consulta per trobar el restaurant_id, name, borough i cuisine per a aquells restaurants que contenen 'Reg' en qualsevol lloc del seu nom
db.restaurant.find({name: {$regex: /reg/i}}, {restaurant_id:1, name: 1, borough:1, cuisine:1}).pretty()
//17. Escriu una consulta per trobar els restaurants que pertanyen al Bronx i preparen plats americans o xinesos
db.restaurant.find({$and: [{borough: "Bronx"}, {$or: [{cuisine: "American "},{cuisine: "Chinese"}] }]}).pretty()
//18. Escriu una consulta per trobar el restaurant_id, name, borough i cuisine per aquells restaurants que pertanyen a Staten Island, Queens, Bronx o Brooklyn
db.restaurant.find({$or: [{borough: "Staten Island"}, {borough: "Queens"}, {borough: "Bronx"}, {borough: "Brooklyn"}]}, {restaurant_id:1, name: 1, borough:1, cuisine:1}).pretty()
//19. Escriu una consulta per trobar el restaurant_id, name, borough i cuisine per a aquells restaurants que NO pertanyen a Staten Island, Queens, Bronx o Brooklyn
db.restaurant.find({$nor: [{borough: "Staten Island"}, {borough: "Queens"}, {borough: "Bronx"}, {borough: "Brooklyn"}]}, {restaurant_id:1, name: 1, borough:1, cuisine:1}).pretty()
//20. Escriu una consulta per trobar el restaurant_id, name, borough i cuisine per a aquells restaurants que aconsegueixin una nota menor que 10
db.restaurant.find({"grades.score": {$lt: 10}}, {restaurant_id:1, name: 1, borough:1, cuisine:1}).pretty() //$lte: sería para menor o igual.
//21. Escriu una consulta per trobar el restaurant_id, name, borough i cuisine per a aquells restaurants que preparen peix excepte 'American ' i 'Chinese' o el name del restaurant comença amb lletres 'Wil'
db.restaurant.find({$and: [{cuisine: {$in: ["Seafood"], $nin: ["American ", "Chinese"]}}, {name: {$not: {$regex: /^wil/i}}}]}, {restaurant_id: 1, name: 1, borough: 1, cuisine: 1}).pretty()
//22. Escriu una consulta per trobar el restaurant_id, name, i grades per a aquells restaurants que aconsegueixin un grau "A" i un score 11 en dades d'estudi ISODate "2014-08-11T00:00:00Z"
db.restaurant.find({$and: [{"grades.grade": "A"}, {"grades.score": 11} , {"grades.date": ISODate ("2014-08-11T00:00:00Z")}]},{restaurant_id: 1, name: 1, grades: 1}).pretty()
// 23)Escriu una consulta per trobar el restaurant_id, name i grades per a aquells restaurants on el 2n element de l'array de graus conté un grade de "A" i un score 9 amb un ISODate "2014-08-11T00:00:00Z"
db.restaurant.find({"grades.1": {$all: ["A", 9 , ISODate("2014-08-11T00:00:00Z")]}}, {restaurant_id: 1, name: 1}).pretty()
// 24)Escriu una consulta per trobar el restaurant_id, name, adreça i ubicació geogràfica per a aquells restaurants on el segon element del array coord conté un valor entre 42 i 52
db.restaurant.find({"address.coord.1": {$gt:42, $lt: 52}}, {restaurant_id:1, name: 1, address:1}).pretty()
// 25)Escriu una consulta per organitzar el nom dels restaurants en ordre ascendent juntament amb totes les columnes
db.restaurant.find().sort({name:1}).pretty()
//26. Escriu una consulta per organitzar el nom dels restaurants en descendir juntament amb totes les columnes
db.restaurant.find({}).sort({name:-1}).pretty()
//27. Escriu una consulta a organitzar el nom de la cuisine en ordre ascendent i per el mateix barri de cuisine. Ordre descendint
db.restaurant.find({}).sort({cuisine:1, borough:-1}).pretty()
//28. Escriu una consulta per saber tant si totes les direccions contenen el carrer o no
db.restaurant.find({"address.street": {$exists: true}}).pretty()
//29. Escriu una consulta que seleccioni tots el documents en la col·lecció de restaurants on els valors del camp coord és de tipus Double
db.restaurant.find({"address.coord": {$type: "double"}}).pretty()
//30. Escriu una consulta que seleccioni el restaurant_id, name i grade per a aquells restaurants que retornen 0 com a residu després de dividir algun dels seus score per 7
db.restaurant.find({"grades.score": {$mod:[7,0]}}, {restaurant_id: 1, name: 1, grade: 1}).pretty()
// 31)Escriu una consulta per trobar el name de restaurant, borough, longitud, latitud i cuisine per a aquells restaurants que contenen 'mon' en algun lloc del seu name
db.restaurant.find({"name": {$regex: /mon/i}}, {name: 1, borough: 1, "address.coord": 1, cuisine: 1}).pretty()
// 32)Escriu una consulta per trobar el name de restaurant, borough, longitud, latitud i cuisine per a aquells restaurants que conteinen 'Mad' com a primeres tres lletres del seu name
db.restaurant.find({"name": {$regex: /^mad/i}}, {name: 1, borough: 1, "address.coord": 1, cuisine: 1}).pretty()

