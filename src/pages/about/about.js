import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@material-ui/core";
import AboutPageWrapper from "./aboutPageWrapper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
// manawu ikonka wuni topolmayapti  blin
// manawuni ornatmagansaaaan deyaptida hop hoz ko'raychi shuni    iconca deyotgandyu nm qildiz uni
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
const About = () => {
  return (
    <AboutPageWrapper>
      <div>
        <h3 className="text-center w-100 bg_succes py-5">MyTeacher/Webclass haqida</h3>
        <div className="container py-5">
          <Accordion>
            <AccordionSummary
            
            expandIcon={<ExpandMoreIcon className="expandIcon"/>}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>
                <h5>Biz haqimizda</h5>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <h3 className="py-3">Webcltass haqida</h3>
                <p>
                  “Webclass online maktabi” nodavlat ta’lim muassasasi Ingliz,
                  Rus, Nemis, Koreys va Yapon tillarini maksimal qulaylikda,
                  oson va tez o’rgatish bo’yich yangi va biz uchun hali noodatiy
                  bo’lgan online platforma – Webclass.uz loyihasini yo’lga
                  qo’ydi.
                  <br />
                  <br />
                  Bu maktab yurtimizda 2018 yil birinchi marta joriy qilingan
                  bo’lib, o’qitish tizimi boshqalardan tubdan farq qiladi, ya’ni
                  o’qituvchilar o’rganuvchilarga o’zlari aloqaga chiqib onlayn
                  dars o’tishadi. Siz o’zingizga qulay vaqtni yozdirib
                  qo’ysangiz bo’lgani.
                  <br />
                  <br />
                  Ushbu loyihani yaratilishga asosiy turtki bo’lgan yana bir
                  omil bu - ko’plab jismoniy imkoniyati cheklangan
                  vatandoshlarimizga til o’rganishlari uchun qulay imkoniyat
                  yaratish istagidir.
                  <br />
                  <br />
                  Bunday o’qitish tizimi Rossiya va yevropa davlatlarida juda
                  ommalashgan bo’lib, hozirgi kunda til o’rganuvchilarning 70
                  foizdan ortig’i aynan shu tizimdan foydalanadilar. Misol
                  sifatida Skyeng va Englishdom kabi onlayn maktablarini
                  ko’rsatish mumkin. Lekin bunday kurslarning har bir soati
                  o’rtacha 12-18$ (120 000 so’mdan yuqori) ga to’g’ri keladi.
                  Albatta bu bizning yurtimiz uchun anchagina qimmatlik qiladi.
                  <br />
                  <br />
                  Aslini olganda ham bunday o’rganish juda qulay va samarali
                  hisoblanadi. Masalan, uyda, ko’chada, ishxonada va hattoki
                  sayohatda bo’lganingizda ham birorta darsingiz qolib ketmaydi.
                  Siz sevimli smartfoningiz yoki planshetingiz orqali
                  o’qituvchingizga ulanib, darslaringizni davom ettirishingiz
                  mumkin.
                </p>
                <h4 className="pt-4 pb-3">
                  Bunday kurslarning afzalliklari nimada va u kimlar uchun?
                </h4>
                <p>
                  Statistikaga ko’ra kishi biror bir o’quv kursiga yoki
                  mashg’ulotga qatnab o’rgansa, bir yarim soatlik mashg’ulotga
                  qatnashish uchun tayyorgarlik, yo’l va kutish vaqtlarini
                  qo’shib hisoblaganda, kamida uch soat sarflar ekan. Hozirgi
                  tez va shiddatli davrda bizning nafaqat bir soatimiz, hattoki
                  har bir daqiqamiz qanchalik qadrli ekanini siz yaxshi bilasiz.
                </p>
                <h5>Ushbu til kurslarining afzalliklari quyidagicha:</h5>
                <p className="py-3">
                  <span className="px-2">
                    <FontAwesomeIcon
                      className="checIcon"
                      icon={faCheckCircle}
                    />
                  </span>{" "}
                  Vaqtningizni maksimal taqsimlay olasiz;
                </p>
                <p className="py-3">
                  <span className="px-2">
                    <FontAwesomeIcon
                      className="checIcon"
                      icon={faCheckCircle}
                    />
                  </span>{" "}
                  Offlayn kurslardan farqli o'laroq, bir o’zingiz uchun bir
                  o’qituvchi biriktiriladi;
                </p>
                <p className="py-3">
                  <span className="px-2">
                    <FontAwesomeIcon
                      className="checIcon"
                      icon={faCheckCircle}
                    />
                  </span>{" "}
                  Qayerda yashashingizdan qat’iy nazar o’rganish imkoniyati
                  mavjud;
                </p>
                <p className="py-3">
                  <span className="px-2">
                    <FontAwesomeIcon
                      className="checIcon"
                      icon={faCheckCircle}
                    />
                  </span>{" "}
                  Sevimli gadjetingiz, albatta, qog’ozlardan ko’ra qiziqarli va
                  qulay;
                </p>
                <p className="py-3">
                  <span className="px-2">
                    <FontAwesomeIcon
                      className="checIcon"
                      icon={faCheckCircle}
                    />
                  </span>{" "}
                  Onlayn klublarga a’zo bo’lasiz;
                </p>
                <p className="py-3">
                  <span className="px-2">
                    <FontAwesomeIcon
                      className="checIcon"
                      icon={faCheckCircle}
                    />
                  </span>{" "}
                  Transport va tushlik uchun har kunlik xarajatlarni tejab
                  qolasiz;
                </p>
                <p className="py-3">
                  <span className="px-2">
                    <FontAwesomeIcon
                      className="checIcon"
                      icon={faCheckCircle}
                    />
                  </span>{" "}
                  Darslar intensiv va yangicha metodlarda olib boriladi;
                </p>
                <p className="py-3">
                  <span className="px-2">
                    <FontAwesomeIcon
                      className="checIcon"
                      icon={faCheckCircle}
                    />
                  </span>{" "}
                  Bu qanday ishlaydi?
                </p>
                <h3 className="py-2">Bu qanday ishlaydi?</h3>
                <p>
                  O’rganuvchilar yoshi, faoliyat turi, qayerda yashashi va bilim
                  darajasidan qat’iy nazar, operatorga o’rganmoqchiligi haqida
                  www.webclass.uz sayti orqali murojaat qiladi. Undan so’ng
                  operator o’quvchiga bepul kirish darsi belgilaydi. Kirish
                  darsida o’quvchining joriy bilim darajasi, o’rganishdan
                  maqsadi va qiziqishlari aniqlanib, unga mos dars rejasi ishlab
                  chiqiladi, hamda qisqa namunaviy dars o’tib ko’rsatiladi. Agar
                  o’rganuvchi darsni ma’qul deb topsa tegishli dars paketi uchun
                  bank, click, paynet yoki payme orqali tegishli to’lovni amalga
                  oshiradi hamda o’rganishni boshlaydi.
                  <br />
                  <br />
                  <br />
                  Qolaversa, Webclass kompaniyasi chet tillarini yaxshi
                  biladigan, masofaviy ta’limga qiziqishi bor bo’lgan malakali
                  o’qituvchilarni hamkorlikka chorlaydi. Agar sizning chet
                  tilini bilish darajangiz yuqori bo’lsa va pedagogik
                  mahoratingizga ishonsangiz Onlayn maktab sizga qo’shimcha
                  daromad olish imkonini taqdim etadi, buning uchun
                  +998999253159 raqamiga murojaat qilishingiz yoki telegram
                  messenjeri orqali o’zingiz haqingizda ma’lumot (Resume)
                  yuborishingiz mumkin.
                </p>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon className="expandIcon"/>}

              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography><h5>Xizmatlar</h5></Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
            expandIcon={<ExpandMoreIcon className="expandIcon"/>}

              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography> <h5>Bizning yutuq va litsenziyalarimiz</h5></Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <div>
            
          </div>
        </div>
      </div>
    </AboutPageWrapper>
  );
};

export default About;
