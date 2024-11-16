// Fungsi untuk efek ketikan (typewriter effect)
function typeWriter(element, text, i = 0) {
    if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(function() {
            typeWriter(element, text, i);
        }, 100); // Kecepatan ketikan (100 ms per karakter)
    }
}

// Menambahkan animasi ketikan pada elemen dengan ID tertentu
window.onload = function() {
    const textElement = document.getElementById('dynamic-text');
    const text = "You’re my favorite hello, the one that makes me smile even though we’ve never met. But you’re also my hardest goodbye, because every word from you leaves me wanting more.";
    typeWriter(textElement, text);
};

// Menambahkan interaksi tombol untuk mengubah warna latar belakang
document.getElementById('change-bg-button').addEventListener('click', function() {
    document.body.style.backgroundColor = 'lightpink'; // Mengubah warna latar belakang
});
