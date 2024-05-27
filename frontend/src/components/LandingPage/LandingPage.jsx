import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Header from "./Header/Header";
import Pricing from "./Pricing/Pricing";
import Features from "./Features/Features";
import Footer from "./Footer/Footer";
import AboutUs from "./AboutUs/AboutUs";


const LandingPage = () => {
  const navigate = useNavigate();

  // useEffect(() => {
  //   const script = document.createElement("script");
  //   script.src = "https://cdn.botpress.cloud/webchat/v1/inject.js";
  //   script.async = true;

  //   script.onload = () => {
  //     window.botpressWebChat.init({
  //       // Your chatbot configuration goes here
  //       "composerPlaceholder": "Sportz Chatbot",
  //       "botConversationDescription": "Welcome!",
  //       "botId": "39f05996-025d-4ffe-b2ab-4966c250c911",
  //       "hostUrl": "https://cdn.botpress.cloud/webchat/v1",
  //       "messagingUrl": "https://messaging.botpress.cloud",
  //       "clientId": "39f05996-025d-4ffe-b2ab-4966c250c911",
  //       "webhookId": "7ea2a216-1ee0-4003-89b4-43e6574bfb28",
  //       "lazySocket": true,
  //       "themeName": "prism",
  //       "botName": "Sportz Chatbot",
  //       "avatarUrl": "",
  //       "stylesheet": "https://webchat-styler-css.botpress.app/prod/d2e5a646-5c11-4eb0-8b31-e9caee6206ae/v5834/style.css",
  //       "frontendVersion": "v1",
  //       "useSessionStorage": true,
  //       "enableConversationDeletion": true,
  //       "theme": "prism",
  //       "themeColor": "#2563eb"
  //     });
  //   };

  //   document.head.appendChild(script);

  //   return () => {
  //     // Destroy chatbot when the component unmounts
  //     if (window.botpressWebChat && typeof window.botpressWebChat.destroy === "function") {
  //       window.botpressWebChat.destroy();
  //     }

  //     // Cleanup script
  //     document.head.removeChild(script);
  //   };
  // }, [navigate]);

  return (
    <>
      {/* Pratik */}
      <Navbar />
      <Header />

      {/* Sadiya  */}
      <Features />

      {/* Yuvraj */}
      <Pricing />

      <AboutUs />

      {/* Yashfin */}
      <Footer />
    </>
  );
};

export default LandingPage;
