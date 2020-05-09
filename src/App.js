import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Navbar, Nav, Form, FormControl, Button, Carousel, Card, Container, Row } from 'react-bootstrap'
import background1 from './asset/image/ojek.jpg'
import slide2 from './asset/image/slide 2.jpg'
import slide3 from './asset/image/slide3.jpg'
import logo from './asset/image/logo.png'
import NavbarComponent from './component/NavbarComponent'
import EventCardComponent from './component/EventCardComponent'
import CarouselComponent from './component/CarouselComponent'
import axios from 'axios'

function App() {
  const [angka, setAngka] = useState(5)
  const [dataCardDariBackend, setDataDariBackend] = useState([])

  const pengurangan = () => setAngka(angka - 1)
  const pengurangan2 = (param) => setAngka(angka - param)
  const penambahan = () => setAngka(angka + 1)
  const penambahan2 = (param) => setAngka(angka + param)



  const datacards = [
    { nemaKegiatan: 'BMW', deskripsi: 'Ini Mobil BMW' },
    { nemaKegiatan: 'TOYOTA', deskripsi: 'Ini Mobil TOYOTA' },
    { nemaKegiatan: 'SAMSUNG', deskripsi: 'Ini Brand Samsung' },
    { nemaKegiatan: 'APPLE', deskripsi: 'Ini Brand APPLE' },
  ]
  const _getDataCards = async () => {
    try {
      const response = await axios.get('https://my-json-server.typicode.com/hlmifzi/sharing-react/dataCards')
      setDataDariBackend(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    _getDataCards()
  }, [])
  return (
    <>

      <NavbarComponent />

      <CarouselComponent
        background1={background1}
        slide2={slide2}
        slide3={slide3} />


      <Container>
        <div>
          <h2>jadwal</h2>
        </div>
        <Row>
          {
            dataCardDariBackend.map((v, i) => {
              return (
                <EventCardComponent
                  background={background1}
                  nemaKegiatan={v.nemaKegiatan}
                  deskripsi={v.deskripsi}
                />
              )
            })
          }


        </Row>
      </Container>
      {/* <div className="google-merah">INI TULISAN MERAH</div>
      <div id="google-hijau">INI TULISAN HIJAU</div>

      <div className="google-merah">
        <button onClick={() => pengurangan2(2)}> -2 </button>
        <button onClick={pengurangan}> -</button>
        hasil {angka}
        <button onClick={penambahan}> + </button>
        <button onClick={() => penambahan2(2)}> +2 </button>

      </div> */}

    </>
  )
}

export default App;

