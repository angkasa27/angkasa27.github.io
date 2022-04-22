import Button from '@elements/ButtonV2'
import Wave1 from '@assets/svg/Wave1'
import Wave2 from '@assets/svg/Wave2'
import Wave3 from '@assets/svg/Wave3'
import ErrorAnimation from '@assets/parallax/ErrorPage'

export default function Error({ statusCode }) {
  return (
    <div className="relative flex h-screen w-screen flex-col items-center justify-center overflow-hidden bg-slate-50 px-16 md:flex-row md:gap-8">
      <ErrorAnimation className="h-auto w-full md:w-80" />
      <div className="flex  flex-col items-center justify-center md:items-start ">
        <h1 className="text-9xl font-bold">{statusCode}</h1>
        <h1 className="font-bold text-violet-800">WHOOPS!</h1>
        <h5 className="font-semibold">Sepertinya kamu tersesat :(</h5>

        <Button to="/" className="z-10 mt-2 bg-violet-600 hover:bg-violet-700 ">
          Kembali ke Beranda
        </Button>
      </div>
      <div className="absolute bottom-0 z-0 -scale-x-100">
        <Wave1 className="w-screen text-violet-200 opacity-100" />
      </div>
      <div className="absolute bottom-0 z-0">
        <Wave2 className="w-screen text-violet-200 opacity-50" />
      </div>
      <div className="absolute bottom-0 z-0">
        <Wave3 className="w-screen text-violet-200 opacity-50" />
      </div>
    </div>
  )
}
