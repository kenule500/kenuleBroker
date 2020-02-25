import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatSidenavModule, MatToolbarModule, MatIconModule, MatListModule,
  MatCardModule, MatFormFieldModule, MatInputModule, MatCheckboxModule, MatSelectModule,
   MatDatepickerModule, MatNativeDateModule, MatTabsModule, MatSnackBarModule, MatProgressSpinnerModule} from '@angular/material';


@NgModule({
  imports: [FlexLayoutModule, MatSidenavModule, MatToolbarModule, MatIconModule, MatListModule, MatCardModule,
            MatFormFieldModule, MatInputModule, MatCheckboxModule, MatSelectModule, MatDatepickerModule,
            MatNativeDateModule, MatTabsModule, MatSnackBarModule, MatProgressSpinnerModule],
  exports: [FlexLayoutModule, MatSidenavModule, MatToolbarModule, MatIconModule, MatListModule, MatCardModule,
            MatFormFieldModule, MatInputModule, MatCheckboxModule, MatSelectModule, MatDatepickerModule,
             MatNativeDateModule, MatTabsModule, MatSnackBarModule, MatProgressSpinnerModule]
})
export class MaterialModule {}
