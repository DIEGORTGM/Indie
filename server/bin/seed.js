require("dotenv").config();
const mongoose = require("mongoose");
const User = require("../models/User.model");


mongoose.connect(process.env.DB_REMOTE, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});

User.collection.drop();

const listUsers = [
  {
    name: "Eric Clapton",
    username: "Eric Clapton",
    password: "ericClapton",
    occupation: "Singer/Songwriter",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...",
    imageUrl: "https://e.radio-oxigeno.io/normal/2018/04/16/495349_595104.jpg",
    contactInfo: ["ericClapton@eric.com", "+34616188686"],
    pastWork: ["Unplugged", "Slowhand", "Riding With The King", "..."],
    favorites: [""],
  },
  {
    name: "Mac Miller",
    username: "Mac Miller",
    password: "macMiller",
    occupation: "Singer/Songwriter",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...",
    imageUrl:
      "https://arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/YETKXMYEHFBCBM2XSHYM2QW4EY.jpg",
    contactInfo: ["macMiller@mac.com", "+34616188656"],
    pastWork: ["Blue Slide Park", "Swimming", "Circles", "..."],
    favorites: [""],
  },
  {
    name: "Lana Del Rey",
    username: "Lana Del Rey",
    password: "lanaRey",
    occupation: "Singer/Songwriter",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...",
    imageUrl:
      "https://i.guim.co.uk/img/static/sys-images/Observer/Columnist/Columnists/2012/1/20/1327090363817/Lana-Del-Rey-007.jpg?width=300&quality=45&auto=format&fit=max&dpr=2&s=cd7a186c9610ee54445291528b5ab7f8",
    contactInfo: ["lanaRey@lana.com", "+34617487565"],
    pastWork: [
      "Norman Fucking Rockwell",
      "Born to Die",
      "Lust for Life",
      "...",
    ],
    favorites: [""],
  },
  {
    name: "Joey Bada$$",
    username: "Joey Bada$$",
    password: "joeyBada$$",
    occupation: "Singer/Songwriter",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...",
    imageUrl:
      "https://static.billboard.com/files/media/01-Pony-x-Joey-Badass-campaign-2017-billboard-1548-768x433.jpg",
    contactInfo: ["joeyBada$$@joey.com", "+34616135465"],
    pastWork: ["The Light Pack", "All-Amerikkkan Bada$$", "1999", "..."],
    favorites: [""],
  },
  {
    name: "Action Bronson",
    username: "Action Bronson",
    password: "actionBronson",
    occupation: "Singer/Songwriter",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...",
    imageUrl:
      "https://djmag.es/wp-content/uploads/sites/10/2019/05/SetWidth940-action-bronson-cooks-up-a-heart-attack-in-random-moments-of-food.jpg",
    contactInfo: ["actionBronson@action.com", "+34616188354"],
    pastWork: ["White Bronco", "Mr. Wonderful", "Blue Chips 7000", "..."],
    favorites: [""],
  },
  {
    name: "Tyler, The Creator",
    username: "Tyler, The Creator",
    password: "tylerCreator",
    occupation: "Singer/Songwriter",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...",
    imageUrl:
      "https://media.revistagq.com/photos/5ca5f0e6501e5461167c59ba/master/pass/tyler_the_creator_9102.jpg",
    contactInfo: ["tylerCreator@tyler.com", "+34616543712"],
    pastWork: ["Igor", "Flower Boy", "Cherry Bomb", "..."],
    favorites: [""],
  },
  {
    name: "Chance The Rapper",
    username: "Chance The Rapper",
    password: "chanceRapper",
    occupation: "Singer/Songwriter",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...",
    imageUrl:
      "https://media.sivasdescalzo.com/media/wysiwyg/Blog/12-2019/Chance_The_Rapper_02.jpg",
    contactInfo: ["chanceRapper@chance.com", "+34616136547"],
    pastWork: ["The Big Day", "Coloring Book", "Acid Rap", "..."],
    favorites: [""],
  },
  {
    name: "Macklemore",
    username: "Macklemore",
    password: "Macklemore",
    occupation: "Singer/Songwriter",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...",
    imageUrl:
      "https://www.kentreporter.com/wp-content/uploads/2020/02/20409066_web1_macklemore-AUB-200207-T.jpeg",
    contactInfo: ["Macklemore@macklemore.com", "+34616162345"],
    pastWork: ["Gemini", "This Unruly Mess I've Made ", "The Heist", "..."],
    favorites: [""],
  },
  {
    name: "Ellie Goulding",
    username: "Ellie Goulding",
    password: "ellieGoulding",
    occupation: "Singer/Songwriter",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...",
    imageUrl:
      "https://sss.planeta.pe/imagen/apaisado/river-ellie-goulding-cerca-numero-uno-reino-unido-7c4fb.jpg",
    contactInfo: ["ellieGoulding@ellie.com", "+34616254786"],
    pastWork: ["Brightest Blue", "Delirium", "Lights", "..."],
    favorites: [""],
  },
  {
    name: "The Weeknd",
    username: "The Weeknd",
    password: "theWeeknd",
    occupation: "Singer/Songwriter",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...",
    imageUrl:
      "https://i.guim.co.uk/img/media/73ec4373ed4f59ef1a1312176558752a5793529d/0_336_6552_3932/master/6552.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=b3a7881444203651628e94863df6c9de",
    contactInfo: ["theWeeknd@weeknd.com", "+34623418956"],
    pastWork: ["After Hours", "Starboy", "Beauty Behind the Madness", "..."],
    favorites: [""],
  },
  {
    name: "Kaytranada",
    username: "Kaytranada",
    password: "Kaytranada",
    occupation: "DJ",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...",
    imageUrl:
      "https://paraisofestival.com/wp-content/uploads/2020/02/kaytranada-600x600.jpg",
    contactInfo: ["Kaytranada@kaytranada.com", "+34623410035"],
    pastWork: ["Bubba", "99.9%", "Kaytra Todo", "..."],
    favorites: [""],
  },
  {
    name: "Nicolas Jaar",
    username: "Nicolas Jaar",
    password: "NicolasJaar",
    occupation: "DJ",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...",
    imageUrl:
      "https://viciousmagazine.com/wp-content/uploads/2020/04/users/000000/nicolas-jaar-276844bbfd6a32da6c09c73a20a58cd6-1024x576.jpg",
    contactInfo: ["NicolasJaar@nicolasjaar.com", "+34621536735"],
    pastWork: ["Cenizas", "Space is Only Noise", "Sirens", "..."],
    favorites: [""],
  },
  {
    name: "Thundercat",
    username: "Thundercat",
    password: "Thundercat",
    occupation: "Singer/Songwriter",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...",
    imageUrl:
      "https://seattlespectator.com/wp-content/uploads/2020/03/w_thundercat3-900x600.jpg",
    contactInfo: ["Thundercat@thundercat.com", "+34623415070"],
    pastWork: ["It is What it is", "Drank", "Apocalypse", "..."],
    favorites: [""],
  },
  {
    name: "Kamasi Washington",
    username: "Kamasi Washington",
    password: "KamasiWashington",
    occupation: "Singer/Songwriter",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...",
    imageUrl:
      "https://images.squarespace-cdn.com/content/587d33a54402432706c7e9e7/1588793229684-3J4R62RFB9MJBWDIURQB/Kamasi+Washington.png?content-type=image%2Fpng",
    contactInfo: ["KamasiWashington@kamasiwashington.com", "+34623143252"],
    pastWork: ["Heaven and Earth", "The Choice", "The Epic", "..."],
    favorites: [""],
  },
  {
    name: "Unkown Mortal Orchestra",
    username: "Unkown Mortal Orchestra",
    password: "UnkownMortalOrchestra",
    occupation: "Singer/Songwriter",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat...",
    imageUrl:
      "https://img.discogs.com/bkuwnqVoGjKlzxbtlGGwOFql0Y4=/600x400/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-2102143-1444988188-8150.jpeg.jpg",
    contactInfo: ["UnkownMortalOrchestra@UMO.com", "+34623454678"],
    pastWork: ["IC-01 Hanoi", "Sex & Food", "Unknown Mortal Orchestra", "..."],
    favorites: [""],
  },
];

User.create(listUsers)
  .then((allUsers) => console.log("These users have been created: ", allUsers))
  .then(() =>
    mongoose.connection.close(() =>
      console.log("Conection closed after the seed.")
    )
  )
  .catch((err) => console.log("There was an error creating the users.", err));
