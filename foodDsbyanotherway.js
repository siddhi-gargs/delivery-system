const process = (start, delay, finish, next) => (taskDetails) => {
  const out = start(taskDetails);
  setTimeout(() => {
    const finished = finish(out);
    next(finished);
  }, delay);
};

const next = () => {};

const foodDeliver = process(
  (taskDetails) => {
    console.log("Delivering order...");
    const addDetails = {
      ...taskDetails,
      deliveryDetails: "Delivered by John at 7:30 PM",
    };

    return addDetails;
  },

  3000,
  (taskDetails) => {
    console.log("order Delivered");
    console.log(taskDetails);
    return taskDetails;
  },
  next
);

const packFood = process(
  (taskDetails) => {
    console.log("packingFood...");
    const addDetails = {
      ...taskDetails,
      packageDetails: "Packed in eco-friendly box",
    };
    return addDetails;
  },
  3000,
  (taskDetails) => {
    console.log("food packed");
    console.log(taskDetails);
    return taskDetails;
  },
  foodDeliver
);

const prepareFood = process(
  (taskDetails) => {
    console.log("preparing Food...");
    return taskDetails;
  },
  3000,
  (taskDetails) => {
    console.log("food is ready...");
    console.log(taskDetails);
    return taskDetails;
  },
  packFood
);

const taskDetails = {
  orderId: 123,
  foodDetails: "Burger & fries",
};

prepareFood(taskDetails);
