import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotone360Element
 * @class IconTwotone360Element
 * @extends {AoflElement}
 */
class IconTwotone360Element extends AoflElement {
  /**
   * Creates an instance of IconTwotone360Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-360';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotone360Element.is, IconTwotone360Element);

export default IconTwotone360Element;
