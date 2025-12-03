// Funcția care schimbă textul atunci când butonul este apăsat
function schimbaTextul() {
    document.getElementById('mesaj').innerText = "Textul a fost schimbat!";
}

// Atașează funcția la evenimentul click al butonului
document.getElementById('buton').onclick = schimbaTextul;

// Funcționalitatea pentru galeria de imagini
let imagini = [
    {src: 'imagine1.jpg', descriere: 'Colegul 1'},
    {src: 'imagine2.jpg', descriere: 'Colegul 2'}
];
let index = 0;

function schimbaImagine() {
    // Actualizează imaginea și descrierea
    index = (index + 1) % imagini.length; // Schimbă indexul imaginii
    document.getElementById('imagine1').src = imagini[index].src;
    document.getElementById('descriere1').innerText = imagini[index].descriere;
}

// Schimbă imaginea la fiecare 3 secunde
setInterval(schimbaImagine, 3000);
