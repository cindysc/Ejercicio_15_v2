$.getJSON('https://mindicador.cl/api', function(data) {
    var dailyIndicators = data;
    $("<p/>", {
        html: 'El valor actual de la UF es $' + dailyIndicators.uf.valor
    }).appendTo("body");
}).fail(function() {
    console.log('Error al consumir la API!');
});

{
  "version": "1.5.0",
  "autor": "mindicador.cl",
  "fecha": "2019-02-15T23:00:00.000Z",
  "uf": {
    "codigo": "uf",
    "nombre": "Unidad de fomento (UF)",
    "unidad_medida": "Pesos",
    "fecha": "2019-02-15T05:00:00.000Z",
    "valor": 27544.12
  },
  "dolar": {
    "codigo": "dolar",
    "nombre": "Dólar observado",
    "unidad_medida": "Pesos",
    "fecha": "2019-02-15T05:00:00.000Z",
    "valor": 665.9
  },
  "euro": {
    "codigo": "euro",
    "nombre": "Euro",
    "unidad_medida": "Pesos",
    "fecha": "2019-02-15T05:00:00.000Z",
    "valor": 751.66
  },

  "utm": {
    "codigo": "utm",
    "nombre": "Unidad Tributaria Mensual (UTM)",
    "unidad_medida": "Pesos",
    "fecha": "2019-02-01T05:00:00.000Z",
    "valor": 48305
  }

}
