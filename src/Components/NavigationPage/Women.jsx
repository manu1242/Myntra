import "./Women.css";
function Women() {
  const list = [
    "Kurtas & Suits",
    "Kurtas,Tunics",
    "FormalShirts",
    "SweatShirts",
    "Sweaters",
    "Jackets",
    "Blazers&Coats",
    "Suits",
    "Rain Jackets",
  ];

  const list2 = ["Kurtas Sets", "Sherwanis", "Nehru Jackets", "Dhoits"];

  const list3 = [
    "Jeans",
    "Casual Trousers",
    "Formal Trousers",
    "Shorts",
    "TrackPants & Joggers",
  ];

  const list4 = ["Briefs&Trunks", "Boxers", "Vests", "Sleepwear", "Thermals"];

  const list5 = [
    "Casual shoes",
    "Sports shoes",
    "Formalshoes",
    "Sneakers",
    "Sandels",
    "Flip Flops",
    "Socks",
  ];

  const list6 = [
    "Sports Shoes",
    "Sports Sandles",
    "Active T-Shirts",
    "TrackPants&shorts",
    "Track Suits",
    "Jackets&sweatersShirts",
    "Sports Accessories",
    "Swimwear",
  ];

  const list7 = ["Smart Wearables", "Fitness Gadgets", "HeadPhone", "Speakers"];

  const list8 = [
    "Wallets",
    "Belts",
    "Perfumes & Body Mists",
    "Trimmers",
    "Deodorants",
    "Ties,Cufflinks & pockets Squares",
    "Accessory Gifts Sets",
    "Caps & Hats",
    "PhoneCases",
    "Rings & WirstWear",
    "Helmets",
  ];

  return (
    <>
      <div className="Beautycont">
        <div className="innercontainer">
          <h5 className="wh5">Indian& Fusion wear</h5>

          {list.map((value) => {
            return (
              <>
                <li>{value}</li>
              </>
            );
          })}

          <hr></hr>
          <h5 className="wh5">Indian & Festive Wear </h5>
          {
          list2.map((value) => {
            return (
              <>
                <li>{value}</li>
              </>
            );
          })
          }
        </div>

        <div className="innercontainer2">
          <h5 className="wh5">Bottom Wear</h5>
          {list3.map((value) => {
            return (
              <>
                <li>{value}</li>
              </>
            );
          })}
          <hr></hr>
          <h5 className="wh5">Inner Wear & sleepwear</h5>
          {list4.map((value) => ( <li>{value} </li>))}
           
        
        </div>

        <div className="innercontainer3">
          <h5 className="wh5">Footwear</h5>
          {list5.map((value) => {
            return (
              <>
                <li>{value}</li>
              </>
            );
          })}
          <hr></hr>
        </div>

        <div className="innercontainer4">
          <h5 className="wh5">Sports & active Wear</h5>
          {list6.map((value) => {
            return (
              <>
                <li>{value}</li>
              </>
            );
          })}
          <hr></hr>
          <h5 className="wh5">Gadgets</h5>
          {list7.map((value) => {
            return (
              <>
                <li>{value}</li>
              </>
            );
          })}
        </div>

        <div className="innercontainer5">
          <h5 className="wh5">Fashion Accessories</h5>
          {list8.map((value) => {
            return (
              <>
                <li>{value}</li>
              </>
            );
          })}
          <hr></hr>
          <h5 className="wh5">Bags & Backpacks</h5>
          <h5 className="wh5">Luggages & Trolleys</h5>
        </div>
      </div>
    </>
  );
}

export default Women;