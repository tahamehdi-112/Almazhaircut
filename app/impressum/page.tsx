import Footer from '@/components/Footer';

export const metadata = {
  title: 'Impressum | Almaz Haircut',
};

export default function ImpressumPage() {
  return (
    <main className="bg-black min-h-screen text-white overflow-x-hidden">
      <div className="container mx-auto px-4 py-12">
        {/* logo at top */}
        <img
          src="/assets/logo.png"
          alt="Almaz Haircut Logo"
          className="mx-auto mb-8 w-48"
        />

        <h1 className="text-4xl font-bold mb-6 text-center">Impressum</h1>

        <div className="space-y-6 text-base leading-relaxed">
          <section>
            <h2 className="font-semibold">Angaben gemäß § 5 TMG</h2>
            <p>Almaz Haircut<br />
              Inhaber: Max Mustermann<br />
              Musterstraße 12<br />
              12345 Berlin<br />
              Deutschland
            </p>
          </section>

          <section>
            <h2 className="font-semibold">Kontakt</h2>
            <p>Telefon: +49 30 12345678<br />
              E-Mail: info@almaz-haircut.de
            </p>
            <p>Website: www.almaz-haircut.de</p>
          </section>

          <section>
            <h2 className="font-semibold">Umsatzsteuer-ID</h2>
            <p>
              Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:<br />
              DE123456789
            </p>
          </section>

          <section>
            <h2 className="font-semibold">
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
            </h2>
            <p>
              Max Mustermann<br />
              Musterstraße 12<br />
              12345 Berlin
            </p>
          </section>

          <section>
            <h2 className="font-semibold">EU-Streitschlichtung</h2>
            <p>
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:<br />
              <a
                href="https://ec.europa.eu/consumers/odr/"
                className="text-blue-400 underline"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
              <br />Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
          </section>

          <section>
            <h2 className="font-semibold">
              Verbraucherstreitbeilegung / Universalschlichtungsstelle
            </h2>
            <p>
              Wir sind nicht verpflichtet und nicht bereit, an
              Streitbeilegungsverfahren vor einer Verbraucher‑
              schlichtungsstelle teilzunehmen.
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
}
