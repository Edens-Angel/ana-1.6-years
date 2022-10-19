import { useState } from "react";
import "./App.css";
import CFooter from "./components/CFooter";
import CHiddenText from "./components/CHiddenText";
import CImage from "./components/CImage";
import CVideo from "./components/CVideo";
import SBottomSection from "./page/SBottomSection";
import SUpSection from "./page/SUpSection";

function App() {
  const a = [...Array.from(Array(16).keys()).map((e) => e + 1)];
  const getImageUrl = (n: number): string => `img/carousel/${n}.jpg`;

  const [show, setShow] = useState(false);

  return (
    <div className="App">
      <SUpSection>
        <div style={{ fontSize: "18px" }} className="pt-4 text-white pb-3">
          <span>Thank you for the happiest year of my life</span>

          <div className="d-block d-md-none">
            <CVideo />
          </div>

          <button
            onClick={() => setShow(true)}
            className="mt-4 btn btn-success"
          >
            Watched?
          </button>

          <div className="mt-3 flex-center">
            <div style={{ width: "65%" }}>
              <CHiddenText
                fontSize={17}
                show={show}
                text="I know it’s rough right now but it's you and me against the world!"
              />
            </div>
          </div>
        </div>
      </SUpSection>

      <SBottomSection>
        <div className="mt-3">
          <div className="flex-center">
            <span className="fs-3">Some of my favorite memories</span>
          </div>
          <div className="mt-3">
            <div className="flex-center gap-3 row mx-0 w-100">
              {a.map((e, i) => (
                <div key={i} className="col-3" style={{ width: "28%" }}>
                  <CImage imageUrl={getImageUrl(e)} />
                </div>
              ))}
            </div>
          </div>
          <CFooter />
        </div>
      </SBottomSection>
    </div>
  );
}

export default App;
