module.exports = (str) => {

    if(typeof str != "string"){
        throw new Error("Time format should be a string");
    }

  const unit = str.trim().toLowerCase().at(-1);
  const value = parseInt(str);

  if (isNaN(value)) {
    throw new Error("Invalid time format: no numeric value found");
  }

  switch (unit) {
    case "d":
      return value * 24 * 60 * 60 * 1000;
    case "h":
      return value * 60 * 60 * 1000;
    case "m":
      return value * 60 * 1000;
    case "s":
      return value * 1000;
    default:
      throw new Error("Invalid time formmat : should be in d, h, m, or s");
  }
};
