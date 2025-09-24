import Image from "next/image"
import Link from "next/link"

export default function PravilaPage() {
    return (
        <main className="py-10 flex flex-col items-center space-y-12">

          {/* Step 1 - Step 2 - Step 3 */}
          <div className="py-10 flex justify-center items-start gap-12">

            {/* Step 1 */}
            <div className="flex flex-col items-center text-center space-y-4 mx-auto">
              <h2 className="text-5xl font-bold">1.</h2>
              <Image
                src="/slike/menu.png"
                alt="Igra - Izbornik"
                width={534}
                height={416}
                className="rounded"
              />
              <p className="max-w-md text-lg">
                Glavni Izbornik. Igrači se mogu pridružiti
                redu pritiskom na gumb 'Igraj' ili napustiti
                red čekanja pritiskom na gumb 'Odustani'.
                Igra započinje kada se pronađe protivnik.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col items-center text-center space-y-4 mx-auto">
              <h2 className="text-5xl font-bold">2.</h2>
              <Image
                src="/slike/setup.png"
                alt="Igra - Početak"
                width={534}
                height={416}
                className="rounded"
              />
              <p className="max-w-md text-lg">
                Na početku igre, svaki igrač postavlja 5
                brodova na svoju ploču. Redom od najmanjeg
                do najvećeg. Igrači imaju 15 sekunda za
                postavljanje brodova.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col items-center text-center space-y-4 mx-auto">
              <h2 className="text-5xl font-bold">3.</h2>
              <Image
                src="/slike/play.png"
                alt="Igra - Igra"
                width={534}
                height={416}
                className="rounded"
              />
              <p className="max-w-md text-lg">
                Igrači napadaju protivnika odabirom polja na
                protivnikovoj ploči. Napad može pogoditi brod
                ili promašiti. Napad traje najviše 10 sekundi.
                Nakon napada igrač predaje potez protivniku.
                Pobjednik je igrač koji prvi potopi sve
                protivničke brodove.
              </p>
            </div>
          </div>

          {/* Back to Home */}
          <div className="pt-6">
            <Link
              href="/"
              className="text-blue-600 hover:underline text-lg"
            >
              - Povratak na Naslovnicu
            </Link>
          </div>
        </main>
    )
}
