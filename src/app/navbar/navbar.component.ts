import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { DOCUMENT } from '@angular/platform-browser';
import { WINDOW } from '../_services/window.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  /**
   * @type array
   */
  private _navbar = {
    transparent: false
  };

  /**
   * @type number
   */
  private _windowScroll: number = 0;

  /**
   * @type boolean
   */
  private _home: boolean = false;

  constructor(
    private _router: Router,
    @Inject(DOCUMENT) private _document: Document,
    @Inject(WINDOW) private _window) {
    _router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        this.updateHome(event.url);
        console.log('home ' + this._home + ' scroll ' + this._windowScroll);

        this.updateNavbar();
      }
    });
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    this._windowScroll = this._window.pageYOffset || this._document.documentElement.scrollTop || this._document.body.scrollTop || 0;

    this.updateNavbar();
  }

  public ngOnInit() {
    this.updateHome(this._router.url);
    console.log('home ' + this._home + ' scroll ' + this._windowScroll);

    this.updateNavbar();
  }

  /**
   * Check if we are at the home url
   *
   * @param _url
   */
  public updateHome(_url) {
    console.log('url ' + _url);
    if (_url === "/" || _url === "") {
      this._home = true;
    } else {
      this._home = false;
    }
  }

  /**
   * Update the navbar as fit
   */
  public updateNavbar() {
    if (this._home && this._windowScroll < 250) {
      this._navbar.transparent = true;
    } else {
      this._navbar.transparent = false;
    }
    console.log('navbar.transparent ' + this._navbar.transparent);
  }
}
