function checkSecurity(isDoorLocked, isWindowClosed, isAlarmOn, isOwnerInside) {
  const isSecure = isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside;

 
  const isUnsafe = !isAlarmOn || !isDoorLocked || !isWindowClosed || !isOwnerInside;

  if (isSecure && !isUnsafe) {
    console.log("Secure");
  } else {
    console.log("Unsafe");
  }
}

checkSecurity(true, true, true, true);  
checkSecurity(true, true, false, true); 
checkSecurity(true, false, true, true); 
checkSecurity(false, true, true, true); 
checkSecurity(true, true, true, false); 
