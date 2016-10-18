"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var app_component_1 = require("./app.component");
var message_service_1 = require("./messages/message.service");
var message_component_1 = require("./messages/message.component");
var message_list_component_1 = require("./messages/message-list.component");
var messages_component_1 = require("./messages/messages.component");
var message_input_component_1 = require("./messages/message-input.component");
var authentication_component_1 = require("./auth/authentication.component");
var logout_component_1 = require("./auth/logout.component");
var signup_component_1 = require("./auth/signup.component");
var signin_component_1 = require("./auth/signin.component");
var header_component_1 = require("./header.component");
var app_routing_1 = require("./app.routing");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                message_component_1.MessageComponent,
                message_list_component_1.MessageListComponent,
                messages_component_1.MessagesComponent,
                message_input_component_1.MessageInputComponent,
                authentication_component_1.AuthenticationComponent,
                logout_component_1.LogoutComponent,
                signup_component_1.SignupComponent,
                signin_component_1.SigninComponent,
                header_component_1.HeaderComponent
            ],
            imports: [platform_browser_1.BrowserModule, app_routing_1.ROUTING, forms_1.FormsModule, forms_1.ReactiveFormsModule, http_1.HttpModule],
            bootstrap: [app_component_1.AppComponent],
            providers: [message_service_1.MessageService]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHFCQUF5QixlQUFlLENBQUMsQ0FBQTtBQUN6QyxpQ0FBOEIsMkJBQTJCLENBQUMsQ0FBQTtBQUUxRCw4QkFBNkIsaUJBQWlCLENBQUMsQ0FBQTtBQUMvQyxnQ0FBK0IsNEJBQTRCLENBQUMsQ0FBQTtBQUM1RCxrQ0FBaUMsOEJBQThCLENBQUMsQ0FBQTtBQUNoRSx1Q0FBcUMsbUNBQW1DLENBQUMsQ0FBQTtBQUN6RSxtQ0FBa0MsK0JBQStCLENBQUMsQ0FBQTtBQUNsRSx3Q0FBc0Msb0NBQW9DLENBQUMsQ0FBQTtBQUMzRSx5Q0FBd0MsaUNBQWlDLENBQUMsQ0FBQTtBQUMxRSxpQ0FBZ0MseUJBQXlCLENBQUMsQ0FBQTtBQUMxRCxpQ0FBZ0MseUJBQXlCLENBQUMsQ0FBQTtBQUMxRCxpQ0FBZ0MseUJBQXlCLENBQUMsQ0FBQTtBQUMxRCxpQ0FBZ0Msb0JBQW9CLENBQUMsQ0FBQTtBQUNyRCw0QkFBd0IsZUFBZSxDQUFDLENBQUE7QUFDeEMsc0JBQWlELGdCQUFnQixDQUFDLENBQUE7QUFDbEUscUJBQTJCLGVBQWUsQ0FBQyxDQUFBO0FBbUIzQztJQUFBO0lBRUEsQ0FBQztJQW5CRDtRQUFDLGVBQVEsQ0FBQztZQUNOLFlBQVksRUFBRTtnQkFDViw0QkFBWTtnQkFDWixvQ0FBZ0I7Z0JBQ2hCLDZDQUFvQjtnQkFDcEIsc0NBQWlCO2dCQUNqQiwrQ0FBcUI7Z0JBQ3JCLGtEQUF1QjtnQkFDdkIsa0NBQWU7Z0JBQ2Ysa0NBQWU7Z0JBQ2Ysa0NBQWU7Z0JBQ2Ysa0NBQWU7YUFDbEI7WUFDRCxPQUFPLEVBQUUsQ0FBQyxnQ0FBYSxFQUFFLHFCQUFPLEVBQUUsbUJBQVcsRUFBRSwyQkFBbUIsRUFBRSxpQkFBVSxDQUFDO1lBQy9FLFNBQVMsRUFBRSxDQUFDLDRCQUFZLENBQUM7WUFDekIsU0FBUyxFQUFFLENBQUMsZ0NBQWMsQ0FBQztTQUM5QixDQUFDOztpQkFBQTtJQUdGLGdCQUFDO0FBQUQsQ0FGQSxBQUVDLElBQUE7QUFGWSxpQkFBUyxZQUVyQixDQUFBIiwiZmlsZSI6ImFwcC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBNZXNzYWdlU2VydmljZSB9IGZyb20gXCIuL21lc3NhZ2VzL21lc3NhZ2Uuc2VydmljZVwiO1xuaW1wb3J0IHsgTWVzc2FnZUNvbXBvbmVudCB9IGZyb20gXCIuL21lc3NhZ2VzL21lc3NhZ2UuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBNZXNzYWdlTGlzdENvbXBvbmVudCB9IGZyb20gXCIuL21lc3NhZ2VzL21lc3NhZ2UtbGlzdC5jb21wb25lbnRcIjtcbmltcG9ydCB7IE1lc3NhZ2VzQ29tcG9uZW50IH0gZnJvbSBcIi4vbWVzc2FnZXMvbWVzc2FnZXMuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBNZXNzYWdlSW5wdXRDb21wb25lbnQgfSBmcm9tIFwiLi9tZXNzYWdlcy9tZXNzYWdlLWlucHV0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQXV0aGVudGljYXRpb25Db21wb25lbnQgfSBmcm9tIFwiLi9hdXRoL2F1dGhlbnRpY2F0aW9uLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgTG9nb3V0Q29tcG9uZW50IH0gZnJvbSBcIi4vYXV0aC9sb2dvdXQuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBTaWdudXBDb21wb25lbnQgfSBmcm9tIFwiLi9hdXRoL3NpZ251cC5jb21wb25lbnRcIjtcbmltcG9ydCB7IFNpZ25pbkNvbXBvbmVudCB9IGZyb20gXCIuL2F1dGgvc2lnbmluLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgSGVhZGVyQ29tcG9uZW50IH0gZnJvbSBcIi4vaGVhZGVyLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgUk9VVElORyB9IGZyb20gXCIuL2FwcC5yb3V0aW5nXCI7XG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9mb3Jtc1wiO1xuaW1wb3J0IHsgSHR0cE1vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9odHRwXCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbXG4gICAgICAgIEFwcENvbXBvbmVudCxcbiAgICAgICAgTWVzc2FnZUNvbXBvbmVudCxcbiAgICAgICAgTWVzc2FnZUxpc3RDb21wb25lbnQsXG4gICAgICAgIE1lc3NhZ2VzQ29tcG9uZW50LFxuICAgICAgICBNZXNzYWdlSW5wdXRDb21wb25lbnQsXG4gICAgICAgIEF1dGhlbnRpY2F0aW9uQ29tcG9uZW50LFxuICAgICAgICBMb2dvdXRDb21wb25lbnQsXG4gICAgICAgIFNpZ251cENvbXBvbmVudCxcbiAgICAgICAgU2lnbmluQ29tcG9uZW50LFxuICAgICAgICBIZWFkZXJDb21wb25lbnRcbiAgICBdLFxuICAgIGltcG9ydHM6IFtCcm93c2VyTW9kdWxlLCBST1VUSU5HLCBGb3Jtc01vZHVsZSwgUmVhY3RpdmVGb3Jtc01vZHVsZSwgSHR0cE1vZHVsZV0sXG4gICAgYm9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XSxcbiAgICBwcm92aWRlcnM6IFtNZXNzYWdlU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHtcblxufSJdfQ==
