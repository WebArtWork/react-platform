import { ButtonModule } from 'src/app/core/modules/button/button.module';
import { InputModule } from 'src/app/core/modules/input/input.module';
import { FileModule } from 'src/app/core/modules/file/file.module';
import { FormService } from 'src/app/core/modules/form/form.service';
import { SelectModule } from 'src/app/core/modules/select/select.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
/* componnets */
import { EmailComponent } from './email/email.component';
import { NumberComponent } from './number/number.component';
import { TimeComponent } from './time/time.component';
import { PhotoComponent } from './photo/photo.component';
import { PhotosComponent } from './photos/photos.component';
import { DateComponent } from './date/date.component';
import { TextComponent } from './text/text.component';
import { ButtonComponent } from './button/button.component';
import { PasswordComponent } from './password/password.component';
import { SelectComponent } from './select/select.component';
import { BooleanComponent } from './boolean/boolean.component';
import { TagsComponent } from './tags/tags.component';

@NgModule({
	imports: [
		InputModule,
		ButtonModule,
		CommonModule,
		FileModule,
		SelectModule
	],
	declarations: [
		/* declarations */
		EmailComponent,
		NumberComponent,
		TimeComponent,
		DateComponent,
		PhotoComponent,
		PhotosComponent,
		PasswordComponent,
		SelectComponent,
		TextComponent,
		ButtonComponent,
		BooleanComponent,
		TagsComponent
	]
})
export class FormcomponentsModule {
	constructor(private _form: FormService) {
		/* addComponents */
		this._form.injectComponent<ButtonComponent>(ButtonComponent);

		this._form.injectComponent<TextComponent>(TextComponent);

		this._form.injectComponent<NumberComponent>(NumberComponent);

		this._form.injectComponent<EmailComponent>(EmailComponent);

		this._form.injectComponent<PasswordComponent>(PasswordComponent);

		this._form.injectComponent<DateComponent>(DateComponent);

		this._form.injectComponent<TimeComponent>(TimeComponent);

		this._form.injectComponent<BooleanComponent>(BooleanComponent);

		this._form.injectComponent<SelectComponent>(SelectComponent);

		this._form.injectComponent<TagsComponent>(TagsComponent);

		this._form.injectComponent<PhotoComponent>(PhotoComponent);

		this._form.injectComponent<PhotosComponent>(PhotosComponent);

		// this._form.addComponent({
		// 	component: SelectComponent,
		// 	name: 'Select',
		// 	fields: ['Placeholder', 'Label', 'Items', 'Multiple'],
		// 	fieldComponent: {
		// 		Items: 'Tags',
		// 		Multiple: 'Boolean'
		// 	}
		// });
	}
}
