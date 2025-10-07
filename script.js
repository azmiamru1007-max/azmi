// Script sederhana: tombol sapaan & tahun otomatis
document.addEventListener('DOMContentLoaded', function () {
  const tombol = document.getElementById('sapaButton');
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  if (tombol) {
    tombol.addEventListener('click', function () {
      // Gunakan alert sederhana, tapi bisa diganti modal nanti
      alert('Halo! Terima kasih sudah berkunjung — Salam renang sehat 🏊‍♂️');
    });
  }
});
