import AdSense from "react-adsense";

const Advertisement = () => {
  return (
    <AdSense.Google
      client="ca-pub-2888882780214364"
      slot="4014328908"
      style={{ display: "block" }}
      layout="in-article"
      format="fluid"
      responsive="true"
    />
  );
};

export default Advertisement;
