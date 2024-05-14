export const Routes = {
  auth: {
    signIn: '/sign-in',
    signUp: '/sign-up',
    forgotPassword: '/forgot-password',
  },
  public: {
    home: '/',
    about: '/about',
    explore: '/explore',
    pricing: '/pricing',
    contract: '/contract',
    fishing: '/fishing',
    contact: '/contact',
    news: '/news',
    help: '/help',
    notFound: '/404',
    userID: (userID: string) => `/user/${userID}`,
    listingDetails: (slug: string) => `/listing/${slug}`,
    addListing: '/add-listing',
    dashboard: '/account',
    inbox: '/account/inbox',
    listings: '/account/listings',
    reservations: '/account/reservations',
    accountSettings: '/account/settings',
    trips: '/trips',
    wishlist: '/wishlist',
  },
  // private: {
  //   addListing: '/add-listing',
  //   dashboard: '/account',
  //   inbox: '/account/inbox',
  //   listings: '/account/listings',
  //   reservations: '/account/reservations',
  //   accountSettings: '/account/settings',
  //   trips: '/trips',
  //   wishlist: '/wishlist',
  // },
};
