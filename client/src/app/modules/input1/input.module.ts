import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core';
import { InputComponent } from './input.component';

@NgModule({
	imports: [
		CoreModule
	],
	declarations: [
		InputComponent
	],
	providers: [],
	exports: [InputComponent]

})

export class InputModule {}
