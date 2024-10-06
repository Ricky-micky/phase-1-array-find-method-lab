// code your solution h
function superbowlWin(records) {
    const winRecord = records.find(record => record.result === "W");
    
    if (winRecord) {
      return winRecord.year; 
    } else {
      return undefined; 
    }
  }
  
  // Test the function
  const gameRecords = [
    { year: "2015", result: "W" },
    { year: "2014", result: "N/A" },
    { year: "2013", result: "L" },
  ];
  
  console.log(superbowlWin(gameRecords)); // Outputs: "2015"
  
