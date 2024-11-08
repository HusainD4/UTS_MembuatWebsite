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




// function showWelcomePopup() {
//     // Membuat pesan ucapan
//     const message = `
//         <h2>Selamat datang di website kesehatan</h2>
//         <p><strong>!!UTS!!</strong></p>
//         <p>Nama: Husain Mulyansyah</p>
//         <p>Nim: 23090078</p>
//     `;
    
//     // Membuat div untuk popup
//     const popup = document.createElement('div');
//     popup.id = 'welcomePopup';
//     popup.innerHTML = message;
//     popup.style.position = 'fixed';
//     popup.style.top = '50%';
//     popup.style.left = '50%';
//     popup.style.transform = 'translate(-50%, -50%)';
//     popup.style.padding = '20px';
//     popup.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
//     popup.style.color = 'white';
//     popup.style.borderRadius = '8px';
//     popup.style.textAlign = 'center';
//     popup.style.zIndex = '10000';

//     // Menambahkan popup ke body
//     document.body.appendChild(popup);

//     // Menghapus popup setelah 3 detik
//     setTimeout(() => {
//         popup.remove();
//     }, 3000);
//     // Panggil fungsi showPopup saat halaman dimuat secara otomatis
//     window.onload = function() {
//     showPopup(); // Menampilkan popup saat halaman pertama kali dimuat
//     };
// }


