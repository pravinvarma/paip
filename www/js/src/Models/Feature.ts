/**
 * Created by soham on 8/7/2016.
 */

namespace Snappy.App.Models{

    export class Feature {
        public name: string;
        public href: string;
        public state: string;
        public icon: string;

        constructor(name:string,href:string, state:string, icon:string){
            this.name = name;
            this.href = href;
            this.state = state;
            this.icon = icon;
        }
    }
}
