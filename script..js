// Pega o elemento pelo ID passado
const elemento = document.getElementById(idElemento);
    
// Verifica se o elemento está visível
if (elemento.style.display === 'block') {
    // Se estiver visível, esconde
    elemento.style.display = 'none';
} else {
    // Se estiver escondido, mostra
    elemento.style.display = 'block';
}
}
