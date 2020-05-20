const mongoose = require("mongoose");
const Plant = require("./../models/plant.js");
require("dotenv").config();

let plants = [
  {
    commonName: "Sea Buckthorn, Seaberry",
    latinName: "Hippophae rhamnoides",
    img: ["https://pfaf.org/Admin/PlantImages/HippophaeRhamnoides.jpg"],
    characteristics: {
      Family: "Elaeagnaceae",
      USDAHardiness: "3-7",
      knownHazards: {
        imgUrl: "https://pfaf.org/user/images/PFAF_searchV1b/hazardsmall.png",
        text:
          "Some reports suggest that the fruit is poisonous[13, 100], whilst it may be very acid it is most definitely not poisonous[65]. Avoid during pregnancy.",
      },
      habitats:
        "Usually found near the coast, often forming thickets on fixed dunes and sea cliffs[9, 17, 244].",
      range:
        "Europe, including Britain, from Norway south and east to Spain and Asia to Japan and the Himalayas.",
      edibilityRating: "(5 of 5)",
      otherUses: "(5 of 5)",
      weedPotential: "No",
      medicinalRating: "(5 of 5)",
      care: {
        imgUrl: [
          "https://pfaf.org/user/images/PFAF_Icon/H4.jpg",
          "https://pfaf.org/user/images/PFAF_Icon/water1.jpg",
          "https://pfaf.org/user/images/PFAF_Icon/water2.jpg",
          "https://pfaf.org/user/images/PFAF_Icon/water3.jpg",
          "https://pfaf.org/user/images/PFAF_Icon/sun.jpg",
        ],
      },
    },
    reviews: [],
    liked: 5,
  },
  {
    commonName: "Stinging Nettle, California nettle",
    latinName: "Urtica dioica",
    img: ["https://pfaf.org/Admin/PlantImages/UrticaDioica.jpg"],
    characteristics: {
      Family: "Urticaceae",
      USDAHardiness: "3-10",
      knownHazards: {
        imgUrl: "https://pfaf.org/user/images/PFAF_searchV1b/hazardsmall.png",
        text:
          "The leaves of the plants have stinging hairs, causing irritation to the skin[21, 200]. This action is neutralized by heat or by thorough drying, so the cooked leaves are perfectly safe and nutritious[200]. However, only young leaves should be used because older leaves develop gritty particles called cystoliths which act as an irritant to the kidneys[172]. Possible interference with allopathic drugs for diabetes mellitus, hypertension. Central nervous system depression drugs (e.g. morphine, alcohol) may also interact with nettle. Avoid during pregnancy [301].",
      },
      habitats:
        "Waste ground, hedgerows, woods etc, preferring a rich soil and avoiding acid soils[4, 9].",
      range:
        "Temperate regions throughout the world, including Britain. The plant has become naturalized at higher elevations in the Tropics.",
      edibilityRating: "(5 of 5)",
      otherUses: "(4 of 5)",
      weedPotential: "Yes",
      medicinalRating: "(5 of 5)",
      care: {
        imgUrl: [
          "https://pfaf.org/user/images/PFAF_Icon/H4.jpg",
          "https://pfaf.org/user/images/PFAF_Icon/water1.jpg",
          "https://pfaf.org/user/images/PFAF_Icon/partsun.jpg",
          "https://pfaf.org/user/images/PFAF_Icon/sun.jpg",
        ],
      },
    },
    reviews: [],
    liked: 9,
  },
  {
    commonName: "Maidenhair Tree, Ginkgo",
    latinName: "Ginkgo biloba",
    img: [
      "https://pfaf.org/Admin/PlantImages/GinkgoBiloba2.jpg",
      "https://pfaf.org/Admin/PlantImages/GinkgoBiloba3.jpg",
    ],
    characteristics: {
      Family: "Ginkgoaceae",
      USDAHardiness: "3-8",
      knownHazards: {
        imgUrl: "https://pfaf.org/user/images/PFAF_searchV1b/hazardsmall.png",
        text:
          "The seed contains a mildly acrimonious principle that is unstable when heated. It is therefore best to cook the seed before eating it to ensure any possible toxicity is destroyed. This acrimonious principle is probably 4'-methoxypyridoxine, which can destroy vitamin B6[237]. It is more toxic for children, but the raw nuts would have to be eaten often over a period of time for the negative effects to become apparent[237]. Avoid if known allergy to Ginkgo or cross-react species (cashew, poison ivy). Not recommended for children. Avoid if on blood thinning medication (e.g. warfarin). Discontinue prior to surgery. Avoid parenteral use as possible hypotension, shock, dizziness. Excessive seed ingestion can cause 'gin-man' food poisoning [301].",
      },
      habitats:
        "Found wild in only 2 localities at Guizhou and on the Anhui/Zhejiang border[200], where it grows on rich sandy soils[147].",
      range: "E. Asia - N. China.",
      edibilityRating: "(5 of 5)",
      otherUses: "(2 of 5)",
      weedPotential: "No",
      medicinalRating: "(5 of 5)",
      care: {
        imgUrl: [
          "https://pfaf.org/user/images/PFAF_Icon/H4.jpg",
          "https://pfaf.org/user/images/PFAF_Icon/water1.jpg",
          "https://pfaf.org/user/images/PFAF_Icon/water2.jpg",
          "https://pfaf.org/user/images/PFAF_Icon/sun.jpg",
        ],
      },
    },
    reviews: [],
    liked: 9,
  },
];

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  // .then((x) => x.connection.dropDatabase())
  .then(() => {
    // 2. CREATE THE DOCUMENT FROM THE OBJ plant
    const createP = Plant.create(plants);
    return createP;
  })
  .then((createdP) => {
    console.log(`Inserted plants: ${createdP}`);
    // 3. CLOSE THE DB CONNECTION

    const closePr = mongoose.connection.close();
    return closePr;
  })
  .then(() => {
    console.log("Closed the DB connection");
  })
  .catch((err) => console.log(err));
