import { Component, OnInit, HostListener, Inject } from "@angular/core";
import { Router, NavigationStart } from "@angular/router";
import { DOCUMENT } from "@angular/platform-browser";
import { WINDOW } from "../_services/window.service";
import { PageScrollConfig } from "ngx-page-scroll";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
  host: {
    "(window:scroll)": "updateToolbar($event)"
  }
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

  /**
   * @type array
   */
  private _links = [];

  constructor(
    private _router: Router,
    @Inject(DOCUMENT) private _document: Document,
    @Inject(WINDOW) private _window
  ) {
    /**
     * PageScroll configuration
     */
    PageScrollConfig.defaultScrollOffset = 64;
    PageScrollConfig.defaultDuration = 250;
    PageScrollConfig.defaultEasingLogic = {
      ease: (t: number, b: number, c: number, d: number): number => {
        // easeInOutExpo easing
        if (t === 0) return b;
        if (t === d) return b + c;
        if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
        return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
      }
    };

    /**
     * The navbar links
     */
    this._links = [
      {
        name: "A REPA",
        url: "#comp-description"
      },
      {
        name: "Serviços",
        url: "#comp-services"
      },
      {
        name: "Deslocações",
        url: "#comp-map-social"
      },
      {
        name: "Clientes",
        url: "#comp-map-social"
      },
      {
        name: "Contactos",
        url: "#comp-call-now"
      }
    ];

    _router.events.forEach(event => {
      if (event instanceof NavigationStart) {
        this.updateHome(event.url);

        this.updateNavbar();
      }
    });
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    this._windowScroll =
      this._window.pageYOffset ||
      this._document.documentElement.scrollTop ||
      this._document.body.scrollTop ||
      0;

    this.updateNavbar();
  }

  public ngOnInit() {
    this.updateHome(this._router.url);

    this.updateNavbar();
  }

  /**
   * Check if we are at the home url
   *
   * @param _url
   */
  public updateHome(_url) {
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
  }
}
