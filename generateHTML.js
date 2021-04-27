// Change to make it html 
// Add sections for what type of employee
// (Arrow) function to dynamically create the README file with template literal, inserting user responses from the prompts in Inquirer
const generateHTML = (responses) => {
    // Destructuring the user's responses (makes drier code in the template literal section) (from activities 25&26 in week 9)
    const { type, name, title, id, email, office, github, school } = responses;
  
    return `
    <!DOCTYPE html>
    <html lang="en-US">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
      <link rel = stylsheet href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
      <script
        src="https://code.jquery.com/jquery-3.5.1.min.js"
        integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
        crossorigin="anonymous">
      </script>
      <title>My Team</title>
    </head>
    <body>
      <div class="jumbotron jumbotron-fluid">
        <div class="container">
            <h1 class="display-4 d-flex justify-content-center text-warning">My Team</h1>
        </div>
      </div>
    
     <section class="row justify-content-around">
        //  <!-- Manager -->
      <div class="col-12 col-sm-6 col-lg-4 mb-3">
        <div class="card employee-card text-danger">
          <div class="card-header">
            <h2 class="card-title">${name}</h5>
            <!-- <h3 class="card-title">${type}<i class="fa fa-address-card-o"></i></h3>  -->
            <h3 class="card-title">${type}<i class="fa fa-address-card-o"></i></h3> 
          </div>
          <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">Title: ${title}</li>
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email: <a href="${email]">${email}</a></li>
                <li class="list-group-item">Office Number: ${office}</a></li>
            </ul>
          </div>
        </div>
      </div>
      // <!-- Engineer -->
      <div class="col-12 col-sm-6 col-lg-4 mb-3">
        <div class="card employee-card text-primary">
          <div class="card-header">
            <h2 class="card-title">${name}</h5>
            <!-- <h3 class="card-title">Engineer<i class="fa fa-cogs"></i></h3>  -->
            <h3 class="card-title">${type}<i class="fa fa-cogs"></i></h3> 
          </div>
          <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">Title: ${title}</li>
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email: <a href="${email]">${email}</a></li>
                <li class="list-group-item">GitHub: <a href="${github}" target="_blank" rel="noopener noreferrer">${github}</a></li>
            </ul>
          </div>
        </div>
      </div>
    
    
      // <!-- Intern -->
     <div class="col-12 col-sm-6 col-lg-4 mb-3">
        <div class="card employee-card text-success">
          <div class="card-header">
            <h2 class="card-title">${name}</h5>
            <!-- <h3 class="card-title">Intern<i class="fa fa-graduation-cap"></i></h3>  -->
            <h3 class="card-title">${type}<i class="fa fa-graduation-cap"></i></h3> 
          </div>
          <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">Title: ${title}</li>
                <li class="list-group-item">ID: ${id}</li>
                <li class="list-group-item">Email: <a href="${email]">${email}</a></li>
                <li class="list-group-item">School: ${school}</a></li>
            </ul>
          </div>
        </div>
      </div>
    
     </section>
    </body>
    </html>
    ``
  };
  
  // Exports this file so the content can be used in other files (in this case, index.js)
  module.exports = {
    generateHTML
  }