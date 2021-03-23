import axios from "axios";

export default axios.create({
     baseURL: "https://api.yelp.com/v3/businesses",
     headers: {
          Authorization: "Bearer UtoHTSJ2C2EpaF31OTzTkn_K5RkqRnFt3-F1spSX_Jr3kbwiVLs7opo1qstpoKwKMnemerZ65jr-CipBidqwihbjfV712keCqE4QbturQuVtAoClp6DZpYCuFvhYYHYx"
     }
})