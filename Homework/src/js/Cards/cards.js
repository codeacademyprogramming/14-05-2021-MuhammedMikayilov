import { productList } from "../ProductApi.js";
import { storage } from "../Storage/index.js";
class Cards {
  items = document.querySelector("#pizzas .pizzaItems");
  button = document.querySelector("#pizzas .button button");
  cards = productList.getProductList();
  array = [];

  returnList() {
    return this.cards;
  }

  setLocalWhickChecked(item) {
    storage.setItem("PRODUCT", item);
  }

  returnArrayForBasket() {
    return storage.getItem("PRODUCT");
  }

  returnCards() {
    this.returnList().then((arr) => {
      document.querySelector(".loader").classList.add("d-none");
      arr.forEach((item, index) => {
        this.items.innerHTML += `
                <div class="col-md-3 mt-5">
                <div class="card" style="width: 18rem;">
                  <img src="${item.image}" class="card-img-top" alt="pizza-1">
                  <div class="card-body">
                  <div class="card-title d-flex justify-content-between">
                    <h5>${item.name}</h5>
                    <span>32cm</span>
                  </div>
                    <p class="card-text">${
                      item.topping ? item.topping : "Resept tapilmadi"
                    }</p>
                    <div class="card-span">
                      ${item.price}$
                    </div>
                    <div class="button">
                      <button class="open">
                        <i class="fas fa-shopping-bag"></i>
                      </button>
                    </div>
                  </div>
  
                  <div class="sizes hidden">
                    <strong style="font-size: 25px; display: inline-block; margin-bottom: 30px;">Sizes: </strong>
                    <form>
                      <div class="form-check">
                        <input class="form-check-input" data-key="small" type="radio" name="flexRadioDefault">
                        <label class="form-check-label">
                          small - 20cm
                        </label>
                      </div>
                      <div class="form-check my-3">
                        <input class="form-check-input" data-key="medium" type="radio" name="flexRadioDefault">
                        <label class="form-check-label">
                          medium - 25cm
                        </label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" data-key="large" type="radio" name="flexRadioDefault">
                        <label class="form-check-label">
                          big - 32cm
                        </label>
                      </div>
                      <button type="submit" class="btn btn-success addToCards w-100" style="background-color: #FE3326; margin-top: 30px; border: none;">Add to basket</button>
                      <button type="click" class="btn cancel w-100" style="background-color: #FE3326; margin-top: 30px; border: none;">Cancel</button>
                    </form>
                  </div>
                </div>
              </div>
                `;

        document.querySelectorAll(".button button").forEach((btn, idx) => {
          btn.addEventListener("click", function (e) {
            console.log("true", idx);
            document.querySelectorAll(".sizes")[idx].classList.remove("hidden");
            btn.parentElement.classList.add("d-none");
          });
        });

        document.querySelectorAll(".sizes form").forEach((form, key) => {
          form.addEventListener("submit", (e) => {
            e.preventDefault();
            this.counter = 0;
            document
              .querySelectorAll(".sizes form .form-check .form-check-input")
              .forEach((size, sizeIndex) => {
                if (size.checked) {
                  this.size = size.getAttribute("data-key");
                  this.setLocalWhickChecked([
                    ...JSON.parse(storage.getItem("PRODUCT")),
                    {
                      id: arr[key]?.id,
                      size: this.size,
                      name: arr[key].name,
                      price: arr[key].price,
                    },
                  ]);
                  JSON.parse(storage.getItem("PRODUCT")).forEach((local,key)=>{
                    console.log(local?.id, + " + " + arr[key]);
                  })
                }
              });
          });
        });

        document.querySelectorAll(".sizes .addToCards").forEach((item) => {
          document.addEventListener("click", (e) => {
            if (
              !e.target.classList.contains("sizes") ||
              !e.target.classList.contains("button")
            ) {
              document
                .querySelectorAll(".button button")
                .forEach((btn, idx) => {
                  btn.parentElement.classList.remove("d-none");
                });
            }
          });
        });

        document.querySelectorAll(".sizes .cancel").forEach((item, idx) => {
          item.addEventListener("click", (e) => {
            e.preventDefault()
            console.log(document.querySelectorAll(".sizes")[idx], "ol");
            document.querySelectorAll(".sizes")[idx].classList.add("hidden");
          });
        });
      });
    });
  }
}

export const pizzas = new Cards();
