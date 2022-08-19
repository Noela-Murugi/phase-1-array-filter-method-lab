// Code your solution here
const drivers = [
    {
        firstName:"Noela",
        hometown: "Nairobi",
    },
    {
        fistName: "Abby",
        hometown: "Nakuru",
    },
    {
        fistName: "Nate",
        hometown: "Eldoret",
    },
    {
        fistName:  "Paul",
        hometown: "Mombasa",
    }
   ];

function findMatching(drivers, name) {
    return drivers.filter(function (driver) {
        return driver.toLowerCase() === name.toLowerCase()
    });
  };

  function fuzzyMatch(drivers, sName) {
    return drivers.filter(function(driver){
        return driver.slice(0, sName.length).toLowerCase() === sName.toLowerCase()
    });
  };

  function matchName(drivers, driverProperty) {
    return drivers.filter(function(driver){
        return driver.name.toLowerCase() === driverProperty.toLowerCase()
    });
  };
