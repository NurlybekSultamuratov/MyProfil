import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import indexRouter from '../Routes/index';
import mongoose from 'mongoose';

// app config
const app = express();
export default app; //exporting as default object for this module

// db config
import * as DBConfig from "./db";

mongoose.connect(DBConfig.localURI)
  .then(() => {
    console.log(`Mongoose connected to MongoDB at: ${DBConfig.localURI}`);
  })
  .catch((error) => {
    console.error("Mongoose connection error:", error);
  });

const db = mongoose.connection;

// Handle additional connection events
db.on("disconnected", () => {
  console.log("Mongoose disconnected from MongoDB.");
});

// view engine setup
app.set('views', path.join(__dirname, '../Views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../../Client')));
app.use(express.static(path.join(__dirname, '../../node_modules')));

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err:createError.HttpError, req:express.Request, res:express.Response, next:express.NextFunction) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

//module.exports = app;
