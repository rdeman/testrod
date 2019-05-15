import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestrodSharedLibsModule, TestrodSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [TestrodSharedLibsModule, TestrodSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [TestrodSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TestrodSharedModule {
  static forRoot() {
    return {
      ngModule: TestrodSharedModule
    };
  }
}
