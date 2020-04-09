var LanguagesKnown;
(function (LanguagesKnown) {
    LanguagesKnown[LanguagesKnown["English"] = 0] = "English";
    LanguagesKnown[LanguagesKnown["Germany"] = 1] = "Germany";
    LanguagesKnown[LanguagesKnown["Italian"] = 2] = "Italian";
})(LanguagesKnown || (LanguagesKnown = {}));
var students = {
    Name: "murat",
    Age: 30,
    Phone: 5312171998,
    Language: LanguagesKnown[LanguagesKnown.English],
};
var studentList = [
    { Name: "sadık", Age: 22, Phone: 5312171998, Language: LanguagesKnown[LanguagesKnown.English], },
    { Name: "nazım ", Age: 21, Phone: 5312171998, Language: LanguagesKnown[LanguagesKnown.English], },
];
studentList.push(students);
/*for (let index = 0; index < studentList.length; index++) {
    var element = studentList[index];
    if(students.Age>25)
    console.log("Age:" + element.Age + " with name "+ element.Name + " has phone: "+element.Phone+ " knows language :"+element.Language );
}*/
//Function declaration
function GetStudentList(students) {
    students.forEach(function (element) {
        console.log("Age:" + element.Age + " with name " + element.Name + " has phone: " + element.Phone + " knows language :" + element.Language);
    });
}
GetStudentList(studentList);
// Rest parameters
function GetNumbers() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    nums.forEach(function (Element) {
        console.log("number: " + Element);
    });
}
GetNumbers(1, 2, 3, 4, 5, 6);
//default parameters
function GetInfo(info) {
    if (info === void 0) { info = "happy"; }
    console.log(info);
}
GetInfo("very happy");
//########################################################################### Function advanced
var StudentName = function (lName, fName) {
    return fName + "   " + lName;
};
console.log(StudentName("murat", "kırmızı"));
//Arrow Function
var StudentNames = function (lName, fName) { return fName + "   " + lName; };
console.log(StudentNames("MURAT", "MIRMIZI"));
/*************************** classes *****************************/
var Students = /** @class */ (function () {
    function Students(lName, fName) {
        this._lName = lName;
        this._fName = fName;
    }
    Students.prototype.GetFullName = function () {
        return this._lName + " " + this._fName;
    };
    return Students;
}());
var s1 = new Students("mert ", "murat");
console.log(s1.GetFullName());
//# sourceMappingURL=app.js.map