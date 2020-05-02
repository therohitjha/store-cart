import React, { useContext } from "react";
import "../../scss/style.scss";
import { Modal } from "react-bootstrap";
import { CartContext } from "../Home";

function FilterModal({ show, handleClose }) {
  const {
    filter: { min, max, priceFilter },
    handleFilter,
  } = useContext(CartContext);
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>Filter</Modal.Header>
      <Modal.Body>
        <div className="filterModalContainer">
          <div className="filterBody">
            <input
              type="range"
              value={priceFilter}
              name='priceFilter'
              min={min}
              max={max}
              onChange={(e) => handleFilter(e)}
            />
          </div>

          <div className="filterCancelApply">
            <div className="filterCancel" onClick={handleClose}>
              Cancel
            </div>
            <div className="filterApply">Apply</div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default FilterModal;
