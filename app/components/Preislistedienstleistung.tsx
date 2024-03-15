interface DienstleistungsProps {
    dienstleistung: string;
    preisKurz: string;
    preisMittel: string;
    preisLang: string;
}

const Preislistedienstleistung = ({
    dienstleistung
}: {
    dienstleistung: DienstleistungsProps
}) => {
  return (
    <div className="dienstleistungen  mb-10">
        <div className="dienstleistung">
            <div className="name">
                <span className="text-[20px]">{dienstleistung.dienstleistung}</span>
            </div>
            <div className="preis flex">
                <span className="px-8">{dienstleistung.preisKurz}</span>
                <span className="px-8">{dienstleistung.preisMittel}</span>
                <span className="pl-8">{dienstleistung.preisLang}</span>
            </div>
        </div>
    </div>
  )
}

export default Preislistedienstleistung
