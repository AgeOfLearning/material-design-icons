import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpOpenInBrowserElement
 * @class IconSharpOpenInBrowserElement
 * @extends {AoflElement}
 */
class IconSharpOpenInBrowserElement extends AoflElement {
  /**
   * Creates an instance of IconSharpOpenInBrowserElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-open-in-browser';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpOpenInBrowserElement.is, IconSharpOpenInBrowserElement);

export default IconSharpOpenInBrowserElement;
