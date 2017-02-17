module.exports = {

	'aadhar': function (input) {
    let aad=/^\d{4}\s\d{4}\s\d{4}$/g
			return aad.test(input);
	},
  'pan': function (input) {
    let p_card=/^[(A-Z)|(a-z)]{5}\d{4}[(A-Z)|(a-z)]{1}$/g
    return p_card.test(input);
  },
  'passport': function (input) {
    var pass=/^[A-Z|a-z]{1}\d{7}$/g
		return pass.test(input);
	}

};
