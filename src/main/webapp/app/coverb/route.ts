import { Route } from '@angular/router';
import { UserRouteAccessService } from 'app/core';
import { CoverbComponent } from './component';

export const COVERB_ROUTE: Route = {
  path: '',
  component: CoverbComponent,
  data: {
    authorities: [],
    pageTitle: 'coverb.page.title'
  },
  canActivate: [UserRouteAccessService]
};
