import Button from '@elements/Button'
import { motion } from 'framer-motion'
import Card from '@elements/Card'
import InputText from '@form/InputText'
import { CONTACT } from '@configs/link'
import { containerVariant, UpVariant } from '@animations'
import moment from 'moment'
import { useState, useEffect } from 'react'
import TextArea from '@form/TextArea'
import { submitWhatsApp } from '@utils/url'
import { toPhoneNumber } from '@utils/phoneNumber'
import querystring from 'query-string'

const Price = () => {
  const [message, setMessage] = useState('')
  const [result, setResult] = useState('')
  const [textResult, setTextResult] = useState('')
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [username, setUsername] = useState('')

  useEffect(() => {
    let text = message
    text = text.replace('{nama}', name)
    text = text.replace(
      '{url}',
      `https://suratbahagia.id/${username}?${querystring.stringify({
        name,
      })}`
    )
    text = text.replace('{waktu}', moment().format('A'))
    setTextResult(text)
    setResult(submitWhatsApp(phone, `${text ?? ' '}`))
  }, [message, phone, name, username])

  const onBlurPhone = (e) => {
    let val = e.target.value
    setPhone(toPhoneNumber(val))
  }

  return (
    <>
      <motion.div
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={containerVariant}
        className="grid grid-cols-1 gap-4 md:grid-cols-5"
      >
        <Card
          variants={UpVariant}
          className="grid grid-cols-2 gap-4 bg-white p-5 md:col-span-3 md:p-10"
          full
        >
          <h4 className="col-span-2 font-bold">Penerima Pesan</h4>
          <div className="col-span-2 md:col-span-1">
            <p className="font-semibold">Nama Penerima</p>
            <InputText
              className="rounded-lg border "
              placeholder="Nama Penerima"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="col-span-2 md:col-span-1">
            <p className="font-semibold">Nomor WhastApp</p>
            <InputText
              className="rounded-lg border "
              placeholder="628...."
              required
              value={phone}
              onBlur={(e) => onBlurPhone(e)}
              onChange={(e) => setPhone(e.target.value)}
            />
            <span className="text-xs text-slate-500">
              Gunakan kode negara (62)
            </span>
          </div>
          <div className="col-span-2 ">
            <p className="font-semibold">URL Undangan</p>
            <div className="flex overflow-hidden rounded-lg border bg-slate-100">
              <p className=" py-2 pl-4 pr-1">suratbahagia.id/</p>
              <input
                type="text"
                placeholder="username"
                value={username}
                className="w-full  rounded-r-lg py-2 pl-1 pr-4"
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="col-span-2">
            <p className="font-semibold">Isi Pesan</p>
            <TextArea
              className="rounded-lg border "
              placeholder="Selamat {waktu} {nama}, saya ingin mengun..."
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <span className="text-xs text-slate-500">
              {'*Gunakan "{nama}" untuk menampilkan nama penerima'}
              <br />
              {'*Gunakan "{url}" untuk menampilkan link undangan'}
              <br />
              {'*Gunakan "{waktu}" untuk menampilkan waktu saat ini'}
            </span>
          </div>
        </Card>
        <div className=" md:col-span-2">
          <Card
            variants={UpVariant}
            className="grid grid-cols-1 gap-4 bg-white p-5 md:p-10"
            full
          >
            <h4 className="font-bold">Hasil</h4>
            <div className="">
              <p className="font-semibold">Tampilan Pesan</p>

              <p className="w-full break-words rounded-lg border bg-slate-100 py-2 px-4">
                {textResult || 'Belum Ada Pesan'}
              </p>
            </div>
            <div>
              <p className="font-semibold">URL WhatssApp</p>
              <p className="cursor-pointer break-all text-pink-500 hover:underline">
                <a href={result} target="_blank" rel="noopener noreferrer">
                  {result}
                </a>
              </p>
            </div>
          </Card>
          <div className="mt-4 flex justify-end gap-4">
            <Button className="w-full" href={result}>
              Kirim via WhatssApp
            </Button>
          </div>
        </div>
      </motion.div>
    </>
  )
}
export default Price
