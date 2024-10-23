import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[mfeeProjectCheckImageUrl]'
})
export class CheckImageUrlDirective implements OnInit {
  @Input('mfeeProjectCheckImageUrl') imageUrl: string = '';

  constructor(private el: ElementRef) {}

  ngOnInit() {
    if (this.isBase64(this.imageUrl)) {
      this.setBackgroundImage(this.imageUrl);
    } else if (this.isValidUrl(this.imageUrl)) {
      this.setBackgroundImage(this.imageUrl);
    } else {
      console.warn('Invalid image URL:', this.imageUrl);
      this.setBackgroundImage('default-image-url.jpg');
    }
  }

  private isBase64(url: string): boolean {
    const base64Pattern = /^data:image\/(png|jpg|jpeg|gif);base64,/;
    return base64Pattern.test(url);
  }

  private isValidUrl(url: string): boolean {
    try {
      const parsedUrl = new URL(url);
      return parsedUrl.protocol === 'http:' || parsedUrl.protocol === 'https:';
    } catch (_) {
      return false;
    }
  }

  private setBackgroundImage(imageUrl: string): void {
    this.el.nativeElement.style.backgroundImage = `url(${imageUrl})`;
    this.el.nativeElement.style.backgroundSize = 'cover';
    this.el.nativeElement.style.backgroundPosition = 'center';
  }
}
