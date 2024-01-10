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
import headersearch from "./headers/search.png";
import blackarrow from "./frames/arrow.png";
import sort from "./frames/Sort.png";
import download from "./frames/download.png";
import orderArrow from "./frames/orderArrow.png";
import transaction from "./frames/transaction.png";
import rightArrow from "./frames/Chevron Right.png";
import leftArrow from "./frames/Chevron left.png";

function DataCard({ heading, value }) {
  return (
    <div className="databox flex-container-column gap-row-16">
      <div
        style={{
          fontSize: "16px",
          fontWeight: "400",
          color: "#4D4D4D",
        }}
      >
        {heading}
      </div>
      <div style={{ fontSize: "32px" }}>{value}</div>
    </div>
  );
}

function App() {
  return (
    <div className="flex-container-row whole">
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
          <div className="flex-container-start searchBar gap-column-8">
            <img src={headersearch} alt="icon" />
            <input
              className="search-input"
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

        <section className="section flex-container-column gap-row-32">
          <div className="gap-row-24 flex-container-column">
            <div className="flex-container">
              <div>Overview</div>
              <div className="flex-container gap-column-12 filter">
                <div>Last Month</div>
                <img src={blackarrow} alt="icon" />
              </div>
            </div>
            <div className="flex-container-row gap-column-20">
              <DataCard heading={"Online Orders"} value={231} />
              <DataCard heading={"Amount Received"} value={"23,92,312.19"} />
            </div>
          </div>

          <div className="flex-container-column gap-row-20">
            <div>Transaction | This Month</div>
            <div className="section-data ">
              <div className="gap-row-12 flex-container-column">
                <div className="flex-container">
                  <div className="flex-container-start searchBar-1 gap-column-8">
                    <img src={headersearch} alt="icon" />
                    <input
                      className="search-input-1"
                      placeholder="Search by order ID..."
                    />
                  </div>
                  <div className="flex-container gap-column-12">
                    <div className="flex-container gap-column-6 sort">
                      <div>Sort</div>
                      <img src={sort} alt="icon" />
                    </div>
                    <div className="download ">
                      <img src={download} alt="icon" />
                    </div>
                  </div>
                </div>

                <div className="flex-container gap-column-40 data-column-header">
                  <div className="data-container">Order ID</div>
                  <div className="flex-container-start gap-column-4 data-container">
                    <div>Order date</div>
                    <img
                      style={{ width: "8px", height: "8px" }}
                      src={orderArrow}
                      alt="icon"
                    />
                  </div>
                  <div className="data-container flex-container-1">
                    Order Amount
                  </div>
                  <div className="flex-container-1 gap-column-4 data-container">
                    <div>Transaction Fees</div>
                    <img
                      style={{ width: "14px", height: "14px" }}
                      src={transaction}
                      alt="icon"
                    />
                  </div>
                </div>
              </div>
              <div>
                <div className="flex-container gap-column-40 data-column">
                  <div className="data-container blue-color">#281209</div>
                  <div className="  data-container">7 July, 2023</div>
                  <div className="data-container flex-container-1">
                    ₹1,278.23
                  </div>
                  <div className="flex-container-1  data-container">₹22</div>
                </div>
                <div className="flex-container gap-column-40 data-column">
                  <div className="data-container blue-color">#281209</div>
                  <div className="  data-container">7 July, 2023</div>
                  <div className="data-container flex-container-1">
                    ₹1,278.23
                  </div>
                  <div className="flex-container-1  data-container">₹22</div>
                </div>
                <div className="flex-container gap-column-40 data-column">
                  <div className="data-container blue-color">#281209</div>
                  <div className="  data-container">7 July, 2023</div>
                  <div className="data-container flex-container-1">
                    ₹1,278.23
                  </div>
                  <div className="flex-container-1  data-container">₹22</div>
                </div>
                <div className="flex-container gap-column-40 data-column">
                  <div className="data-container blue-color">#281209</div>
                  <div className="  data-container">7 July, 2023</div>
                  <div className="data-container flex-container-1">
                    ₹1,278.23
                  </div>
                  <div className="flex-container-1  data-container">₹22</div>
                </div>
                <div className="flex-container gap-column-40 data-column">
                  <div className="data-container blue-color">#281209</div>
                  <div className="  data-container">7 July, 2023</div>
                  <div className="data-container flex-container-1">
                    ₹1,278.23
                  </div>
                  <div className="flex-container-1  data-container">₹22</div>
                </div>
                <div className="flex-container gap-column-40 data-column">
                  <div className="data-container blue-color">#281209</div>
                  <div className="  data-container">7 July, 2023</div>
                  <div className="data-container flex-container-1">
                    ₹1,278.23
                  </div>
                  <div className="flex-container-1  data-container">₹22</div>
                </div>
                <div className="flex-container gap-column-40 data-column">
                  <div className="data-container blue-color">#281209</div>
                  <div className="  data-container">7 July, 2023</div>
                  <div className="data-container flex-container-1">
                    ₹1,278.23
                  </div>
                  <div className="flex-container-1  data-container">₹22</div>
                </div>
                <div className="flex-container gap-column-40 data-column">
                  <div className="data-container blue-color">#281209</div>
                  <div className="  data-container">7 July, 2023</div>
                  <div className="data-container flex-container-1">
                    ₹1,278.23
                  </div>
                  <div className="flex-container-1  data-container">₹22</div>
                </div>
                <div className="flex-container gap-column-40 data-column">
                  <div className="data-container blue-color">#281209</div>
                  <div className="  data-container">7 July, 2023</div>
                  <div className="data-container flex-container-1">
                    ₹1,278.23
                  </div>
                  <div className="flex-container-1  data-container">₹22</div>
                </div>
                <div className="flex-container gap-column-40 data-column">
                  <div className="data-container blue-color">#281209</div>
                  <div className="  data-container">7 July, 2023</div>
                  <div className="data-container flex-container-1">
                    ₹1,278.23
                  </div>
                  <div className="flex-container-1  data-container">₹22</div>
                </div>
                <div className="flex-container gap-column-40 data-column">
                  <div className="data-container blue-color">#281209</div>
                  <div className="  data-container">7 July, 2023</div>
                  <div className="data-container flex-container-1">
                    ₹1,278.23
                  </div>
                  <div className="flex-container-1  data-container">₹22</div>
                </div>
                <div className="flex-container gap-column-40 data-column">
                  <div className="data-container blue-color">#281209</div>
                  <div className="  data-container">7 July, 2023</div>
                  <div className="data-container flex-container-1">
                    ₹1,278.23
                  </div>
                  <div className="flex-container-1  data-container">₹22</div>
                </div>
                <div className="flex-container gap-column-40 data-column">
                  <div className="data-container blue-color">#281209</div>
                  <div className="  data-container">7 July, 2023</div>
                  <div className="data-container flex-container-1">
                    ₹1,278.23
                  </div>
                  <div className="flex-container-1  data-container">₹22</div>
                </div>
                <div className="flex-container gap-column-40 data-column">
                  <div className="data-container blue-color">#281209</div>
                  <div className="  data-container">7 July, 2023</div>
                  <div className="data-container flex-container-1">
                    ₹1,278.23
                  </div>
                  <div className="flex-container-1  data-container">₹22</div>
                </div>
                <div className="flex-container gap-column-40 data-column">
                  <div className="data-container blue-color">#281209</div>
                  <div className="  data-container">7 July, 2023</div>
                  <div className="data-container flex-container-1">
                    ₹1,278.23
                  </div>
                  <div className="flex-container-1  data-container">₹22</div>
                </div>
                <div className="flex-container gap-column-40 data-column">
                  <div className="data-container blue-color">#281209</div>
                  <div className="  data-container">7 July, 2023</div>
                  <div className="data-container flex-container-1">
                    ₹1,278.23
                  </div>
                  <div className="flex-container-1  data-container">₹22</div>
                </div>
                <div className="flex-container gap-column-40 data-column">
                  <div className="data-container blue-color">#281209</div>
                  <div className="  data-container">7 July, 2023</div>
                  <div className="data-container flex-container-1">
                    ₹1,278.23
                  </div>
                  <div className="flex-container-1  data-container">₹22</div>
                </div>
                <div className="flex-container gap-column-40 data-column">
                  <div className="data-container blue-color">#281209</div>
                  <div className="  data-container">7 July, 2023</div>
                  <div className="data-container flex-container-1">
                    ₹1,278.23
                  </div>
                  <div className="flex-container-1  data-container">₹22</div>
                </div>
              </div>

              <div className="flex-container-column gap-row-24">
                <div className="flex-container gap-column-40 data-column">
                  <div className="data-container blue-color">#281209</div>
                  <div className="  data-container">7 July, 2023</div>
                  <div className="data-container flex-container-1">
                    ₹1,278.23
                  </div>
                  <div className="flex-container-1  data-container">₹22</div>
                </div>
                <div className="flex-container-center gap-column-24">
                  <div className="flex-container gap-column-6 previous">
                    <img src={leftArrow} alt="icon" />
                    <div>Previous</div>
                  </div>
                  <div className="flex-container-row gap-column-8 ">
                    <div className="pagenation">1</div>
                    <div className="pagenation">...</div>
                    <div className="pagenation active">10</div>
                    <div className="pagenation">11</div>
                    <div className="pagenation">12</div>
                    <div className="pagenation">13</div>
                    <div className="pagenation">14</div>
                    <div className="pagenation">15</div>
                    <div className="pagenation">16</div>
                    <div className="pagenation">17</div>
                    <div className="pagenation">18</div>
                  </div>
                  <div className="flex-container gap-column-6 next">
                    <div>Next</div>
                    <img src={rightArrow} alt="icon" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
