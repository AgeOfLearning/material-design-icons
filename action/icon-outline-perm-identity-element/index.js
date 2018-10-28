import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlinePermIdentityElement
 * @class IconOutlinePermIdentityElement
 * @extends {AoflElement}
 */
class IconOutlinePermIdentityElement extends AoflElement {
  /**
   * Creates an instance of IconOutlinePermIdentityElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-perm-identity';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlinePermIdentityElement.is, IconOutlinePermIdentityElement);

export default IconOutlinePermIdentityElement;
