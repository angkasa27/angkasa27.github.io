import IMG from '@assets/image'
import moment from 'moment'

import COVER from './cover.png'
import MAIN from './Main.jpg'
import GROOM from './Groom.png'
import BRIDE from './Bride.png'
import IMAGE1 from './Image1.jpg'
import IMAGE2 from './Image2.jpg'
import IMAGE3 from './Image3.jpg'
import IMAGE4 from './Image4.jpg'
import IMAGE5 from './Image5.jpg'
import IMAGE6 from './Image6.jpg'
import END from './End.jpg'

const DATA = {
  groom: {
    shortName: 'Rio',
    fullName: 'Rio Putra',
    father: 'Bapak Agus',
    mother: 'Ibu Susi',
    instagram: '/',
    twitter: '/',
    facebook: '/',
    photos: GROOM,
  },
  bride: {
    shortName: 'Cassandra',
    fullName: 'Cassandra',
    father: 'Bapak Bandi',
    mother: 'Ibu Sulis',
    instagram: 'https://www.instagram.com/suratbahagia.id/',
    twitter: 'https://twitter.com/suratbahagia',
    facebook: '/',
    photos: BRIDE,
  },
  event: [
    {
      name: 'Akad Nikah',
      date: moment('2022-12-31T21:00:00+07:00').format(),
      location: 'Masjid Al-Ikhlas Jl. Lurus RT.1 RW.3 Kota Lama Jawa Utara',
      maps: 'https://goo.gl/maps/Bgdw5swU59oKuYJt7',
    },
    {
      name: 'Resepsi',
      date: moment('2022-12-31T23:59:59+07:00').format(),
      location: 'Gedung Terbuka Jl. Tengah Kota Lama Jawa Utara',
      maps: 'https://goo.gl/maps/Bgdw5swU59oKuYJt7',
    },
  ],
  reminder:
    'https://calendar.google.com/event?action=TEMPLATE&tmeid=NXYxbW9xbjM2bjZkOG8wOWVyMGI4djI2NGMgc3VyYXRiYWhhZ2lhLmlkQG0&tmsrc=suratbahagia.id%40gmail.com',
  media: {
    cover: COVER,
    main: MAIN,
    end: END,
    youtube: 'https://www.youtube.com/watch?v=k1t0kT7YAbk',
    music: 'https://www.youtube.com/watch?v=06-XXOTP3Gc',
  },
  galery: [
    {
      name: 'Awal Bertemu',
      date: moment('2020-06-01T23:59:59+07:00').format(),
      image: IMAGE1,
    },
    {
      name: 'Bersama',
      date: moment('2021-04-12T23:59:59+07:00').format(),
      image: IMAGE2,
    },
    {
      name: 'Bertemu',
      date: moment('2021-12-31T23:59:59+07:00').format(),
      image: IMAGE3,
    },
    {
      name: 'Malam Minggu',
      date: moment('2022-02-25T23:59:59+07:00').format(),
      image: IMAGE4,
    },
    {
      name: 'Prewedding',
      date: moment('2022-12-16T23:59:59+07:00').format(),
      image: IMAGE5,
    },
    {
      name: 'Prewedding',
      date: moment('2022-12-16T23:59:59+07:00').format(),
      image: IMAGE6,
    },
  ],
  gift: [
    {
      type: 'BRI',
      number: '082230423647',
      name: 'Dimas Angkasa Nurindra',
      image: IMG.QRDummy,
    },
    {
      type: 'MANDIRI',
      number: '082230423647',
      name: 'Dimas Angkasa Nurindra',
      image: IMG.QRDummy,
    },
    {
      type: 'OVO',
      number: '082230423647',
      name: 'Dimas Angkasa Nurindra',
      image: IMG.QRDummy,
    },
    {
      type: 'GOPAY',
      number: '082230423647',
      name: 'Dimas Angkasa Nurindra',
      image: IMG.QRDummy,
    },
    {
      type: 'LINK AJA',
      number: '082230423647',
      name: 'Dimas Angkasa Nurindra',
      image: IMG.QRDummy,
    },
  ],
  contact: {
    whatsapp: '085172305057',
    rsvp: (name, rsvp) =>
      `Halo Staton Davis, Saya ${name} ${rsvp} pada acara ceremonial`,
    gretting: (name, message) => `${message}, dari ${name}`,
  },
}

export default DATA
