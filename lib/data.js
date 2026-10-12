export const PHONE = "+91 9712448793";
export const TEL = "tel:+919712448793";
export const WA = (msg = "Hi Jaguar Sound, I want to book a DJ for my event.") =>
  `https://wa.me/919712448793?text=${encodeURIComponent(msg)}`;
export const GOGGLEMAPLOCATION = "https://share.google/tMGCmlqcCeZR0SFpt";
export const INSTAGRAM = "https://www.instagram.com/jaguar_sound_official";
export const YOUTUBE = "https://www.youtube.com/@jaguar_sound_official"; // TODO: your real channel
export const FACEBOOK = "https://facebook.com/JaguarSoundOfficial"; // TODO: your real page

// export const nav = [["Home", "#top"], ["About", "#about"], ["Services", "#services"], ["Gallery", "#gallery"], ["Setup", "#setup"], ["Team", "#team"], ["Contact", "#book"]];
export const nav = [
  { title: "Home", href: "/", hash: "#top" },
  { title: "About", href: "/about", hash: "#about"},
  { title: "Services", href: "/services", hash: "#services"},
  { title: "Gallery", href: "/gallery", hash: "#gallery"},
  { title: "Setup", href: "/setup", hash: "#setup"},
  { title: "Team", href: "/team", hash: "#team"},
  { title: "Contact", href: "/book-most-powerful-sound-of-gujarat", hash: "#book"},
];

export const services = [
  { title: "Wedding DJ", text: "Complete DJ setup and professional sound for weddings", img: "https://res.cloudinary.com/yfuevo3k/image/upload/v1791196028/SaveClip.App_673141694_18064136681690675_5007639593453852908_n.jpg", icon: "Heart" },
  { title: "Garba / Dandiya", text: "High energy music for Garba and Dandiya raas", img: "https://res.cloudinary.com/yfuevo3k/image/upload/v1791196026/SaveClip.App_687570005_17870199690655521_8927604547988906608_n.jpg", icon: "Music" },
  { title: "Varghodo / Baraat", text: "Dynamic DJ setup for Varghodo and Baraat celebrations", img: "https://res.cloudinary.com/yfuevo3k/image/upload/v1791196023/SaveClip.App_681233558_17868083094655521_3750619150064502134_n.jpg", icon: "Truck" },
  { title: "Birthday DJ", text: "Fun and energetic DJ service for birthday parties", img: "https://res.cloudinary.com/yfuevo3k/image/upload/v1791195980/SaveClip.App_617870871_17953033566060365_6509962429281107189_n.jpg", icon: "Cake" },
  { title: "Reception DJ", text: "Professional DJ for receptions and private events", img: "https://res.cloudinary.com/yfuevo3k/image/upload/v1791196020/SaveClip.App_681294251_17868083139655521_3877492657038637965_n.jpg", icon: "Wine" },
  { title: "Special Events", text: "Sound and lighting for all types of events", img: "https://res.cloudinary.com/yfuevo3k/image/upload/v1791195981/SaveClip.App_618804936_17934483609153755_6080806751507507554_n.jpg", icon: "Sparkles" },
];

export const setup = [
  { title: "Sound System", icon: "Speaker", items: ["High power speakers (2000W+)", "Professional amplifiers", "Deep bass & clear sound", "Suitable for large events"] },
  { title: "Lighting & Effects", icon: "Lightbulb", items: ["Moving head lights", "Par lights & lasers", "Fog / smoke machine", "Attractive stage effects"] },
  { title: "DJ Console", icon: "Headphones", items: ["Professional DJ console", "Latest music collection", "Timli, Bollywood, EDM & more", "Custom song requests"] },
  { title: "Mobile Setup", icon: "Truck", items: ["Complete mobile setup", "Quick installation", "Suitable for indoor & outdoor", "Pan Gujarat service"] },
];

// export const gallery = [
//   ["Setup", 1], ["Garba", 2], ["Timli", 3], ["Setup", 4], ["Wedding", 5],
//   ["Setup", 6], ["Garba", 7], ["Wedding", 8], ["Setup", 9], ["Timli", 10],
// ].map(([cat, n]) => ({ cat, src: `/gallery/${n}.jpg`, alt: `Jaguar Sound ${cat} event ${n}` }));


// Your Cloudinary photos. Change the category ("Wedding" | "Garba" | "Timli" | "Setup") to match each photo.
const CLD = "https://res.cloudinary.com/yfuevo3k/image/upload";
const photos = [
  ["Setup", "v1791195995/SaveClip.App_619299722_17850116073655521_8314107054052447805_n.jpg"],
  ["Garba", "v1791195996/SaveClip.App_623450242_18093401423474451_5000301868629149331_n.jpg"],
  ["Timli", "v1791195813/SaveClip.App_684757559_17870502183655521_3677341621419839777_n.jpg"],
  ["Setup", "v1791196030/SaveClip.App_691234004_17870199681655521_4694172635844601085_n.jpg"],
  ["Wedding", "v1791196028/SaveClip.App_673141694_18064136681690675_5007639593453852908_n.jpg"],
  ["Setup", "v1791196027/SaveClip.App_686100603_17907712308404026_1244862677320502219_n.jpg"],
  ["Garba", "v1791196026/SaveClip.App_683606319_17906268306404026_4233431456352040299_n.jpg"],
  ["Wedding", "v1791196026/SaveClip.App_687570005_17870199690655521_8927604547988906608_n.jpg"],
  ["Setup", "v1791196025/SaveClip.App_674436089_18064136729690675_6630271071880744013_n.jpg"],
  ["Timli", "v1791196023/SaveClip.App_681233558_17868083094655521_3750619150064502134_n.jpg"],
  ["Setup", "v1791196023/SaveClip.App_687339251_17907712326404026_1462515821838687965_n.jpg"],
  ["Setup", "v1791196022/SaveClip.App_673117007_17868083103655521_8027920634714825964_n.jpg"],
  ["Wedding", "v1791196021/SaveClip.App_683645157_17868083112655521_3211783222275623318_n.jpg"],
  ["Garba", "v1791196021/SaveClip.App_673878790_17867669328655521_1002527444675830164_n.jpg"],
  ["Timli", "v1791196020/SaveClip.App_673879373_17868083130655521_6995606227269505863_n.jpg"],
  ["Setup", "v1791196020/SaveClip.App_681294251_17868083139655521_3877492657038637965_n.jpg"],
  ["Wedding", "v1791196020/SaveClip.App_681923929_17868083121655521_4174833639632238501_n.jpg"],
  ["Garba", "v1791196019/SaveClip.App_673907121_17867669352655521_2341473952276473822_n.jpg"],
  ["Timli", "v1791196018/SaveClip.App_675335872_18064136696690675_7430864506592619649_n.jpg"],
  ["Setup", "v1791196017/SaveClip.App_658220689_18064136672690675_8747508215751474565_n.jpg"],
  ["Wedding", "v1791196017/SaveClip.App_658299646_18064136654690675_2391553809172607574_n.jpg"],
  ["Garba", "v1791196017/SaveClip.App_673124237_17867669364655521_5055120699708586838_n.jpg"],
  ["Timli", "v1791196013/SaveClip.App_672533658_18064136741690675_4600457524495860372_n.jpg"],
  ["Setup", "v1791196011/SaveClip.App_670486450_17865126897672199_5693820349822030679_n.jpg"],
  ["Wedding", "v1791196011/SaveClip.App_656837597_17861963898655521_2801551055315757218_n.jpg"],
  ["Garba", "v1791196010/SaveClip.App_658385258_17867335770655521_4080794736330493580_n.jpg"],
  ["Timli", "v1791196010/SaveClip.App_671079963_17865126888672199_5580130969994652837_n.jpg"],
  ["Setup", "v1791196010/SaveClip.App_670838208_17865126879672199_1328881870072183579_n.jpg"],
  ["Wedding", "v1791196008/SaveClip.App_657275617_17862447471655521_2445556348157468889_n.jpg"],
  ["Garba", "v1791196007/SaveClip.App_662306644_17863431996672199_6460566209232369410_n.jpg"],
  ["Timli", "v1791196007/SaveClip.App_656541272_17862447462655521_1988684696587878767_n.jpg"],
  ["Setup", "v1791196007/SaveClip.App_658845469_17862447480655521_5067707583901491968_n.jpg"],
  ["Wedding", "v1791196006/SaveClip.App_670288761_17863432005672199_1867617382417333257_n.jpg"],
  ["Garba", "v1791196006/SaveClip.App_658530911_17861963976655521_9021153508585792892_n.jpg"],
  ["Timli", "v1791196004/SaveClip.App_656435926_17862447459655521_7977047126949048570_n.jpg"],
  ["Setup", "v1791196003/SaveClip.App_656884479_17861963985655521_4320495257576556851_n.jpg"],
  ["Wedding", "v1791196003/SaveClip.App_657330028_17861779332655521_8116279364900726923_n.jpg"],
  ["Garba", "v1791196003/SaveClip.App_652772174_17899428699404026_5449380269416850681_n.jpg"],
  ["Timli", "v1791196002/SaveClip.App_656837936_17861779323655521_8018803608233850485_n.jpg"],
  ["Setup", "v1791196001/SaveClip.App_652858251_17899429092404026_6262416760416873041_n.jpg"],
  ["Wedding", "v1791196000/SaveClip.App_650846091_17898780510404026_660203723522164259_n.jpg"],
  ["Garba", "v1791195999/SaveClip.App_649612891_17898780519404026_620714083857966927_n.jpg"],
  ["Timli", "v1791195999/SaveClip.App_652773159_17899429071404026_3366334311875304963_n.jpg"],
  ["Setup", "v1791195999/SaveClip.App_652757512_17899428960404026_5411847990781390570_n.jpg"],
  ["Wedding", "v1791195998/SaveClip.App_651894286_17899428906404026_5623047472560852768_n.jpg"],
  ["Garba", "v1791195996/SaveClip.App_649982267_17898780528404026_9023342221159298503_n.jpg"],
  ["Timli", "v1791195996/SaveClip.App_649882565_17898780546404026_7339742359778002697_n.jpg"],
  ["Setup", "v1791195995/SaveClip.App_650511814_18097628750474451_4918184613098032081_n.jpg"],
  ["Wedding", "v1791195994/SaveClip.App_618916403_17850116082655521_6365992599745952206_n.jpg"],
  ["Garba", "v1791195994/SaveClip.App_622873817_18071320907411808_4725456309606383843_n.jpg"],
  ["Timli", "v1791195992/SaveClip.App_619168969_17850116127655521_176930902676931894_n.jpg"],
  ["Setup", "v1791195991/SaveClip.App_619902540_17850116091655521_9144435501745065874_n.jpg"],
  ["Wedding", "v1791195990/SaveClip.App_619232096_17850116106655521_7821113001459999258_n.jpg"],
  ["Garba", "v1791195990/SaveClip.App_619259587_17850116172655521_7333911667047744323_n.jpg"],
  ["Timli", "v1791195990/SaveClip.App_619249045_17850116145655521_4075856252244382484_n.jpg"],
  ["Setup", "v1791195990/SaveClip.App_619222496_17850116181655521_3270494420903304994_n.jpg"],
  ["Wedding", "v1791195990/SaveClip.App_618911842_17850116136655521_2469014839992909002_n.jpg"],
  ["Garba", "v1791195987/SaveClip.App_619223737_17850116214655521_6489393457371248238_n.jpg"],
  ["Timli", "v1791195986/SaveClip.App_619075020_17850116205655521_1843280459887150034_n.jpg"],
  ["Setup", "v1791195986/SaveClip.App_618986164_17850116268655521_355543654407266980_n.jpg"],
  ["Wedding", "v1791195986/SaveClip.App_619202164_17850116223655521_6782896349641569914_n.jpg"],
  ["Garba", "v1791195986/SaveClip.App_619490267_17850116232655521_4136056561121636676_n.jpg"],
  ["Timli", "v1791195986/SaveClip.App_619665209_17850116241655521_300899908935301696_n.jpg"],
  ["Setup", "v1791195986/SaveClip.App_619259587_17850116190655521_6480091397537091080_n.jpg"],
  ["Wedding", "v1791195985/SaveClip.App_619361306_17850116259655521_7545359705523124781_n.jpg"],
  ["Garba", "v1791195984/SaveClip.App_616110799_17953033530060365_7598805766673720908_n.jpg"],
  ["Timli", "v1791195982/SaveClip.App_619660826_17850116277655521_2953517539710366667_n.jpg"],
  ["Setup", "v1791195982/SaveClip.App_613586357_17953033539060365_4334231826614295432_n.jpg"],
  ["Wedding", "v1791195982/SaveClip.App_618694248_17850116250655521_6470251396789946038_n.jpg"],
  ["Garba", "v1791195982/SaveClip.App_618981878_17934483624153755_7644594006511846599_n.jpg"],
  ["Timli", "v1791195981/SaveClip.App_616251842_17953033575060365_6130838128876284594_n.jpg"],
  ["Setup", "v1791195981/SaveClip.App_618804936_17934483609153755_6080806751507507554_n.jpg"],
  ["Wedding", "v1791195980/SaveClip.App_617870871_17953033566060365_6509962429281107189_n.jpg"],
  ["Garba", "v1791195980/SaveClip.App_616423759_17953033557060365_8976488531677961292_n.jpg"],
  ["Timli", "v1791195980/SaveClip.App_618063877_17953033548060365_7430061639396210381_n.jpg"],
  ["Setup", "v1791195979/SaveClip.App_610219638_18071855186568842_4141427555890555104_n.jpg"],
];

// thumb = small, auto-optimised version for the grid; src = larger version for the full-screen viewer
export const gallery = photos.map(([cat, path], i) => ({
  cat,
  thumb: `${CLD}/f_auto,q_auto,w_700/${path}`,
  src: `${CLD}/f_auto,q_auto,w_1600/${path}`,
  alt: `Jaguar Sound ${cat} event ${i + 1}`,
}));


export const team = [
  { name: "Ankit (Dreamchaser)", role: "Lead DJ & Founder", img: "/team/ankit.jpeg", social: ["ig", "yt"] },
  { name: "Hemu Jaguar Sound", role: "Operations Manager", img: "/team/hemu.jpeg", social: ["yt"] },
  { name: "Kuldip", role: "Sound Master", img: "/team/kuldip.png", social: ["ig"] },
];

export const teamStats = [
  { n: "100+", l: "Events Completed", icon: "Star" },
  { n: "3+", l: "Years Experience", icon: "Users" },
  { n: "1", l: "Goal - Best Sound in Gujarat", icon: "Trophy" },
];

export const partners = [
  { name: "Todfod DJ", img: "/team/pakabhai.jpeg" },
  { name: "Dilip Vasava", img: "/team/dilipbhai.jpeg" },
  { name: "RA Cabinet", img: "/team/ra_cabinet.jpg" },
];

export const reviews = [
  { title: "Amazing sound quality!", text: "Jaguar Sound made our wedding unforgettable. The bass and lighting was next level!", who: "Patel Family", event: "Wedding Event" },
  { title: "Best DJ in Dahod!", text: "Timli mix was awesome. Crowd loved it. Highly recommended for any event.", who: "Rohit Baria", event: "Timli Event" },
  { title: "Professional team", text: "Setup, sound and management was very professional. Will book again!", who: "Mehta Events", event: "Garba Event" },
];
