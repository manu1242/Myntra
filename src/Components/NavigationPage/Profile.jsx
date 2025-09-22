import "./Profile.css";
function Profile() {
  return (
    <>
      <div className="profileContainer">
        <h4 className="h4">Welcome</h4>
        <p>To access account and manage orders</p>
        <button className="btn">LOGIN/SIGNUP</button>
        <hr></hr>
        <p className="orders">Orders</p>
        <p>WishList</p>
        <p>Contact Us</p>
        <p className="inside">Myntra Insider</p>
        <hr></hr>
        <p className="Credit">Myntra Credit</p>
        <p>Coupons</p>
        <p>Saved Cards</p>
        <p>Saved VPA</p>
        <p>Saved Addresses</p>
      </div>
    </>
  );
}

export default Profile;
