const getSleepHours = day => {
    if(day === 'Monday'){
      return 8;
    };
    if(day === 'Tuesday'){
      return 9;
    };
    if(day === 'Wednesday'){
      return 10;
    };
    if(day === 'Thursday'){
      return 10;
    };
    if(day === 'Friday'){
      return 9;
    };
    if(day === 'Saturday'){
      return 8;
    };
    if(day === 'Sunday'){
      return 8;
    };
   }; 
   
   const getActualSleepHours = () => getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thursday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday');
   
   const getIdealSleepHours = idealHours => {
     return idealHours * 7;
   };
   
   const calculateSleepDebt = () => {
     const actualSleepHours = getActualSleepHours();
     const idealSleepHours = getIdealSleepHours(9);
     if(actualSleepHours === idealSleepHours){
       return 'You got the perfect amount of sleep';
     };
     if(actualSleepHours > idealSleepHours){
       return 'You got ' + (actualSleepHours - idealSleepHours) + ' hour(s) over. This is more sleep than needed, bruh';
     };
     if(actualSleepHours < idealSleepHours){
       return 'You got ' + (idealSleepHours - actualSleepHours) + ' less hour(s) that you needed. This is a low amount of sleep';
     };
   };
   console.log(calculateSleepDebt());