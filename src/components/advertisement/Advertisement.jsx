import React, { useEffect } from "react";
import AdSense from "react-adsense";

const Advertisement = ({ slot }) => {
  return (
    // <div className="ad-container">
    //   <AdSense.Google
    //     client="ca-pub-2888882780214364"
    //     slot="4014328908"
    //     style={{ display: "block" }}
    //     format="auto"
    //     responsive="true"
    //   />
    // </div>
    <ins
      className="adsbygoogle"
      style={{ display: "block", textAlign: "center" }}
      data-ad-layout="in-article"
      data-ad-format="fluid"
      data-ad-client="ca-pub-2888882780214364"
      data-ad-slot={slot}
    ></ins>
  );
};

export default Advertisement;
