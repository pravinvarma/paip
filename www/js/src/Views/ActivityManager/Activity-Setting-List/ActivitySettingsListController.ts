/**
 * Created by soham on 8/16/2016.
 */

namespace Snappy.App.Controllers{

    export class ActivitySettingsListController extends BaseController<ViewModels.ActivitySettingsListViewModel> {
        public static ID = "ActivitySettingsListController";

        public static get $inject() : string[]{
            return [
                "$scope",
                Services.Utilities.ID
            ]
        }

        constructor(
            $scope: ng.IScope,
            private Utilities: Services.Utilities){
            super($scope, ViewModels.ActivitySettingsListViewModel);
        }

        protected view_loaded(event?: ng.IAngularEvent, eventArgs?: Ionic.IViewEventArguments): void {
            super.view_loaded(event, eventArgs);

            this.viewModel.activityManagerOptions = this.Utilities.activityManagerOptions;
        }
    }

}
