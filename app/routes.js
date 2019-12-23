var NotifyClient = require('notifications-node-client').NotifyClient,
    notify = new NotifyClient(process.env.NOTIFYAPIKEY);

const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// The URL here needs to match the URL of the page that the user is on
// when they type in their email address
router.post('/sign-in-2fa', function (req, res) {

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
  res.redirect('/sign-in-2fa');

});

module.exports = router
