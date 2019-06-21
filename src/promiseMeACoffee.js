// Consumer (caller)

let coffeePromise = makeMeACoffee();
coffeePromise
  .then(addSugar)
  .then(drink => console.log("[Promise version]:", drink))
  .catch(error => console.error(`[Promise version] An error occurred:`, error));

// Alternatively...
async function makeAsyncCoffee() {
  try {
    let coffee = await makeMeACoffee();
    let coffeeWithSugar = await addSugar(coffee);
    console.log("[Async version]:", coffeeWithSugar);
  } catch (err) {
    console.error(`[Async version] An error occurred:`, err);
  }
}

makeAsyncCoffee();

// ----------------------------------------------------------
// Service provider

function makeMeACoffee(withAnError = false) {
  console.log(`Making a coffee…`);
  return new Promise((resolve, reject) => {
    console.log(`In promise executor…`);
    if (withAnError) {
      setTimeout(() => reject("Error: coffee machine broke"), 3000);
    } else {
      setTimeout(() => resolve("Latte"), 3000);
    }
  });
}

function addSugar(coffee) {
  return new Promise((resolve, reject) => resolve(`A ${coffee} with sugar`));
}
