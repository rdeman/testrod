import { NgModule } from '@angular/core';

import { TestrodSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [TestrodSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [TestrodSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class TestrodSharedCommonModule {}
