# Notes

**Run dev server**: `npm run start`

**Run unit tests**: `npm run test:unit`

### Deutsch

- Ich habe text field also den Namen des Landes/Flugziels als :key property für den v-for loop genommen da es keine andere spezielle ID gab. Im Idealfall sollte es einen bestimmten ID field geben.

- Focused und active Elemente haben eine dickere violette outline. I habe das wegen accessibility Gründen gemacht, so that Nützer auch mit der Tastatur navigieren können. Natürlich ist das design dem designer überlassen.

- Es scheint am ersten Blick vielleicht sich wiederholdend dass ich bei der scrollbaren Liste die linke paddings/margins getrennt eingefügt habe, aber dass ist weil sonst die linke box-shadow des ersten Elementes am Rand aufgegessen werden würde.

- Ich habe auch ein bisschen extra padding unter dem card-list div hinzugefügt damit es in desktop browsers besser aussieht da das scrollbar die untere box-shadow der Card Elemente sonst bedecken würde.


___

### English


- I have used the text field (country/destination name) as a unique identifier for the :key property in the v-for loop as there was no other special ID provided. Ideally there should be a unique ID field.

- Focused and active elements have a thicker purple outline. I did this for accessibility reasons, so that users can navigate by keyboard. Of course the design of this outline would be up to the designer.

- It might seem at first repetitive that I added the left paddings/margins seperately inside and outside the scrollable area but this is because the green box-shadow on the left of the first item was being eaten up.

- I also added some extra padding beneath the card-list div so that it looks better when viewed on desktop browsers because the scrollbar was hiding the bottom box-shadow.


