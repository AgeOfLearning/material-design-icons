import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneVerifiedUserElement
 * @class IconTwotoneVerifiedUserElement
 * @extends {AoflElement}
 */
class IconTwotoneVerifiedUserElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneVerifiedUserElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-verified-user';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneVerifiedUserElement.is, IconTwotoneVerifiedUserElement);

export default IconTwotoneVerifiedUserElement;
