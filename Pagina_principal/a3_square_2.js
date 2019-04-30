// Si usted desea exportar completamente un objeto en una
// asignación en lugar de construir cada propiedad por separado
module.exports = {
  area: function(width) {
    return width * width;
  },

  perimeter: function(width) {
    return 4 * width;
  }
};
