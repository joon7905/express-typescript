
import express, {NextFunction, Request, Response} from 'express';

const app = express();


app.get('/', (req:Request, res: Response, next: NextFunction)=>{
    res.send('<h1>Hello</h1>')
});

console.log('hello');
app.listen(8080);

