import React, { Component } from 'react'

const AppContext = React.createContext({
    site_data:{
        about_us: '',
        purchase: '',
        privacy: '',
        refund: '',
        google_play: '',
        app_store: '',
        instagram: '',
        facebook: '',
        twitter: ''
      },
      categories:[],
      sliders:[],
      notifications:[]
});

export default AppContext
