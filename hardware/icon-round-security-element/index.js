import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundSecurityElement
 * @class IconRoundSecurityElement
 * @extends {AoflElement}
 */
class IconRoundSecurityElement extends AoflElement {
  /**
   * Creates an instance of IconRoundSecurityElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-security';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundSecurityElement.is, IconRoundSecurityElement);

export default IconRoundSecurityElement;
