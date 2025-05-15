const fetchApiInfo = async () => {
  const response = await fetch("https://reqres.in/api/users/2");
    const responseStatus = response.status;
    console.log(responseStatus);
    if (responseStatus == 200) {
        const usersData = await response.json();
        console.log(usersData);
    }
    else {
        console.error("Error: ", responseStatus);
    }  
};
fetchApiInfo();