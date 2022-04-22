import IMG from '@assets/image'
import moment from 'moment'

import MAIN from './Main.jpg'
import ENVELOPE from './Envelope.jpg'
import IMAGE1 from './Image1.jpg'
import IMAGE2 from './Image2.jpg'
import IMAGE3 from './Image3.jpg'
import END from './End.jpg'
import GROOM from './Groom.jpg'
import BRIDE from './Bride.jpg'

const DATA = {
  groom: {
    shortName: 'Staton',
    fullName: 'Staton Davis',
    father: 'Mr. Marcus',
    mother: 'Mrs. Erin Culhane',
    instagram: '/',
    twitter: '/',
    facebook: '/',
    photos: GROOM,
  },
  bride: {
    shortName: 'Angel',
    fullName: 'Angle Chance',
    father: 'Mr. Dias',
    mother: 'Mrs. Ashlynn Kenter',
    instagram: 'https://www.instagram.com/suratbahagia.id/',
    twitter: 'https://twitter.com/suratbahagia',
    facebook: '/',
    photos: BRIDE,
  },
  event: [
    {
      name: 'Ceremonial',
      date: moment('2022-12-31T21:00:00+07:00').format(),
      location: 'Bethany Church Surabaya',
      maps: 'https://goo.gl/maps/Bgdw5swU59oKuYJt7',
    },
    {
      name: 'Wedding Reception',
      date: moment('2022-12-31T23:59:59+07:00').format(),
      location: 'JW Marriott Hotel Surabaya',
      maps: 'https://goo.gl/maps/Bgdw5swU59oKuYJt7',
    },
  ],
  reminder:
    'https://calendar.google.com/event?action=TEMPLATE&tmeid=NXYxbW9xbjM2bjZkOG8wOWVyMGI4djI2NGMgc3VyYXRiYWhhZ2lhLmlkQG0&tmsrc=suratbahagia.id%40gmail.com',
  media: {
    cover: ENVELOPE,
    main: MAIN,
    end: END,
    galery: [IMAGE1, IMAGE2, IMAGE3, IMAGE1, IMAGE2, IMAGE3],
    youtube: 'https://www.youtube.com/watch?v=k1t0kT7YAbk',
    music: 'https://www.youtube.com/watch?v=06-XXOTP3Gc',
  },
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
