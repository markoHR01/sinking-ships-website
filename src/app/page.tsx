import Image from "next/image"

export default function HomePage() {
    return (
        <main className="py-10 flex justify-center items-center">

          {/* Title - Short Text - Download */}
          <div className="flex flex-col items-center text-center space-y-4 p-2 mx-auto">
            <h1 className="text-6xl font-bold mb-12">
              <span>Potapanje</span><br />
              <span>Brodova</span>
            </h1>

            <p className="mb-8 max-w-md">
              Potapanje Brodova je video igra koju igraju 2 igrača
              u stvarnom vremenu. Za igru je potreban pristup internetu.
              Inspiracija za ovu igru je klasična igra Battleships (1967).
            </p>

            <p className="mb-6 max-w-sm">
              Izvorni kod ove vlastite implementacije dostupan je na{" "}
              <a
                href="https://github.com/markoHR01"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                github.com/markoHR01
              </a>
            </p>

            <p className="mb-10 max-w-md">
              Više o pravilima igre možete pročitati{" "}
              <a
                href="/pravila"
                className="text-blue-600 hover:underline"
              >
                ovdje
              </a>.
            </p>

            <a
              href="/preuzmi/sinking-ships-linux.tar.gz"
              download
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded"
            >
              Preuzmi za Linux
            </a>

            <a
              href="/preuzmi/sinking-ships-win32.zip"
              download
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
            >
              Preuzmi za Windows
            </a>
          </div>

          {/* Picture : Win */}
          <div className="flex-shrink-0 mx-auto">
            <Image
              src="/slike/win.png"
              alt="Igra - Pobjeda"
              width={1067}
              height={832}
              className="rounded"
              priority
            />
          </div>

        </main>
    )
}
