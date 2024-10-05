import { ImageSourcePropType } from "react-native";

export enum EData {
  HEADER_SLIDE,
  COMMON,
  PLANET,
  ALL,
}

export interface IContent {
  title?: string;
  body?: string[];
  image?: string;
}

export interface IData {
  id: string;
  image: ImageSourcePropType | string;
  title: string;
  description: string;
  content: IContent[];
}

export interface IObjectData {
  [key: string]: IData;
}

export const headerSlideData: IObjectData = {
  slide1: {
    id: "slide1",
    image: require("../assets/astronomy/slide1.jpeg"),
    title: "What is the universe?",
    description:
      "The universe is an infinitely large pocket of space - It is vast containing a nearly infinite number of galaxies and in each galaxy with millions of stars with their own systems, planets, and satellites orbiting the planets.",
    content: [
      {
        title: "History and origin:",
        body: [
          "Big Bang: around 13.8 billion years ago there was a massive explosion that marked the begining of the universe this explosion is responsible for creating everything we know as it is, time, space and matter. However this is just a speculation and it is still unclear how our universe came to be.",
        ],
        image:
          "https://cdnphoto.dantri.com.vn/b0WWpuZsz9YTS_gI-Gp7Xet6sBs=/thumb_w/1020/2022/11/30/vutru-crop-1669768098200.jpeg",
      },
      {
        title: "Structure and compositions:",
        body: [
          "Galactic filaments: These are massive systems of interconnected galaxies and group of galaxies to form a long chain spreading across the entire universe ",
          "Galaxies: Galaxies are a collection of stellar objects such as, asteroids, planets, nebulas and stars all held together by their own mass some theories also suggest the existence of dark matter inside galaxies. However this is yet to be proven, the galaxy in which earth reside in is called the Milky Way",
          "Stars and Planets: Stars are formed through large clouds of dust and gas these gas would then go through the process of fusion to generate energy and light. Planets are everything else, they are formed from metals, rocks and dust which cannot undergo fusion",
          "Dark matter and Dark energy: There existence remains a mystery, but Dark matter have been theorized to make up about 26.3% of our universe it is responsible for being additional matter that helps hold galxies together. Dark energy takes up 68.3% of the universe and it have existed since the Big Bang, it is pushing the universe to constantly expand with a speed to be even faster than light.",
        ],
        image:
          "https://imageio.forbes.com/blogs-images/startswithabang/files/2018/02/timeline.jpg?height=481&width=711&fit=bounds",
      },
    ],
  },
  slide2: {
    id: "slide2",
    image:
      "https://wordpress-assets.futurism.com/2014/01/f34b7c2f-63f3-4e4d-8c68-1bff8a13bc401.jpg",
    title: "The light of the universe",
    description:
      "Stars are the lights that help brightens the darkness of space, They're gigantic, take out Sun as an example, it is 109 times bigger than earth. However stars won't always like this. Even giants like these can have their ends",
    content: [
      {
        title: "Stars and time",
        body: [
          "The Beginning: Stars are first forrmed and created from space dust and gas, most likely nebulas",
          "The first stage: These stars are formed and some of them varied with different sizes and it is their sizes that will determine their fate. ",
          "The second stage: After a few hundred million years the star's fusion process would change because of the change in composition causing the star to expand even bigger forming a red giant or a red supergiant relative to its size",
          "The third stage: Eventually these stars would stop its fusion process. The small ones will fade out causing it to only remain a dense and dimly lit star with only the size of a planet called a white dwarf. The massive ones however eventually collapse onto its massive gravity creating a massive stellar explosion called a Super Nova forming either a black hole or a neutron star.",
          "The end of the stars: The process would keep repeating until there is no star left in the universe ",
        ],
      },
      {
        title: "What comes after?",
        body: [
          "White dwarfs: Although it is nowhere near a star it would be the universe's last source of light for the next billions of years after that. They would eventually turn into black dwarfs at the end of their life becoming lost inside the universe's vast space",
          "Blackholes: None really know what it is exactly. The thing that we mostly know about it is that it is a object with a gravitational pull so strong that it can rips matter apart at a subatomic level, and even light itself cannot escape. Blackholes are said to be forever lasting, but recently with the theory of hawking radiation it is theorized that even blackholes have their ends",
          "Neutron stars: These are said to have a incredibly strong gravitational pull even though not as strong as a blackhole, it is stronger than a white dwarf.",
        ],
      },
    ],
  },
  slide3: {
    id: "slide3",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQRfEt8k06tiXvUXxRzP3X2bD5cPKi7FZVtA&s",
    title: "Life in space - an unsolved mystery",
    description:
      "For the longest time. We as human have imagined that out there somewhere exists lifeforms, civilizations just like us on their own planet. However this is still yet to be proven",
    content: [
      {
        title: "Are aliens real?",
        body: [
          "There has been no proven records of aliens, despite many of our attempts and efforts in order to find life in outterspace. Life might be either a very rare phenomenon in this vast universe and we might just be alone.",
          "However we cannot be certain because the universe is an infinitely large space containning a massive number of stars and planets and it could be that life actually exists but we're just not advanced enough in order to find it.",
        ],
      },
      {
        title: "What would life be like outterspace?",
        body: [
          "Hypothesis 1: Most life out there aren't advanced as humans are that is why they cannot be found and there aren't any obvious signs of civilization ",
          "Hypothesis 2: Most life are too advanced they have already traveled outterspace and consider us to be not advance enough to bother. Moreover, they could be too advance which resulted in their own demise.",
        ],
      },
      {
        title: "The future for us",
        body: [
          "Even though under many threats of extinction such as global warming, climate change, war and nuclear weapons. The future for us is still bright given that we take action.",
          "There would come a day humans can become advance enough to travel outterspace and expanding into an intergalactic civilization further lessening threats to the existence to our species.",
          "However if we were to fail expanding into space, we would eventually deplete all the resources on earth and going out as if we never existed in the first place.",
        ],
      },
    ],
  },
};

export const waterArea: any = {
  matbien: {
    image:
      "https://petmojo.com/ocean-surface-sunlight-zone-epipelagic-zone.jpg?id=image-b3da864e8745cb37a7177655020fd0a44f88378e-1200x688-jpg&width=1200&quality=55&fm=webp",
    depth_range: "Từ mặt nước đến khoảng 200 mét",
    temperature: "20°C đến 25°C, thay đổi theo vùng và mùa.",
    light: "Đầy đủ ánh sáng mặt trời, cho phép quang hợp xảy ra",
    pressure: "Tương đối thấp, tăng nhẹ theo độ sâu",
    marine_life: "Cá, sứa, tảo biển, san hô, cá heo, rùa biển",
  },
  bientrung: {
    image:
      "https://schmidtocean.org/wp-content/uploads/FK20429_20200602T055541Z-lights_off-S0365.jpg",
    depth_range: "Từ 200 đến 1,000 mét",
    temperature: "20°C đến 4°C, giảm dần với độ sâu",
    light: "Ánh sáng yếu, không đủ cho quang hợp",
    pressure: "Tăng đáng kể so với tầng epipelagic",
    marine_life: "Cá ánh sáng, mực, sinh vật phát sáng",
  },

  biensau: {
    image:
      "https://beyondtheabyssaldepths.wordpress.com/wp-content/uploads/2018/10/image.jpg?w=800",
    depth_range: "Từ 1,000 đến 4,000 mét",
    temperature: "4°C đến 0°C",
    light: "Không có ánh sáng mặt trời, chỉ có ánh sáng từ sinh vật phát sáng",
    pressure: "Rất cao, tăng mạnh theo độ sâu",
    marine_life: "Cá rồng, sinh vật phát sáng, giáp xác lớn, cá vây chân",
  },

  biensautham: {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTniiA9NC8DwuHSC3DuSwAZ8Dxw95luxiatpg&s",
    depth_range: "Từ 4,000 đến 6,000 mét.",
    temperature: "Thấp, dưới 2°C",
    light: "Không có ánh sáng mặt trời",
    pressure: "Cực kỳ cao",
    marine_life: "Giun ống khổng lồ, sao biển, sinh vật kỵ khí",
  },

  day: {
    image:
      "https://lakeerieimprovement.org/wp-content/uploads/2018/10/knowing-what%E2%80%99s-underneath-10-facts-about-the-hadal-zone-2-1024x576.jpg",
    depth_range: "Trên 6,000 mét, trong các rãnh sâu dưới biển",
    temperature: "Gần với nhiệt độ đóng băng, dưới 2°C",
    light: "Hoàn toàn tối tăm",
    pressure: "Cực kỳ cao, cao nhất trong các tầng biển",
    marine_life:
      "Sinh vật thích nghi với áp suất cao như giáp xác đặc biệt, giun ống, vi khuẩn kỵ khí",
  },
};

export const commonData: IObjectData = {
  "1": {
    id: "1",
    image:
      "https://dienmattroigio.com/wp-content/uploads/2022/11/trai-dat-va-mat-troi.jpg",
    title: "The sun - center of our solar system",
    description:
      "The sun is a star in the center of our solar system. It is responsible for all the energy we get and plays an important role in maintaining all life on earth.",
    content: [
      {
        title: "Properties of the sun",
        body: [
          "The sun is a G type star and is around 150 million kilometers away from earth with a diameter of 1.4 million kilometer. It is made up of mostly hydrogen and helium and only a few heavier elements",
          "The sun's core is where nuclear fusion happens and can be up to 15 million degrees celcius creating massive amounts of energy.",
        ],
      },
      {
        title: "How the sun affects earth",
        body: [
          "The sun plays an important role apart from just emitting light and energy. It can also emmits charged particles in the form of solar winds, when solar winds hit earth's electromagnetic field it creates auroras.",
          "The sun also has it's own magnetic field, this can sometimes have a significant impact on earth's gadgets.",
        ],
      },
      {
        title: "Life cycle of our sun",
        body: [
          "The sun is currently is in its main stage where hydrogen in its core fuses to form helium and energy",
          "Around 5 billion years in the future, the sun will rapidly expand into a red giant engulfing mercury and venus.",
          "Finally given the sun's small size when compared to other stars, it will collapse due to its own gravity and forms a white drawf instead of a black hole of neutron star.",
        ],
      },
      {
        title: "The role of the sun in our solar system",
        body: [
          "The sun is important to every planet in our solar system",
          "It helps keep every planet in its orbit and determines the planet's climate, weather and atmosphere",
        ],
      },
    ],
  },
  "2": {
    id: "2",
    image: "https://static.robocon.com.vn/api/images/20170426/i.jpg",
    title: "Types of planets in oursolar system",
    description:
      "Our solar system contains 8 planets in this order: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune each having its own properties",
    content: [
      {
        title: "Terrestial planets",
        body: [
          "Terrestrial planets are one of the 2 well known types of planets. The teresstrial planets in our solar system are: Mercury, Venus, Earth, Mars",
          "Usually this type of planets are quite small when compared to it's counterparts. There are called terrestrial planets because they have a compact and rocky surface",
          "All of the terrestrial planets in our solar system are located infront of the asteriod beat, nearer to the sun.",
        ],
      },
      {
        title: "Gas giants",
        body: [
          "Gas giants are the counterparts of terrestrial planets. The gas giants in our solar system includes: Jupiter, Saturn, Uranus and Neptune",
          "This type of planet is usually larger than terrestrial planets. They are called gas giants because they're mostly made of swirling gases like helium and hydrogen.",
          "Gas giants are located further from the sun, behind the asteriod belt.",
        ],
      },
      {
        title: "Drawf planet",
        body: [
          "Our solar system used to have a 9th planet called jupiter",
          "However it was stripped of this title and classed as a dwarf planet instead",
          "Dwarf planets are still vague however there are described as not entirely round and not able to clear their orbit of debris",
        ],
      },
    ],
  },
  "4": {
    id: "4",
    image:
      "https://media-cdn-v2.laodong.vn/storage/newsportal/2021/6/7/917634/Sao-Choi.jpg?w=800&h=496&crop=auto&scale=both",
    title: "Oort cloud - the edge of our solar system",
    description:
      "The Oort cloud is located at the edge of our solar system, it contains countless of frozen objects. The Oort cloud helps us understand more about the boundaries of our solar system",
    content: [
      {
        title: "Properties of the Oort cloud",
        body: [
          "Oort is a large area surrounding our solar system starting from around 2000 AU from our sun to around 100000 AU from our sun",
          "This region mostly contains small frozen objects and potential comets",
          "Most objects in the Oort cloud is made up of methane, amonia and organic materials",
        ],
      },
      {
        title: "The importance of the Oort cloud",
        body: [
          "The Oort cloud is the origin of many long period comets that take thousands of years to orbit around the sun",
          "Research about the Oort cloud has helped us better understand our solar system, origin of comets and icy objects in our solar system.",
          "Watching the Oort cloud would give us more insight about the way the our solar system interact with local star's gravity",
        ],
      },
    ],
  },
  "5": {
    id: "5",
    image:
      "https://thoitietso.com/media/2024/01/15/images/hien-tuong-bao-mat-troi-chinh-la-su-xao-tron-trong-ngoai-nhat-khuyen.JPG",
    title: "Solar Storms - An extremly powerful phenonmenon",
    description:
      "Solar storms are massive burst of energy from the sun which can have a negative impact on the earth. That is why we study about it in order to somehow forsee and avoid it.",
    content: [
      {
        title: "What is a solar storm?",
        body: [
          "Solar storm is a phenomenon where the sun emits a solar flare and shoots outward plasma from its Corona.",
          "This can emits a massive amount of charged particles into space which can then impact earth's atmosphere and electromagnetic field.",
          "Solar storm usually occurs around each 11 years.",
        ],
      },
      {
        title: "Origin and formation",
        body: [
          "Solar storms occurs in the most active regions of the sun where the magnetic field is the most complex creating bursts of energy and charge particles.",
          "Solar flare is when there is a high increase in radiation or when the CME shoots plasma into space. These can occur at the same time or on their own and have an effect on to Earth",
          "Các sự kiện này có thể xảy ra đồng thời hoặc riêng lẻ, và đều có thể ảnh hưởng đến Trái Đất.",
        ],
      },
      {
        title: "The importance and applications",
        body: [
          "This is responsible for the phenomenon we call aurora and can cut off any form of communication and gps all around the world",
          "Studying and investigating this phenomenon help us predict and come up with counter measures to protect our communication devices",
        ],
      },
    ],
  },
};
export const planetData: IObjectData = {
  "7": {
    id: "7",
    image:
      "https://cdnphoto.dantri.com.vn/uNW6Vuad4Re3_gWMbtQHfIbP37s=/thumb_w/1020/2023/03/28/mercury-1679964412501.jpg",
    title: "Mercury - closest to the sun",
    description:
      "Mercury is the closest planet the sun with its surface filled with volcanoes and extreme temperature fluctuations, which makes it a fascinating planet to learn about.",
    content: [
      {
        title: "  Characteristics of mercury",
        body: [
          "Mercury has a diameter of around 2,440 kilometers which is slightly bigger than that of earth's. Mercury's surface is full of craters and volcanoes which is similar to that of our moon..",
          "Because of its rough surface, it is speculated to have endure alot of collisions from asteroids and meteroids.",
          "Mercury has a giant core that takes up arpund 75% of its radius.",
        ],
      },
      {
        title: "Day cycle and orbit",
        body: [
          "Mercury takes on an eliptical shape and is 57.9 million kilometers away from the sun",
          "For Mercury to complete a full orbit around the sun it would take 88 earth days",
          "A day on Mercury is equivaslent to 59 earth days, which means Mercury takes 59 days to complete a rotation on its axis",
        ],
      },
      {
        title: "Weather and temperature",
        body: [
          "Because Mercury has a very thin atmosphere, resulting in it not being able to trap in heat making the planet 427 degree celcius in the day and -173 celcius at night",
        ],
      },
    ],
  },
  "8": {
    id: "8",
    image:
      "https://kenh14cdn.com/Images/Uploaded/Share/2010/10/25/2610201002Venus.jpg",
    title: "Venus - The hottest planet",
    description:
      "Venus is the second plante away from the sun with the size nearly equal to Earth. The planet has a very thick atmosphere and having a high surface temperature making it a very mysterious planet.",
    content: [
      {
        title: "Characteristics of venus",
        body: [
          "Venus has a diameter of 12, 104 kilometers only a bit smaller than earth's.",
          "Venus' surface mostly consist of ravines, vocanoes and mountains. It has a very diverse set of terrain.",
          "The surface is mostly made up of silicate and iron similar to that of earth.",
        ],
      },
      {
        title: "Orbit and rotation",
        body: [
          "Venus is around 108,2 million kilometers away from the sun.",
          "A year on venus is equivalent to that of 225 earth days.",
          "Venus can take upto 243 earth days to complete an orbit. It is one of the only planet in our solar system to orbit in the opposite direction to that of the others",
        ],
      },
      {
        title: "Weather and temperature",
        body: [
          "Venus' atmosphere mostly consist of CO2 with atmospheric pressure 92 times that of earth's.",
          "Venus' temperature is the highest amongst all the planets in our solar system even higher than Mercury, this is because of the green house effect.",
          "The planet is completely covered with thick sulfuric clouds making observing the planet from earth challenging.",
        ],
      },
    ],
  },
  "9": {
    id: "9",
    image:
      "https://imagev3.vietnamplus.vn/w1000/Uploaded/2024/rutmbn/2022_08_08/earth.jpg.webp",
    title: "Earth - the planet with life",
    description:
      "Earth is the only known planet in the solar system to have life.",
    content: [
      {
        title: "Earth's characteristics",
        body: [
          "Earth has a diameter of around 12, 747 kilometers and weigh roughly 5.97x10^24 kilograms.",
          "Earth is made of 3 main parts, the crust, the mantle and the core.",
          "The crust is where",
        ],
      },
      {
        title: "Orbit and rotation",
        body: [
          "The earth is around 149.6 million killometers away from the sun and takes around 365.25 days to complete a full orbit",
          "The earth takes 24 hours to complete an orbit around its axis creating the day and night cycle",
          "Earth's axis is tilted 23.5 degrees creating seasons.",
        ],
      },
      {
        title: "Khí Hậu Và Môi Trường",
        body: [
          "Earth's atmosphere is 78% nitrogen, 21% oxygen with the rest being other gases like carbon dioxide",
          "Earth's atmosphere is composed of many layers being the troposphere, stratosphere, mesosphere, thermosphere and lastly exosphere being the outermost.",
          "Water on earth takes up around 71% of its surface in the form of lakes, rivers and oceans",
        ],
      },
      {
        title: "Life on earth",
        body: [
          "Life on earth is very diverse having animals, plants fungi and bacteria.",
          "Earth has many form of biomes being rainforests, dunes, plains, oceans and artic.",
          "Life on Earth is depenent on many factors like water, sunlight, temperature and a balance in nutrients.",
        ],
      },
    ],
  },
  "10": {
    id: "10",
    image:
      "https://thienvanhanoi.org/wp-content/uploads/2017/12/57bc5d831600002900bfdd6e.jpeg",
    title: "Jupiter - The largest planet in our solar system",
    description:
      "Jupiter is the largest plaent in our solar system weighing 2.5 times more than all of the other planets combined. With many moons and satellites it make a fasinating planet.",
    content: [
      {
        title: "Characteristics of Jupiter",
        body: [
          "Jupiter has a radius of arounf 139, 820 kilometers and weighing 1.9x10^27 kilograms.",
          "Jupiter is made up of 90% hydrogen and 10% helium just like our sun.",
          "Jupiter has a small solid core surrounded by layers of liquid hydrogen and gases.",
        ],
      },
      {
        title: "Orbit and rotation",
        body: [
          "Jupiter is around 778 million kilometers away from the sun. A year on jupiter is equvalent to 11.86 years on earth",
          ".",
          "Sao Mộc có tốc độ quay nhanh, tạo ra một hệ thống các đám mây và các dải khí quyển phức tạp.",
        ],
      },
      {
        title: "Khí Hậu Và Thời Tiết",
        body: [
          "Sao Mộc có các đám mây dày đặc và hệ thống bão phức tạp, bao gồm Cơn Bão Lớn Đỏ nổi tiếng, đã tồn tại hàng trăm năm.",
          "Nhiệt độ tại tầng mây trên của Sao Mộc dao động từ -145 độ C, trong khi lõi có thể nóng lên đến khoảng 24.000 độ C.",
          "Sao Mộc phát ra nhiều nhiệt hơn so với lượng nhận từ Mặt Trời, do quá trình co lại và phát nhiệt của hành tinh.",
        ],
      },
      {
        title: "Hệ Thống Vành Đai Và Vệ Tinh",
        body: [
          "Sao Mộc có một hệ thống vành đai mỏng, chủ yếu được cấu tạo từ bụi và các hạt nhỏ.",
          "Sao Mộc có ít nhất 79 vệ tinh được biết đến, trong đó lớn nhất là Ganymede, Callisto, Io và Europa, còn được gọi là các vệ tinh Galilean.",
          "Các vệ tinh Galilean đều có đặc điểm và cấu tạo độc đáo, với Europa có khả năng chứa đại dương nước lỏng dưới lớp băng.",
        ],
      },
      {
        title: "Khám Phá Và Nghiên Cứu",
        body: [
          "Sứ mệnh Galileo của NASA vào những năm 1990 đã cung cấp nhiều thông tin chi tiết về Sao Mộc và các vệ tinh của nó.",
          "Tàu vũ trụ Juno của NASA, hiện đang hoạt động, tiếp tục nghiên cứu Sao Mộc để hiểu rõ hơn về cấu trúc, từ trường và khí quyển của hành tinh.",
          "Các sứ mệnh trong tương lai như Europa Clipper của NASA dự kiến sẽ khám phá các vệ tinh của Sao Mộc để tìm kiếm dấu hiệu của sự sống.",
        ],
      },
    ],
  },
};

export const mixedData = {
  ...commonData,
  ...planetData,
  ...headerSlideData,
};

export const allData = {
  [EData.COMMON]: commonData,
  [EData.PLANET]: planetData,
  [EData.HEADER_SLIDE]: headerSlideData,
  [EData.ALL]: mixedData,
};
