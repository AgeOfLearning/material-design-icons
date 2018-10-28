import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpPermIdentityElement
 * @class IconSharpPermIdentityElement
 * @extends {AoflElement}
 */
class IconSharpPermIdentityElement extends AoflElement {
  /**
   * Creates an instance of IconSharpPermIdentityElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-perm-identity';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpPermIdentityElement.is, IconSharpPermIdentityElement);

export default IconSharpPermIdentityElement;
