
import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { provideStore } from '@ngxs/store';
import { AppComponent } from './app/app.component';
import { UserFormComponent } from './app/users/usert.component';
import { UserState } from './app/state/user.state';
import { withNgxsReduxDevtoolsPlugin } from '@ngxs/devtools-plugin';



bootstrapApplication(UserFormComponent, {
  providers: [
    provideHttpClient(),
    provideStore([UserState]),
    withNgxsReduxDevtoolsPlugin({})
  ]
});
