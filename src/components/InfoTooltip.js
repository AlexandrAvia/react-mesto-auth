import React from "react";

export default function InfoTooltip({ onClose, data, isOpen }) {
  return (
    <div className={`popup ${isOpen && "popup_opened"}`}>
      <div className="popup__container popup__container_info">
        <button className="popup__close" type="reset" onClick={onClose} />

        <img className="info__img" src={data.url} alt={data.title}></img>
        <p className="info__title">{data.title}</p>
      </div>
    </div>
  );
}
