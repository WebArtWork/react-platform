import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core';
import { ButtonComponent } from './button.component';

@NgModule({
	imports: [
		CoreModule
	],
	declarations: [
		ButtonComponent
	],
	providers: [],
	exports: [ButtonComponent]

})

export class ButtonModule { }
