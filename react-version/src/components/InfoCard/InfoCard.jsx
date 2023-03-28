import React from "react";
import {
  faCloudArrowDown,
  faCloudArrowUp,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const InfoCard = ({ tarrif, index }) => {
  return (
    <div className="border mt-2 cardx">
      <div className="serial-number">{index + 1}.</div>
      <div className="tariff-name">{tarrif.name}</div>
      <div className="download-speed">
        <div>
          <div>
            <div className="speed-label">Download</div>
            <div className="speed-container">
              <FontAwesomeIcon icon={faCloudArrowDown} />
              {tarrif.download} Mbit/s
            </div>
          </div>
          <div className="upload-container">
            <div className="speed-label">Upload</div>
            <div className="speed-container">
              <FontAwesomeIcon icon={faCloudArrowUp} />
              {tarrif.upload} Mbit/s
            </div>
          </div>
        </div>
      </div>
      <div className="benefits">
        <ul>
          {tarrif.benefits.map((benefit) => (
            <li key={benefit}>{benefit}</li>
          ))}
        </ul>
      </div>
      <div className="price">
        <div>{tarrif.price}€</div>
        <button className="button-price">
          To Tariff <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
      <div className="prices-mobile">
        <div>{tarrif.price}€</div>
        <div className="mobile-button">
          <FontAwesomeIcon icon={faChevronRight} />
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
