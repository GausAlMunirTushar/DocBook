const app = require('./app')
// Port
const port = process.env.PORT || 8080;

// Listen Port
app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
})