module.exports = class TimezoneParams {

    constructor() {
        var tz = "";
        var ipAddress = "";
        var lang = "";
        var latitude = 1000.0;
        var longitude = 1000.0;
    }

    setTimezone(tz = "") {
        this.tz = tz;
    }

    getTimezone() {
        return this.tz;
    }

    setIPAddress(ipAddress = "") {
        this.ipAdress = ipAddress;
    }

    getIPAddress() {
        return this.ipAdress;
    }

    setLang(lang = "") {
        this.lang = lang;
    }

    getLang() {
        return this.lang;
    }

    setCoordinates(latitude = "", longitude = "") {
        this.latitude = latitude;
        this.longitude = longitude;
    }

    getLatitude() {
        return this.latitude;
    }

    getLongitude() {
        return this.longitude;
    }
}


