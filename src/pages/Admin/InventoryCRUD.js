import React, { useState, useEffect } from "react";
import { StyledForm } from "../../components/shared/Form/Form.styled";
import { useLocation, useParams, useNavigate } from "react-router-dom";

const InventoryCRUD = () => {
  const { state } = useLocation();
  const [inventoryData, setInventoryData] = useState(state?.inventory);

  const navigate = useNavigate();
  const { id } = useParams();
  let isNew = id == "new";

  useEffect(() => {
    // console.log(inventoryData);
    if (!isNew) {
      let inventories = JSON.parse(localStorage.getItem("inventory") || "[]");
      // console.log(inventoryData);
      let selectedInv = inventories.map((i) => {
        return i.id == inventoryData.id
          ? {
              ...i,
              recName: inventoryData.receiver || inventoryData.recName, // || "Mark",
              prodName: inventoryData.product || inventoryData.prodName, // || "Lenovo",
              quantity: inventoryData.quantity, // || 2
            }
          : i;
      });
      // console.log(selectedInv);
      localStorage.setItem("inventory", JSON.stringify(selectedInv));
    }
  }, [inventoryData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Your inventory record has been updated successfully!')
    let formEl = document.forms.inventoryForm;
    let formData = new FormData(formEl);
    let receiver = formData.get("reciever");
    let product = formData.get("product");
    let quantity = formData.get("quantity");
    setInventoryData({ receiver, product, quantity, id: state?.inventory?.id });
  };

  return (
    <StyledForm>
      <form
        className="form"
        style={{ marginTop: "40px", width: "550px" }}
        onSubmit={handleSubmit}
        id="inventoryForm"
      >
        <h2 className="mb-4 mt-4 pb-3">
          {isNew ? "Add a new inventory" : "Update Inventory"}
        </h2>
        <div className="form-group row">
          <label htmlFor="reciever" className="col-sm-4 form-label pb-2">
            Reciever:{" "}
          </label>
          <div className="col-sm-8">
            <input
              defaultValue={inventoryData?.recName}
              className="form-control"
              id="reciever"
              type="text"
              name="reciever"
              maxLength="30"
              required={true}
              minLength="6"
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="product" className="col-sm-4 col-form-label">
            Product:{" "}
          </label>
          <div className="col-sm-8">
            <input
              defaultValue={inventoryData?.prodName}
              className="form-control"
              id="product"
              type="text"
              name="product"
              maxLength="60"
              required={true}
            />
          </div>
        </div>
        <div className="form-group row">
          <label htmlFor="quantity" className="col-sm-4 col-form-label">
            Quantity:{" "}
          </label>
          <div className="col-sm-8">
            <input
              defaultValue={inventoryData?.quantity}
              className="form-control"
              id="quantity"
              type="number"
              name="quantity"
              maxLength="60"
              required={true}
            />
          </div>
        </div>

        <input
          className="submit mt-4"
          type="submit"
          value={isNew ? "Add Inventory" : "Save Changes"}
        />
      </form>
    </StyledForm>
  );
};

export default InventoryCRUD;
