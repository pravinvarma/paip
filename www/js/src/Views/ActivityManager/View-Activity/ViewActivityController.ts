/**
 * Created by soham on 9/4/2016.
 */
namespace Snappy.App.Controllers{

    export interface IViewActivityStateParams {
        viewActivityType: number;
    }

    export class ViewActivityController extends BaseController<ViewModels.ViewActivityViewModel>{
        public static ID = "ViewActivityController";

        public static get $inject() : string[]{
            return [
                "$scope",
                "$stateParams",
                Services.Utilities.ID
            ]
        }

        constructor(
            $scope: ng.IScope,
            private $stateParams: IViewActivityStateParams,
            private Utilities: Services.Utilities){
            super($scope, ViewModels.UploadActivityViewModel);
        }

        protected view_loaded(event?: ng.IAngularEvent, eventArgs?: Ionic.IViewEventArguments): void {
        super.view_loaded(event, eventArgs);
            this.viewModel.viewType = this.$stateParams.viewActivityType;
        }

    }

}