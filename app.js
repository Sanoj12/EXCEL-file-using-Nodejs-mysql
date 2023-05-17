const mysql=require('mysql');
const reader=require('xlsx')

const connection=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"user_db"
});

connection.connect((err)=>{
    if(err) throw err;
    console.log("database connected");

    // connection.query('create database user_db',(err)=>{
    //     if(err) throw err;

    //     console.log("db created")
    // })

    //table creation

    // const sql="create table users(id int primary key auto_increment,name varchar(15) not null,address varchar(25) not null,age int not null,DOB date not null)";
    // connection.query(sql,(err,data)=>{
    //     if(err) throw err;
    //     console.log("table created suucessfully");
    // })

    const file=reader.readFile('./users.xlsx');

    let excelData=[];

    const sheets=file.SheetNames

    for(let i=0;i< sheets.length;i++){
        const data=reader.utils.sheet_to_json(
            file.Sheets[file.SheetNames[i]])
            data.forEach((res)=>{
                excelData.push(res)
            })
    }
  
// Printing data
console.log(excelData);

})