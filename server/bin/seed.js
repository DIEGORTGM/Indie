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
      "Eric Patrick Clapton, (born 30 March 1945) is an English rock and blues guitarist, singer, and songwriter. He is the only three-time inductee to the Rock and Roll Hall of Fame: once as a solo artist and separately as a member of the Yardbirds and of Cream. Clapton has been referred to as one of the most important and influential guitarists of all time. Clapton ranked second in Rolling Stone's list of the '100 Greatest Guitarists of All Time' and fourth in Gibson's 'Top 50 Guitarists of All Time'. He was also named number five in Time magazine's list of 'The 10 Best Electric Guitar Players' in 2009.",
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
      "Miller began his career in Pittsburgh's hip hop scene in 2007, at the age of fifteen. In 2010, he signed a record deal with Pittsburgh-based independent label Rostrum Records, with whom he had his breakthrough with the mixtapes K.I.D.S. (2010) and Best Day Ever (2011). Miller's debut studio album, Blue Slide Park (2011), became the first independently distributed debut album to top the US Billboard 200 since 1995. In 2013, he founded the record label imprint REMember Music. After his second studio album, Watching Movies with the Sound Off (2013), he left Rostrum and signed with the major label Warner Bros. Records in 2014. With them, he released four studio albums: GO:OD AM (2015), The Divine Feminine (2016), Swimming (2018), and the posthumous Circles (2020). For Swimming, he was posthumously nominated for a Grammy Award for Best Rap Album.",
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
      "Elizabeth Woolridge Grant (born June 21, 1985), known by her stage name Lana Del Rey, is an American singer-songwriter and poet. Her music is noted for its stylized cinematic quality; its themes of tragic romance, glamour, and melancholia; and its references to pop culture, particularly 1950s and 1960s Americana. Born in New York City and raised in upstate New York, Del Rey returned to New York City in 2005 to begin her music career. Following numerous projects, including her self- titled debut studio album, Del Rey's breakthrough came with the viral success of her debut single 'Video Games' in 2011. She signed with Interscope and Polydor later that year. Her major label debut, Born to Die (2012), was an international success and spawned a top-ten single 'Summertime Sadness' on the Billboard Hot 100, as well as the singles 'Blue Jeans' and 'Born to Die', which charted in several overseas territories",
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
      "Jo-Vaughn Virginie Scott (born January 20, 1995), better known by his stage name Joey Badass (stylized as Joey Bada$$), is an American rapper, singer, songwriter, record producer and actor. A native of Brooklyn, New York, he is a founding member of the hip-hop collective Pro Era, with whom he has released three mixtapes, as well as his numerous solo projects. Joey Badass released his debut mixtape, 1999, on June 12, 2012, to critical acclaim and recognition, followed by Rejex in September, and Summer Knights on July 1, 2013. His debut studio album, B4.Da.$$, was released January 20, 2015. In July 2016, he made his television debut on the USA Network series Mr.Robot.His second studio album All- Amerikkkan Badass was released on April 7, 2017.",
    imageUrl:
      "https://static.billboard.com/files/media/01-Pony-x-Joey-Badass-campaign-2017-billboard-1548-768x433.jpg",
    contactInfo: ["joeyBada$$@joey.com", "+34616135465"],
    pastWork: ["The Light Pack", "All-Amerikkkan Bada$$", "1999", "..."],
    favorites: [""],
  },
  {
    name: "Chance The Rapper",
    username: "Chance The Rapper",
    password: "chanceRapper",
    occupation: "Singer/Songwriter",
    description:
      "Born in Chicago, Illinois, Chance the Rapper released his debut mixtape 10 Day in 2012. He began to gain mainstream recognition in 2013 after releasing his second mixtape, Acid Rap, which gained acclaim.[3] He then released his third mixtape, Coloring Book, in 2016, which garnered further critical acclaim and attention. It earned him three Grammy Awards, including the award for Best Rap Album; upon winning, it became the first streaming-only album to win a Grammy Award, and peaked at number eight on the Billboard 200.[4] His debut studio album The Big Day was released on July 26, 2019.[5][6] Chance the Rapper's official fanbase is named 'GForce'. He mentioned them on Sway in 2019, mentioning he regularly talks to members of a Twitter group chat.",
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
      "Benjamin Hammond Haggerty (born June 19, 1983), known by his stage name Macklemore (formerly Professor Macklemore), is an American rapper and songwriter from Seattle, Washington. He has collaborated with producer Ryan Lewis as Macklemore & Ryan Lewis. Since 2000, he has independently released one mixtape, three EPs, and four albums. Macklemore and Lewis' single 'Thrift Shop' reached number one on the U.S. Billboard Hot 100 in 2013. The single was soon dubbed by Billboard as the first song since 1994 to top the Hot 100 chart without the support of a major record label.",
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
      "Elena Jane Goulding (born 30 December, 1986) is an English singer and songwriter. Her career began when she met record producers Starsmith and Frankmusik, and she was later spotted by Jamie Lillywhite, who later became her manager and A&R. After signing to Polydor Records in July 2009, Goulding released her debut extended play, An Introduction to Ellie Goulding later that year.",
    imageUrl:
      "https://sss.planeta.pe/imagen/apaisado/river-ellie-goulding-cerca-numero-uno-reino-unido-7c4fb.jpg",
    contactInfo: ["ellieGoulding@ellie.com", "+34616254786"],
    pastWork: ["Brightest Blue", "Delirium", "Lights", "..."],
    favorites: [""],
  },
  {
    name: "Kaytranada",
    username: "Kaytranada",
    password: "Kaytranada",
    occupation: "DJ",
    description:
      "Louis Kevin Celestin (born August 25, 1992), known by his stage name Kaytranada, (stylized as KAYTRANADA, shortened as KAYTRA), is a Haitian-Canadian DJ and record producer. Celestin began his career under the alias Kaytradamus in 2010. He is one half of the hip hop duo The Celestics, along with his brother Lou Phelps. Celestin began his career under the name Kaytradamus in 2010. He released two projects as Kaytradamus before changing his name to Kaytranada in 2012. Kaytranada has released 13 projects and 41 remixes. He has toured more than 50 Canadian, American, European and Australian cities. ",
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
      "Nicolás Jaar (born January 10, 1990) is a Chilean-American (with Palestinian ancestry from Bethlehem) composer and recording artist based in New York. Among his notable works are the albums Space Is Only Noise (2011), Pomegranates (2015) and Sirens (2016). Since 2011, he has embarked on multiple explorative directions, performing a five-hour improvisational concert at MoMA PS1 and releasing a large volume of experimental recordings through his label, Other People, including works by Lydia Lunch, Pierre Bastien, John Wall and Lucretia Dalt. He scored Jacques Audiard's Dheepan (winner of the Palme d'Or at Cannes 2015)[3] and Pablo Larrain's 2020 film, Ema. Jaar is half of the band Darkside (Psychic, 2013) and has released two albums under the alias Against All Logic.",
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
      "Stephen Lee Bruner (born October 19, 1984), better known by his stage name Thundercat, is an American musician, record producer, singer and songwriter from Los Angeles, California. First coming to prominence as a member of crossover thrash band Suicidal Tendencies, he has since released four solo studio albums and is noted for his work with producer Flying Lotus and his appearance on Kendrick Lamar's critically acclaimed 2015 album To Pimp a Butterfly. In 2016, Thundercat won a Grammy for Best Rap/Sung Performance for his work on the track 'These Walls' from To Pimp a Butterfly.",
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
      "Washington joined the Gerald Wilson Orchestra for its 2005 album In My Time. Washington played saxophone on Kendrick Lamar's To Pimp a Butterfly. His debut solo recording, The Epic, was released in May 2015. The mini-album/EP Harmony of Difference followed in September 2017. His second full-length studio album, Heaven and Earth, was released in June 2018, with a companion EP titled The Choice released a week later.  He has played along with a diverse group of musicians including Wayne Shorter, Herbie Hancock, Horace Tapscott, Gerald Wilson, Lauryn Hill, Nas, Snoop Dogg, George Duke, Chaka Khan, Flying Lotus, Thundercat, Mike Muir, Francisco Aguabella, the Pan Afrikaan People's Orchestra and Raphael Saadiq.",
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
      "Unknown Mortal Orchestra (UMO) is a Portland, Oregon-based New Zealand psychedelic rock band primarily composed of singer, guitarist, and songwriter Ruban Nielson, and bassist Jake Portrait. Nielson, formerly of The Mint Chicks, started the band in 2010. The band's first album was released in 2011 on Fat Possum Records; four subsequent studio albums have been released on Jagjaguwar, the most recent being IC-01 Hanoi (2018).",
    imageUrl:
      "https://img.discogs.com/bkuwnqVoGjKlzxbtlGGwOFql0Y4=/600x400/smart/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/A-2102143-1444988188-8150.jpeg.jpg",
    contactInfo: ["UnkownMortalOrchestra@UMO.com", "+34623454678"],
    pastWork: ["IC-01 Hanoi", "Sex & Food", "Unknown Mortal Orchestra", "..."],
    favorites: [""],
  },
  {
    name: "Parcels",
    username: "Parcels",
    password: "Parcels",
    occupation: "Singer/Songwriter",
    description:
      "Parcels are an Australian electropop five-piece formed in Byron Bay in 2014, now based in Berlin, Germany. The band's line-up is composed of keyboardist Louie Swain, keyboardist/guitarist Patrick Hetherington, bassist Noah Hill, drummer Anatole 'Toto' Serret, and guitarist Jules Crommelin. Signed to French label Kitsuné, the band raised their profile after collaborating with the electronic duo Daft Punk on the production and writing of their 2017 Overnight.",
    imageUrl:
      "https://images.squarespace-cdn.com/content/5456b497e4b0750e1090c8d9/1510770065639-DVVHYNLBJ3UMC8720ZDZ/parcels.jpg?content-type=image%2Fjpeg",
    contactInfo: ["Parcels@Parcels.com", "+34623454888"],
    pastWork: ["Live Vol. 1", "Parcels", "Kitsuné Maison Compilation 18: The Hysterical Advisory Issue", "..."],
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
