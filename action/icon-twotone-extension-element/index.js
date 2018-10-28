import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneExtensionElement
 * @class IconTwotoneExtensionElement
 * @extends {AoflElement}
 */
class IconTwotoneExtensionElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneExtensionElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-extension';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneExtensionElement.is, IconTwotoneExtensionElement);

export default IconTwotoneExtensionElement;
