	var isJsRe = /\.js$/,
	isTestRe = /\/test\//,
    amdIncludes = { 'ckeditor/ckeditor': 1 };

var profile = {
	resourceTags: {
		test: function(filename, mid){
			return isTestRe.test(filename);
		},

		miniExclude: function(filename, mid){
			return isTestRe.test(filename);
		},

        copyOnly: function(filename, mid){
            return !(mid in amdIncludes);
        },

		amd: function(filename, mid){
			return isJsRe.test(filename) && (mid in amdIncludes);
		}
	}
};
