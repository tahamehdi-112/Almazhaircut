import Footer from '@/components/Footer';

export const metadata = {
  title: 'Datenschutzerklärung | Almaz Haircut',
};

export default function DatenschutzPage() {
  return (
    <main className="bg-black min-h-screen text-white overflow-x-hidden">
      <div className="container mx-auto px-4 py-12">
        <img
          src="/assets/logo.png"
          alt="Almaz Haircut Logo"
          className="mx-auto mb-8 w-48"
        />

        <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">Datenschutzerklärung</h1>

        <div className="space-y-6 text-base leading-relaxed">
          <section>
            <h2 className="font-semibold">1. Datenschutz auf einen Blick</h2>
            <p>
              Allgemeine Hinweise
            </p>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
            </p>
            <p>
              Datenerfassung auf dieser Website
            </p>
            <p>
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur verantwortlichen Stelle“ in dieser Datenschutzerklärung entnehmen.
            </p>
          </section>

          <section>
            <h2 className="font-semibold">2. Hosting</h2>
            <p>
              Diese Website wird bei einem externen Dienstleister (Hosting-Anbieter) gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert.
            </p>
            <p>
              Der Einsatz des Hosters erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) sowie im Interesse einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots (Art. 6 Abs. 1 lit. f DSGVO).
            </p>
          </section>

          <section>
            <h2 className="font-semibold">3. Allgemeine Hinweise und Pflichtinformationen</h2>
            <p>
              Datenschutz
            </p>
            <p>
              Der Betreiber dieser Seiten nimmt den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>
            <p>
              Hinweis zur verantwortlichen Stelle
            </p>
            <p>
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
            </p>
            <p>
              Almaz Haircut<br />
              Inhaber: Max Mustermann<br />
              Musterstraße 12<br />
              12345 Berlin<br />
              Deutschland
            </p>
            <p>
              Telefon: +49 30 12345678<br />
              E-Mail: info@almaz-haircut.de
            </p>
            <p>
              Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten entscheidet.
            </p>
          </section>

          <section>
            <h2 className="font-semibold">4. Datenerfassung auf dieser Website</h2>
            <p>
              Kontaktformular
            </p>
            <p>
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Formular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
            </p>
            <p>
              Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt.
            </p>
            <p>
              Anfrage per E-Mail oder Telefon
            </p>
            <p>
              Wenn Sie uns per E-Mail oder Telefon kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten zum Zwecke der Bearbeitung Ihres Anliegens bei uns gespeichert und verarbeitet.
            </p>
          </section>

          <section>
            <h2 className="font-semibold">5. Cookies</h2>
            <p>
              Unsere Website verwendet sogenannte „Cookies“. Cookies sind kleine Textdateien und richten auf Ihrem Endgerät keinen Schaden an.
            </p>
            <p>
              Cookies werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO.
            </p>
            <p>
              Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben.
            </p>
          </section>

          <section>
            <h2 className="font-semibold">6. Ihre Rechte</h2>
            <p>
              Sie haben jederzeit das Recht:
            </p>
            <ul className="list-disc list-inside">
              <li>Auskunft über Ihre gespeicherten personenbezogenen Daten zu erhalten</li>
              <li>Berichtigung unrichtiger Daten zu verlangen</li>
              <li>Löschung Ihrer Daten zu verlangen</li>
              <li>Einschränkung der Verarbeitung zu verlangen</li>
              <li>Widerspruch gegen die Verarbeitung einzulegen</li>
              <li>Datenübertragbarkeit zu verlangen</li>
            </ul>
            <p>
              Außerdem steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
            </p>
          </section>
        </div>
      </div>

      <Footer />
    </main>
  );
}
