import test from 'ava';
import request from 'supertest';
import { checkArrayLength, checkFail, checkSuccess } from './helpers/general';

const PORT = process.env.PORT || 3500;
const api = request(`http://0.0.0.0:${PORT}`);

test('testing for failure on invalid height', async t => {
  const res = await api
    .get('/noise/2/fail')
    .send();

  checkFail(t, res, 400);
});

test('testing for failure on invalid width', async t => {
  const res = await api
    .get('/noise/fail/656')
    .send();

  checkFail(t, res, 400);
});

test('testing for failure 404', async t => {
  const res = await api
    .get('/missing')
    .send();

  checkFail(t, res, 404);
});

test('2x2', async t => {
  const res = await api
    .get('/noise/2/2')
    .send();

  checkSuccess(t, res);
  checkArrayLength(t, res, 4);
});

test('20x20', async t => {
  const res = await api
    .get('/noise/20/20')
    .send();

  checkSuccess(t, res);
  checkArrayLength(t, res, 400);
});

test('testing options', async t => {
  const res = await api
    .get('/noise/2/2?octaveCount=5&amplitude=0.5&persistence=0.75')
    .send();

  checkSuccess(t, res);
  checkArrayLength(t, res, 4);
});
