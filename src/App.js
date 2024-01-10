import "./App.css";
import nishyan from "./icons/nishyan.png";
import vector from "./icons/Vector.png";
import home from "./icons/Home.png";
import analytics from "./icons/analytics.jpg";
import apperances from "./icons/Apperances.png";
import audience from "./icons//Audience.png";
import delivery from "./icons/Delivery.png";
import marketing from "./icons/Marketing.png";
import orders from "./icons/Orders.png";
import payments from "./icons/Payments.png";
import plugins from "./icons/Plugins.png";
import products from "./icons/Products.png";
import tools from "./icons/Tools.png";
import discounts from "./icons/Discounts.png";
import wallet from "./icons/wallet.png";
import questionmark from "./headers/Vector.png";

import message from "./headers/Menu.png";
import arrow from "./headers/arrow.png";

function App() {
  return (
    <div className="flex-container-row ">
      <nav className="navbar gap-row-24 flex-container-column">
        {/* For Company Icon */}
        <div className="flex-container margin-8 gap-column-12 height-42 ">
          <img src={nishyan} alt="icon" className="companyicon" />

          <div className="flex-1 flex-container-column gap-row-4 ">
            <div style={{ fontSize: "18px" }}>Nishyan</div>
            <div
              className="underline-offset-1 "
              style={{ textDecoration: "underline", fontWeight: "300" }}
            >
              Visit store
            </div>
          </div>
          <div>
            <img src={vector} alt="icon" />
          </div>
        </div>
        {/* For Pages */}
        <div className="flex-container-column gap-row-4 flex-1">
          <div className="flex-container-row pages gap-column-12 ">
            <img src={home} alt="icon" />
            <div className="flex-1">Home</div>
          </div>
          <div className="flex-container-row pages gap-column-12 ">
            <img src={orders} alt="icon" />
            <div className="flex-1">Orders</div>
          </div>
          <div className="flex-container-row pages gap-column-12 ">
            <img src={products} alt="icon" />
            <div className="flex-1">Products</div>
          </div>
          <div className="flex-container-row pages gap-column-12 ">
            <img src={delivery} alt="icon" />
            <div className="flex-1">Delivery</div>
          </div>
          <div className="flex-container-row pages gap-column-12 ">
            <img src={marketing} alt="icon" />
            <div className="flex-1">Marketing</div>
          </div>
          <div className="flex-container-row pages gap-column-12 ">
            <img src={analytics} alt="icon" />
            <div className="flex-1">Analytics</div>
          </div>
          <div
            style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
            className="flex-container-row pages gap-column-12 "
          >
            <img src={payments} alt="icon" />
            <div className="flex-1">Payments</div>
          </div>
          <div className="flex-container-row pages gap-column-12 ">
            <img src={tools} alt="icon" />
            <div className="flex-1">Tools</div>
          </div>
          <div className="flex-container-row pages gap-column-12 ">
            <img src={discounts} alt="icon" />
            <div className="flex-1">Discounts</div>
          </div>
          <div className="flex-container-row pages gap-column-12 ">
            <img src={audience} alt="icon" />
            <div className="flex-1">Audience</div>
          </div>
          <div className="flex-container-row pages gap-column-12 ">
            <img src={apperances} alt="icon" />
            <div className="flex-1">Apperances</div>
          </div>
          <div className="flex-container-row pages gap-column-12 ">
            <img src={plugins} alt="icon" />
            <div className="flex-1">Plugins</div>
          </div>
        </div>
        {/* For Bottom */}

        <div className="flex-container-row gap-column-10 nav-bottom">
          <img src={wallet} alt="icon" className="walleticon" />
          <div className="flex-container-column gap-row-2">
            <div style={{ fontWeight: "300" }}>Available credits</div>
            <div>222.10</div>
          </div>
        </div>
      </nav>
      <div className="flex-container-column frame">
        <header className="dashboard-header flex-container gap-column-16">
          <div className="flex-container-row gap-column-16 frame-1">
            <div>Payments</div>
            <div className="flex-container gap-column-6">
              <img
                style={{ width: "14px", height: "14px" }}
                src={questionmark}
                alt="icon"
              />
              <div style={{ fontSize: "12px", fontWeight: "300" }}>
                How it works
              </div>
            </div>
          </div>
          <div>
            <input
              className="searchBar"
              placeholder="Search features, tutorials, etc."
            />
          </div>
          <div className="gap-column-12 flex-container-1 frame-3">
            <div>
              <img src={message} alt="icon" />
            </div>
            <div>
              <img src={arrow} alt="icon" />
            </div>
          </div>
        </header>

        <section className="Section">
          <div></div>
          <div></div>
        </section>
      </div>
    </div>
  );
}

export default App;
