// what is the output of this code
// console.log(typeof null);
// console.log(typeof undefined);
// console.log([1,2] == [1,2]);

// Q.2
// const user1 = {
//   name: "susheel;",
//   cource: "full stack developer",
//   institute: "masai school",
//   address: {
//     city: "bangaluru",
//     state: "karnataka",
//   },
// };
// const user2 = JSON.parse(JSON.stringify(user1))
// const user3 = JSON.parse(JSON.stringify(user1));
// user2.name = "sonu";
// user3.name = "pillu";
// user2.address.city = "raichur";
// user3.address.city = "pune";
// console.log(user1);
// console.log(user2);
// console.log(user3);

// Q.3

// create a function you provided one arr you want to check the element is is first alement all the string in secound element

var a = ["heffddsfllo", "jjj"];

function check_element(arr) {
    var fword = arr[0];
    var sword = arr[1];

    for (var i = 0; i < sword.length; i++){
        var letter = sword[i]
        if (fword.indexOf(letter) === -1)
            return false
    }
    return true
}

console.log(check_element(a));

