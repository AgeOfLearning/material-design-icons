import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneOpenInBrowserElement
 * @class IconTwotoneOpenInBrowserElement
 * @extends {AoflElement}
 */
class IconTwotoneOpenInBrowserElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneOpenInBrowserElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-open-in-browser';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneOpenInBrowserElement.is, IconTwotoneOpenInBrowserElement);

export default IconTwotoneOpenInBrowserElement;
