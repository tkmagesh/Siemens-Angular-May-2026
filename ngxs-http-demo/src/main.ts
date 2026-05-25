
import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngxs/store';
import { AppComponent } from './app/app.component';
import { UserState } from './app/state/user.state';
import { withNgxsReduxDevtoolsPlugin } from '@ngxs/devtools-plugin';



bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideStore([UserState]),
    withNgxsReduxDevtoolsPlugin({})
  ]
});
