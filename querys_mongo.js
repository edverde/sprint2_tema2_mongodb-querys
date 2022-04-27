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






db.restaurant.find({}).pretty()

