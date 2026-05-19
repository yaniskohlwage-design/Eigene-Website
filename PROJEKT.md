# Projekt: Fate Design Portfolio-Website

## Kundendaten
- **Firmenname:** Fate Design
- **Ansprechpartner:** Yanis Kohlwage (Auftragnehmer = Auftraggeber)
- **Adresse:** Ottenser Hauptstraße 40, 22765 Hamburg
- **E-Mail:** kontakt@fatedesign.de
- **Notizen:** Portfolio-Site um eigene Kunden zu gewinnen. Domain: fatedesign.de

## Vertragsdetails
- **Angebotsnummer:** —
- **Rechnungsnummer:** —
- **Vertragsschluss:** —
- **Inhalt-Deadline (Kunde):** —
- **Geplante Lieferung:** —

## Leistungsumfang
- [x] Seiten: Startseite (1 Seite), Impressum, Datenschutz
- [x] Funktionen: Hero (3D Beams), Portfolio-Slider, Kontaktformular (Netlify Forms)
- [x] Sektionen: Hero, Social Proof, Leistungen, Ablauf, Portfolio, Über mich, Kontakt

## Status
- [ ] Telefonnummer eintragen (überall: +49 XXX XXXXXXX)
- [ ] E-Mail bestätigen (kontakt@fatedesign.de)
- [ ] Netlify-URLs der Dummy-Sites in PortfolioSlider.tsx eintragen
- [ ] Videos für Portfolio hinterlegen unter public/videos/ (kontur-kaffee-desktop.mp4, kontur-kaffee-mobile.mp4, steinbach-bau-desktop.mp4, steinbach-bau-mobile.mp4)
- [ ] Auf Netlify deployed
- [ ] Domain fatedesign.de verknüpft (DNS: CNAME/A-Record auf Netlify)

## DNS (für INWX → Netlify)
Netlify stellt nach Deploy eine URL bereit (z.B. fate-design.netlify.app).
Dann in INWX:
- CNAME `www` → `fate-design.netlify.app`
- A `@` → Netlify-Load-Balancer-IP (aus Netlify-Dashboard)

## Todo nach Deployment
- [ ] Netlify Forms aktivieren (Tab "Forms" im Dashboard)
- [ ] Testformular absenden, Eingang prüfen
- [ ] SSL aktiv (Netlify macht das automatisch)
