import { submitWhatsApp } from '@utils/url'

export const CONTACT = {
  WHATSAPP: (message) => submitWhatsApp('6285172305057', `${message ?? ' '}`),

  INSTAGRAM: 'http://instagram.com/suratbahagia.id',
  TWITTER: 'https://twitter.com/suratbahagia',
  FACEBOOK: 'https://facebook.com/suratbahagia',
}
