"use strict";
var config = (function () {
    function config() {
    }
    config.getEnvironmentVariable = function (value) {
        var environment;
        var data = {};
        environment = window.location.hostname;
        switch (environment) {
            case 'localhost':
                data = {
                    endPoint: 'http://localhost'
                };
                break;
            case 'https://riziko-boron.herokuapp.com':
                data = {
                    endPoint: 'https://riziko-boron.herokuapp.com'
                };
                break;
            default:
                data = {
                    endPoint: 'http://localhost'
                };
        }
        return data[value];
    };
    return config;
}());
exports.config = config;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0lBQUE7SUF5QkEsQ0FBQztJQXZCaUIsNkJBQXNCLEdBQXBDLFVBQXFDLEtBQUs7UUFDdEMsSUFBSSxXQUFrQixDQUFDO1FBQ3ZCLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNkLFdBQVcsR0FBRyxNQUFNLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQztRQUN2QyxNQUFNLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQ2xCLEtBQUksV0FBVztnQkFDWCxJQUFJLEdBQUc7b0JBQ0gsUUFBUSxFQUFFLGtCQUFrQjtpQkFDL0IsQ0FBQztnQkFDRixLQUFLLENBQUM7WUFDVixLQUFLLG9DQUFvQztnQkFDckMsSUFBSSxHQUFHO29CQUNILFFBQVEsRUFBRSxvQ0FBb0M7aUJBQ2pELENBQUM7Z0JBQ0YsS0FBSyxDQUFDO1lBRVY7Z0JBQ0ksSUFBSSxHQUFHO29CQUNILFFBQVEsRUFBRSxrQkFBa0I7aUJBQy9CLENBQUM7UUFDVixDQUFDO1FBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN2QixDQUFDO0lBQ0wsYUFBQztBQUFELENBekJBLEFBeUJDLElBQUE7QUF6QlksY0FBTSxTQXlCbEIsQ0FBQSIsImZpbGUiOiJhcHAuY29uZmlnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIGNvbmZpZyB7XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXRFbnZpcm9ubWVudFZhcmlhYmxlKHZhbHVlKSB7XHJcbiAgICAgICAgdmFyIGVudmlyb25tZW50OnN0cmluZztcclxuICAgICAgICB2YXIgZGF0YSA9IHt9O1xyXG4gICAgICAgIGVudmlyb25tZW50ID0gd2luZG93LmxvY2F0aW9uLmhvc3RuYW1lO1xyXG4gICAgICAgIHN3aXRjaCAoZW52aXJvbm1lbnQpIHtcclxuICAgICAgICAgICAgY2FzZSdsb2NhbGhvc3QnOlxyXG4gICAgICAgICAgICAgICAgZGF0YSA9IHtcclxuICAgICAgICAgICAgICAgICAgICBlbmRQb2ludDogJ2h0dHA6Ly9sb2NhbGhvc3QnXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2h0dHBzOi8vcml6aWtvLWJvcm9uLmhlcm9rdWFwcC5jb20nOlxyXG4gICAgICAgICAgICAgICAgZGF0YSA9IHtcclxuICAgICAgICAgICAgICAgICAgICBlbmRQb2ludDogJ2h0dHBzOi8vcml6aWtvLWJvcm9uLmhlcm9rdWFwcC5jb20nXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgZGF0YSA9IHtcclxuICAgICAgICAgICAgICAgICAgICBlbmRQb2ludDogJ2h0dHA6Ly9sb2NhbGhvc3QnXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZGF0YVt2YWx1ZV07XHJcbiAgICB9XHJcbn0iXX0=
