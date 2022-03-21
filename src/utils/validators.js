export function isNotEmpty(rule, value, callback) {
  if (value === "") {
    callback(new Error(`Field cannot be empty`));
  }
  callback();
}

export function isValidEmail(rule, value, callback) {
  if (value === "") {
    callback(new Error("Please input email field"));
  } else {
    const emailRegex =
      /^(?=[a-zA-Z0-9@._%+-]{6,254}$)[a-zA-Z0-9._%+-]{1,64}@(?:[a-zA-Z0-9-]{1,63}\.){1,8}[a-zA-Z]{2,63}$/;
    if (emailRegex.test(value)) {
      callback();
    } else {
      callback(new Error("Please input a valid email"));
    }
  }
}

export function isValidPassword(rule, value, callback) {
  if (value === "") {
    callback(new Error("Please input password field"));
  } else if (value.length < 6) {
    callback(new Error("Password must be at least 6 characters"));
  } else {
    callback();
  }
}

export function isObject(obj) {
  return (
    typeof obj === "object" &&
    Object.prototype.toString.call(obj) === "[object Object]"
  );
}

export function isEmptyObject(obj) {
  return (
    obj &&
    isObject(obj) &&
    Object.keys(obj).length === 0 &&
    obj.constructor === Object
  );
}

export function isValidDate(value) {
  let res = true;
  let [year, month, day] = value.split("-");
  let [intYear, intMonth, intDay] = [year, month, day].map(Number);
  if (
    year === undefined ||
    year === "" ||
    month === undefined ||
    month === "" ||
    day === undefined ||
    day === ""
  ) {
    res = false;
  }
  if (
    intYear < 0 ||
    intMonth > 12 ||
    intMonth < 0 ||
    intDay > 31 ||
    intDay < 0
  ) {
    res = false;
  }

  return res;
}
