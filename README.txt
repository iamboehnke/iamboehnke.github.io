VIDEO OG FOTO, SUBSIDE TIL MIKKELBOHNKE.COM

1. Læg mappen "film" i roden af dit GitHub Pages-repo, så filen ligger som
   film/index.html. Siden får så adressen mikkelbohnke.com/film/

2. Billeder
   - Eksporter dem som JPEG, omkring 1600 pixel på den lange led.
     iPhone-billeder er ofte HEIC, så vælg JPEG (Most Compatible) ved eksport,
     eller konvertér dem først.
   - Med ImageMagick kan du skalere en hel mappe på én gang, fra mappen med
     billederne:
       magick mogrify -resize "1600x1600>" -quality 82 *.jpg
   - Giv dem enkle navne som 01.jpg, 02.jpg og læg dem i film/foto/

3. Åbn film/index.html og find listen PHOTOS øverst i scriptet.
   Tilføj en linje pr. billede, for eksempel
       { src: 'foto/01.jpg', alt: 'Kort beskrivelse af billedet' },
   Rækkefølgen i listen er rækkefølgen på siden.

4. Videoer redigeres i listen VIDEOS lige over. Titlen på kortfilmen står som
   "Kortfilm", så skriv den rigtige titel og eventuelt din rolle.

5. Commit og push. GitHub Pages opdaterer normalt inden for et par minutter.
   Test derefter adressen i et privat vindue, og tjek at alle tre videolinks
   åbner uden login (især Facebook-linket).

6. Siden har noindex, så den ikke dukker op i Google. Vil du have den
   søgbar, så fjern linjen med "robots" i toppen af filen.

Test lokalt ved at åbne film/index.html direkte i browseren. Billederne vises
også lokalt, fordi stierne er relative.
