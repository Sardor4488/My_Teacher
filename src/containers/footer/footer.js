import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
 import React from "react";
import { Link } from "react-router-dom";
import FooterWrapper from "./footerWrapper";
import logotip from "./Logo.png";
import { faFacebookF, faInstagram, faTelegramPlane,faYoutube } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <FooterWrapper>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <img src={logotip} alt="" />
              <p className="colorFooterText py-2"></p>
              <p>
                <span className="colorFooterText fw-bold  ">Rasmiy nom:</span>
                "WEBCLASS ONLINE MAKTABI" NTM
              </p>
              <p className="pt-1">
                <span className="colorFooterText fw-bold">STIR: </span>307509775{" "}
              </p>
              <p className="pb-2">
                <span className="colorFooterText fw-bold">MFO: </span>01163{" "}
              </p>
              <p>
                <span className="colorFooterText fw-bold  ">Bank h/r:</span>
                2021 2000 9052 4569 5001 "Hamkorbank" ATB Yunusobod filial
              </p>
            </div>
            <div className="col-md-3">
              <h4 className="pb-3">Menyu</h4>
              <Link to="/" className="footerLinks">Asosiy</Link>
              <Link to="/about" className="footerLinks">Biz haqimizda</Link>
              <Link to= "/blog" className="footerLinks">Blog</Link>
              <Link to= "/comment" className="footerLinks">Fikrlar</Link>
              <Link to= "" className="footerLinks">Jamoa</Link>
            </div>
            <div className="col-md-3">
              <h4 className="pb-3">Eng so'nggi yangiliklar</h4>
              <Link className="footerLinks">
                Bizga investitsiya kiriting…...
              </Link>
              <Link className="footerLinks">
                Daryo.uz maqolasi: Audio kursm...
              </Link>
              <Link className="footerLinks">
                Xabar.uz maqolasi: Ikki yosh f...
              </Link>
            </div>
            <div className="col-md-3">
              <p className="
              py-2">
                <span className="colorFooterText fw-bold  ">Telefon:</span>
                +998973003011
              </p>
              <p className="
              py-2">
                <span className="colorFooterText fw-bold  ">E-mail: </span><br />
                info@myteacher.uz
              </p>
              
              <p className="
              py-2">
                <span className="colorFooterText fw-bold  ">
                  Rasmiy manzil:
                </span><br />
                Toshkent shahri, Yunusobod tumani, 19-mavze, 17-uy
              </p>
              <p className="
              py-2">
                <span className="   ">
                Ishtimoiy tarmoqlar:
                </span><br />
                <Link><span className="p-2"><FontAwesomeIcon icon={faFacebookF}/></span></Link>
                <Link><span className="p-2"><FontAwesomeIcon icon={faInstagram}/></span></Link>
                <Link><span className="p-2"><FontAwesomeIcon icon={faTelegramPlane}/></span></Link>
                <Link><span className="p-2"><FontAwesomeIcon icon={faYoutube}/></span></Link>
               </p>
            </div>
          </div>

        </div>
        <div className="edn mt-5 py-2">
          <div className="container">
            <p className="fw-bold">MyTeacher© 2021 Barcha xizmatlar litsenziyalangan</p>
          </div>
        </div>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
