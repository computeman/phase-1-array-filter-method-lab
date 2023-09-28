// Code your solution here
const drivers = ["Bobby", "Sammy", "Sally", "Annette", "Sarah", "Bobby"];
const findMatching = (drivers, name) => {
    const result = drivers.filter(
      (driver) => driver === name || driver === name.toLowerCase()
    );
    return result;
};
const fuzzyMatch = (drivers, letter) => {
    const result = drivers.filter((driver) => {
      const lowerCaseDriver = driver.toLowerCase();
      const lowerCaseLetter = letter.toLowerCase(); 
      return lowerCaseDriver.startsWith(lowerCaseLetter);
    });
    return result;
};
const matchName = (drivers, driverName) => {
  const result = drivers.filter((driver) => driver.name === driverName);
  return result;
}
