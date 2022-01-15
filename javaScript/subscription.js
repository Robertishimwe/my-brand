function buildTable(){


    let a = [
    {email:"amanda@gmail.com"},
    {email:"rene@gmail.com"},
    {email:"gashoka@gmail.com"},
    {email:"aimable@gmail.com"},
    {email:"manzi@gmail.com"}
   
   ];

   let mytable = document.getElementById("mytable");
   for(let i of a) {
    mytable.innerHTML += `
    <tr class="fetched">
     <td>${i.email}</td>    
    </tr>
    
    `
   }


} buildTable()




function subscription() {

    let a = document.getElementById("board");




    
    let b = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>sub</title>
        <style>
    
            @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap');
              *{
                 font-family: 'Roboto', sans-serif;
                 
               }
            .table1{
                margin: auto;
                width: 0%;
            }
            th{
                background-color: #1D53AE;
                color: white;
            }
            .fetched{
                text-align: center;
                background-color: #dde9f0;
            }
    
        
        </style>
    </head>
    <body>
    
    <table class="table1">
        <tr>
          <th> EMAILs </th> 
        </tr>
        <tbody id="mytable">
    
        </tbody>
    
    </table>
    
        
    </body>
    </html>`

    a.innerHTML= `${b}`;
}
