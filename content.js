/* ============================================================
   ISI WEBSITE: edit file ini saja (lewat GitHub: buka file > ikon pensil).
   Aturan: jangan hapus tanda kutip " " dan koma di ujung baris.
   JANGAN tulis password atau token di file ini, file ini publik.
   ============================================================ */
window.SITE = {
  name: "M. Rizal Fauzi",
  role: "Sales spare parts alat berat dan forklift, yang membuat tools sendiri untuk kerja lapangan.",
  photo: "foto.jpg",            // foto profil, ganti file ini untuk mengganti foto
  photoAlt: "Foto profil M. Rizal Fauzi",
  area: "Cilegon dan Serang, Banten",
  field: "Sales, spare parts, customer service",

  // Nama perusahaan: ISI SETELAH ADA IZIN ATASAN. Kosongkan ("") untuk menyembunyikan.
  company: "PT. Berca Mandiri Perkasa",

  whatsapp: "6287889501070",          // format 62..., tanpa + dan tanpa 0 di depan
  linkedin: "https://www.linkedin.com/in/muhamad-rizal-fauzi-982391184/",
  github: "https://github.com/Mrizalfauzi90",

  about: [
    "Saya Rizal, sales spare parts alat berat dan forklift di Cilegon dan Serang. Sehari-hari saya bekerja langsung dengan customer industri: mencari part yang tepat, membuat penawaran, bernegosiasi, dan berkoordinasi dengan tim servis sampai unit kembali jalan.",
    "Dari pekerjaan itu saya sering ketemu urusan administrasi yang berulang, jadi saya belajar membuat tools web sendiri. Hasilnya Tracker VCS, pencatat visit dan quotation yang saya pakai di lapangan.",
    "Saya terbuka berbagi cara membuat tools sederhana seperti ini untuk orang yang bekerja di lapangan, tanpa perlu latar belakang programmer."
  ],

  work: [
    { title: "Sales dan spare parts", text: "Prospek customer, penawaran harga, negosiasi, dan koordinasi dengan tim servis." },
    { title: "Customer service", text: "Menjembatani kebutuhan customer dengan tim internal, dari permintaan part sampai tindak lanjut servis." },
    { title: "Membuat tools kerja", text: "Merancang dan membangun aplikasi web sendiri untuk menyelesaikan masalah di lapangan." }
  ],

  // Sesuaikan deskripsi dengan yang benar-benar kamu layani. Tanpa logo, tanpa harga, tanpa klaim "resmi/original".
  brands: [
    { name: "Mitsubishi", text: "Part forklift Mitsubishi (Logisnext) untuk kebutuhan perawatan dan perbaikan." },
    { name: "Nichiyu",    text: "Part forklift elektrik Nichiyu dan kebutuhan servis rutinnya." },
    { name: "BYD",        text: "Forklift elektrik BYD dan komponen pendukungnya." },
    { name: "Noblelift",  text: "Peralatan material handling gudang Noblelift dan part-nya." },
    { name: "Lonking",    text: "Part wheel loader dan alat berat Lonking, juga forklift." }
  ],
  otherBrands: "Merek lain tidak ada di daftar? Tanyakan, kemungkinan bisa dibantu.",

  project: {
    title: "Tracker VCS",
    text: "Pencatat visit dan quotation berbasis web yang bisa dipakai dari HP, dibuat untuk menggantikan catatan lapangan yang berserakan. Demo di bawah memakai data contoh.",
    features: [
      "Catat visit customer dan tindak lanjutnya",
      "Pantau quotation dan status penjualan",
      "Sinkron antar perangkat lewat akun GitHub sendiri"
    ],
    demoUrl: "demo.html",   // demo ada di file demo.html (data contoh). Kosong = tombol tampil "Segera hadir"
    repoUrl: ""    // isi link repo publik bila sudah siap dibagikan
  }
};
