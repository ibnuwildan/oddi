import React, { Component } from "react";
import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol } from "mdbreact";

class informationPage extends Component {
    render() {
        return (
            <div style={{ margin: 'auto', backgroundColor: 'with' }}>
                <div class="d-flex bd-highlight">
                    <img src={require('../img/work2.jpg')} alt='about' style={{ maxWidth: '50%' }} />

                    <div class="p-5 w-50 bd-highlight" style={{ fontSize: '20px' }}>
                        <h1>PENGERJAAN DAN PENGIRIMAN BARANG</h1>
                        <p>
                            Pesanan anda akan diproses dengan ketentuan sebagai berikut:
                        </p>
                        <p>
                            Senin – Jumat: Pesanan akan diproses maksimal H+1 setelah konfirmasi pembayaran.
                        </p>
                        <p>
                            Sabtu, Minggu, Tanggal Merah: Pesanan akan diproses hari kerja berikutnya.
                        </p>
                        <p>
                            Lama Pengerjaan Produk Custom 4-5 hari.
                        </p>
                        <p>
                            Untuk order yang menggunakan layanan express, proses pengerjaan adalah 1-2 hari kerja.
                        </p>
                        <p>
                            Setelah pesanan anda selesai diproses, pesanan anda akan dikirim dengan kurir yang anda pilih.
                        </p>
                        <p>
                            ODDI juga menyediakan layanan pengiriman via Go-Send untuk daerah DKI Jakarta.
                        </p>
                        <td style={{ fontSize: '15px' }}>
                            Catatan:
                            Order hanya akan diproses jika anda sudah melakukan konfirmasi pembayaran.
                            Pembayaran setelah pukul 4 sore, akan diproses di hari kerja selanjutnya.
                        </td>
                    </div>

                </div>
                <div class="d-flex">
                    <div class="p-5 w-50" style={{ fontSize: '20px' }}>
                        <h1>KETENTUAN PENGEMBALIAN BARANG</h1>
                        Jika anda tidak puas dengan barang yang anda terima, anda dapat mengembalikan barang yang anda order:
                        <p><br />
                            Barang yang dikembalikan harus dalam keadaan sama seperti saat barang diterima (masih terdapat stiker dan plastik packaging) dan tidak pernah dipakai.
                        </p>
                        <p>
                            Barang diterima kembali oleh kami MAXIMAL 10 hari dari hari barang anda terima.
                        </p>
                        <p>
                            Terdapat kesalahan di pihak Porinto dalam mencetak atau mengirimkan barang.
                        </p>
                        Anda bisa menghubungi kami via WA, LINE, atau email untuk melakukan refund.
                    </div>
                    {/* <div class="p-2 w-50 bd-highlight"> */}
                    <img src={require('../img/about/about5.PNG')} alt='about' style={{ maxWidth: '50%' }} />
                    {/* </div> */}
                </div>
                <div class="d-flex bd-highlight">
                    {/* <div class="p-2 w-50 bd-highlight"> */}
                    <img src={require('../img/about/about8.JPG')} alt='about' style={{ maxWidth: '50%' }} />
                    {/* </div> */}
                    <div class="p-5 w-50 bd-highlight" style={{ fontSize: '20px' }}>
                        <h1>JADILAH DIRI SENDIRI</h1>
                        Kenapa kalian harus memilih custom clothing? Sesuai campaign yang selalu kami suarakan, yaitu BE YOURSELF!, kami selalu berusaha membuat konsumen kami tampil lebih percaya diri dengan pakaian yang ia kenakan. Karena kami mampu memberi kamu kebebasan dalam memilih warna, size, hingga model pakaian kamu sendiri, sehingga kamu akan tampil lebih eksklusif.
                        </div>
                </div>
            </div>
        )
    }
}

export default informationPage;