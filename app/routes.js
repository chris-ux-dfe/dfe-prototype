const express = require('express')
const router = express.Router()

// Add your routes here - above the module.exports line

// Branching
router.post('/examples/branching/over-18-answer', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let over18 = req.session.data['trust-location']

  if (over18 === 'Across multiple schools') {
    res.redirect('/mat3/1-location-b')
  } else {
    res.redirect('/mat3/2-job-details')
  }
})

module.exports = router
