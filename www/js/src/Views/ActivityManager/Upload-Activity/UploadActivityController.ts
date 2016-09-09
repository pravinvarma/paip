/**
 * Created by soham on 8/27/2016.
 */
namespace Snappy.App.Controllers{

    export class UploadActivityController extends BaseController<ViewModels.UploadActivityViewModel>{

        public static ID = "UploadActivityController";

        public static get $inject() : string[]{
            return [
                "$scope",
                Services.Utilities.ID
            ]
        }

        constructor(
            $scope: ng.IScope,
            private Utilities: Services.Utilities){
            super($scope, ViewModels.UploadActivityViewModel);
        }

        protected view_loaded(event?: ng.IAngularEvent, eventArgs?: Ionic.IViewEventArguments): void {
        super.view_loaded(event, eventArgs);

        }
    }

}