﻿var singleBuildViewModel = baseBuild.extend({
    init: function (data, buildTypes) {
        this._super(data);
        var self = this;

        self.buildType =  ko.computed(function () {
            if (!self.buildTypeId)
                return null;
            var buildTypeId = self.buildTypeId();
            var buildType = ko.utils.arrayFirst(buildTypes, function (item) {
                return item.id == buildTypeId;
            });
            return buildType.name;
        }, self);
    }
});
