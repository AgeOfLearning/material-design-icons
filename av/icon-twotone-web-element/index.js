import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneWebElement
 * @class IconTwotoneWebElement
 * @extends {AoflElement}
 */
class IconTwotoneWebElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneWebElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-web';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneWebElement.is, IconTwotoneWebElement);

export default IconTwotoneWebElement;
