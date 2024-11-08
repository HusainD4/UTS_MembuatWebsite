// Function to handle form submission for newsletter subscription
function subscribe(event) {
    event.preventDefault();
    const email = document.getElementById("email").value;
    if (email) {
        alert(`Thank you for subscribing with ${email}`);
        document.getElementById("subscribeForm").reset();
    }
}




// Fungsi untuk mengubah warna latar belakang secara acak
function changeBackgroundColor() {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    document.body.style.backgroundColor = randomColor;

    // Menyimpan warna yang dipilih di localStorage
    localStorage.setItem('backgroundColor', randomColor);
}

// Fungsi untuk mereset warna latar belakang ke default
function resetBackgroundColor() {
    // Mengembalikan ke warna latar belakang awal (misalnya putih)
    const defaultColor = "#f3f4f6";
    document.body.style.backgroundColor = defaultColor;

    // Menyimpan warna default di localStorage
    localStorage.setItem('backgroundColor', defaultColor);
}

// Fungsi untuk memeriksa dan menerapkan warna latar belakang yang disimpan
document.addEventListener("DOMContentLoaded", () => {
    const savedColor = localStorage.getItem('backgroundColor');
    if (savedColor) {
        document.body.style.backgroundColor = savedColor;
    } else {
        document.body.style.backgroundColor = "#f3f4f6"; // Default color if none saved
    }
});





// Menampilkan tombol kembali ke atas ketika menggulir
function showScrollButton() {
    const scrollButton = document.getElementById("scrollTopButton");
    if (document.documentElement.scrollTop > 200) {
        scrollButton.style.display = "block";
    } else {
        scrollButton.style.display = "none";
    }
}

// Kembali ke atas
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Event listener untuk menggulir
window.onscroll = showScrollButton;

