import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneSecurityElement
 * @class IconTwotoneSecurityElement
 * @extends {AoflElement}
 */
class IconTwotoneSecurityElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneSecurityElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-security';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneSecurityElement.is, IconTwotoneSecurityElement);

export default IconTwotoneSecurityElement;
