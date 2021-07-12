import app from "./server";

const PORT = 4000;

app.listen(PORT, ()=>{
    console.log(`Server is open on http://localhost:${PORT}`);
});