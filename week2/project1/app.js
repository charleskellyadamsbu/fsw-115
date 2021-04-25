let data = {
    "Count": 5,
    "Message": "Response returned successfully",
    "SearchCriteria": "Make: mercedes",
    "Results": [
        {
            "MakeId": 449,
            "MakeName": "MERCEDES-BENZ",
            "VehicleTypeId": 2,
            "VehicleTypeName": "Passenger Car"
        },
        {
            "MakeId": 449,
            "MakeName": "MERCEDES-BENZ",
            "VehicleTypeId": 3,
            "VehicleTypeName": "Truck "
        },
        {
            "MakeId": 449,
            "MakeName": "MERCEDES-BENZ",
            "VehicleTypeId": 5,
            "VehicleTypeName": "Bus"
        },
        {
            "MakeId": 449,
            "MakeName": "MERCEDES-BENZ",
            "VehicleTypeId": 7,
            "VehicleTypeName": "Multipurpose Passenger Vehicle (MPV)"
        },
        {
            "MakeId": 449,
            "MakeName": "MERCEDES-BENZ",
            "VehicleTypeId": 10,
            "VehicleTypeName": "Incomplete Vehicle"
        }
    ]
};

let container = document.getElementsByClassName('container')[0];
console.log(data.Results.length);
for(let i = 0; i < data.Results.length; i++) {
    let list = document.createElement('ul');
    let item1 = document.createElement('li');
    let item2 = document.createElement('li');
    let item3 = document.createElement('li');
    let item4 = document.createElement('li');
    item1.textContent = "Make Name: " + data.Results[i].MakeName;
    item2.textContent = "Make ID: " + data.Results[i].MakeId;
    item3.textContent = "Type ID: " + data.Results[i].VehicleTypeId;
    item4.textContent = "Type Name: " + data.Results[i].VehicleTypeName;

    list.appendChild(item1);
    list.appendChild(item2);
    list.appendChild(item3);
    list.appendChild(item4);
    container.appendChild(list);
}