import { ImageSourcePropType } from "react-native";

export interface QuizzData {
  image: ImageSourcePropType | string;
  ques: string;
  choose: string[];
  ans: number;
}

export const quizzData: { [key: string]: QuizzData[] } = {
  easy: [
    {
      image: "https://ss-images.saostar.vn/pc/1610351799069/mat-troi-5.jpg",
      ques: "What percentage of the solarsytem's mass is from the sun",
      choose: ["99,86%", "50%", "75%"],
      ans: 0,
    },
    {
      image:
        "https://prima.vn/wp-content/uploads/2022/06/imager_3_1983_700-1050x600.jpg",
      ques: "How long does it take for light to travel from the sun to earth",
      choose: ["8 minutes 20 seconds", "1 hour", "24 hours"],
      ans: 0,
    },
    {
      image:
        "https://lytuong.net/wp-content/uploads/2021/06/kuiperbelt_1.en.png",
      ques: "The asteriod belt is in between the orbit of which planets",
      choose: [
        "Venus and Earth",
        "Mars and Jupiter",
        "Saturn and Uranus",
      ],
      ans: 1,
    },
    {
      image: "https://cdn.mos.cms.futurecdn.net/KLXJHZX37JfEjgsppM2qmG.jpg",
      ques: "If a comet moving near the sun what will happen to it",
      choose: [
        "It completely melts",
        "It will glow brightly and creats a trail",
        "It will crash into the sun",
      ],
      ans: 1,
    },
    {
      image: "https://cdn.hswstatic.com/gif/kuiper-belt-2.jpg",
      ques: "Where is Kuiper belt and most icy objects located?",
      choose: [
        "Between Mars and Jupiter",
        "Further out from Neptune's orbit",
        "Near the sun",
      ],
      ans: 1,
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkPSQryxd8FiNXzuqjcztfI_anGhmBUax3SA&s",
      ques: "Where is the Oort cloud located relative to our solar system?",
      choose: [
        "Near Earth",
        "Between Jupiter and Saturn",
        "Very far thousands of times the distance from the sun to Neptune",
      ],
      ans: 2,
    },
    {
      image:
        "https://cdn.tuoitre.vn/thumb_w/480/471584752817336320/2024/5/11/bao-mat-troi-nasa-17154216827981186330163.jpg",
      ques: "What is the effect of solar storms to Earth?",
      choose: ["Earthquake", "Aurora", "Floods"],
      ans: 1,
    },
    {
      image:
        "https://cdn.tuoitre.vn/zoom/480_300/2022/12/1/sun-solar-storm-166988437292795854480-crop-166988484134764650087.jpg",
      ques: "What is solar wind?",
      choose: [
        "A type of wind on earth",
        "Stream of charged particles coming from the sun",
        "Wind blowing from another planet",
      ],
      ans: 1,
    },
    {
      image:
        "https://www.mientaysafety.com/Portals/28244/ctv/khoi%20luong%20cac%20hanh%20tinh%20trong%20he%20mat%20troi/khoi%20luong%20cac%20hanh%20tinh%20trong%20he%20mat%20troi%201.jpg",
      ques: "Which planet's gravitational pull helps protect earth from comets and asteriods",
      choose: ["Venus", "Jupiter", "Mercury"],
      ans: 1,
    },
    {
      image: "https://img.loigiaihay.com/picture/2022/1004/34.png",
      ques: "Which is the galaxy that contains our solar system?",
      choose: ["Andromeda", "Milky Way", "Triangulum"],
      ans: 1,
    },
  ],
  medium: [
    {
      image: "https://ss-images.saostar.vn/pc/1610351799069/mat-troi-5.jpg",
      ques: "Which process helps the sun transfers its energy throughout the solar system?",
      choose: [
        "Fusion",
        "Fission",
        "Ionization",
      ],
      ans: 0,
    },
    {
      image:
        "https://file1.dangcongsan.vn/data/0/images/2023/05/04/upload_67/gio-va-bao-mat-troi-duoc-tao-ra-nhu-the-nao-1661856775-900x540245.jpg",
      ques: "Solar winds are comprised of which particles?",
      choose: [
        "Electron and proton",
        "Neutron and proton",
        "Electron and neutron",
      ],
      ans: 0,
    },
    {
      image:
        "https://vcdn1-vnexpress.vnecdn.net/2020/06/06/Saochoireal-1591413464-8913-1591413616.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=_A1EX_6p42KWvoCnR1lhIg",
      ques: "Which direction does a comet's tail travel?",
      choose: [
        "In front of the comet",
        "Opposite to the sun's postion",
        "Towards the sun's position",
      ],
      ans: 1,
    },
    {
      image:
        "https://media.techz.vn/media2019/upload2019/2023/11/11/tieu-hanh-tinh_11112023231138.jpg",
      ques: "What is the largest asteroid in the asteroid belt?",
      choose: ["Ceres", "Vesta", "Pallas"],
      ans: 0,
    },
    {
      image:
        "https://vnn-imgs-f.vgcloud.vn/2018/02/02/15/vanh-dai-kuiper-trong-he-ma-t-tro-i-la-gi.jpg",
      ques: "Kuiper belt contains which dwarf planets?",
      choose: ["Pluto and Eris", "Ceres and Vesta", "Ganymede and Titan"],
      ans: 0,
    },
    {
      image:
        "https://media-cdn-v2.laodong.vn/storage/newsportal/2021/6/7/917634/Sao-Choi.jpg",
      ques: "Oort cloud is said to be the origin of many comets with long periods. Is this true or false?",
      choose: ["true", "false"],
      ans: 0,
    },
    {
      image:
        "https://ktmt.vnmediacdn.com/images/2023/10/13/13-1697183030-c-10.jpg",
      ques: "Solar winds can have an affect on which of these gadgets?",
      choose: [
        "Mobile Phone",
        "Sattelites and electric systems",
        "Washing machine",
      ],
      ans: 1,
    },
    {
      image:
        "https://genk.mediacdn.vn/thumb_w/640/2016/solar-system-670x440-130502-1452831803466-crop-1452831817641.jpg",
      ques: "How does the sun's gravitational pull affect planets and other objects?",
      choose: [
        "Keep them in an orbit",
        "Push them further away",
        "Keep them static in place",
      ],
      ans: 0,
    },
    {
      image:
        "https://vcdn1-vnexpress.vnecdn.net/2023/04/14/VNE-Sun-1652-1681470597.jpg?w=460&h=0&q=100&dpr=2&fit=crop&s=JWRreSSmcUXsmvszs1tYcw",
      ques: "How long have the solar system existed since its formation?",
      choose: ["4.6 billion years", "3.6 billion years", "2.6 billion years"],
      ans: 0,
    },
    {
      image:
        "https://www.mientaysafety.com/Portals/28244/ctv/khoi%20luong%20cac%20hanh%20tinh%20trong%20he%20mat%20troi/khoi%20luong%20cac%20hanh%20tinh%20trong%20he%20mat%20troi%201.jpg",
      ques: "What will happen if an asteroid or a comet collides with earth",
      choose: [
        "A massive and resulting an impact hole",
        "Global tempreture rise",
        "Reduces all the mountains' height",
      ],
      ans: 0,
    },
  ],
  hard: [
    {
      image:
        "https://baolamdong.vn/file/e7837c02845ffd04018473e6df282e92/dataimages/202003/original/images2275075_mat_troi.jpg",
      ques: "Where does fission takes place in the sun?",
      choose: ["The chromosphere", "The photosphere", "The core"],
      ans: 2,
    },
    {
      image:
        "https://genk.mediacdn.vn/139269124445442048/2020/4/19/photo-1-15872759931751196891432.jpg",
      ques: "How does solar winds affect the earth's electromagnetic field?",
      choose: [
        "In the form of auroras",
        "Creats and a stronger electromagnetic field",
        "It has no effect",
      ],
      ans: 0,
    },
    {
      image:
        "https://kienthuctonghop.vn/wp-content/uploads/2020/11/y-nghia-cua-sao-choi.jpg",
      ques: "What is the core of a comet made up of?",
      choose: ["Ice, dust and gas", "Rocks and metals", "Only gas"],
      ans: 0,
    },
    {
      image:
        "https://genk.mediacdn.vn/thumb_w/640/2016/solar-system-670x440-130502-1452831803466-crop-1452831817641.jpg",
      ques: "Which planet's gravity is responsible for keeping the asteroid belt in its current position?",
      choose: ["Mars", "Jupiter", "Saturn"],
      ans: 1,
    },
    {
      image:
        "https://cafebiz.cafebizcdn.vn/zoom/700_438/162123310254002176/2022/10/31/avatar1667182128891-16671821290791683767202.jpg",
      ques: "What is the smallest dwarf planet in the Kuiper belt?",
      choose: ["Pluto", "Haumea", "Makemake"],
      ans: 0,
    },
    {
      image: "https://e.khoahoc.tv/photos/image/2017/04/19/he-mat-troi-650.jpg",
      ques: "What is the distance between the sun and the Oort cloud in terms of AU(astronomical units)?",
      choose: ["100-200 AU", "2000-5000 AU", "50.000-100.000 AU"],
      ans: 2,
    },
    {
      image:
        "https://cdn.tuoitre.vn/zoom/700_700/471584752817336320/2024/5/11/bao-mat-troi-nasa-17153970641991331697326-50-0-720-1280-crop-17153970816341769636150.jpg",
      ques: "Highly charged particles from solar winds can have which effect on space?",
      choose: [
        "Deforms earth's electromagnetic field",
        "Create malfunctions in satellites gadgets ",
        "Melts off the ice on a comet",
      ],
      ans: 1,
    },
    {
      image:
        "https://vcdn1-vnexpress.vnecdn.net/2024/07/22/VNE-Planet-2066-1721644561.jpg?w=460&h=0&q=100&dpr=2&fit=crop&s=LPzVM7CeQt0vTY9Fm08JVg",
      ques: "What is the effect of Jupiter's gravity on the small objects in the solar system?",
      choose: [
        "Reduces their orbital speed",
        "Push them into earth's orbit",
        "Protects earth by pulling them in or messing up their trajectory",
      ],
      ans: 3,
    },
    {
      image: "https://coe.edu.vn/wp-content/uploads/2022/05/he-mat-troi-2.jpg",
      ques: "Which phenomenon in the solar system can help determines the chemical composition of planets and other space objects?",
      choose: ["Spectroscopy", "Thermodynamic", "Theory of relativity"],
      ans: 0,
    },
    {
      image:
        "https://skhcn.bacninh.gov.vn/documents/22549/69518/Hanh-tinh-thang-hang-2878-1710840354.jpg/c655ed90-327f-d1b4-1b66-c323a7c69046?t=1711122067305",
      ques: "Which organisation is responsible for finding and conducting research on dwarf planets?",
      choose: [
        "ESA (European Space Agency)",
        "NASA (National Aeronautics and Space Adminstration)",
        "JAXA (Japan Aerospace Exploration Agency)",
      ],
      ans: 1,
    },
  ],
};
