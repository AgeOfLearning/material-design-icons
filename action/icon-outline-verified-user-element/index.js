import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineVerifiedUserElement
 * @class IconOutlineVerifiedUserElement
 * @extends {AoflElement}
 */
class IconOutlineVerifiedUserElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineVerifiedUserElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-verified-user';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineVerifiedUserElement.is, IconOutlineVerifiedUserElement);

export default IconOutlineVerifiedUserElement;
