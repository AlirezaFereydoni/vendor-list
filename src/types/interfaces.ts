export interface iVendorList {
  status: boolean;
  data: {
    count: number;
    open_count: number;
    finalResult: [iText, iVendor];
  };
}

export interface iText {
  type: "TEXT";
  data: string;
}

export interface iVendor {
  type: "VENDOR";
  data: {
    id: number;
    vendorCode: string;
    noOrder: boolean;
    title: string;
    description: string;
    rate: number;
    rating: number;
    logo: string;
    defLogo: string;
    taxEnabled: boolean;
    taxIncluded: boolean;
    taxEnabledInProducts: boolean;
    taxEnabledInPackaging: boolean;
    taxEnabledInDeliveryFee: boolean;
    tax: number;
    serviceFee: number;
    deliveryArea: string;
    discount: number;
    isOpen: true;
    minDeliveryFee: number;
    maxDeliveryFee: number;
    deliveryTime: number;
    paymentTypes: number[];
    schedules: { [key: string]: number | boolean | string }[];
    minOrder: number;
    address: string;
    phone: string;
    website: string;
    status: number;
    lat: number;
    lon: number;
    restaurantClass: string;
    foodTypes: any[]; // change later
    restaurantTypes: any[]; // change later
    isFavorite: boolean;
    priority: number;
    city: string;
    area: string;
    commentCount: number;
    recommendedFor: string;
    establishment: string;
    mostPopularItems: string;
    costsForTwo: number;
    onlineOrder: boolean;
    voteCount: number;
    discountType: null | any; // change later
    menuUrl: string;
    discountValue: number;
    discountForAll: boolean;
    containerFee: number;
    deliveryGuarantee: boolean;
  };
}
