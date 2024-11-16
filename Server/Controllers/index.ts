//importing only neccessary things from express
import express, {Request, Response, NextFunction} from 'express';


export function DisplayAboutPage(req: Request, res: Response, next: NextFunction):void
{
    res.render('content/aboutMe', { title: 'About' });
}


export function DisplayHomePage(req: Request, res: Response, next: NextFunction): void 
{
    res.render('index', { title: 'Home' });
}
  


export function DisplayContactPage(req: Request, res: Response, next: NextFunction): void 
{
    res.render('content/projects', { title: 'Current Projects' });
}