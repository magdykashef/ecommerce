import { AuthService } from "./../../../../security/auth.service";
import { Component } from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"],
})
export class HeaderComponent {
  title = "test";
  dropdownOpen: boolean = false;
  dropdownNavbar: boolean = false;
  constructor(public authService: AuthService) {}
  Search(search: string) {
    console.log(search);
  }
}
