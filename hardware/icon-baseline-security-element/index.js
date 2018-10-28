import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineSecurityElement
 * @class IconBaselineSecurityElement
 * @extends {AoflElement}
 */
class IconBaselineSecurityElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineSecurityElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-security';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineSecurityElement.is, IconBaselineSecurityElement);

export default IconBaselineSecurityElement;
