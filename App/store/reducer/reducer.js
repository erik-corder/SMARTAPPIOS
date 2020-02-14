const initialState = {

  // set name
  userName: '',

  //loginStatus
  loginStatus : true,

  // set Mobile
  mobileNumber: '',

  // set pickup or delivery
  pickDeliveryStatus: 'PICKUP',

  // delivery charges
  deliveryCharges: 0,

  // pick or delivery date
  orderDate: '',

  // pick time
  orderTime: '',

  // suburb name
  suburbName: '',

  // post code
  suburbcode: '',

  // post code time frame
  timeFrame: 'vale',

  // order Address
  orderAddress: '',

  // set item to cart
  cartDonuts: [],

  // set cart total
  cartTotal: 0,

  // birthday text
  birthdayText: '',

  // order special note
  orderNote: '',

  // edit donut object befor add to cart
  customizePack: [],

  // set donut pak size (4,6,8,12)
  packCount: 0,
  // set OG glaze donut list
  glaze_list: [],
  // set Gourment donut list
  gourmet_list: [],
  // set classic donut list
  classic_list: [],
  // set big donut Filing
  bigGlaze: '',
  // set big donut Glaze
  bigTopping: '',
  // set big donut Topping
  bigFilling: '',
};


// set name
const setName = (state, action) => ({
  ...state,
  userName: action.name,
});

// set name
const seLoginStatus = (state, action) => ({
  ...state,
  loginStatus: action.status,
});


// set mobile
const setMobile = (state, action) => ({
  ...state,
  mobileNumber: action.mobile,
});

// set pickup or delivery
const setPickDeliveryStatus = (state, action) => ({
  ...state,
  pickDeliveryStatus: action.status,
});

// set delivery charges
const setDeliveryCharge = (state, action) => ({
  ...state,
  deliveryCharges: action.charges,
});

// set pickup or delivery date
const setOrderDate = (state, action) => ({
  ...state,
  orderDate: action.date,
});

// set pickup time
const setOrderTime = (state, action) => ({
  ...state,
  orderTime: action.time,
});

// set suburb name
const setSuburbName = (state, action) => ({
  ...state,
  suburbName: action.name,
});

// set suburb code
const setSuburbCode = (state, action) => ({
  ...state,
  suburbcode: action.code,
});

// set delivery address
const setOrderAddress = (state, action) => ({
  ...state,
  orderAddress: action.address,
});

// set time frame
const setTimeFrame = (state, action) => ({
  ...state,
  timeFrame: action.time,
});

// set birthday text
const setBirthdayNote = (state, action) => ({
  ...state,
  birthdayText: action.note,
});

// set order note
const setOrderNote = (state, action) => ({
  ...state,
  orderNote: action.note,
});

// set item to cart
const setDonuts = (state, action) => ({
  ...state,
  cartDonuts: action.object,
});
// set cart total
const setCartToatl = (state, action) => ({
  ...state,
  cartTotal: action.total,
});
// edit donut object befor add to cart
const setCustomizePack = (state, action) => ({
  ...state,
  customizePack: action.object,
});

// set donut pak size (4,6,8,12)
const setPackCount = (state, action) => ({
  ...state,
  packCount: action.count,
});

// set OG glaze donut list
const setGlazed = (state, action) => ({
  ...state,
  glaze_list: action.object,
});

// set Gourment donut list
const setGourmet = (state, action) => ({
  ...state,
  gourmet_list: action.object,
});

// set classic donut list
const setClassic = (state, action) => ({
  ...state,
  classic_list: action.object,
});

// set big donut Filing
const setBigFilling = (state, action) => ({
  ...state,
  bigFilling: action.filling,
});

// set big donut Glaze
const setBigGlaze = (state, action) => ({
  ...state,
  bigGlaze: action.glaze,
});
// set big donut Topping
const setBigTopping = (state, action) => ({
  ...state,
  bigTopping: action.topping,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // set User name
    case 'SET_NAME':
      return setName(state, action);
      case  "SET_LOGIN_STATUS" :
        return seLoginStatus(state, action)
      // set delivery charges
    case 'SET_MOBILE':
      return setMobile(state, action);
      // set pickup or delivery
    case 'SET_PICK_DELIVERY':
      return setPickDeliveryStatus(state, action);
      // set delivery charges
    case 'SET_DELIVERY_CHARGES':
      return setDeliveryCharge(state, action);
      // set order date
    case 'SET_ORDER_DATE':
      return setOrderDate(state, action);
      // set order time
    case 'SET_ORDER_TIME':
      return setOrderTime(state, action);
      // set suburb name
    case 'SET_SUBURB_NAME':
      return setSuburbName(state, action);
      // set suburb name
    case 'SET_SUBURB_CODE':
      return setSuburbCode(state, action);
      // set time frame
    case 'SET_TIME_FRMAE':
      return setTimeFrame(state, action);
      // set order Address
    case 'SET_ORDER_ADDRESS':
      return setOrderAddress(state, action);
      // set birthday text
    case 'SET_BIRTHDAY_NOTE':
      return setBirthdayNote(state, action);
      // set order note
    case 'SET_ORDER_NOTE':
      return setOrderNote(state, action);
      // set item to cart
    case 'SET_DONUTS':
      return setDonuts(state, action);
      // set cart total
    case 'SET_CART_TOTAL':
      return setCartToatl(state, action);
      // edit donut object befor add to cart
    case 'SET_CUSTOMIZE_DONUTS':
      return setCustomizePack(state, action);
      // set donut pak size (4,6,8,12)
    case 'SET_PACK_COUNT':
      return setPackCount(state, action);
      // set OG glaze donut list
    case 'SET_GLAZED':
      return setGlazed(state, action);
      // set Gourment donut list
    case 'SET_GOURMET':
      return setGourmet(state, action);
      // set classic donut list
    case 'SET_CLASSIC':
      return setClassic(state, action);
      // set big donut Filing
    case 'SET_BIG_FILLING':
      return setBigFilling(state, action);
      // set big donut Glaze
    case 'SET_BIG_GLAZE':
      return setBigGlaze(state, action);
      // set big donut Topping
    case 'SET_BIG_TOPPING':
      return setBigTopping(state, action);
  }
  return state;
};
export default reducer;
