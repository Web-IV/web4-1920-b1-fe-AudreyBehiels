import { Film } from "./film.model";

const JsonFilms = [
  {
    titel: "Titanic",
    jaar: "1997",
    duur: "194",
    regisseur: "James Cameron",
    genres: ["Drama", "Romantiek"],
    schrijvers: ["James Cameron"],
    acteurs: ["Leonardo DiCaprio", "Kate Winslet", "Kathy Bates", "Billy Zane"],
    productiebedrijf: "Paramount Pictures",
    korteInhoud:
      "De 17-jarige rijke Rose DeWitt Bukater wordt door haar familie gedwongen om zich met Cal Hockley te verloven en binnenkort te gaan trouwen. " +
      "Tijdens de eerste tocht over de Atlantische zee van de Titanic, een gigantisch passagiersschip dat onzinkbaar wordt geacht, besluit ze zelfmoord te plegen. " +
      "De jonge Jack Dawson, een derde klasse-passagier, kan haar tegenhouden." +
      "Ondanks hun totaal verschillende afkomst worden ze vrienden en al snel groeit een verboden liefde tussen hen allebei."
  }
];
export const FILMS: Film[] = JsonFilms.map(Film.fromJSON);
