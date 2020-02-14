// set login status
export const setLoginStatus = (status) => (dispatch) => {
  dispatch({
    type: 'SET_LOGIN_STATUS',
    status
  });
};

// set pickup or delivery
export const setName = (name) => (dispatch) => {
  dispatch({
    type: 'SET_NAME',
    name
  });
};

// set delivery charges
export const setMobile = (mobile) => (dispatch) => {
  dispatch({
    type: 'SET_MOBILE',
    mobile
  });
};


// set pickup or delivery
export const setPickDeliveryStatus = (status) => (dispatch) => {
  dispatch({
    type: 'SET_PICK_DELIVERY',
    status
  });
};

// set delivery charges
export const setDeliveryCharge = (charges) => (dispatch) => {
  dispatch({
    type: 'SET_DELIVERY_CHARGES',
    charges
  });
};


// set order date
export const setOrderDate = (date) => (dispatch) => {
  dispatch({
    type: 'SET_ORDER_DATE',
    date
  });
};

// set order time
export const setOrderTime = (time) => (dispatch) => {
  dispatch({
    type: 'SET_ORDER_TIME',
    time
  });
};

// set suburb name
export const setSuburbName = (name) => (dispatch) => {
  dispatch({
    type: 'SET_SUBURB_NAME',
    name
  });
};

// set suburb code
export const setSuburbCode = (code) => (dispatch) => {
  dispatch({
    type: 'SET_SUBURB_CODE',
    code
  });
};

// set time frame
export const setTimeFrame = (time) => (dispatch) => {
  dispatch({
    type: 'SET_TIME_FRMAE',
    time
  });
};

// set order address
export const setOrderAddress = (address) => (dispatch) => {
  dispatch({
    type: 'SET_ORDER_ADDRESS',
    address
  });
};

// set birth day note
export const setBirthdayNote = (note) => (dispatch) => {
  dispatch({
    type: 'SET_BIRTHDAY_NOTE',
    note
  });
};

// set order note
export const setOrderNote = (note) => (dispatch) => {
  dispatch({
    type: 'SET_ORDER_NOTE',
    note
  });
};

// add cart to items
export const setDonuts = (object) => (dispatch) => {
  dispatch({
    type: 'SET_DONUTS',
    object
  });
};

// set cart total
export const setCartTotal = (total) => (dispatch) => {
  dispatch({
    type: 'SET_CART_TOTAL',
    total
  });
};

// set donut pak size (4,6,8,12)
export const setPackCount = (count) => (dispatch) => {
  dispatch({
    type: 'SET_PACK_COUNT',
    count
  });
};

// edit donut object befor add to cart
export const setCustomizePack = (object) => (dispatch) => {
  dispatch({
    type: 'SET_CUSTOMIZE_DONUTS',
    object
  });
};

// set OG glaze donut list
export const setGlazed = (object) =>
// alert(JSON.stringify(object))
  (dispatch) => {
    dispatch({
      type: 'SET_GLAZED',
      object
    });
  };


// set Gourment donut list
export const setGourmet = (object) => (dispatch) => {
  dispatch({
    type: 'SET_GOURMET',
    object
  });
};

// set classic donut list
export const setClassic = (object) => (dispatch) => {
  dispatch({
    type: 'SET_CLASSIC',
    object
  });
};

// set big donut Filing
export const setBigFilling = (filling) => (dispatch) => {
  dispatch({
    type: 'SET_BIG_FILLING',
    filling
  });
};

// set big donut Glaze
export const setBigGlaze = (glaze) => (dispatch) => {
  dispatch({
    type: 'SET_BIG_GLAZE',
    glaze
  });
};

// set big donut Topping
export const setBigTopping = (topping) => (dispatch) => {
  dispatch({
    type: 'SET_BIG_TOPPING',
    topping
  });
};
