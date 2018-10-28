import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpSecurityElement
 * @class IconSharpSecurityElement
 * @extends {AoflElement}
 */
class IconSharpSecurityElement extends AoflElement {
  /**
   * Creates an instance of IconSharpSecurityElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-security';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpSecurityElement.is, IconSharpSecurityElement);

export default IconSharpSecurityElement;
