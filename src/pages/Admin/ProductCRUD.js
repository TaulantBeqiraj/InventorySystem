import React, {useState, useEffect} from "react";
import { StyledForm } from "../../components/shared/Form/Form.styled";
import { useLocation, useParams, useNavigate } from "react-router-dom";

const ProductCRUD = () => {
  const { state } = useLocation();
  const [productData, setProductData] = useState(state?.products);

  const navigate = useNavigate();
  const { id } = useParams();
  let isNew = id == "new";

  useEffect(() => {
    if (!isNew) {
      let products = JSON.parse(localStorage.getItem("products") || "[]");

      let selectedProd = products.map((i) => {
        return i.id == productData.id
          ? {
              ...i,
              name: productData.name ,                         
              description: productData.description ,                             
              category: productData.category ,  
              stock: productData.stock ,
              price: productData.price ,
            }
          : i;
      });
  
      localStorage.setItem("products", JSON.stringify(selectedProd));
    }
  }, [productData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Your product record has been updated successfully!')
    let formEl = document.forms.productForm;
    let formData = new FormData(formEl);
    let name = formData.get("name");
    let description = formData.get("description");
    let category = formData.get("category");
    let stock = formData.get("stock");
    let price = formData.get("price");
    setProductData({ name, description, category, stock, price, id: state?.products?.id });
  }; 


  return (
    <>
      <StyledForm>
        <form
          className="form"
          style={{ marginTop: "40px", width: "550px" }}
          onSubmit={handleSubmit}
          id="productForm"
        >
          <h2 className="mb-4 mt-4 pb-3">
            {isNew ? "Add a new Product" : "Update Product"}
          </h2>
          <div className="form-group row">
            <label htmlFor="name" className="col-sm-4 form-label mb-0 p-2">
              Name:{" "}
            </label>
            <div className="col-sm-8">
              <input
                defaultValue={productData?.name}
                className="form-control"
                id="name"
                type="text"
                name="name"
                maxLength="30"
                required={true}
                minLength="6"
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="description" className="col-sm-4 col-form-label">
              Description:{" "}
            </label>
            <div className="col-sm-8">
              <textarea
                defaultValue={productData?.description}
                className="form-control"
                id="description"
                name="description"
                maxLength="200"
                cols="30"
                rows="2"
                required={true}
              ></textarea>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="category" className="col-sm-4 col-form-label">
              Category:{" "}
            </label>
            <div className=" col-sm-8">
              <select 
              defaultValue={productData?.category}
                className="form-control"
                id="category"
                name="category">
                <option>Electronics</option>
                <option>Other</option>
              </select>
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="stock" className="col-sm-4 col-form-label">
              Stock:{" "}
            </label>
            <div className="col-sm-8">
              <input
              defaultValue={productData?.stock}
                className="form-control"
                id="stock"
                type="number"
                name="stock"
                maxLength="60"
                required={true}
              />
            </div>
          </div>
          <div className="form-group row">
            <label htmlFor="price" className="col-sm-4 form-label mb-0 p-2">
              Price:{" "}
            </label>
            <div className="col-sm-8">
              <input
              defaultValue={productData?.price}
                className="form-control"
                id="price"
                type="text"
                name="price"
                maxLength="60"
                required={true}
              />
            </div>
          </div>
          

          <input
            value={isNew ? "Add Product" : "Save Changes"}
            className="submit mt-4"
            type="submit" 
          />
        </form>
      </StyledForm>
    </>
  );
  };

export default ProductCRUD;
