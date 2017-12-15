import { NgModule } from "@angular/core"; // ModuleWithProviders

import { SharedService } from "./shared.service";
export { SharedService } from "./shared.service";

@NgModule({
  providers: [SharedService]
})
export class SharedModule {
}
