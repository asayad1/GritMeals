/*
This was in the <body> tag
<center> <h1>Search For Your Favorite Foods:</h1>
<form>
  <div class="container">
    <label>Enter a tag : </label>
    <input type="submit" placeholder="Tag" name="username" required>
    <button type="button" onclick="alert('Hello world!')">Click to Enter</button>
  </div>
</form>
*/

function Header()
{
    // Should a title go here?
    return (
        <center>
            <h1>Welcome to GritMeals!</h1>
            <h2> Search For Your Favorite Foods: </h2> 
        </center>
    )
}

function Button()
{
    return (
        <div> 
            <center>
                <input type="text" placeholder="Tag" name="username" required></input>
                <button type="button" onclick="alert('Hello World!')"> Click to Enter </button>
            </center>
        </div>
    )
}

function MainContent()
{
    return(
        <div>
            <Header />
            <Button />
        </div>
    )
}

ReactDOM.render(<MainContent />, document.getElementById("root"))