// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"
import jquery from "jquery"
window.$ = window.jQuery = jquery;

import { Turbo } from "@hotwired/turbo-rails"

Turbo.StreamActions.eval = function() {
  document.querySelector("body").append(this.templateContent)
}
