import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { JhipsterSharedModule } from 'app/shared';
import { COVERB_ROUTE, CoverbComponent } from './';

@NgModule({
  imports: [JhipsterSharedModule, RouterModule.forRoot([COVERB_ROUTE], { useHash: true })],
  declarations: [CoverbComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterCoverbModule {}
