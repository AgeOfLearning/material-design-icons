import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotonePermIdentityElement
 * @class IconTwotonePermIdentityElement
 * @extends {AoflElement}
 */
class IconTwotonePermIdentityElement extends AoflElement {
  /**
   * Creates an instance of IconTwotonePermIdentityElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-perm-identity';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotonePermIdentityElement.is, IconTwotonePermIdentityElement);

export default IconTwotonePermIdentityElement;
