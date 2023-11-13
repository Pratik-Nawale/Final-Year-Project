import React from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  // const elements = [
  //   {
  //     title: "Products",
  //     subLinks: [
  //       {
  //         title: "Intelligent Supply Chain Extensions",
  //         link: "/intelligent-supply-chain-extensions",
  //       },
  //       {
  //         title: "Autonomous Forecasting and Replenishment",
  //         link: "/autonomous-forecasting-and-replenishment",
  //       },
  //       {
  //         title: "Boosters and Accelerators",
  //         link: "/boosters-and-accelerators",
  //       },
  //       {
  //         title: "Portals",
  //         link: "/portals",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Services",
  //     subLinks: [
  //       {
  //         title: "Audit",
  //         link: "/audit",
  //       },
  //       {
  //         title: "Implementation",
  //         link: "/implementation",
  //       },
  //       {
  //         title: "Solution Operation ( Run & Maintain)",
  //         link: "/solution-operation",
  //       },
  //       {
  //         title: "Independent Software Evaluation",
  //         link: "/independent-software-evaluation",
  //       },
  //       {
  //         title: "Enterprise Application Integration(EAI)",
  //         link: "/enterprise-application-integration",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Industries",
  //     subLinks: [
  //       {
  //         title: "Agri business",
  //         link: "/agri-business",
  //       },
  //       {
  //         title: "Diary",
  //         link: "/diary",
  //       },
  //       {
  //         title: "FMCG & CPG",
  //         link: "/fmcg-cpg",
  //       },
  //       {
  //         title: "Retail",
  //         link: "/retail",
  //       },
  //       {
  //         title: "MRO & Spares(After Market)",
  //         link: "/mro-and-spares",
  //       },
  //       {
  //         title: "Pharmaceuticals",
  //         link: "/pharmaceuticals",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Technologies",
  //     subLinks: [
  //       {
  //         title: "SAP SCM",
  //         link: "/sap-scm",
  //       },
  //       {
  //         title: "SAP S4HANA",
  //         link: "/sap-s4hana",
  //       },
  //       {
  //         title: "SAP BW on HANA",
  //         link: "/sap-bw-on-hana",
  //       },
  //       {
  //         title: "SAP SAC",
  //         link: "/sap-sac",
  //       },
  //       {
  //         title: "SAP IBP",
  //         link: "/sap-ibp",
  //       },
  //       {
  //         title: "SAP BTP",
  //         link: "/sap-btp",
  //       },
  //     ],
  //   },
  //   {
  //     title: "Partners",
  //     subLinks: [
  //       {
  //         title: "Logility",
  //         link: "/logility",
  //       },
  //       {
  //         title: "Arkieva",
  //         link: "/arkieva",
  //       },
  //       {
  //         title: "Novobi",
  //         link: "/novobi",
  //       },
  //       {
  //         title: "Kinaxis",
  //         link: "/kinaxis",
  //       },
  //     ],
  //     isSub: true,
  //   },
  // ];
  const elements = [
    "Products",
    "Services",
    "Industries",
    "Technologies",
    "Partners",
  ];
  const otherLinks = [
    {
      title: "Sitemap",
      link: "/sitemap",
    },
    {
      title: "Term of Use",
      link: "/term-of-use",
    },
    {
      title: "Privacy policy",
      link: "/privacy-policy",
    },
    {
      title: "Security",
      link: "/security",
    },
    {
      title: "Accessibility",
      link: "/accessibility",
    },
  ];
  return (
    <div id="main-footer-div">
      <div id="upper-footer">
        {/* <div id="footer-logo">
          <img src="logo.png" alt="" />
          <div id="socials-logo">
            <NavLink to="#">
              <i class="fa fa-linkedin" aria-hidden="true"></i>
            </NavLink>
            <NavLink to="#">
              <i class="fa-brands fa-twitter"></i>
            </NavLink>
            <NavLink to="#">
              <i class="fa-brands fa-facebook-f"></i>
            </NavLink>
            <NavLink to="#">
              <i class="fa-brands fa-youtube"></i>
            </NavLink>
            <NavLink to="#">
              <i class="fa-brands fa-instagram"></i>
            </NavLink>
          </div>
        </div> */}
        <div id="footer-nav">
          {elements.map((ele, key) => (
            // <div key={key} className="footer-nav-inner">
            <a href="#">{ele}</a>
            // {ele.subLinks.map((it, key) => (
            //   <NavLink key={key} to={it.link}>
            //     {it.title}
            //   </NavLink>
            // ))}
            // </div>
          ))}
        </div>
        {/* <div id="footer-newsletter">
          <button>GET THE NEWSLETTER</button>
        </div> */}
      </div>
      <div id="lower-footer">
        <div id="copy-right">&copy; Lydian Inc. 2023. All Rights Reserved</div>
        <div id="other-sections">
          {otherLinks.map((ele, key) => (
            <>
              <NavLink to={ele.link} key={key}>
                {ele.title}
              </NavLink>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
