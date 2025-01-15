import React, { useState, useEffect, useRef } from "react";
import "../assets/styles/Home.css";
import arrow from "../assets/images/arrow.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Elizabeth from "../assets/images/models/Elizabeth/Elizabeth1.png";
import Elizabeth2 from "../assets/images/models/Elizabeth/Elizabeth2.png";
import Elizabeth3 from "../assets/images/models/Elizabeth/Elizabeth3.png";
import Elizabeth4 from "../assets/images/models/Elizabeth/Elizabeth4.png";
import Elizabeth5 from "../assets/images/models/Elizabeth/Elizabeth5.png";
import Elizabeth6 from "../assets/images/models/Elizabeth/Elizabeth6.png";
import Elizabethv1 from "../assets/images/models/Elizabeth/ElizabethVideo.mp4";
import Elizabethv2 from "../assets/images/models/Elizabeth/ElizabethVideo2.mp4";
import Valeria from "../assets/images/models/Valeria/Valeria.png";
import Valeria2 from "../assets/images/models/Valeria/Valeria2.png";
import Valeria3 from "../assets/images/models/Valeria/Valeria3.png";
import Valeria4 from "../assets/images/models/Valeria/Valeria4.png";
import Valeria5 from "../assets/images/models/Valeria/Valeria5.png";
import Valeria6 from "../assets/images/models/Valeria/Valeria6.png";
import Valeriav1 from "../assets/images/models/Valeria/ValeriaVideo.mp4";
import Gabby from "../assets/images/models/Gabby/Gabby.png";
import Gabby2 from "../assets/images/models/Gabby/Gabby2.png";
import Gabby3 from "../assets/images/models/Gabby/Gabby3.png";
import Gabby4 from "../assets/images/models/Gabby/Gabby4.png";
import Gabby5 from "../assets/images/models/Gabby/Gabby5.png";
import Gabby6 from "../assets/images/models/Gabby/Gabby6.png";
import Gabbyv1 from "../assets/images/models/Gabby/GabbyVideo.mp4";
import Avery from "../assets/images/models/Avery/Avery.png";
import Avery2 from "../assets/images/models/Avery/Avery2.png";
import Avery3 from "../assets/images/models/Avery/Avery3.png";
import Avery4 from "../assets/images/models/Avery/Avery4.png";
import Avery5 from "../assets/images/models/Avery/Avery7.png";
import Avery6 from "../assets/images/models/Avery/Avery6.png";
import Averyv1 from "../assets/images/models/Avery/AveryVideo.mp4";
import Alma from "../assets/images/models/Alma/Alma1.png";
import Alma2 from "../assets/images/models/Alma/Alma2.png";
import Alma3 from "../assets/images/models/Alma/Alma3.png";
import Alma4 from "../assets/images/models/Alma/Alma4.png";
import Alma5 from "../assets/images/models/Alma/Alma5.png";
import Alma6 from "../assets/images/models/Alma/Alma6.png";
import LuciaAnne from "../assets/images/models/Lucia-Anne/Lucia-Anne.png";
import LuciaAnne2 from "../assets/images/models/Lucia-Anne/Lucia-Anne2.png";
import LuciaAnne3 from "../assets/images/models/Lucia-Anne/Lucia-Anne3.png";
import LuciaAnne4 from "../assets/images/models/Lucia-Anne/Lucia-Anne4.png";
import LuciaAnne5 from "../assets/images/models/Lucia-Anne/Lucia-Anne5.png";
import LuciaAnne6 from "../assets/images/models/Lucia-Anne/Lucia-Anne6.png";
import LuciaAnnev1 from "../assets/images/models/Lucia-Anne/Lucia-AnneVideo.mp4";
import Devon from "../assets/images/models/Devon/Devon.png";
import Devon2 from "../assets/images/models/Devon/Devon2.png";
import Devon3 from "../assets/images/models/Devon/Devon3.png";
import Devon4 from "../assets/images/models/Devon/Devon4.png";
import Devon5 from "../assets/images/models/Devon/Devon5.png";
import Devon6 from "../assets/images/models/Devon/Devon6.png";
import Devonv1 from "../assets/images/models/Devon/DevonVideo.mp4";
import Reese from "../assets/images/models/Reese/Reese.png";
import Reese2 from "../assets/images/models/Reese/Reese2.png";
import Reese3 from "../assets/images/models/Reese/Reese3.png";
import Reese4 from "../assets/images/models/Reese/Reese4.png";
import Reese5 from "../assets/images/models/Reese/Reese5.png";
import Reese6 from "../assets/images/models/Reese/Reese6.png";
import Reesev1 from "../assets/images/models/Reese/ReeseVideo.mp4";
import Lindsey from "../assets/images/models/Lindsey/Lindsey.png";
import Lindsey2 from "../assets/images/models/Lindsey/Lindsey2.png";
import Lindsey3 from "../assets/images/models/Lindsey/Lindsey3.png";
import Lindsey4 from "../assets/images/models/Lindsey/Lindsey4.png";
import Lindsey5 from "../assets/images/models/Lindsey/Lindsey5.png";
import Lindsey6 from "../assets/images/models/Lindsey/Lindsey6.png";
import Debra from "../assets/images/models/Debra/Debra.png";
import Debra2 from "../assets/images/models/Debra/Debra2.png";
import Debra3 from "../assets/images/models/Debra/Debra3.png";
import Debra4 from "../assets/images/models/Debra/Debra4.png";
import Debrav1 from "../assets/images/models/Debra/DebraVideo.mp4";
import Tessa from "../assets/images/models/Tessa/Tessa.png";
import Tessa2 from "../assets/images/models/Tessa/Tessa2.png";
import Tessa3 from "../assets/images/models/Tessa/Tessa3.png";
import Tessa4 from "../assets/images/models/Tessa/Tessa4.png";
import Tessa5 from "../assets/images/models/Tessa/Tessa5.png";
import Tessa6 from "../assets/images/models/Tessa/Tessa6.png";
import Tessav1 from "../assets/images/models/Tessa/TessaVideo1.mp4";
import Tessav2 from "../assets/images/models/Tessa/TessaVideo2.mp4";
import Tessav3 from "../assets/images/models/Tessa/TessaVideo3.mp4";
import Charlie from "../assets/images/models/Charlie/Charlie.png";
import Charlie2 from "../assets/images/models/Charlie/Charlie2.png";
import Charlie3 from "../assets/images/models/Charlie/Charlie3.png";
import Charlie4 from "../assets/images/models/Charlie/Charlie4.png";
import Charlie5 from "../assets/images/models/Charlie/Charlie5.png";
import Charlie6 from "../assets/images/models/Charlie/Charlie6.png";
import Charliev1 from "../assets/images/models/Charlie/CharlieVideo.mp4";
import Ellie from "../assets/images/models/Ellie/Ellie.png";
import Ellie2 from "../assets/images/models/Ellie/Ellie2.png";
import Ellie3 from "../assets/images/models/Ellie/Ellie3.png";
import Ellie4 from "../assets/images/models/Ellie/Ellie4.png";
import Ellie5 from "../assets/images/models/Ellie/Ellie5.png";
import Ellie6 from "../assets/images/models/Ellie/Ellie6.png";
import Elliev1 from "../assets/images/models/Ellie/EllieVideo.mp4";
import Kelly from "../assets/images/models/Kelly/Kelly.png";
import Kelly2 from "../assets/images/models/Kelly/Kelly2.png";
import Kelly3 from "../assets/images/models/Kelly/Kelly3.png";
import Kelly4 from "../assets/images/models/Kelly/Kelly4.png";
import Kelly5 from "../assets/images/models/Kelly/Kelly5.png";
import Kelly6 from "../assets/images/models/Kelly/Kelly6.png";
import Beauty from "../assets/images/models/Beauty/Beauty.png";
import Beauty2 from "../assets/images/models/Beauty/Beauty2.png";
import Beauty3 from "../assets/images/models/Beauty/Beauty3.png";
import Beauty4 from "../assets/images/models/Beauty/Beauty4.png";
import Beauty5 from "../assets/images/models/Beauty/Beauty5.png";
import Beauty6 from "../assets/images/models/Beauty/Beauty6.png";
import Beautyv1 from "../assets/images/models/Beauty/BeautyVideo.mp4";
import Hailey from "../assets/images/models/Hailey/Hailey.png";
import Hailey2 from "../assets/images/models/Hailey/Hailey2.png";
import Hailey3 from "../assets/images/models/Hailey/Hailey3.png";
import Hailey4 from "../assets/images/models/Hailey/Hailey4.png";
import Hailey5 from "../assets/images/models/Hailey/Hailey5.png";
import Hailey6 from "../assets/images/models/Hailey/Hailey6.png";
import Haileyv1 from "../assets/images/models/Hailey/HaileyVideo.mp4";
import Riley from "../assets/images/models/Riley/Riley.png";
import Riley2 from "../assets/images/models/Riley/Riley2.png";
import Riley3 from "../assets/images/models/Riley/Riley3.png";
import Riley4 from "../assets/images/models/Riley/Riley4.png";
import Riley5 from "../assets/images/models/Riley/Riley5.png";
import Riley6 from "../assets/images/models/Riley/Riley6.png";
import Rileyv1 from "../assets/images/models/Riley/RileyVideo.mp4";
import Rizzo from "../assets/images/models/Rizzo/Rizzo.png";
import Rizzo2 from "../assets/images/models/Rizzo/Rizzo2.png";
import Rizzo3 from "../assets/images/models/Rizzo/Rizzo3.png";
import Rizzo4 from "../assets/images/models/Rizzo/Rizzo4.png";
import Rizzo5 from "../assets/images/models/Rizzo/Rizzo5.png";
import Rizzo6 from "../assets/images/models/Rizzo/Rizzo6.png";
import Rizzov1 from "../assets/images/models/Rizzo/bandicam 2025-01-02 23-06-32-259.mp4";
import Rizzov2 from "../assets/images/models/Rizzo/bandicam 2025-01-02 23-06-49-811.mp4";
import Clary from "../assets/images/models/Clary/Clary.png";
import Clary2 from "../assets/images/models/Clary/Clary2.png";
import Clary3 from "../assets/images/models/Clary/Clary3.png";
import Clary4 from "../assets/images/models/Clary/Clary4.png";
import Clary5 from "../assets/images/models/Clary/Clary5.png";
import Claryv1 from "../assets/images/models/Clary/ClaryVideo1.mp4";
import Claryv2 from "../assets/images/models/Clary/ClaryVideo2.mp4";
import Claryv3 from "../assets/images/models/Clary/ClaryVideo3.mp4";
import Aylin from "../assets/images/models/Aylin/Aylin.png";
import Aylin2 from "../assets/images/models/Aylin/Aylin2.png";
import Aylin3 from "../assets/images/models/Aylin/Aylin3.png";
import Aylin4 from "../assets/images/models/Aylin/Aylin4.png";
import Aylin5 from "../assets/images/models/Aylin/Aylin5.png";
import Aylin6 from "../assets/images/models/Aylin/Aylin6.png";
import Aylinv1 from "../assets/images/models/Aylin/AylinVideo1.mp4";
import Aylinv2 from "../assets/images/models/Aylin/AylinVideo2.mp4";
import Kacie from "../assets/images/models/Kacie/Kacie.png";
import Kacie2 from "../assets/images/models/Kacie/Kacie2.png";
import Kacie3 from "../assets/images/models/Kacie/Kacie3.png";
import Kacie4 from "../assets/images/models/Kacie/Kacie4.png";
import Kacie5 from "../assets/images/models/Kacie/Kacie5.png";
import Kacie6 from "../assets/images/models/Kacie/Kacie6.png";
import Kaciev1 from "../assets/images/models/Kacie/KacieVideo1.mp4";
import Bishop from "../assets/images/models/Bishop/Bishop.png";
import Bishop2 from "../assets/images/models/Bishop/Bishop2.png";
import Bishop3 from "../assets/images/models/Bishop/Bishop3.png";
import Bishop4 from "../assets/images/models/Bishop/Bishop4.png";
import Bishop5 from "../assets/images/models/Bishop/Bishop5.png";
import Bishop6 from "../assets/images/models/Bishop/Bishop6.png";
import Nina from "../assets/images/models/Nina/Nina.png";
import Nina2 from "../assets/images/models/Nina/Nina2.png";
import Nina3 from "../assets/images/models/Nina/Nina3.png";
import Nina4 from "../assets/images/models/Nina/Nina4.png";
import Nina5 from "../assets/images/models/Nina/Nina5.png";
import Ninav1 from "../assets/images/models/Nina/NinaVideo.mp4";
import Francesca from "../assets/images/models/Francesca/Francesca.png";
import Francesca2 from "../assets/images/models/Francesca/Francesca2.png";
import Francesca3 from "../assets/images/models/Francesca/Francesca3.png";
import Francesca4 from "../assets/images/models/Francesca/Francesca4.png";
import Francesca5 from "../assets/images/models/Francesca/Francesca5.png";
import Francesca6 from "../assets/images/models/Francesca/Francesca6.png";
import Marya from "../assets/images/models/Marya/Marya.png";
import Marya2 from "../assets/images/models/Marya/Marya2.png";
import Marya3 from "../assets/images/models/Marya/Marya3.png";
import Marya4 from "../assets/images/models/Marya/Marya4.png";
import Marya5 from "../assets/images/models/Marya/Marya5.png";
import Marya6 from "../assets/images/models/Marya/Marya6.png";
import Maryav1 from "../assets/images/models/Marya/MaryaVideo.mp4";
import Paola from "../assets/images/models/Paola/Paola.png";
import Paola2 from "../assets/images/models/Paola/Paola2.png";
import Paola3 from "../assets/images/models/Paola/Paola3.png";
import Paola4 from "../assets/images/models/Paola/Paola4.png";
import Paola5 from "../assets/images/models/Paola/Paola5.png";
import Paola6 from "../assets/images/models/Paola/Paola6.png";
import Paolav1 from "../assets/images/models/Paola/PaolaVideo.mp4";
import Paolav2 from "../assets/images/models/Paola/PaolaVideo2.mp4";
import Lottie from "../assets/images/models/Lottie/Lottie.png";
import Lottie2 from "../assets/images/models/Lottie/Lottie2.png";
import Lottie3 from "../assets/images/models/Lottie/Lottie3.png";
import Lottie4 from "../assets/images/models/Lottie/Lottie4.png";
import Lottie5 from "../assets/images/models/Lottie/Lottie5.png";
import Lottie6 from "../assets/images/models/Lottie/Lottie6.png";
import Lottiev1 from "../assets/images/models/Lottie/LottieVideo1.mp4";
import Lottiev2 from "../assets/images/models/Lottie/LottieVideo2.mp4";
import Lottiev3 from "../assets/images/models/Lottie/LottieVideo3.mp4";
import Lottiev4 from "../assets/images/models/Lottie/LottieVideo4.mp4";
import Martini from "../assets/images/models/Martini/Martini.png";
import Martini2 from "../assets/images/models/Martini/Martini2.png";
import Martini3 from "../assets/images/models/Martini/Martini3.png";
import Martini4 from "../assets/images/models/Martini/Martini4.png";
import Martini5 from "../assets/images/models/Martini/Martini5.png";
import Bambi from "../assets/images/models/Bambi/Bambi.png";
import Bambi2 from "../assets/images/models/Bambi/Bambi2.png";
import Bambi3 from "../assets/images/models/Bambi/Bambi3.png";
import Bambi4 from "../assets/images/models/Bambi/Bambi4.png";
import Bambi5 from "../assets/images/models/Bambi/Bambi5.png";
import Bambi6 from "../assets/images/models/Bambi/Bambi6.png";
import Winter from "../assets/images/models/Winter/Winter.png";
import Winter2 from "../assets/images/models/Winter/Winter2.png";
import Winter3 from "../assets/images/models/Winter/Winter3.png";
import Winter4 from "../assets/images/models/Winter/Winter4.png";
import Winter5 from "../assets/images/models/Winter/Winter5.png";
import Larisss from "../assets/images/models/Larisss/Larisss.png";
import Larisss2 from "../assets/images/models/Larisss/Larisss2.png";
import Larisss3 from "../assets/images/models/Larisss/Larisss3.png";
import Larisss4 from "../assets/images/models/Larisss/Larisss4.png";
import Larisss5 from "../assets/images/models/Larisss/Larisss5.png";
import Cameo from "../assets/images/models/Cameo/Cameo.png";
import Cameo2 from "../assets/images/models/Cameo/Cameo2.png";
import Cameo3 from "../assets/images/models/Cameo/Cameo3.png";
import Cameo4 from "../assets/images/models/Cameo/Cameo4.png";
import Cameo5 from "../assets/images/models/Cameo/Cameo5.png";
import Cameo6 from "../assets/images/models/Cameo/Cameo6.png";
import Cameov1 from "../assets/images/models/Cameo/CameoVideo1.mp4";
import Cameov2 from "../assets/images/models/Cameo/CameoVideo2.mp4";
import Pamela from "../assets/images/models/Pamela/Pamela1.png";
import Pamela2 from "../assets/images/models/Pamela/Pamela2.png";
import Pamela3 from "../assets/images/models/Pamela/Pamela3.png";
import Pamela4 from "../assets/images/models/Pamela/Pamela4.png";
import Pamela5 from "../assets/images/models/Pamela/Pamela5.png";
import Pamela6 from "../assets/images/models/Pamela/Pamela7.png";
import Pamelav1 from "../assets/images/models/Pamela/PamelaVideo1.mp4";
import Pamelav2 from "../assets/images/models/Pamela/PamelaVideo2.mp4";
import Rosaline from "../assets/images/models/Rosaline/Rosaline.png";
import Rosaline2 from "../assets/images/models/Rosaline/Rosaline2.png";
import Rosaline3 from "../assets/images/models/Rosaline/Rosaline3.png";
import Rosaline4 from "../assets/images/models/Rosaline/Rosaline4.png";
import Rosaline5 from "../assets/images/models/Rosaline/Rosaline5.png";
import Rosaline6 from "../assets/images/models/Rosaline/Rosaline6.png";
import Jennifer from "../assets/images/models/Jennifer/Jennifer.png";
import Jennifer2 from "../assets/images/models/Jennifer/Jennifer2.png";
import Jennifer3 from "../assets/images/models/Jennifer/Jennifer3.png";
import Jennifer4 from "../assets/images/models/Jennifer/Jennifer4.png";
import Jennifer5 from "../assets/images/models/Jennifer/Jennifer5.png";
import Mistress from "../assets/images/models/Mistress Bianca/Bianca1.png";
import Mistress2 from "../assets/images/models/Mistress Bianca/Bianca2.png";
import Mistress3 from "../assets/images/models/Mistress Bianca/Bianca3.png";
import Mistress4 from "../assets/images/models/Mistress Bianca/Bianca4.png";
import Mistressv1 from "../assets/images/models/Mistress Bianca/BiancaVideo1 (1).mp4";
import Mistressv2 from "../assets/images/models/Mistress Bianca/BiancaVideo1 (2).mp4";
import Mistressv3 from "../assets/images/models/Mistress Bianca/BiancaVideo1 (3).mp4";
import MistressC from "../assets/images/models/Mistress Chloe/Chloe.png";
import MistressC2 from "../assets/images/models/Mistress Chloe/Chloe2.png";
import MistressC3 from "../assets/images/models/Mistress Chloe/Chloe3.png";
import MistressC4 from "../assets/images/models/Mistress Chloe/Chloe4.png";
import MistressCv1 from "../assets/images/models/Mistress Chloe/ChloeVideo.mp4";
import MistressR from "../assets/images/models/Mistress Reese/Reese.png";
import MistressR2 from "../assets/images/models/Mistress Reese/Reese2.png";
import MistressR3 from "../assets/images/models/Mistress Reese/Reese3.png";
import MistressR4 from "../assets/images/models/Mistress Reese/Reese4.png";
import MistressRv1 from "../assets/images/models/Mistress Reese/ReeseVideo.mp4";
import MistressE from "../assets/images/models/Mistress Erika/Erika.png";
import MistressE2 from "../assets/images/models/Mistress Erika/Erika2.png";
import MistressE3 from "../assets/images/models/Mistress Erika/Erika3.png";
import MistressE4 from "../assets/images/models/Mistress Erika/Erika4.png";
import MistressE5 from "../assets/images/models/Mistress Erika/Erika5.png";
import MistressE6 from "../assets/images/models/Mistress Erika/Erika6.png";
import MistressEv1 from "../assets/images/models/Mistress Erika/ErikaVideo (1).mp4";
import MistressEv2 from "../assets/images/models/Mistress Erika/ErikaVideo (2).mp4";
import MistressEv3 from "../assets/images/models/Mistress Erika/ErikaVideo (3).mp4";
import MistressEv4 from "../assets/images/models/Mistress Erika/ErikaVideo (4).mp4";
import MistressEv5 from "../assets/images/models/Mistress Erika/ErikaVideo (5).mp4";
import MistressZ from "../assets/images/models/Mistress Zoey/Zoey.png";
import MistressZ2 from "../assets/images/models/Mistress Zoey/Zoey2.png";
import MistressZ3 from "../assets/images/models/Mistress Zoey/Zoey3.png";
import MistressZ4 from "../assets/images/models/Mistress Zoey/Zoey4.png";
import MistressZ5 from "../assets/images/models/Mistress Zoey/Zoey5.png";
import MistressZv1 from "../assets/images/models/Mistress Zoey/ZoeyVideo.mp4";
import MistressB from "../assets/images/models/Mistress Belle/Belle.png";
import MistressB2 from "../assets/images/models/Mistress Belle/Belle2.png";
import MistressB3 from "../assets/images/models/Mistress Belle/Belle3.png";
import MistressB4 from "../assets/images/models/Mistress Belle/Belle4.png";
import MistressBv1 from "../assets/images/models/Mistress Belle/BelleVideo.mp4";
import MistressV from "../assets/images/models/Mistress Villa/Villa.png";
import MistressV2 from "../assets/images/models/Mistress Villa/Villa2.png";
import MistressV3 from "../assets/images/models/Mistress Villa/Villa3.png";
import MistressV4 from "../assets/images/models/Mistress Villa/Villa4.png";
import MistressV5 from "../assets/images/models/Mistress Villa/Villa5.png";
import MistressV6 from "../assets/images/models/Mistress Villa/Villa6.png";
import MistressVv1 from "../assets/images/models/Mistress Villa/VillaVideo.mp4";
import MistressK from "../assets/images/models/Mistress Keyla/Keyla.png";
import MistressK2 from "../assets/images/models/Mistress Keyla/Keyla2.png";
import MistressK3 from "../assets/images/models/Mistress Keyla/Keyla3.png";
import MistressKv1 from "../assets/images/models/Mistress Keyla/KeylaVideo.mp4";
import Anastasia from "../assets/images/models/Anastasia/Anastasia.png";
import Anastasia2 from "../assets/images/models/Anastasia/Anastasia2.png";
import Anastasia3 from "../assets/images/models/Anastasia/Anastasia3.png";
import Anastasia4 from "../assets/images/models/Anastasia/Anastasia4.png";
import Anastasia5 from "../assets/images/models/Anastasia/Anastasia5.png";
import Anastasia6 from "../assets/images/models/Anastasia/Anastasia6.png";
import Anastasiav1 from "../assets/images/models/Anastasia/AnastasiaVideo.mp4";
import Pillar from "../assets/images/models/Pillar/Pillar.png";
import Pillar2 from "../assets/images/models/Pillar/Pillar2.png";
import Pillar3 from "../assets/images/models/Pillar/Pillar3.png";
import Pillar4 from "../assets/images/models/Pillar/Pillar4.png";
import Pillarv1 from "../assets/images/models/Pillar/PillarVideo1.mp4";
import Pillarv2 from "../assets/images/models/Pillar/PillarVideo2.mp4";
import Zendaia from "../assets/images/models/Zendaia/Zendaia.png";
import Zendaia2 from "../assets/images/models/Zendaia/Zendaia2.png";
import Zendaia3 from "../assets/images/models/Zendaia/Zendaia3.png";
import Zendaia4 from "../assets/images/models/Zendaia/Zendaia4.png";
import Zendaia5 from "../assets/images/models/Zendaia/Zendaia5.png";
import Zendaiav1 from "../assets/images/models/Zendaia/ZendaiaVideo.mp4";
import Julie from "../assets/images/models/Julie/Julie.png";
import Julie2 from "../assets/images/models/Julie/Julie2.png";
import Julie3 from "../assets/images/models/Julie/Julie3.png";
import Julie4 from "../assets/images/models/Julie/Julie4.png";
import Julie5 from "../assets/images/models/Julie/Julie5.png";
import Julie6 from "../assets/images/models/Julie/Julie6.png";
import Aria from "../assets/images/models/Aria/Aria.png";
import Aria2 from "../assets/images/models/Aria/Aria2.png";
import Aria3 from "../assets/images/models/Aria/ARia3.png";
import Aria4 from "../assets/images/models/Aria/Aria4.png";
import Aria5 from "../assets/images/models/Aria/Aria5.png";
import Ariav1 from "../assets/images/models/Aria/AriaVideo.mp4";
import Belmira from "../assets/images/models/Belmira/Belmira.png";
import Belmira2 from "../assets/images/models/Belmira/Belmira2.png";
import Belmira3 from "../assets/images/models/Belmira/Belmira3.png";
import Belmira4 from "../assets/images/models/Belmira/Belmira4.png";
import Belmira5 from "../assets/images/models/Belmira/Belmira5.png";
import Belmira6 from "../assets/images/models/Belmira/Belmira6.png";
import Belmirav1 from "../assets/images/models/Belmira/BelmiraVideo1.mp4";
import Belmirav2 from "../assets/images/models/Belmira/BelmiraVideo2.mp4";
import wp from "../assets/images/wp.png";
import tg from "../assets/images/tg.png";

const Home = () => {
  const nav = useNavigate();
  const { pathname } = useLocation();
  const models = [
    {
      img: Elizabeth,
      name: "Elizabeth",
      desc: "The last time that Elizabeth was in London she was a massive hit! Completely gorgeous and oozing sex appeal this busty 27-year-old mature London escorts is back with a very large bang - and you can see by her reviews that people are loving her to bits! And what is there not to love when a woman is this hot???",
      proImg: [Elizabeth2, Elizabeth3, Elizabeth4, Elizabeth5, Elizabeth6],
      vid: [Elizabethv1, Elizabethv2],
      age: "21",
      eyeColor: "Brown",
      height: "5'4\" 162 cm, Petite",
      weight: "55Kg",
      bust: "34B",
      hair: "Brunette",
      dress: null,
      nationality: "Eastern European",
      piercings: "No",
      tattoos: "Yes",
      booty: null,
      cupSize: "34B (75B)",
      smoking: "No",
      cuisine: "Any",
      perfume: "For Her",
      lingerie: null,
    },
    {
      img: Valeria,
      name: "Valeria",
      desc: "Valeria is a very pretty blonde listed in our mature gallery and some other sexy ladies. You can book time with her for an incall or an outcall. Valeria is 30 years old but has the body of a 25-year-old, she is very busty, and her DD boobs are natural.",
      proImg: [Valeria2, Valeria3, Valeria4, Valeria5, Valeria6],
      age: "23",
      eyeColor: "Brown",
      height: "Average 5'7\" 170 cm",
      weight: "53Kg",
      bust: "34B",
      hair: "Brunette",
      dress: null,
      nationality: "Russian, Speaks English",
      piercings: "No",
      tattoos: "No",
      booty: null,
      cupSize: "34B (75B)",
      smoking: "No",
      cuisine: "Any",
      perfume: "For Her",
      lingerie: null,
      vid: [Valeriav1, ""],
    },
    {
      img: Gabby,
      name: "Gabby",
      desc: "Gabby is a beautiful brunette with brown eyes and a breathtaking figure. She is petite yet curvy and perfectly balances between being sexy and charming, stunning and cute. Gabby ticks many boxes, especially if you like a passionate and energetic woman in the bedroom.",
      proImg: [Gabby2, Gabby3, Gabby4, Gabby5, Gabby6],
      age: "30",
      eyeColor: "Brown",
      height: "Average 5'7\" 170 cm",
      weight: "53Kg",
      bust: "34C",
      hair: "Blonde",
      dress: null,
      nationality: "Russian, Speaks English",
      piercings: "No",
      tattoos: "No",
      booty: null,
      cupSize: "34C (75C)",
      smoking: "No",
      cuisine: "Any",
      perfume: "For Her",
      lingerie: null,
      vid: [Gabbyv1, ""],
    },
    {
      img: Avery,
      name: "Avery",
      age: "22 years",
      spl: "Eastern European",
      desc: "Avery is the real deal, read this sexy escorts profile and then pick up the phone to make your booking with this lady of your dreams. Avery is brunette, she is 22 years old, fully bisexual and as naughty as naughty can be, she really enjoys what she does and takes a great deal of pride in it.",
      proImg: [Avery2, Avery3, Avery4, Avery5, Avery6],
      age: "27",
      eyeColor: "Blue",
      height: "Average 5'7\" 170 cm",
      weight: "52Kg",
      bust: "34B",
      hair: "Blonde",
      dress: null,
      nationality: "Russian, Speaks English",
      piercings: "Yes",
      tattoos: "Yes",
      booty: null,
      cupSize: "34B (75B)",
      smoking: "No",
      cuisine: "Any",
      perfume: "For Her",
      lingerie: null,
      vid: [Averyv1, ""],
    },
    {
      img: Alma,
      name: "Alma",
      desc: "Sexy 23-year-old blonde London escort Alma is beautiful; she has a great figure and always dresses to impress. Her trim waist offset her toned bum and amazing legs – this lady is the perfect foot fetish escort.",
      proImg: [Alma2, Alma3, Alma4, Alma5, Alma6],
      age: "29",
      eyeColor: "Green",
      height: "Average 5'7\" 170 cm",
      weight: "58Kg",
      bust: "34C",
      hair: "Blonde",
      dress: null,
      nationality: "Russian, Speaks English",
      piercings: "No",
      tattoos: "Yes",
      booty: null,
      cupSize: "34C (75C)",
      smoking: "Yes",
      cuisine: "Any",
      perfume: "For Her",
      lingerie: null,
      vid: [],
    },
    {
      img: LuciaAnne,
      name: "Lucia-Anne",
      desc: "At 22, Lucia-Anne combines her stunning looks, slim figure, and natural 36B breasts to create an unforgettable experience. With a passion for presentation and an exciting collection of toys and uniforms, Lucia-Anne is based in Baker Street for incalls and is also available for outcalls.",
      proImg: [LuciaAnne2, LuciaAnne3, LuciaAnne4, LuciaAnne5, LuciaAnne6],
      age: "22",
      eyeColor: "Brown",
      height: "Tall 5'9\" 176 cm",
      weight: "60Kg",
      bust: "34DD",
      hair: "Blonde",
      dress: null,
      nationality: "Russian, Speaks English",
      piercings: "Yes",
      tattoos: "Yes",
      booty: null,
      cupSize: "34DD (75DD)",
      smoking: "No",
      cuisine: "Any",
      perfume: "For Her",
      lingerie: null,
      vid: [LuciaAnnev1, ""],
    },
    {
      img: Devon,
      name: "Devon",
      desc: "Devon is a striking 23 year old brunette escort from Eastern Europe, she is fun and full of energy – she loves what she does and classes this as her favorite past time. She is very friendly – loving to wine and dine with friends, providing a warm and relaxing atmosphere for anyone that she has around her, to loves to be looked after but also to look after people.",
      proImg: [Devon2, Devon3, Devon4, Devon5, Devon6],
      age: "23",
      eyeColor: "Brown",
      height: "Average 5'8\" 172 cm",
      weight: "50Kg",
      bust: "32B",
      hair: "Light Brown",
      dress: null,
      nationality: "Eastern European",
      piercings: "Yes",
      tattoos: "Yes",
      booty: null,
      cupSize: "32B (70B)",
      smoking: "No",
      cuisine: "Any",
      perfume: "For Her",
      lingerie: null,
      vid: [Devonv1, ""],
    },
    {
      img: Reese,
      name: "Reese",
      desc: "Reese is a very beautiful and striking Eastern European escort available for both incalls and outcalls via our escort agency.You will find this amazing lady in Marylebone for incalls  you can also book her for an outcall – this is when she comes to yours.",
      proImg: [Reese2, Reese3, Reese4, Reese5, Reese6],
      age: "28",
      eyeColor: "Brown",
      height: "Average 5'5\" 165 cm",
      weight: "50Kg",
      bust: "34B",
      hair: "Blonde",
      dress: null,
      nationality: "Russian, Speaks English",
      piercings: "No",
      tattoos: "No",
      booty: null,
      cupSize: "34B (75B)",
      smoking: "No",
      cuisine: "Any",
      perfume: "For Her",
      lingerie: null,
      vid: [Reesev1, ""],
    },
    {
      img: Lindsey,
      name: "Lindsey",
      desc: "Lindsey is one of the nicest ladies that you will meet here at Dior Escorts, a real gem in our crown and she can be booked for both incalls and outcalls right now. At 22 years old Lindsey has a sexy tight figure with wonderful 34C boobs – which she of course loves to show off.",
      proImg: [Lindsey2, Lindsey3, Lindsey4, Lindsey5, Lindsey6],
      age: "21",
      eyeColor: "Brown",
      height: "Average 5'7\" 170 cm",
      weight: "60kg",
      bust: "34D Natural",
      hair: "Brunette",
      dress: null,
      nationality: "Brazilian, Speaks English",
      piercings: "Yes",
      tattoos: "Yes",
      booty: null,
      cupSize: "34B (75D)",
      smoking: "No",
      cuisine: "Any",
      perfume: "For Her",
      lingerie: null,
      vid: [],
    },
    {
      img: Debra,
      name: "Debra",
      desc: "Debra is a very sexy Brazilian escort with long dark hair and sexy come-to-bed eyes; she has the perfect figure with curves where they should be, a busty escort who is sure to be everyone's favourite. Located in Earls Court for incalls and available day and night, Debra is certain to make a name for herself and has to be one of the sexiest escorts in London at the moment.",
      proImg: [Debra2, Debra3, Debra4],
      age: "24",
      eyeColor: "Green",
      height: "Petite 5'3\" 161 cm",
      weight: "43Kg",
      bust: "34B",
      hair: "Light-Brown",
      dress: null,
      nationality: "Brazilian, Speaks English",
      piercings: "No",
      tattoos: "Yes",
      booty: null,
      cupSize: "34B (75B)",
      smoking: "No",
      cuisine: "Any",
      perfume: "For Her",
      lingerie: null,
      vid: [Debrav1, ""],
    },
    {
      img: Tessa,
      name: "Tessa",
      desc: "A stunning 21-year-old brunette who has a fantastic figure – you can understand why she loves to dress up, she has a range of likes that cover most bases; foot fetish and roleplay with Tessa are very popular.",
      proImg: [Tessa2, Tessa3, Tessa4, Tessa5, Tessa6],
      age: "26",
      eyeColor: "Brown",
      height: "Average 5'6\" 168 cm",
      weight: "58Kg",
      bust: "36C",
      hair: "Brunette",
      dress: null,
      nationality: "Brazilian, Speaks English",
      piercings: "Yes",
      tattoos: "Yes",
      booty: null,
      cupSize: "36C (80C)",
      smoking: "No",
      cuisine: "Any",
      perfume: "For Her",
      lingerie: null,
      vid: [Tessav1, Tessav2, Tessav3],
    },
    {
      img: Charlie,
      name: "Charlie",
      desc: "Charlie is a stunning young blonde escort based in Kensington, who has 34DD boobs, is extremely pretty, and, as you can see from her likes list, is very naughty and lots of fun to be around. Charlie lives in a beautiful apartment, a great place to relax and unwind.",
      proImg: [Charlie2, Charlie3, Charlie4, Charlie5, Charlie6],
      age: "24",
      eyeColor: "Blue",
      height: "Petite 5'1\" 156 cm",
      weight: "52Kg",
      bust: "34C Natural",
      hair: "Light-Brown",
      dress: null,
      nationality: "Brazilian, Speaks English",
      piercings: "No",
      tattoos: "Yes",
      booty: null,
      cupSize: "34C (75C)",
      smoking: "No",
      cuisine: "Any",
      perfume: "For Her",
      lingerie: null,
      vid: [Charliev1, ""],
    },
    {
      img: Ellie,
      name: "Ellie",
      desc: "Ellie is 24 years old; she is a very sweet and playful young lady who looks forward to every day. A romantic at heart, Ellie can be booked for a dreamy GFE type of date in which you will feel the weight of the world lifted from your shoulders! A very girly girl Ellie likes the finer things in life and will reward those who treat her in this way.",
      proImg: [Ellie2, Ellie3, Ellie4, Ellie5, Ellie6],
      age: "20",
      eyeColor: "Hazel",
      height: "Average 5'6\" 167 cm",
      weight: "59Kg",
      bust: "34C",
      hair: "Blonde",
      dress: null,
      nationality: "Brazilian, Speaks English",
      piercings: "No",
      tattoos: "Yes",
      booty: null,
      cupSize: "34C (75C)",
      smoking: "No",
      cuisine: "Any",
      perfume: "For Her",
      lingerie: null,
      vid: [Elliev1, ""],
    },
    {
      img: Kelly,
      name: "Kelly",
      desc: "Getting to Kelly is simple – she is a few minutes’ walk from Earls Court tube station, which is served by the Circle and District lines, she is only a 5 minute journey away from Gloucester Road  station which makes her a great choice of anyone in that area. There is on street parking close by, but this is on a first come first served basis so please don’t hold your breath.",
      proImg: [Kelly2, Kelly3, Kelly4, Kelly5, Kelly6],
      age: "23",
      eyeColor: "Brown",
      height: "Tall 5'9\" 176 cm",
      weight: "57Kg",
      bust: "34C",
      hair: "Brunette",
      dress: null,
      nationality: "Brazilian, Speaks English",
      piercings: "No",
      tattoos: "No",
      booty: null,
      cupSize: "34C (75C)",
      smoking: "No",
      cuisine: "Any",
      perfume: "For Her",
      lingerie: null,
      vid: [],
    },
    {
      img: Beauty,
      name: "Beauty",
      desc: "Beauty is a naturally busty brunette 22-year-old babe from Eastern Europe. With her sexy look and come-to-bed eyes, this beautiful young lady will have you eating out of her hands. She has an assortment of sexy outfits – some of which you can see in her photos. Clients love her dressed up as a secretary, and she has a wardrobe filled with high heels that will make you drool.",
      proImg: [Beauty2, Beauty3, Beauty4, Beauty5, Beauty6],
      age: "22",
      eyeColor: "Brown",
      height: "Petite 5'3\" 161 cm",
      weight: "50Kg",
      bust: "32B",
      hair: "Blonde",
      dress: null,
      nationality: "Brazilian, Speaks English",
      piercings: "Yes",
      tattoos: "Yes",
      booty: null,
      cupSize: "32B (70B)",
      smoking: "No",
      cuisine: "Any",
      perfume: "For Her",
      lingerie: null,
      vid: [Beautyv1, ""],
    },
    {
      img: Hailey,
      name: "Hailey",
      desc: "You will see that Hailey has spent a lot of time and energy making sure her profile is perfect, along with a great selection of professional photos this very sexy 21-year-old escort always has new selfies and new videos for you to enjoy!",
      proImg: [Hailey2, Hailey3, Hailey4, Hailey5, Hailey6],
      age: "21",
      eyeColor: "Brown",
      height: "Average 5'7\" 170 cm",
      weight: "44Kg",
      bust: "34B",
      hair: "Brunette",
      dress: null,
      nationality: "Brazilian, Speaks English",
      piercings: "No",
      tattoos: "No",
      booty: null,
      cupSize: "34B (75B)",
      smoking: "No",
      cuisine: "Any",
      perfume: "For Her",
      lingerie: null,
      vid: [Haileyv1, ""],
    },
    {
      img: Riley,
      name: "Riley",
      desc: "Riley is a sexy brunette escort you can make a booking with. Riley loves to dress up to show off that very trim figure; you will see that this sexy London escort has a vast choice of outfits – look at her photos to get an idea of how great she looks.",
      proImg: [Riley2, Riley3, Riley4, Riley5, Riley6],
      age: "19",
      eyeColor: "Brown",
      height: "Tall 5'9\" 174 cm",
      weight: "61Kg",
      bust: "34B",
      hair: "Brown",
      dress: null,
      nationality: "Brazilian, Speaks English",
      piercings: "No",
      tattoos: "Yes",
      booty: null,
      cupSize: "34B (75B)",
      smoking: "No",
      cuisine: "Any",
      perfume: "For Her",
      lingerie: null,
      vid: [Rileyv1, ""],
    },
    {
      img: Rizzo,
      name: "Rizzo",
      desc: "Rizzo is an incredible-looking blonde lady with an impressive natural figure, 36D boobs, a very sexy smile and who is also very open-minded and playful. If great-looking, open-minded, and playful ladies are your thing, then you have no need to look any further. If not, then check out Devon, a very naughty, playful, and open-minded brunette!",
      proImg: [Rizzo2, Rizzo3, Rizzo4, Rizzo5, Rizzo6],
      age: "25",
      eyeColor: "Green",
      height: "Average 5'7\" 170 cm",
      weight: "50Kg",
      bust: "36C",
      hair: "Blonde",
      dress: null,
      nationality: "Brazilian, Speaks English",
      piercings: "Yes",
      tattoos: "Yes",
      booty: null,
      cupSize: "36C (76C)",
      smoking: "No",
      cuisine: "Any",
      perfume: "For Her",
      lingerie: null,
      vid: [Rizzov1, Rizzov2],
    },
    {
      img: Clary,
      name: "Clary",
      desc: "Clary is a flawless beauty, a buxom blonde whom can be booked daily via our escort agency.  She is a utter beauty with silky smooth skin, her boobs shine out – they are amazing and if you are a boob men they are what you really need! Her kissable lips will draw you in.It is ladies like Clary that make the escorts in London amongst the very best in the whole wide world!",
      proImg: [Clary2, Clary3, Clary4, Clary5],
      age: "29",
      eyeColor: "Blue",
      height: "Tall 5'9\" 175 cm",
      weight: "59Kg",
      bust: "38F Busty",
      hair: "Blonde",
      dress: null,
      nationality: "Polish, Speaks English",
      piercings: "Yes",
      tattoos: "Yes",
      booty: null,
      cupSize: "38F (85G)",
      smoking: "No",
      cuisine: "Any",
      perfume: "For Her",
      lingerie: null,
      vid: [Claryv1, Claryv2, Claryv3],
    },
    {
      img: Aylin,
      name: "Aylin",
      desc: "Aylin is a gorgeous, naughty and sexy escort available to book for incalls and outcalls. If you want to spend time with a very sexy and open-minded escort, then Aylin needs to be at the top of your list; not only is Aylin fun ( this babe loves to party), but she also loves to dress up and play out some naughty scenarios.",
      proImg: [Aylin2, Aylin3, Aylin4, Aylin5, Aylin6],
      age: "23",
      eyeColor: "Green",
      height: "Petite 5'3\" 160 cm",
      weight: "43Kg",
      bust: "32A",
      hair: "Light-Brown",
      dress: null,
      nationality: "Brazilian, Speaks English",
      piercings: "No",
      tattoos: "No",
      booty: null,
      cupSize: "32A (70A)",
      smoking: "No",
      cuisine: "Any",
      perfume: "For Her",
      lingerie: null,
      vid: [Aylinv1, Aylinv2],
    },
    {
      img: Kacie,
      name: "Kacie",
      desc: "Stunning blonde escort Kacie is now available in the Dior Escorts gallery; a super sweet and sexy young lady, book Kacie for both incalls and outcalls. Kacie is beautiful and has a natural figure; she stands at 5ft7 without heels and always loves to wear sexy lingerie.",
      proImg: [Kacie2, Kacie3, Kacie4, Kacie5, Kacie6],
      age: "26",
      eyeColor: "Brown",
      height: "Tall 5'9\" 175 cm",
      weight: "60Kg",
      bust: "32D",
      hair: "Brunette",
      dress: null,
      nationality: "Brazilian, Speaks English",
      piercings: "No",
      tattoos: "Yes",
      booty: null,
      cupSize: "32D (70D)",
      smoking: "No",
      cuisine: "Any",
      perfume: "For Her",
      lingerie: null,
      vid: [Kaciev1, ""],
    },
    {
      img: Bishop,
      name: "Bishop",
      desc: "Read on to find out more about this sexy 26-year-old brunette escort from Eastern Europe who you can book for either an incall or an outcall. She is very friendly and very willing; she loves to have fun and really enjoys what she does – roleplay is amongst the favourites of her likes or although she does give a pretty amazing gfe session.",
      proImg: [Bishop2, Bishop3, Bishop4, Bishop5, Bishop6],
      age: "26",
      eyeColor: "Brown",
      height: "Average 5'7\" 170 cm",
      weight: "58Kg",
      bust: "36F",
      hair: "Blonde",
      dress: null,
      nationality: "Russian, Speaks English",
      piercings: "Yes",
      tattoos: "No",
      booty: null,
      cupSize: "36F",
      smoking: "No",
      cuisine: "Any",
      perfume: "For Her",
      lingerie: null,
      vid: [],
    },
    {
      img: Nina,
      name: "Nina",
      desc: "Nina is very open minded, you will see that she has a very long list of likes, you will see that she loves to dress up and from her very sexy selfies you will see that she looks dam hot! Nina is from Spain, she speaks perfect English – we really do love a sexy accent here at our agency, she is tall with a very slender figure, has a few sexy tattoos in some very hard to find places, loves wearing high heels and loves to show off her beautiful body!",
      proImg: [Nina2, Nina3, Nina4, Nina5],
      age: "26",
      eyeColor: "Green",
      height: "Petite 5'1\" 155 cm",
      weight: "46Kg",
      bust: "34C",
      hair: "Brunette",
      dress: null,
      nationality: "Brazilian, Speaks English",
      piercings: "No",
      tattoos: "Yes",
      booty: null,
      cupSize: "36C (75C)",
      smoking: "No",
      cuisine: "Any",
      perfume: "For Her",
      lingerie: null,
      vid: [Ninav1, ""],
    },
    {
      img: Francesca,
      name: "Francesca",
      desc: "With her magnetic personality, breathtakingly curvaceous figure, and luscious blonde mane, Francesca embodies sultry elegance. As an escort with a touch of exotic allure, she promises an unforgettable experience that excites the senses. Combine her naughtiness, good looks, and enviable hourglass curves, she exudes an aura of pure seduction that leaves admirers in awe.",
      proImg: [Francesca2, Francesca3, Francesca4, Francesca5, Francesca6],
      age: "27",
      eyeColor: "Brown",
      height: "Average 5'5\" 164 cm",
      weight: "52Kg",
      bust: "34D",
      hair: "Blonde",
      dress: null,
      nationality: "Eastern European",
      piercings: "Yes",
      tattoos: "Yes",
      booty: null,
      cupSize: "34D (75D)",
      smoking: "No",
      cuisine: "Any",
      perfume: "For Her",
      lingerie: null,
      vid: [],
    },
    {
      img: Marya,
      name: "Marya",
      desc: "Marya is a gorgeous 20-year-old brunette escort from Eastern Europe. She is a great-looking young lady with a terrific figure and is available for incalls and outcalls. Marya is not the most open-minded escort, but if you’re looking to meet a fun and friendly lady, she is a top choice. Should you wish to meet a very open-minded escort, Sunshine is a top choice.",
      proImg: [Marya2, Marya3, Marya4, Marya5, Marya6],
      age: "25",
      eyeColor: "Brown",
      height: "Average 5'4\" 163 cm",
      weight: "54Kg",
      bust: "34B",
      hair: "Redhead",
      dress: null,
      nationality: "Brazilian, Speaks English",
      piercings: "No",
      tattoos: "Yes",
      booty: null,
      cupSize: "34B (75B)",
      smoking: "No",
      cuisine: "Any",
      perfume: "For Her",
      lingerie: null,
      vid: [Maryav1, ""],
    },
    {
      img: Paola,
      name: "Paola",
      desc: "Oh yes! This lady is something special, and she is available here now at Dior Escorts Agency in London, home of some of the most beautiful escorts in the whole of London! Paola is 31 years young, has a body that most women would kill for, eyes that hypnotise you and a bum that you just want to bury your head in!",
      proImg: [Paola2, Paola3, Paola4, Paola5, Paola6],
      age: "24",
      eyeColor: "Brown",
      height: "Average 5'5\" 164 cm",
      weight: "60Kg",
      bust: "36C",
      hair: "Brunette",
      dress: null,
      nationality: "Brazilian, Speaks English",
      piercings: "Yes",
      tattoos: "No",
      booty: null,
      cupSize: "36C (80C)",
      smoking: "No",
      cuisine: "Any",
      perfume: "For Her",
      lingerie: null,
      vid: [Paolav1, Paolav2],
    },
    {
      img: Lottie,
      name: "Lottie",
      desc: "This very sexy young blonde escort is based in Edgware Road, W@ – should you visit to visit her for an incall, or she will come to visit you at yours (that’s an outcall). You can see from Lottie’s photos that she has a very sexy look, a great body but what you can’t see is the fact that she is also very friendly.",
      proImg: [Lottie2, Lottie3, Lottie4, Lottie5, Lottie6],
      age: "30",
      eyeColor: "Brown",
      height: "Average 5'7\" 170 cm",
      weight: "68Kg",
      bust: "34DD Busty",
      hair: "Blonde",
      dress: null,
      nationality: "Brazilian, Speaks English",
      piercings: "Yes",
      tattoos: "Yes",
      booty: null,
      cupSize: "34DD (75DD)",
      smoking: "No",
      cuisine: "Any",
      perfume: "For Her",
      lingerie: null,
      vid: [Lottiev1, Lottiev2, Lottiev3, Lottiev4],
    },
    {
      img: Martini,
      name: "Martini",
      desc: "Would you like to see an escort in the Bayswater area? Well, you have landed on the correct page if you do because that is where Martini is based and where you can visit this perfect brunette escort for an incall! A very pretty and young blonde Martini comes across as a very warm-hearted young lady with a very naughty side to her – her belly is filled with fire and passion.",
      proImg: [Martini2, Martini3, Martini4, Martini5],
      age: "30",
      eyeColor: "Brown",
      height: "Average 5'7\" 170 cm",
      weight: "54Kg",
      bust: "34D",
      hair: "Brunette",
      dress: null,
      nationality: "Russian, Speaks English",
      piercings: "No",
      tattoos: "No",
      booty: null,
      cupSize: "34D (75D)",
      smoking: "No",
      cuisine: "Any",
      perfume: "For Her",
      lingerie: null,
      vid: [],
    },
    {
      img: Bambi,
      name: "Bambi",
      desc: "Bambi is a fully bi stunning brunette who joins us from Eastern Europe, she is 28 years old with gives her the experiance and finest that so many of you seek, she really does know how to please does our Bambi. Bambi is an expert at all things domination and you will bow down to her sexy painted red toe nails if she tells you to! My days are you going to have some fun with this young lady!",
      proImg: [Bambi2, Bambi3, Bambi4, Bambi5, Bambi6],
      age: "22",
      eyeColor: "Green",
      height: "Petite 5'3\" 160 cm",
      weight: "42Kg",
      bust: "34A",
      hair: "Blonde",
      dress: null,
      nationality: "Russian, Speaks English",
      piercings: "No",
      tattoos: "Yes",
      booty: null,
      cupSize: "34A (75A)",
      smoking: "No",
      cuisine: "Any",
      perfume: "For Her",
      lingerie: null,
      vid: [],
    },
    {
      img: Winter,
      name: "Winter",
      desc: "23-year-old stunner Winter comes from Brazil and is beautiful; her figure is curvy – her boobs and bum will blow you away; she has a very sexy look topped off with come-to-bed smoky eyes.  Winter lists some of the most popular “likes,” which include dfk and parties.",
      proImg: [Winter2, Winter3, Winter4, Winter5],
      age: "29",
      eyeColor: "Brown",
      height: "Petite 5'3\" 159 cm",
      weight: "58Kg",
      bust: "36C",
      hair: "Brown",
      dress: null,
      nationality: "Brazilian, Speaks English",
      piercings: "No",
      tattoos: "Yes",
      booty: null,
      cupSize: "36C (80C)",
      smoking: "No",
      cuisine: "Any",
      perfume: "For Her",
      lingerie: null,
      vid: [],
    },
    {
      img: Larisss,
      name: "Larisss",
      desc: "Larisss is a charming and sexy brunette escort you can visit via this escort agency. An amiable and intelligent young lady – she is 23, Larisss speaks basic English but is learning all the time. She also speaks German and French.Openminded and playful are great ways to describe this young babe; check out her list of likes to see why.",
      proImg: [Larisss2, Larisss3, Larisss4, Larisss5],
      age: "27",
      eyeColor: "Brown",
      height: "Average 5'7\" 170 cm",
      weight: "54Kg",
      bust: "34C",
      hair: "Blonde",
      dress: null,
      nationality: "Brazilian, Speaks English",
      piercings: "No",
      tattoos: "Yes",
      booty: null,
      cupSize: "34C (75C)",
      smoking: "No",
      cuisine: "Any",
      perfume: "For Her",
      lingerie: null,
      vid: [],
    },
    {
      img: Cameo,
      name: "Cameo",
      desc: "22-year-old ebony Brazilian escort Cameo is based in Earls Court for incalls and can also be booked for outcalls. A very sexy ebony escort who beautiful breasts, and a very sexy arse, Cameo is the dream lady for so many. Naturally beautiful, Cameo is very sexy and loves a classic, elegant style. Her smile lights up when she meets new people.",
      proImg: [Cameo2, Cameo3, Cameo4, Cameo5, Cameo6],
      age: "23",
      eyeColor: "Brown",
      height: "Petite 5'1\" 155 cm",
      weight: "48Kg",
      bust: "34B",
      hair: "Blonde",
      dress: null,
      nationality: "Brazilian, Speaks English",
      piercings: "No",
      tattoos: "No",
      booty: null,
      cupSize: "34B (75B)",
      smoking: "No",
      cuisine: "Any",
      perfume: "For Her",
      lingerie: null,
      vid: [Cameov1, Cameov2],
    },
    {
      img: Pamela,
      name: "Pamela",
      desc: "If you want an escort that looks just like her photographs, look no further than our gorgeous Pamela. She’s in her 30s and one of our more mature escorts, so she really knows what she’s doing in the bedroom. Regardless of whether you are looking for a romantic dinner date or some bisexual fun, Pamela is the woman for you.",
      proImg: [Pamela2, Pamela3, Pamela4, Pamela5, Pamela6],
      age: "24",
      eyeColor: "Brown",
      height: "Petite 5'4\" 162 cm",
      weight: "46Kg",
      bust: "34B",
      hair: "Brunette",
      dress: null,
      nationality: "Brazilian, Speaks English",
      piercings: "Yes",
      tattoos: "Yes",
      booty: null,
      cupSize: "34B (70B)",
      smoking: "No",
      cuisine: "Any",
      perfume: "For Her",
      lingerie: null,
      vid: [Pamelav1, Pamelav2],
    },
    {
      img: Rosaline,
      name: "Rosaline",
      desc: "One of the hottest babes to join our ranks, with a killer body, sexy natural 34C boobs ( busty escorts are very popular at the moment), lovely long sexy and very sexy feet – the perfect companion for those of you into foot play! Rosaline has a very long list of likes, classing her as open-minded and fun; she will help you live out some of your fantasies.",
      proImg: [Rosaline2, Rosaline3, Rosaline4, Rosaline5, Rosaline6],
      age: "22",
      eyeColor: "Green",
      height: "Average 5'6\" 167 cm",
      weight: "57Kg",
      bust: "34C",
      hair: "Blonde",
      dress: null,
      nationality: "Russian, Speaks English",
      piercings: "No",
      tattoos: "Yes",
      booty: null,
      cupSize: "34C (75C)",
      smoking: "No",
      cuisine: "Any",
      perfume: "For Her",
      lingerie: null,
      vid: [],
    },
    {
      img: Jennifer,
      name: "Jennifer",
      desc: "A fun and energetic Asian lady Jennifer is sure to be a hit with anyone looking for some companionship while in this great city of ours. ennifer has amazing skin, beautiful hair and always looks so lovely -she is a dream come true for anyone who is looking for a very intelligent lady.",
      proImg: [Jennifer2, Jennifer3, Jennifer4, Jennifer5],
      age: "26",
      eyeColor: "Brown",
      height: "Petite 5'3\" 160 cm",
      weight: "50Kg",
      bust: "32D",
      hair: "Brunette",
      dress: null,
      nationality: "China, Speaks English",
      piercings: "No",
      tattoos: "No",
      booty: null,
      cupSize: "32D (70D)",
      smoking: "No",
      cuisine: "Any",
      perfume: "For Her",
      lingerie: null,
      vid: [],
    },
    {
      img: Mistress,
      name: "Mistress Bianca",
      desc: "Her mastery of the art of domination is unparalleled, and those who willingly submit to her authority find themselves ensnared in a world where pleasure and pain dance on a fine line. Mistress Bianca takes pride in delivering the most exquisite punishments, ensuring that her slaves experience the perfect blend of agony and ecstasy.",
      proImg: [Mistress2, Mistress3, Mistress4],
      age: "26",
      eyeColor: "Green",
      height: "Average 5'5\" 165 cm",
      weight: "58Kg",
      bust: "34G",
      hair: "Brunette",
      dress: null,
      nationality: "British",
      piercings: "No",
      tattoos: "Yes",
      booty: null,
      cupSize: "34G",
      smoking: "No",
      cuisine: "Any",
      perfume: "For Her",
      lingerie: null,
      vid: [Mistressv1, Mistressv2, Mistressv3],
    },
    {
      img: MistressC,
      name: "Mistress Chloe",
      age: "23 years",
      spl: "Eastern European",
      desc: "Mistress Chloe’s repertoire includes an enticing array of activities designed to fulfil your fantasies: face Sitting, pegging, humiliation, slapping (give), boot worship & foot fetish, light domination, whipping (give), cbt (Cock and Ball Torture), spanking (give)",
      proImg: [MistressC2, MistressC3, MistressC4],
      age: "35",
      eyeColor: "Brown",
      height: "Average 5'5\" 165 cm",
      weight: "61Kg",
      bust: "36E Natural",
      hair: "Blonde",
      dress: null,
      nationality: "European",
      piercings: "No",
      tattoos: "No",
      booty: null,
      cupSize: "36E Natural",
      smoking: "No",
      cuisine: "Any",
      perfume: "For Her",
      lingerie: null,
      vid: [MistressCv1, ""],
    },
    {
      img: MistressR,
      name: "Mistress Reese",
      desc: "Mistress Reese has many dildos, strapons, whips, cuffs, beads and more to make your session more enjoyable. Mistress Reese has a gorgeous apartment you may be lucky to be allowed in. A very strict woman awaits you when you make your booking with Mistress Reese. Mistress Reese will tell you when she is available; you need to call and ask.",
      proImg: [MistressR2, MistressR3, MistressR4],
      age: "22",
      eyeColor: "Brown",
      height: "Average 5'8\" 172 cm",
      weight: "63Kg",
      bust: "36C Natural",
      hair: "Brunette",
      dress: null,
      nationality: "Brazilian",
      piercings: "No",
      tattoos: "Yes",
      booty: null,
      cupSize: "36C Natural",
      smoking: "No",
      cuisine: "Any",
      perfume: "For Her",
      lingerie: null,
      vid: [MistressRv1, ""],
    },
    {
      img: MistressE,
      name: "Mistress Erika",
      desc: "This very sexy and powerful woman is one of the hottest Mistresses that you will meet, she has the perfect skill set for both novices and experienced subs – have you ever been pegged before? You can either meet her at her place or she will happily book a full dungeon experience for you (there will be an extra cost for this)",
      proImg: [MistressE2, MistressE3, MistressE4, MistressE5, MistressE6],
      age: "32",
      eyeColor: "Blue",
      height: "Average 5'7\" 170 cm",
      weight: "58Kg",
      bust: "36C",
      hair: "Blonde",
      dress: null,
      nationality: "European",
      piercings: "No",
      tattoos: "No",
      booty: null,
      cupSize: "36C",
      smoking: "No",
      cuisine: "Any",
      perfume: "For Her",
      lingerie: null,
      vid: [MistressEv1, MistressEv2, MistressEv3, MistressEv4, MistressEv5],
    },
    {
      img: MistressZ,
      name: "Mistress Zoey",
      desc: "Mistress Zoey is very strict and can inflect pain if you are a naughty boy – you wouldn’t want to be a naughty boy now, would you? Perhaps you would! Perhaps you want the Mistress to have you knee on the floor with her foot on your head making you link clean her sexy boots? Experience the full-on London dominatrix experience with Mistress. Zoey in a safe environment.",
      proImg: [MistressZ2, MistressZ3, MistressZ4, MistressZ5],
      age: "29",
      eyeColor: "Green",
      height: "Average 5'5\" 165 cm",
      weight: "55Kg",
      bust: "36C",
      hair: "Blonde",
      dress: null,
      nationality: "Brazilian",
      piercings: "No",
      tattoos: "Yes",
      booty: null,
      cupSize: "36C",
      smoking: "No",
      cuisine: "Any",
      perfume: "For Her",
      lingerie: null,
      vid: [MistressZv1, ""],
    },
    {
      img: MistressB,
      name: "Mistress Belle",
      desc: "Her expertise spans from intimate, focused massages like the prostate massage, yoni massage, and the profoundly stimulating four-hands massage to more immersive experiences such as tie-and-tease, body-to-body, relaxing, bamboo stick, foot, extra lingam (for multiple orgasms), mutual, Swedish, and voyeur massage.",
      proImg: [MistressB2, MistressB3, MistressB4],
      age: "20",
      eyeColor: "Brown",
      height: "Average 5'5\" 165 cm",
      weight: "52Kg",
      bust: "34C Natural",
      hair: "Brunette",
      dress: null,
      nationality: "European",
      piercings: "No",
      tattoos: "Yes",
      booty: null,
      cupSize: "34G",
      smoking: "No",
      cuisine: "Any",
      perfume: "For Her",
      lingerie: null,
      vid: [MistressBv1, ""],
    },
    {
      img: MistressV,
      name: "Mistress Villa",
      desc: "Mistress Villa loves to dress to impress and does such in her sessions; this sexy dominatrix has a host of outfits that include a catsuit, tight boots, a latex dress, a PVC dress, a PVC body suit, latex gloves, a leather skirt, a leather trousers, PVC corset, schoolgirl, nurse and secretary outfits.",
      proImg: [MistressV2, MistressV3, MistressV4, MistressV5, MistressV6],
      age: "25",
      eyeColor: "Blue",
      height: "Average 5'4\" 163 cm",
      weight: "50Kg",
      bust: "34B Natural",
      hair: "Blonde",
      dress: null,
      nationality: "European",
      piercings: "No",
      tattoos: "No",
      booty: null,
      cupSize: "34B",
      smoking: "No",
      cuisine: "Any",
      perfume: "For Her",
      lingerie: null,
      vid: [MistressVv1, ""],
    },
    {
      img: MistressK,
      name: "Mistress Keyla",
      desc: "From the moment you see Mistress Keyla dressed in one of her many sexy outfits, you will see what all the fuss is about. She is a stunningly beautiful blonde with brown eyes and a perfect bust. From head to toe, Mistress Keyla is gorgeous.",
      proImg: [MistressK2, MistressK3],
      age: "20",
      eyeColor: "Brown",
      height: "Average 5'9\" 175 cm",
      weight: "63kg",
      bust: "34C Bust",
      hair: "Brunette",
      dress: null,
      nationality: "European",
      piercings: "No",
      tattoos: "Yes",
      booty: null,
      cupSize: "34C",
      smoking: "No",
      cuisine: "Any",
      perfume: "For Her",
      lingerie: null,
      vid: [MistressKv1, ""],
    },
    {
      img: Anastasia,
      name: "Anastasia",
      desc: "When you choose to see Anastasia, you choose a woman who knows how to have a good time. Whether you are heading out together for a romantic dinner or partying your way into the early morning hours, Anastasia is the perfect companion. She’s also the ideal woman to take to a business function or corporate dinner, and she will impress your colleagues with her charm and charisma.",
      proImg: [Anastasia2, Anastasia3, Anastasia4, Anastasia5, Anastasia6],
      age: "27",
      eyeColor: "Green",
      height: "Average 5'6\" 167 cm",
      weight: "60Kg",
      bust: "34D Bust",
      hair: "Brunette",
      dress: null,
      nationality: "Italian",
      piercings: "No",
      tattoos: "No",
      booty: null,
      cupSize: "34D Bust",
      smoking: "No",
      cuisine: "Any",
      perfume: "For Her",
      lingerie: null,
      vid: [Anastasiav1, ""],
    },
    {
      img: Pillar,
      name: "Pillar",
      desc: "A very elegant young lady, Pillar speaks Portuguese, English, and Spanish—she has a very sexy accent. On her profile, Pillar has listed some of the more popular likes, including gfe and owo—very popular. For couples looking to add a third to their playful evening, Pillar is a great choice, as she is fully bisexual and loves to play.",
      proImg: [Pillar2, Pillar3, Pillar4],
      age: "26",
      eyeColor: "Brown",
      height: "Average 5'4\" 163 cm",
      weight: "52Kg",
      bust: "36D",
      hair: "Brunette",
      dress: null,
      nationality: "European",
      piercings: "No",
      tattoos: "No",
      booty: null,
      cupSize: "36D",
      smoking: "No",
      cuisine: "Any",
      perfume: "For Her",
      lingerie: null,
      vid: [Pillarv1, Pillarv2],
    },
    {
      img: Zendaia,
      name: "Zendaia",
      desc: "Zendaia is a high-class blonde escort with a fantastic figure and a very open mind. Zendaia is beautiful, elegant and sexy. She is very naughty! Add all these elements together and get the perfect high-class London escort. Zendaia can meet with gentlemen, ladies, and couples (ffm). She is fully bisexual and loves to play.",
      proImg: [Zendaia2, Zendaia3, Zendaia4, Zendaia5],
      age: "23",
      eyeColor: "Brown",
      height: "Average 5'5\" 165 cm",
      weight: "60Kg",
      bust: "36C",
      hair: "Blonde",
      dress: null,
      nationality: "Brazilian",
      piercings: "Yes",
      tattoos: "Yes",
      booty: null,
      cupSize: "36C",
      smoking: "No",
      cuisine: "Any",
      perfume: "For Her",
      lingerie: null,
      vid: [Zendaiav1, ""],
    },
    {
      img: Julie,
      name: "Julie",
      desc: "Having a fun time with Julie is very easy to do, this sexy blonde London escort is very pleasurable and easy to be with. If you are looking for a dominatrix experience with a escort then Julie is also a very good choice. From her pictures you will see that she has all the “gear’ for these types of bookings and also a very outgoing mind.",
      proImg: [Julie2, Julie3, Julie4, Julie5, Julie6],
      age: "28",
      eyeColor: "Brown",
      height: "Average 5'7\" 167 cm",
      weight: "53Kg",
      bust: "34D",
      hair: "Brunette",
      dress: null,
      nationality: "European",
      piercings: "No",
      tattoos: "Yes",
      booty: null,
      cupSize: "34D",
      smoking: "No",
      cuisine: "Any",
      perfume: "For Her",
      lingerie: null,
      vid: [],
    },
    {
      img: Aria,
      name: "Aria",
      desc: "Aria is a 24-year-old blonde stunning who has an incredible figure with natural boobs – a perfect choice for those of you who love meeting sexy busty escorts. Aria speaks perfect English with a very sexy accent. She is fun, friendly, and very open-minded. Look at that long list of likes; you’re sure to find something you want to experiment with.",
      proImg: [Aria2, Aria3, Aria4, Aria5],
      age: "26",
      eyeColor: "Brown",
      height: "Average 5'4\" 163 cm",
      weight: "60Kg",
      bust: "34D",
      hair: "Brunette",
      dress: null,
      nationality: "European",
      piercings: "No",
      tattoos: "Yes",
      booty: null,
      cupSize: "34D",
      smoking: "No",
      cuisine: "Any",
      perfume: "For Her",
      lingerie: null,
      vid: [Ariav1, ""],
    },
    {
      img: Belmira,
      name: "Belmira",
      desc: "Belmira is a high-class escort available to book time with via this escort agency website. A very sophisticated escort, Belmira is just 21 years old. An experienced and skilful seductress, Belmira knows exactly what it takes to press a man’s buttons and show him the time of his life. Sexy and stylish are the words that Belmira uses to describe herself.",
      proImg: [Belmira2, Belmira3, Belmira4, Belmira5, Belmira6],
      age: "22",
      eyeColor: "Blue",
      height: "Average 5'5\" 165 cm",
      weight: "55Kg",
      bust: "32B",
      hair: "Blonde",
      dress: null,
      nationality: "European",
      piercings: "Yes",
      tattoos: "Yes",
      booty: null,
      cupSize: "32B",
      smoking: "No",
      cuisine: "Any",
      perfume: "For Her",
      lingerie: null,
      vid: [Belmirav1, Belmirav2],
    },
  ];
  const [postPerPage, setPostPerPage] = useState(12);
  // const [currentPage, setCurrentPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(() => {
    return parseInt(localStorage.getItem('currentPage'), 10) || 1;
  });

  useEffect(() => {
    localStorage.setItem('currentPage', currentPage);
  }, [currentPage]);
  
  const indexOfLastPost = postPerPage * currentPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = models
    ? models.slice(indexOfFirstPost, indexOfLastPost)
    : null;
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(models.length / postPerPage); i++) {
    pageNumbers.push(i);
  }
  const handleNext = () => {
    if (pageNumbers.includes(currentPage + 1)) {
      setCurrentPage(currentPage + 1);
    }
  };
  const handlePrev = () => {
    if (pageNumbers.includes(currentPage - 1)) {
      setCurrentPage(currentPage - 1);
    }
  };
  const profilesRef = useRef(null);
  const handleScrollToProfiles = () => {
    profilesRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  
  return (
    <div style={{ background: "black", color: "white" }}>
      <div className="tgwp-1" style={{ background: "white" }}>
        <a
          href="https://wa.link/38ejzv"
          target="_blank"
          className="btn-link-wptg d-flex align-items-center"
          style={{
            gap: "15px",
            background: "black",
            color: "white",
            padding: "7px 20px",
            width: "160px",
            textDecoration: "none",
          }}
        >
          <img src={wp} height={30} alt="" />
          <div>Whatsapp</div>
        </a>
        <a
          href="https://t.me/auescortco"
          target="_blank"
          className="btn-link-wptg d-flex align-items-center"
          style={{
            gap: "15px",
            background: "black",
            color: "white",
            padding: "7px 20px",
            width: "160px",
            textDecoration: "none",
          }}
        >
          <img src={tg} height={30} alt="" />
          <div>Telegram</div>
        </a>
      </div>
      <div className="caro-img">
        <div className="dumy"></div>
        <div className="caro-content">
          <h1 className="caro-h">AUESCORTS</h1>
          <p className="caro-p">
            These girls are ideal for any occasion including dinner dates,
            social gatherings and quiet intimate relationships where
            discretion is guaranteed
          </p>
          <button className="book-now" type="submit">
            Book Now
          </button>
        </div>
      </div>
      <div className="profiles" ref={profilesRef}>
        <div className="d-flex">
          <h2 className="font-h">Top Profiles</h2>
          <div className="mx-5" style={{ marginTop: "-5px" }}>
            <p className="font-m">All Profiles</p>
            <img src={arrow} alt="" style={{ marginTop: "-40px" }} />
          </div>
        </div>
        <div className="models-list row">
          {currentPosts.map((e, i) => (
            <div
              className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-6 mb-3"
              key={i}
              style={{ cursor: "pointer" }}
              onClick={() =>
                {localStorage.setItem("page", currentPage); nav("/profile", {
                  state: {
                    name: e.name,
                    age: e.age,
                    spl: e.spl,
                    desc: e.desc,
                    proImg: e.proImg,
                    vid: e.vid,
                    age: e.age,
                    eyeColor: e.eyeColor,
                    height: e.height,
                    weight: e.weight,
                    bust: e.bust,
                    hair: e.hair,
                    nationality: e.nationality,
                    piercings: e.piercings,
                    tattoos: e.tattoos,
                    cupSize: e.cupSize,
                    smoking: e.smoking,
                    cuisine: e.cuisine,
                    perfume: e.perfume,
                  },
                })}
              }
            >
              <img className="model-img" src={e.img} alt="" />
              <h5 className="font-h mt-3">{e.name}</h5>
              <p className="font-m" style={{ fontSize: "0.7rem" }}>
                {e.age} years, {e.nationality}
              </p>
            </div>
          ))}
        </div>
        <nav className="pagination-num d-flex justify-content-center mt-3">
          <ul className="pagination">
            <MdKeyboardArrowRight
              className="mt-1 mx-2 fs-2"
              style={{ transform: "rotate(180deg)", cursor: "pointer" }}
              onClick={() => {
                handlePrev();
                handleScrollToProfiles();
              }}
            />
            {pageNumbers.map((e) => (
              <Link
                style={{
                  textDecoration: "none",
                  color: "black",
                  borderRadius: "50%",
                  height: "40px",
                  width: "40px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  margin: "0 7px",
                  backgroundColor:
                    e === currentPage
                      ? "rgba(255, 255, 255, 1)"
                      : "rgba(255, 255, 255, 0.3)",
                }}
                key={e}
                className="page-item"
              >
                <a
                  className="p-2 fs-5"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    border: "none",
                  }}
                  onClick={() => {
                    setCurrentPage(e);
                    handleScrollToProfiles();
                  }}
                  href=""
                >
                  {e}
                </a>
              </Link>
            ))}
            <MdKeyboardArrowRight
              className="mt-1 mx-2 fs-2"
              onClick={() => {
                handleNext();
                handleScrollToProfiles();
              }}
              style={{ cursor: "pointer" }}
            />
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Home;
