/*
 * Pflegbare Inhalte – diese Datei kann ohne HTML-Kenntnisse angepasst werden.
 * Platzstatus: "open" = geöffnet, "closed" = geschlossen, "info" = neutraler Hinweis.
 */
window.GCRR = {
  status: {
    updated: "20.11.2026",
    items: [
      { label: "Loch 1 – 9",    state: "open",   text: "Geöffnet" },
      { label: "Loch 10 – 18",  state: "closed", text: "Geschlossen" },
      { label: "Driving Range", state: "open",   text: "Geöffnet" },
      { label: "Proshop",       state: "closed", text: "Geschlossen" },
      { label: "Restaurant",    state: "closed", text: "Geschlossen" },
      { label: "Büro",          state: "closed", text: "Geschlossen" },
      { label: "Golf Carts",    state: "closed", text: "Keine verfügbar" },
      { label: "Trolleys",      state: "closed", text: "Keine verfügbar" }
    ],
    notice: "Loch 10–18 sind über den Winter gesperrt. Es gilt Wintergreenfee 20 € – bitte in die Greenfee-Box im Eingangsbereich legen."
  },

  news: [
    { date: "2026-11-18", cat: "Platz",   title: "Loch 10–18 über den Winter gesperrt – Wintergreenfee 20 €", text: "Allen Mitgliedern und Gästen eine erholsame und besinnliche Vorweihnachts- und Adventszeit!" },
    { date: "2026-11-05", cat: "Club",    title: "Danke für eine schöne gemeinsame Saison!", text: "Restaurant und Shop sind aufgrund der Jahreszeit aktuell geschlossen." },
    { date: "2026-10-09", cat: "Mitgliedschaft", title: "Sie möchten den Club wechseln?", text: "Sprechen Sie uns auf unsere exklusiven Wechselangebote an: 05529 8995 oder manager@golf-duderstadt.de." },
    { date: "2026-08-25", cat: "Charity", title: "66 Löcher für den guten Zweck – Uwes Golf-Marathon bringt 8.150 € Spenden", text: "Von morgens bis Sonnenuntergang auf dem Platz – zugunsten des Kinderhospizes Sternenlichter." },
    { date: "2026-07-24", cat: "Mitgliedschaft", title: "Exklusives Mitgliedschaftsangebot 2026", text: "Jetzt Mitglied werden – den Mitgliedsbeitrag erst ab 2027 zahlen." },
    { date: "2026-06-10", cat: "Training", title: "Golftraining inklusive TrackMan bei Moritz Decker", text: "TrackMan jetzt auch auf unserer Range – ohne Zusatzkosten im Training." },
    { date: "2026-05-12", cat: "Club",    title: "Präsidentenwechsel im Club", text: "Jürgen Wundrack übergibt nach vielen erfolgreichen Jahren das Amt und wird Ehrenpräsident." },
    { date: "2026-04-21", cat: "Neu",     title: "Golfsimulator", text: "TrackMan-Simulator für Training und Spiel bei jedem Wetter." }
  ],

  /* Platzdaten: Länge in Metern von Gelb (Herren) und Rot (Damen), Par und Handicap-Index */
  holes: [
    { n: 1,  par: 4, hcp: 5,  yellow: 344, red: 298, text: "Auf diesem recht leichten Par 4 beginnt die Runde mit einem Drive in eine breite Senke. Das bergauf liegende Grün wird durch einen kleinen, fast nicht sichtbaren Bunker rechts verteidigt. Wer zu weit hinten im Grün liegt, hat mit unangenehmen Bergabputts zu kämpfen." },
    { n: 2,  par: 3, hcp: 15, yellow: 140, red: 123, text: "Vom erhöhten Abschlag über die Penalty Area zum Grün beeinflusst der Wind die Schlägerwahl. Bleibt man zu kurz, muss die Welle im Grün überwunden werden. Die Bunker auf beiden Seiten nehmen gerne Bälle auf." },
    { n: 3,  par: 5, hcp: 9,  yellow: 428, red: 376, text: "Nach einem langen, geraden Drive auf das stark nach links hängende Fairway und einem beherzten zweiten Schlag über die Ecke dieses Dogleg links geht es steil bergauf zum Grün. Links lauern zwei unsichtbare Bunker. Longhittern bietet dieses Par 5 eine Eagle-Chance." },
    { n: 4,  par: 4, hcp: 7,  yellow: 334, red: 292, text: "Dieses gerade Par 4 wirkt harmloser als es ist. Ein Drive mit leichtem Hook bringt die Fairwaybunker ins Spiel. Die Bahn läuft mehr bergauf, als es scheint – das große Grün hat einige Wellen und hängt nach vorn." },
    { n: 5,  par: 4, hcp: 3,  yellow: 369, red: 324, text: "Dieses lange Par-4-Dogleg verlangt einen weiten, geraden Drive, um beim zweiten Schlag die Fahne anvisieren zu können. Links bedroht die Auslinie, rechts das dichte Rough. Wer den rechten Grünbunker überwindet, hat ein großes, ebenes Grün zum Putt." },
    { n: 6,  par: 4, hcp: 11, yellow: 315, red: 279, text: "Dieses kurze, gerade Par 4 verlangt weniger Länge als exaktes Spiel. Wer zu kurz annähert, landet oft im Wasser, das die ganze rechte Seite des Grüns einnimmt. Der Bunker links tut ein Übriges." },
    { n: 7,  par: 3, hcp: 17, yellow: 158, red: 137, text: "Der spektakuläre Abschlag über die Senke dieses recht langen Par 3 bleibt oft zu kurz. Tiefes Rough auf beiden Seiten und zwei große Grünbunker machen es nicht einfacher. Das zweistufige Grün erfordert exakte Puttgeschwindigkeit." },
    { n: 8,  par: 4, hcp: 1,  yellow: 393, red: 346, text: "Weitschlagende können abkürzen: Ziel auf den Bunker und Vollgas! Sonst geradeaus, Mitte Fairway abschlagen. Beim zweiten Schlag auf die Penalty Area achtgeben." },
    { n: 9,  par: 5, hcp: 13, yellow: 489, red: 430, text: "Bergab in Richtung Clubhaus kann der Longhitter mit zwei exakten Schlägen das Grün dieses Par 5 erreichen. Der große Bunker nimmt alle auf, die zu weit rechts landen. Zu schnelle Bälle erreichen leicht den steilen Hang hinter dem Grün." },
    { n: 10, par: 4, hcp: 2,  yellow: 350, red: 339, text: "Ein guter Drive entlang der Auslinie hinauf auf den Fairwayhügel. Nur mit einem gut platzierten zweiten Schlag erreicht man das auf einem Plateau gelegene Grün. Zu kurze Schläge nimmt der vorgelagerte Bunker auf." },
    { n: 11, par: 5, hcp: 6,  yellow: 504, red: 386, text: "Für die Herren das längste Par 5 auf dem Platz. Der runde Fairwayrücken verzeiht Richtungsabweichungen nur bedingt. Zwei große Bunker bewachen das stark hängende Grün – wer hier Par spielen will, braucht lange, fehlerfreie Schläge." },
    { n: 12, par: 3, hcp: 18, yellow: 115, red: 95,  text: "Dieses kurze Par 3 bergauf ist als einfachstes Loch des Platzes auch nicht ohne Tücken. Das Grün ist groß und leicht hügelig." },
    { n: 13, par: 4, hcp: 14, yellow: 334, red: 294, text: "Der blinde Abschlag über den Hügel führt bei entsprechender Länge in eine Senke, von der das Grün bergauf gut anzuspielen ist. Das Grün hängt stark nach vorn und verlangt bei Bergabputts viel Gefühl." },
    { n: 14, par: 4, hcp: 12, yellow: 405, red: 373, text: "Ein langes, gerades Par 4. Wer gut abschlägt, erreicht die Hügelkuppe – links droht der Wald mit der Ausgrenze. Dann noch 200 m bergab zum schmalen, nach rechts hängenden Grün." },
    { n: 15, par: 4, hcp: 16, yellow: 288, red: 251, text: "Nach einem guten Abschlag ist der Weg zum Grün nicht mehr weit. Ein Hook wird allerdings mit großen Bunkern bestraft. Der zweite Schlag muss das kleine Grün exakt erreichen." },
    { n: 16, par: 5, hcp: 10, yellow: 438, red: 387, text: "Das spektakulärste Loch des Platzes: Vom erhöhten Abschlag auf das nach rechts hängende Fairway, dann zielgenau durch den schmalen Durchgang zwischen zwei Penalty Areas. Von dort ist das zweistufige Grün mit einem guten dritten Schlag zu erreichen." },
    { n: 17, par: 3, hcp: 8,  yellow: 184, red: 168, text: "Das letzte Par 3 ist lang und feucht: lang und gerade über das Wasser am Wald entlang. Rechts ein großer Bunker, dahinter das Aus. Und ganz nebenbei: Hier können Sie zu Fuß die ehemalige innerdeutsche Grenze überqueren." },
    { n: 18, par: 4, hcp: 4,  yellow: 396, red: 352, text: "Links Wald, rechts Wasser – nach dem Abschlag kommt über das Fairway das Clubhaus in Sicht. Wer mit dem zweiten Schlag das Grün erreichen will, darf es an Länge nicht fehlen lassen. Zwischen linker Ausgrenze und dem letzten Teich liegt das wellige Grün." }
  ]
};
