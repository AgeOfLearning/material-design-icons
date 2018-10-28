import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineSecurityElement
 * @class IconOutlineSecurityElement
 * @extends {AoflElement}
 */
class IconOutlineSecurityElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineSecurityElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-security';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineSecurityElement.is, IconOutlineSecurityElement);

export default IconOutlineSecurityElement;
