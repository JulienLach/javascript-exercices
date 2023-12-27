function getFormvalue(event) {
    // Prevent the default form submission behavior
    event.preventDefault();

    const firstName = document.getElementById("firstName");
    const lastName = document.getElementById("lastName");

    const values = {
        firstName: firstName.value,
        lastName: lastName.value
    };

    console.log(values);
}
