$(function(){
  console.log('jQuerry is working');
  $('#newEmployeeForm').on('submit', function(event){
    event.preventDefault();
    console.log('Form has been submitted!!');

    var newEmployeeArray = $(this).serializeArray();
    console.log(newEmplpoyeeArray);

    var newEmplpoyeeObject={};

    for(var i = 0; i< newEmplpoyeeArray.length; i++){
      console.log(newEmployeeArray[i]);
      var inputFieldName = newEmployeeArray[i].name;
      var inputFieldValue = newEmployeeArray[i].value;
      newEmployeeObject[inputFieldName]=inputFieldValue;

    }
    console.log(newEmployeeObject);
  });
});
