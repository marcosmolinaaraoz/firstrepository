import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col p-24 items-center">
      <h1 className="text-2xl text-center font-bold mt-2 mb-4">
        Citroen Xsara Picasso 2.0 Nafta 2011
      </h1>
      <div className="flex flex-row w-1/2 gap-8 items-center justify-around py-6 border border-solid border-gray-300 rounded-md shadow-md mt-7">
        <div id="texto">
          <h1 className="text-base font-bold mb-4 p-1">Repuestos</h1>
          <ul className="list-disc ml-4 text-base">
          <li className="mb-3">Junta (JGOX2) Tapa Valv. Esc</li>
              <li className="mb-3">Reten Arbol de Levas Adm</li>
              <li className="mb-3">Kit Distribución</li>
              <li className="mb-3">Bomba de Agua</li>
              <li className="mb-3">Amortiguador Trasero</li>
              <li className="mb-3">Botador Hidráulico</li>
          </ul>
        </div>
        <Image
          className="rounded-lg ml-10"
          src="/auto.jpg"
          alt="Next.js Logo"
          width={250}
          height={50}
          priority
        />
      </div>
      <h1 className="text-base font-bold mb-4 gap-4 p-10">Provedores</h1>
      <div className="grid grid-cols-3 gap-10 h-16">
        <div className="flex flex-col gap-8 p-6 items-center border border-solid border-gray-300 rounded-md shadow-md mt-7">
          <h1 className="text-base font-bold">Gunter San Juan</h1>
          <div className="flex flex-row gap-20" id="lista gunter">
            <ul className="list-disc ml-4 text-base">
              <li className="mb-3">Junta (JGOX2) Tapa Valv. Esc</li>
              <li className="mb-3">Reten Arbol de Levas Adm</li>
              <li className="mb-3">Reten Arbol de Levas Adm</li>
              <li className="mb-3">Kit Distribución</li>
              <li className="mb-3">Kit Distribución </li> 
              <li className="mb-3">Bomba de Agua</li>
              <li className="mb-3">Amortiguador Trasero</li>
              <li className="mb-3">Botador Hidráulico</li>
            </ul>
            <ul className="ml-4 text-base">
              <li className="mb-3">Orig. 110.00</li>
              <li className="mb-3">Orig. 70.000 c/u</li>
              <li className="mb-3">Alt. 8.000 c/u</li>
              <li className="mb-3">Orig. 281.000</li>
              <li className="mb-3">Alt. 122.900</li>
              <li className="mb-3">Alt. 90.100</li>
              <li className="mb-3">Alt. 106.000</li>
              <li className="mb-3">Orig. 47.800 c/u</li>
            </ul>
          </div>
        </div>
        <div id="gl autopartes">
          <div className="flex flex-col gap-8 p-6 items-center border border-solid border-gray-300 rounded-md shadow-md mt-7">
            <h1 className="text-base font-bold">GL AUTOPARTES</h1>
            <div className="flex flex-row gap-20">
            <ul className="list-disc ml-4 text-base">
              <li className="mb-3">Junta (JGOX2) Tapa Valv. Esc</li>
              <li className="mb-3">Reten Arbol de Levas Adm</li>
              <li className="mb-3">Reten Arbol de Levas Adm</li>
              <li className="mb-3">Kit Distribución</li>
              <li className="mb-3">Bomba de Agua</li>
              <li className="mb-3">Amortiguador Trasero</li>
              <li className="mb-3">Botador Hidráulico</li>
            </ul>
            <ul className="ml-4 text-base">
              <li className="mb-3">-</li>
              <li className="mb-3">Alt. 21.000 c/u</li>
              <li className="mb-3">Alt. 7.000 c/u</li>
              <li className="mb-3">Alt. 180.000</li>
              <li className="mb-3">Orig. 247.000</li>
              <li className="mb-3">Orig. 166.000</li>
              <li className="mb-3">-</li>
            </ul>
          </div>
          </div>
        </div>
        <div id="lista peucor">
        <div className="flex flex-col gap-8 p-6 items-center border border-solid border-gray-300 rounded-md shadow-md mt-7">
            <h1 className="text-base font-bold">Peucor</h1>
            <div className="flex flex-row gap-20">
        <ul className="list-disc ml-4 text-base">
              <li className="mb-3">Junta (JGOX2) Tapa Valv. Esc</li>
              <li className="mb-3">Reten Arbol de Levas Adm</li>
              <li className="mb-3">Kit Distribución </li> 
              <li className="mb-3">Bomba de Agua</li>
              <li className="mb-3">Amortiguador Trasero</li>
              <li className="mb-3">Botador Hidráulico</li>
            </ul>
            <ul className="ml-4 text-base">
              <li className="mb-3">Alt. 11.150</li>
              <li className="mb-3">Alt. 21.500</li>
              <li className="mb-3">Alt. 170.000</li>
              <li className="mb-3">Alt. 86.000</li>
              <li className="mb-3">Alt. 78.000 c/u</li>
              <li className="mb-3">Orig. 22.150 c/u</li>
            </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
