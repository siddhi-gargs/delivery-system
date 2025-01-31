const calculateTimeElapsed = () => {
  const orderTime = Date.now() - startTime;
  const exact = Math.floor(orderTime / 1000);

  return `${exact.toFixed(2)}`;
};

const deliverOrder = (orderDetails) => {
  setTimeout(() => {
    const currentTime = orderDetails.elapsedTime();
    display(`[${currentTime}s] Delivering order...`);
    setTimeout(() => {
      const currentTime = orderDetails.elapsedTime();
      display(
        `[${currentTime}]s OrderDelievered: { orderId: ${orderDetails.orderId}, }`
      );
    }, 1000);
  }, 4000);
};

const packOrder = (orderDetails) => {
  setTimeout(() => {
    const currentTime = orderDetails.elapsedTime();
    display(`[${currentTime}s] Packing Order...`);
    setTimeout(() => {
      const currentTime = orderDetails.elapsedTime();
      display(
        `[${currentTime}s] Order packed: {orderId: ${orderDetails.orderId}, foodDetails: ${orderDetails.foodDetails}, packageDetails: ${orderDetails.delieveredBy}}`
      );
    }, 100);

    deliverOrder(orderDetails);
  }, 2000);
};

const orderCome = (orderDetails) => {
  setTimeout(() => {
    const currentTime = orderDetails.elapsedTime();
    display(`[${currentTime}s] Preparind Food..`);
    setTimeout(() => {
      const currentTime = orderDetails.elapsedTime();
      display(
        `[${currentTime}s] Food is ready: { orderId: ${orderDetails.orderId},
        foodDetails: ${orderDetails.foodDetails}}`
      );
      packOrder(orderDetails);
    }, 100);
  }, 3000);
};

const order = () => {
  const orderDetails = {
    elapsedTime: calculateTimeElapsed,
    orderId: 123,
    foodDetails: "burger & Cake",
    delieveredBy: "Packed in eco-friendly box",
    delieveryDetails: "Delivered by John at 7:30 PM",

    // status: {
    //   preFood: "Preparind Food...",
    //   foodReady: "food is ready:",
    //   pack: "Packing order...",
    //   packed: "Order Packed:",
    //   deliver: "Delivering Order...",
    //   delivered: "Order Delievered:",
    // },
  };

  setTimeout(() => {
    const currentTime = orderDetails.elapsedTime();

    display(`${currentTime} Order received: { orderId: 123 }`);
    orderCome(orderDetails);
  }, 0);
};

const display = console.log;
const startTime = Date.now();
order();
