const person = {
  firstname: "Jane",
  lastname: "Doe",
  fullname: function () {
    return this.firstname + " " + this.lastname;
  },
};
alert(person.fullName());