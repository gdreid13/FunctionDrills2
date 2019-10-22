/* eslint-disable no-console */
/* eslint-disable strict */
function JediName(firstName, lastName) {
  let jediFirstName = lastName.substr(0, 3);
  let jediLastName = firstName.substr(0, 2);
  return jediFirstName + jediLastName;
}
  
