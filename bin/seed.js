const mongoose = require("mongoose");
const Plant = require("./../models/plant.js");
const Review = require("./../models/review.js");
const User = require("./../models/user.js");

require("dotenv").config();

let plants = [
  {
    commonName: "Sea Buckthorn, Seaberry",
    latinName: "Hippophae rhamnoides",
    img: ["https://pfaf.org/Admin/PlantImages/HippophaeRhamnoides.jpg"],
    characteristics: {
      family: "Elaeagnaceae",
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
      family: "Urticaceae",
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
      family: "Ginkgoaceae",
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
  {
    commonName: "Sea Buckthorn, Seaberry",
    latinName: "Hippophae rhamnoides",
    img: ["https://pfaf.org/Admin/PlantImages/HippophaeRhamnoides.jpg"],
    characteristics: {
      family: "Elaeagnaceae",
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
      family: "Urticaceae",
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
      family: "Ginkgoaceae",
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
  {
    commonName: "Sea Buckthorn, Seaberry",
    latinName: "Hippophae rhamnoides",
    img: ["https://pfaf.org/Admin/PlantImages/HippophaeRhamnoides.jpg"],
    characteristics: {
      family: "Elaeagnaceae",
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
      family: "Urticaceae",
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
      family: "Ginkgoaceae",
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
  {
    commonName: "Sea Buckthorn, Seaberry",
    latinName: "Hippophae rhamnoides",
    img: ["https://pfaf.org/Admin/PlantImages/HippophaeRhamnoides.jpg"],
    characteristics: {
      family: "Elaeagnaceae",
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
      family: "Urticaceae",
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
      family: "Ginkgoaceae",
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
  {
    commonName: "Sea Buckthorn, Seaberry",
    latinName: "Hippophae rhamnoides",
    img: ["https://pfaf.org/Admin/PlantImages/HippophaeRhamnoides.jpg"],
    characteristics: {
      family: "Elaeagnaceae",
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
      family: "Urticaceae",
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
      family: "Ginkgoaceae",
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
  {
    commonName: "Sea Buckthorn, Seaberry",
    latinName: "Hippophae rhamnoides",
    img: ["https://pfaf.org/Admin/PlantImages/HippophaeRhamnoides.jpg"],
    characteristics: {
      family: "Elaeagnaceae",
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
      family: "Urticaceae",
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
      family: "Ginkgoaceae",
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
  {
    commonName: "Sea Buckthorn, Seaberry",
    latinName: "Hippophae rhamnoides",
    img: ["https://pfaf.org/Admin/PlantImages/HippophaeRhamnoides.jpg"],
    characteristics: {
      family: "Elaeagnaceae",
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
      family: "Urticaceae",
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
      family: "Ginkgoaceae",
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
  {
    commonName: "Sea Buckthorn, Seaberry",
    latinName: "Hippophae rhamnoides",
    img: ["https://pfaf.org/Admin/PlantImages/HippophaeRhamnoides.jpg"],
    characteristics: {
      family: "Elaeagnaceae",
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
      family: "Urticaceae",
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
      family: "Ginkgoaceae",
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
  {
    commonName: "Sea Buckthorn, Seaberry",
    latinName: "Hippophae rhamnoides",
    img: ["https://pfaf.org/Admin/PlantImages/HippophaeRhamnoides.jpg"],
    characteristics: {
      family: "Elaeagnaceae",
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
      family: "Urticaceae",
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
      family: "Ginkgoaceae",
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
  {
    commonName: "Sea Buckthorn, Seaberry",
    latinName: "Hippophae rhamnoides",
    img: ["https://pfaf.org/Admin/PlantImages/HippophaeRhamnoides.jpg"],
    characteristics: {
      family: "Elaeagnaceae",
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
      family: "Urticaceae",
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
      family: "Ginkgoaceae",
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

const reviews = [];
for (let i = 1; i < 15; i++) {
  reviews.push({
    title: `Aplantida review simulation ${i}`,
    text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto incidunt error perspiciatis obcaecati accusamus hic a quam! Accusamus dicta ad praesentium nam consequuntur optio architecto ea, perferendis ipsum, cum tempore.`,
    user: 382799182348,
    plant: 181023479124,
    likes: parseInt(Math.random() * 144 * 9),
    stars: parseInt(Math.random() * 144 * 9),
  });
}

const users = [
  {
    email: "skanndar@gmail.com",
    password: "$2b$10$tj5TMTL0MSMa2HHwEVfd5.KHp9H881G8wGWwhTXD6P.Dmjb7x87yW",
    fName: "Alex",
    lName: "Abbas",
    image: "",
    genre: "male",
    reviews: [],
    favorites: [],
  },
  {
    email: "a@a.com",
    password: "$2b$10$tj5TMTL0MSMa2HHwEVfd5.KHp9H881G8wGWwhTXD6P.Dmjb7x87yW",
    fName: "Alaaa",
    lName: "juagbar",
    image: "",
    genre: "male",
    reviews: [],
    favorites: [],
  },
];
const titles = ["Super good", "Loved it", "Just ok!"];

// I want to have reviews pointing to ONE users and ONE plants,(1-n)
// Users pointing to MANY reviews and MANY plants (but not all if possible) (n-m)
// Plants pointing to MANY reviews (1-n)

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((x) => x.connection.dropDatabase())
  .then(async () => {
    // 1. CREATE PLANTS AND USERS
    const createdPlants = await Plant.create(plants);
    const createdUsers = await User.create(users);

    console.log(`Inserted reviews,: ${createdPlants.length}`);
    console.log(`Inserted user,: ${createdUsers.length}`);

    // CREATE REVIEWS MATRIX WITH PLANT AND USER ID'S
    const reviewsMatrix = createdPlants.map((plant, plantIndex) => {
      return createdUsers.map((user, userIndex) => ({
        title: titles[Math.floor(Math.random() * 3)],
        text: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto incidunt error perspiciatis obcaecati accusamus hic a quam! Accusamus dicta ad praesentium nam consequuntur optio architecto ea, perferendis ipsum, cum tempore.`,
        user: user._id,
        plant: plant._id,
        likes: parseInt(Math.random() * 144 * 9),
        stars: parseInt(Math.random() * 144 * 9),
      }));
    });

    console.log("reviewsMatrix :>> ", reviewsMatrix.length);
    // FLATEN THE MATRIX
    const reviews = reviewsMatrix.flat();
    console.log("reviews after .flat():>> ", reviews.length);

    // 1. CREATE REVIEWS
    const createdReviews = await Review.create(reviews);

    const updatedUsers = createdUsers;
    const updatedPlants = createdPlants;
    // Update users and plants and add the ids of the newly created reviews
    // createdReviews.forEach((review) => {
    //   updatedUsers[review.userIndex].reviews.push(review._id);
    //   updatedPlants[review.plantIndex].reviews.push(review._id);
    // });

    const usersDict = {};
    const plantsDict = {};

    createdReviews.forEach((review) => {
      if (usersDict[review.user]) usersDict[review.user].push(review._id);
      else usersDict[review.user] = [review._id];

      if (plantsDict[review.plant]) plantsDict[review.plant].push(review._id);
      else plantsDict[review.plant] = [review._id];
    });

    console.log("usersDict :>> ", usersDict);
    console.log("plantsDict :>> ", plantsDict);

    await Promise.all(
      Object.keys(usersDict).map((userId) =>
        User.findByIdAndUpdate(userId, { $set: { reviews: usersDict[userId] } })
      )
    );
    console.log(`Updated ${updatedUsers.length} user documents with reviews.`);

    await Promise.all(
      Object.keys(plantsDict).map((plantId) =>
        Plant.findByIdAndUpdate(plantId, {
          $set: { reviews: plantsDict[plantId] },
        })
      )
    );
    console.log(
      `Updated ${updatedPlants.length} plant documents with reviews.`
    );
    let counter = 0;
    const plantIds = createdPlants.map((plant) => plant._id);

    await Promise.all(
      Object.keys(usersDict).map((userId) => {
        const start = counter % 30;
        const end = start + 5;
        const someFavorites = plantIds.slice(start, end);
        counter += 5;
        return User.findByIdAndUpdate(userId, {s
          $set: { favorites: someFavorites },
        });
      })
    );

    return;
  })
  .then(() => {
    console.log("Closed the DB connection");
  })
  .catch((err) => console.log(err));
