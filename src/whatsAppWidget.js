import React, {useEffect} from 'react';
import $ from 'jquery';

import './whatsAppWidget.module.css'

// For animations
import Lottie from "lottie-react";
// import whatsAppAnimation from "../static/animation/40986-whatsapp-icon-2020.json";
import whatsAppAnimation from "../static/animation/33991-whatsapp.json";


// for localization
import { useTranslations } from 'next-intl';

const WhatsAppWidget = ({whatsappwidget}) => {

    const t = useTranslations('WhatsApp');

    useEffect(() => {
        
    /* Whatsapp Chat Widget by www.bloggermix.com */
    $(document).on("click", "#send-it", function() {
        var a = document.getElementById("chat-input");
        if ("" != a.value) {
        var b = $("#get-number").text(),
            c = document.getElementById("chat-input").value,
            d = "https://web.whatsapp.com/send",
            e = b,
            f = "&text=" + c;
        if (
            /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
            )
        )
            var d = "whatsapp://send";
        var g = d + "?phone=+81 70-2217-6969" + e + f;
        window.open(g, "_blank");
        }
    }),
        $(document).on("click", ".informasi", function() {
        (document.getElementById("get-number").innerHTML = $(this)
            .children(".my-number")
            .text()),
            $(".start-chat,.get-new")
            .addClass("show")
            .removeClass("hide"),
            $(".home-chat,.head-home")
            .addClass("hide")
            .removeClass("show"),
            (document.getElementById("get-nama").innerHTML = $(this)
            .children(".info-chat")
            .children(".chat-nama")
            .text()),
            (document.getElementById("get-label").innerHTML = $(this)
            .children(".info-chat")
            .children(".chat-label")
            .text());
        }),
        $(document).on("click", ".close-chat", function() {
        $("#whatsapp-chat")
            .addClass("hide")
            .removeClass("show");
        }),
        $(document).on("click", ".blantershow-chat", function() {
        $("#whatsapp-chat")
            .addClass("show")
            .removeClass("hide");
        });
  
    }, []);


return (

    <div className="whatsapp-chat-global">
    <div id="whatsapp-chat" className="hide">
      <div className="header-chat">
        <div className="head-home">
          <div className="info-avatar"><img src="../static/images/logo_small_black.jpeg" /></div>
          <p><span className="whatsapp-name">Hisham Yabani</span><br /><small>{t("Typically replies within an hour")}</small></p>
        </div>
        <div className="get-new hide">
          <div id="get-label" />
          <div id="get-nama" />
        </div>
      </div>
      <div className="home-chat">
      </div>
      <div className="start-chat">
        <div pattern="https://elfsight.com/assets/chats/patterns/whatsapp.png" className="WhatsappChat__Component-sc-1wqac52-0 whatsapp-chat-body">
          <div className="WhatsappChat__MessageContainer-sc-1wqac52-1 dAbFpq">
            <div style={{opacity: 0}} className="WhatsappDots__Component-pks5bf-0 eJJEeC">
              <div className="WhatsappDots__ComponentInner-pks5bf-1 hFENyl">
                <div className="WhatsappDots__Dot-pks5bf-2 WhatsappDots__DotOne-pks5bf-3 ixsrax" />
                <div className="WhatsappDots__Dot-pks5bf-2 WhatsappDots__DotTwo-pks5bf-4 dRvxoz" />
                <div className="WhatsappDots__Dot-pks5bf-2 WhatsappDots__DotThree-pks5bf-5 kXBtNt" />
              </div>
            </div>
            <div style={{opacity: 1}} className="WhatsappChat__Message-sc-1wqac52-4 kAZgZq">
              <div className="WhatsappChat__Author-sc-1wqac52-3 bMIBDo">Hisham Yabani</div>
              <div className="WhatsappChat__Text-sc-1wqac52-2 iSpIQi">{t("Hi there")} 👋<br /><br />{t("How can I help you?")}</div>
              <div className="WhatsappChat__Time-sc-1wqac52-5 cqCDVm">1:40</div>
            </div>
          </div>
        </div>
        <div className="blanter-msg">
          <textarea id="chat-input" placeholder={t("Write a response")} maxLength={120} row={1} defaultValue={""} />
          <a href="javascript:void;" id="send-it">
            <svg viewBox="0 0 448 448"><path d="M.213 32L0 181.333 320 224 0 266.667.213 416 448 224z" /></svg>
          </a>
        </div>
      </div>
      <div id="get-number" /><a className="close-chat" href="javascript:void">×</a>
    </div>
    <a className="blantershow-chat" href="javascript:void" title="Show Chat" style={{backgroundColor: "transparent", boxShadow: "none", borderRadius: "50%"}}>
      {/* <svg width={20} viewBox="0 0 24 24"><defs /><path fill="#eceff1" d="M20.5 3.4A12.1 12.1 0 0012 0 12 12 0 001.7 17.8L0 24l6.3-1.7c2.8 1.5 5 1.4 5.8 1.5a12 12 0 008.4-20.3z" /><path fill="#4caf50" d="M12 21.8c-3.1 0-5.2-1.6-5.4-1.6l-3.7 1 1-3.7-.3-.4A9.9 9.9 0 012.1 12a10 10 0 0117-7 9.9 9.9 0 01-7 16.9z" /><path fill="#fafafa" d="M17.5 14.3c-.3 0-1.8-.8-2-.9-.7-.2-.5 0-1.7 1.3-.1.2-.3.2-.6.1s-1.3-.5-2.4-1.5a9 9 0 01-1.7-2c-.3-.6.4-.6 1-1.7l-.1-.5-1-2.2c-.2-.6-.4-.5-.6-.5-.6 0-1 0-1.4.3-1.6 1.8-1.2 3.6.2 5.6 2.7 3.5 4.2 4.2 6.8 5 .7.3 1.4.3 1.9.2.6 0 1.7-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.2-.3-.3-.6-.4z" /></svg>  */}
      <Lottie 
            animationData={whatsAppAnimation} 
            loop={false}
            className="whatsapp-icon"
            style={{padding:"10px", height:"100px", backgroundColor: "transparent", backgroundSize: "30px 30px", borderRadius: "60px"}}
        />
    {/* {t("Chat with Us")} */}
    </a>
  </div>
)
}

export default WhatsAppWidget;