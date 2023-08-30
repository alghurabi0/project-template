import React from "react";
import "./MainBanner.scss";

function FreeShippingBar() {
  return (
    <div className="page-width">
      <div className="grid grid-cols-1 md:grid-cols-3 md:divide-x border-divider border my-3">
        <div className="p-2 border-divider d-flex flex-column align-items-center text-center">
          <img src="/fast-delivery.png"
          alt="Free shipping"
          style={{ width: '60px', height: '60px', margin: '0 auto' }} />
          <h3>Free Shipping</h3>
          <p>on orders over 15$</p>
        </div>
        <div className="p-2 border-divider d-flex flex-column align-items-center text-center">
          <img src="/zain-cash.png"
          alt="Zain Cash Payment"
          style={{ width: '60px', height: '60px', margin: '0 auto' }} />
          <h3>Zain Cash</h3>
          <p>payments with Zain Cash supported</p>
        </div>
        <div className="p-2 border-divider d-flex flex-column align-items-center text-center">
          <img src="/box.png"
          alt="Fast Delivery"
          style={{ width: '60px', height: '60px', margin: '0 auto' }} />
          <h3>Same Day Delivery</h3>
          <p>when ordered before 2pm</p>
        </div>
      </div>
    </div>
  );
}

export default FreeShippingBar;

export const layout = {
  areaId: "content",
  sortOrder: 2,
};
