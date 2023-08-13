import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextInterpolationComponent } from './text-interpolation/text-interpolation.component';
import { BindingComponent } from './binding/binding.component';
import { FormsModule } from '@angular/forms';
import { PipesComponent } from './pipes/pipes.component';
import { DirectivesComponent } from './directives/directives.component';
import { HighlightDirective } from './directives/highlight.directive';
import { ComponentLifecycleComponent } from './component-lifecycle/component-lifecycle.component';
import { ComponentInteractionComponent } from './component-interaction/component-interaction.component';
import { ChildComponent } from './component-interaction/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    TextInterpolationComponent,
    BindingComponent,
    PipesComponent,
    DirectivesComponent,
    HighlightDirective,
    ComponentLifecycleComponent,
    ComponentInteractionComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
