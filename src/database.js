// import React from "react";
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js"
import {getDatabase, ref, push} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js"



const appSettings = {
    dataBaseUrl: "https://real-estate-pro-bdf8b-default-rtdb.europe-west1.firebasedatabase.app/"
}
// export default appSettings

const app = initializeApp(appSettings)
const database = getDatabase(app)
const propertiesInDB = ref(database, "Properties")

