export class config {

    public static getEnvironmentVariable(value) {
        var environment:string;
        var data = {};
        environment = window.location.hostname;
        switch (environment) {
            case'localhost':
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
    }
}