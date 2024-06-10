function isTeenager(age, hasPermission) {
    if ((age < 18 && !hasPermission) || (age >= 18 && hasPermission)) {
        return true;
    } else {
        return false;
    }
}



function isValidCoupon(couponCode, totalAmount) {
    if (
        (couponCode === "SALE" || couponCode === "BIGSALE") &&
        totalAmount >= 50
    ) {
        return true;
    } else if (couponCode === "LILSALE") {
        return true;
    } else {
        return false;
    }
}