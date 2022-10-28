import { CredentialsRoutingModule } from './credentials-layout.routing';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CredentialsLayoutComponent } from './credentials-layout.component';

@NgModule({
  declarations: [CredentialsLayoutComponent],
  imports: [CommonModule, CredentialsRoutingModule],
})
export class CredentialsLayoutModule {}
