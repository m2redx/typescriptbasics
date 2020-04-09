import {IStudentInfo} from './IStudentInfo'
import Students from './Student'
enum LanguagesKnown{ English , Germany , Italian}




let students:IStudentInfo = {
    
    Name:"murat",
    Age:30,
    Phone: 5312171998,
    Language :LanguagesKnown [LanguagesKnown.English],
   

}

let studentList:Array<IStudentInfo>=[
    {Name: "sadık",Age:22, Phone: 5312171998,Language: LanguagesKnown [LanguagesKnown.English],},
    {Name: "nazım ",Age:21,Phone: 5312171998, Language: LanguagesKnown [LanguagesKnown.English],},
]

let studentListG:IStudentInfo[]=[
    {Name: "sadık",Age:22, Phone: 5312171998,Language: LanguagesKnown [LanguagesKnown.English],},
    {Name: "nazım ",Age:21,Phone: 5312171998, Language: LanguagesKnown [LanguagesKnown.English],},
]
studentList.push(students);

/*for (let index = 0; index < studentList.length; index++) {
    var element = studentList[index];
    if(students.Age>25)
    console.log("Age:" + element.Age + " with name "+ element.Name + " has phone: "+element.Phone+ " knows language :"+element.Language );
}*/

//Function declaration
function GetStudentList(students: IStudentInfo[]){
    students.forEach( element=>{
        
        console.log("Age:" + element.Age + " with name "+ element.Name + " has phone: "+element.Phone+ " knows language :"+element.Language );
    })      
    }

  
    GetStudentList(studentList);


    // Rest parameters
    function GetNumbers(...nums: number[]){
        nums.forEach(Element=> {
            console.log("number: "+ Element );
        })

    }

    GetNumbers(1,2,3,4,5,6)

    //default parameters

    function GetInfo(info: string="happy"){
        console.log(info);
    }
    GetInfo("very happy");


   
//########################################################################### Function advanced

let StudentName = function (lName:string,fName:string){
    return  fName+ "   "+ lName;

}

console.log(StudentName("murat","kırmızı"));

//Arrow Function
let StudentNames = (lName:string,fName:string) => {   return  fName+ "   "+ lName };

console.log(StudentNames("MURAT","MIRMIZI"));

/*************************** classes *****************************/



let s1= new Students("mert ","murat");
console.log(s1.GetFullName());


/**********************************generics*************** */
function GetStudentListGenerics(students: Array<IStudentInfo>){

    students.forEach(element =>{
        console.log("Age:" + element.Age + " with name "+ element.Name + " has phone: "+element.Phone+ " knows language :"+element.Language );
    })

}
GetStudentListGenerics(studentListG);