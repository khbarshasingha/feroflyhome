import React from "react";

const Homepage = () => {
  return (
    <div class="mt3 gr">
      <div>
        checkin
        <br /> <input type="date" placeholder="DD MM YY" />
      </div>
      <div>
        checkout
        <br /> <input type="date" placeholder="DD MM YY" />
      </div>
      <div>
        Adults
        <br /> <input type="number" value="1" />
      </div>
      <div>
        Kids
        <br /> <input type="number" value="1" />
      </div>
    </div>
  );
};

export default Homepage;
