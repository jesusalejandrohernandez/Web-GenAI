import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatDocumentsComponent } from './pages/chat-documents/chat-documents.component';
import { HttpClientModule } from '@angular/common/http';
import { TweetPreviewComponent } from './pages/tweet-preview/tweet-preview.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { RecipeRecommendationComponent } from './pages/recipe-recommendation/recipe-recommendation.component';
import { MarketplaceComponent } from './pages/marketplace/marketplace.component';
import { ProductCardComponent } from './common/marketplace/product-card/product-card.component';
import { ProductDetailComponent } from './common/marketplace/product-detail/product-detail.component';
import { ImageViewerComponent } from './common/marketplace/image-viewer/image-viewer.component';
import { ProductCardMlComponent } from './common/marketplace/product-card-ml/product-card-ml.component';
import { ProductDetailMlComponent } from './common/marketplace/product-detail-ml/product-detail-ml.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatDocumentsComponent,
    TweetPreviewComponent,
    RecipeRecommendationComponent,
    MarketplaceComponent,
    ProductCardComponent,
    ProductDetailComponent,
    ImageViewerComponent,
    ProductCardMlComponent,
    ProductDetailMlComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatIconModule,
    MatFormFieldModule,
    MatGridListModule,
    MatSelectModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
