import { Component, ViewChild, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  @ViewChild("f", { static: false }) signupForm: NgForm;
  defaultQuestion: "Advanced";
  user = {
    email: "",
    password: "",
    sub: ""
  };
  ngOnInit() {}

  onSubmit() {
    this.user.email = this.signupForm.value.email;
    this.user.password = this.signupForm.value.password;
    this.user.sub = this.signupForm.value.subscriptions;

    console.log(this.signupForm);
    console.log(this.user);
  }
}
