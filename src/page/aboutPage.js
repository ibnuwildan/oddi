import React, { Component } from "react";
import CarouselPage from '../component/carousel';
class aboutPage extends Component {
    render() {
        return (
            
            <div style={{ margin: 'auto', backgroundColor: 'with' }}>
                {/* <CarouselPage></CarouselPage> */}
                <div class="d-flex bd-highlight">
                    <br></br>
                    {/* <div class="p-2 w-50 bd-highlight"> */}
                        <img src={require('../img/about/about7.JPG')} alt='about' style={{maxWidth:'50%'}} />
                    {/* </div> */}
                    <div class="p-5 w-50 bd-highlight" style={{ fontSize: '20px' }}>
                        <h1>ODDI</h1>
                        berdiri pada September tahun 2012. Berawal dari 3 orang hingga sekarang sudah lebih dari 50 karyawan. Kini, Oddi semakin percaya diri untuk terus bekembangdan menjadi salah satu brand yang dapat memberi alasan pada konsumen "kenapa kalian harus memilih custom clothing". Kami tumbuh bersama, berusaha fokus pada satu titik,yaitu membawa Iwearzule menjadi perusahaan teknologi yang berkomoditas di bidang pakaian. Bagi kami, kerja keras yang di lakukan semata-mata kami apresiasikan untuk konsumen.
                        </div>
                </div>
                <div class="d-flex">
                    <div class="p-5 w-50" style={{ fontSize: '20px' }}>
                        <h1>KEPUASAN KONSUMEN</h1>
                        Kepuasan konsumen adalah nomor satu! Sebuah moto yang selalu kami junjung di internal perusahaan Oddi. Demi menjaga kepercayaan dan kepuasan konsumen, Oddi memberikan layanan garansi uang kembali. Layanan tersebut adalah bentuk tanggung jawab kami demi memberikan layanan yang terbaik bagi konsumen kami.
                        </div>
                    {/* <div class="p-2 w-50 bd-highlight"> */}
                        <img src={require('../img/about/about5.PNG')} alt='about' style={{maxWidth: '50%'}}/>
                    {/* </div> */}
                </div>
                <div class="d-flex bd-highlight">
                    {/* <div class="p-2 w-50 bd-highlight"> */}
                        <img src={require('../img/about/about8.JPG')} alt='about' style={{maxWidth: '50%'}}/>
                    {/* </div> */}
                    <div class="p-5 w-50 bd-highlight" style={{ fontSize: '20px'}}>
                        <h1>JADILAH DIRI SENDIRI</h1>
                        Kenapa kalian harus memilih custom clothing? Sesuai campaign yang selalu kami suarakan, yaitu BE YOURSELF!, kami selalu berusaha membuat konsumen kami tampil lebih percaya diri dengan pakaian yang ia kenakan. Karena kami mampu memberi kamu kebebasan dalam memilih warna, size, hingga model pakaian kamu sendiri, sehingga kamu akan tampil lebih eksklusif.
                        </div>
                </div>
            </div>
        )
    }
}

export default aboutPage;