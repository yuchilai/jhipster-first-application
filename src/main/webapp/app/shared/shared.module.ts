import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { JhipsterFirstApplicationSharedLibsModule, JhipsterFirstApplicationSharedCommonModule, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [JhipsterFirstApplicationSharedLibsModule, JhipsterFirstApplicationSharedCommonModule],
  declarations: [HasAnyAuthorityDirective],
  exports: [JhipsterFirstApplicationSharedCommonModule, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterFirstApplicationSharedModule {
  static forRoot() {
    return {
      ngModule: JhipsterFirstApplicationSharedModule
    };
  }
}
