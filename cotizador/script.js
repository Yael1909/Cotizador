function calcularTotal() {
    var total = 0;

    for (var i = 1; i <= 8; i++) {
        var pregunta = document.getElementById('pregunta' + i);
        var selectedValue = pregunta.options[pregunta.selectedIndex].value.replace(',', ''); // Elimina las comas en el valor seleccionado
        if (selectedValue !== "") {
            total += parseInt(selectedValue);
        }
    }

    var resultado = document.getElementById('resultado');
    resultado.textContent = 'Total: ' + total; // Muestra el total sin punto decimal
}
