const parse = (startTime) => {
  const orderTime = Date.now() - startTime;
  const exact = Math.floor(orderTime / 1000);

  return `${exact.toFixed(2)}s`;
};

const deliveredOrderMsg = (orderDetails) => {
  return `OrderDelievered: { orderId: ${orderDetails.orderId}, foodDetails: ${orderDetails.foodDetails}, packageDetails: ${orderDetails.delieveredBy}, deliveryDetails: ${orderDetails.delieveryDetails}}}`;
};

const packingOrderMsg = (orderDetails) => {
  return `Order packed: {orderId: ${orderDetails.orderId}, foodDetails: ${orderDetails.foodDetails}, packageDetails: ${orderDetails.delieveredBy}}`;
};

const foodpreparedMsg = (orderDetails) => {
  return `Food is ready: { orderId: ${orderDetails.orderId}, foodDetails: ${orderDetails.foodDetails}}`;
};

const loggingDetils = (orderDetails, startTime, orderState) => {
  display(`[${currentTime}] Delivering order...`);
  display(`[${currentTime}] ${deliveredOrderMsg(orderDetails)}`);
};

const deliverOrder = (orderDetails, startTime) => {
  setTimeout(() => {
    const currentTime = orderDetails.elapsedTime(startTime);
    display(`[${currentTime}] Delivering order...`);
    display(`[${currentTime}] ${deliveredOrderMsg(orderDetails)}`);
  }, 4000);
};

const packOrder = (orderDetails, startTime) => {
  setTimeout(() => {
    const currentTime = orderDetails.elapsedTime(startTime);
    display(`[${currentTime}] Packing Order...`);
    display(`[${currentTime}] ${packingOrderMsg(orderDetails)}`);

    deliverOrder(orderDetails, startTime);
  }, 2000);
};

const preparing = (orderDetails, startTime) => {
  setTimeout(() => {
    const currentTime = orderDetails.elapsedTime(startTime);
    display(`[${currentTime}] Preparind Food..`);
    display(`[${currentTime}] ${foodpreparedMsg(orderDetails)}`);

    packOrder(orderDetails, startTime);
  }, 3000);
};

const order = (startTime) => {
  const orderDetails = {
    elapsedTime: parse,
    orderId: 123,
    foodDetails: "burger & Cake",
    delieveredBy: "Packed in eco-friendly box",
    delieveryDetails: "Delivered by John at 7:30 PM",
  };

  setTimeout(() => {
    const currentTime = orderDetails.elapsedTime(startTime);
    display(`${currentTime} Order received: { orderId: 123 }`);
    preparing(orderDetails, startTime);
  }, 0);
};

const display = console.log;

const main = () => {
  const startTime = Date.now();
  order(startTime);
};

main();
