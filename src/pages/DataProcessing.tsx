import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const DataProcessing = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="container py-24">
        <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">Prelucrarea Datelor Personale</h1>
        
        <div className="prose prose-lg max-w-none text-foreground">
          <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Notă cu privire la prelucrarea datelor personale</h2>
          <p className="text-muted-foreground mb-4">
            Conform cerințelor Legii nr. 677/2001 pentru protecția persoanelor cu privire la prelucrarea datelor cu caracter personal și liberă circulație a acestor date, modificată și completată și ale Legii nr. 506/2004 privind prelucrarea datelor cu caracter personal și protecția vieții private în sectorul comunicațiilor electronice, Asociația Today Social Skills are obligația de a administra în condiții de siguranță și numai pentru scopurile specificate (procesarea comenzilor online, notificarea clienților de oferte noi), datele personale pe care ni le furnizați despre dumneavoastră, un membru al familiei dumneavoastră ori o altă persoană. Scopul colectării datelor este pentru îmbunătățirea serviciilor proprii, procesarea contractlui de prestări servicii, comunicarea cu utilizatorii și generarea rapoartelor interne.
          </p>
          <p className="text-muted-foreground mb-4">
            Informațiile înregistrate sunt destinate utilizării doar de către Asociația Today Social Skills și nu sunt comunicate altor părți, fără a avea acordul scris prealabil al dvs.
          </p>
          <p className="text-muted-foreground mb-4">
            Conform Legii nr. 677/2001, beneficiați de dreptul de acces, de intervenție asupra datelor, dreptul de a nu fi supus unei decizii individuale și dreptul de a va adresa justiției. Totodată, aveți dreptul să va opuneți prelucrării datelor personale care va privesc și să solicitați ștergerea datelor, acest lucru determinând în mod firesc pierderea calității de utilizator al website-ului. Pentru exercitarea acestor drepturi, va puteți adresa cu o cerere scrisă, datată și semnată la Asociația Today Social Skills ,sat Preajba, Comuna Malu MAre, aleea V Capsunilor, nr 28, Județul Dolj.
          </p>
          <p className="text-muted-foreground mb-4">
            Dacă unele din datele despre dumneavoastră sunt incorecte, va rugăm să ne informați cât mai curând posibil.
          </p>
          <p className="text-muted-foreground mb-6">
            Informaţiile înregistrate sunt destinate utilizării de către operator și nu vor fi comunicate către alţi destinatari. În momentul semnării unui contract de prestare servicii, veți putea opta pentru primirea, respectiv refuzul pe viitor a unor informaţii despre produsele și serviciile oferite de Asociația Today Social Skills Conform Legii nr. 677/2001, beneficiaţi de dreptul de acces, de intervenţie asupra datelor, dreptul de a nu fi supus unei decizii individuale și dreptul de a vă adresa justiţiei.
          </p>

          <h2 className="text-2xl font-bold text-foreground mt-12 mb-4">Utilizarea fișierelor de tip „cookies"</h2>
          
          <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Ce sunt „cookies"?</h3>
          <p className="text-muted-foreground mb-6">
            Fișierele de tip „cookie" sunt mici fișiere cu text care sunt salvate pe calculatorul dvs. de către siteurile pe care le vizitați. Sunt folosite în mare parte pentru bună funcționare a respectivelor siteuri, pentru optimizarea funcționarii acestora și pentru a furniza informații proprietarilor siteurilor.
          </p>
          <p className="text-muted-foreground mb-4">
            Siteul nostru folosește „cookies" pentru bună funcționare a siteului, prin crearea de sesiuni ale vizitatorilor și pentru generarea de rapoarte cu privire la traficul de pe site. Nici un fel de informații personale nu sunt stocate în „cookies" generate de către siteul nostru. Dacă nu doriți să primiți aceste „cookies", le puteți dezactiva din browser – acest lucru va afecta funcționarea siteului.
          </p>
          <p className="text-muted-foreground mb-6">
            Majoritatea browserelor web permit controlul „cookies" din setările programului. Pentru mai multe informații despre „cookies", pentru a vedea ce informații sunt salvate în ele și cum se pot șterge vizitați www.allaboutcookies.org
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">Cum utilizăm „cookies"?</h3>
          <p className="text-muted-foreground mb-6">
            Colectăm informații despre tipul de browser folosit, sitem de operare în folosință și istoricul paginilor vizitate. Aceste informații nu va identifica individual și sunt folosite numai în scopul monitorizării traficului pe site și pentru înbunatatirea experienței vizitatorilor. De asemenea, sunt salvate informații ce ne ajută la identificarea preferințelor dvs. când reveniți pe site. „Cookies" pot fi șterse oricând de pe calculatorul dvs.
          </p>

          <h3 className="text-xl font-semibold text-foreground mt-8 mb-4">„Cookies" ale terților</h3>
          <p className="text-muted-foreground mb-6">
            Siteul nostru are integrată o latura socială și butoane furnizate de către siteuri precum Facebook. Pagini ce conțin astfel de conținut pot salva „cookies" ale acestor siteuri, „cookies" pe care noi nu le controlăm. Ar trebui să verificați siteurile terților pentru mai multe informații despre informațiile ce le salvează in „cookies" generate de către aceștia.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default DataProcessing;
