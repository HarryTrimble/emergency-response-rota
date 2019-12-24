var NotifyClient = require('notifications-node-client').NotifyClient,
    notify = new NotifyClient(process.env.NOTIFYAPIKEY);

const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// The URL here needs to match the URL of the page that the user is on
// when they type in their email address

// send new on-call rota prompt
router.post('/on-call-rota/confirm-prompt-text-message', function (req, res) {

  notify.sendSms(
    // this long string is the template ID, copy it from the template
    // page in GOV.UK Notify. It’s not a secret so it’s fine to put it
    // in your code.
    'e4cd3e4a-dbda-4adb-aa57-ef9d723cc59a',
    // `emailAddress` here needs to match the name of the form field in
    // your HTML page
    req.body.phoneNumber//'personalisation': {
    //'first-name': req.session.data['first-name']
//}
  );

  // This is the URL the users will be redirected to once the email
  // has been sent
  res.redirect('/on-call-rota/confirm-prompt-text-message');

});

// send new live emergency prompt
router.post('/live-emergency/confirm-prompt-text-message', function (req, res) {

  notify.sendSms(
    // this long string is the template ID, copy it from the template
    // page in GOV.UK Notify. It’s not a secret so it’s fine to put it
    // in your code.
    'c6ff95d6-ef8d-4308-9e13-7623f4284c26',
    // `emailAddress` here needs to match the name of the form field in
    // your HTML page
    req.body.phoneNumber//'personalisation': {
    //'first-name': req.session.data['first-name']
//}
  );

  // This is the URL the users will be redirected to once the email
  // has been sent
  res.redirect('/live-emergency/confirm-prompt-text-message');

});

// Send two factor authentication for view cancel shifts
router.post('/sign-in/view-cancel/two-factor-authentication', function (req, res) {

  notify.sendSms(
    // this long string is the template ID, copy it from the template
    // page in GOV.UK Notify. It’s not a secret so it’s fine to put it
    // in your code.
    'd29fb859-4f53-495c-a588-894493c0f722',
    // `emailAddress` here needs to match the name of the form field in
    // your HTML page
    req.body.phoneNumber//'personalisation': {
    //'first-name': req.session.data['first-name']
//}
  );

  // This is the URL the users will be redirected to once the email
  // has been sent
  res.redirect('/sign-in/view-cancel/two-factor-authentication');

});

// Send two factor authentication for new on-call rota
router.post('/sign-in/on-call-rota/two-factor-authentication', function (req, res) {

  notify.sendSms(
    // this long string is the template ID, copy it from the template
    // page in GOV.UK Notify. It’s not a secret so it’s fine to put it
    // in your code.
    'd29fb859-4f53-495c-a588-894493c0f722',
    // `emailAddress` here needs to match the name of the form field in
    // your HTML page
    req.body.phoneNumber//'personalisation': {
    //'first-name': req.session.data['first-name']
//}
  );

  // This is the URL the users will be redirected to once the email
  // has been sent
  res.redirect('/sign-in/on-call-rota/two-factor-authentication');

});

// Send two factor authentication for live emergency
router.post('/sign-in/live-emergency/two-factor-authentication', function (req, res) {

  notify.sendSms(
    // this long string is the template ID, copy it from the template
    // page in GOV.UK Notify. It’s not a secret so it’s fine to put it
    // in your code.
    'd29fb859-4f53-495c-a588-894493c0f722',
    // `emailAddress` here needs to match the name of the form field in
    // your HTML page
    req.body.phoneNumber//'personalisation': {
    //'first-name': req.session.data['first-name']
//}
  );

  // This is the URL the users will be redirected to once the email
  // has been sent
  res.redirect('/sign-in/live-emergency/two-factor-authentication');

});

// Confirm choosing on-call shifts
router.post('/cancel/confirm', function (req, res) {

  notify.sendSms(
    // this long string is the template ID, copy it from the template
    // page in GOV.UK Notify. It’s not a secret so it’s fine to put it
    // in your code.
    '56c4d2f0-e224-4775-832f-2d72975016d4',
    // `emailAddress` here needs to match the name of the form field in
    // your HTML page
    req.body.phoneNumber//'personalisation': {
    //'first-name': req.session.data['first-name']
//}
  );

  // This is the URL the users will be redirected to once the email
  // has been sent
  res.redirect('/cancel/confirm');

});

// Confirm choosing on-call shifts
router.post('/on-call-rota/confirm-shifts', function (req, res) {

  notify.sendSms(
    // this long string is the template ID, copy it from the template
    // page in GOV.UK Notify. It’s not a secret so it’s fine to put it
    // in your code.
    '56c4d2f0-e224-4775-832f-2d72975016d4',
    // `emailAddress` here needs to match the name of the form field in
    // your HTML page
    req.body.phoneNumber//'personalisation': {
    //'first-name': req.session.data['first-name']
//}
  );

  // This is the URL the users will be redirected to once the email
  // has been sent
  res.redirect('/on-call-rota/confirm-shifts');

});


module.exports = router
