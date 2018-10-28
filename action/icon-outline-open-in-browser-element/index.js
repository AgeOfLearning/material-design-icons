import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineOpenInBrowserElement
 * @class IconOutlineOpenInBrowserElement
 * @extends {AoflElement}
 */
class IconOutlineOpenInBrowserElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineOpenInBrowserElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-open-in-browser';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineOpenInBrowserElement.is, IconOutlineOpenInBrowserElement);

export default IconOutlineOpenInBrowserElement;
