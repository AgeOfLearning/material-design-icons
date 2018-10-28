import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineAlternateEmailElement
 * @class IconBaselineAlternateEmailElement
 * @extends {AoflElement}
 */
class IconBaselineAlternateEmailElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineAlternateEmailElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-alternate-email';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineAlternateEmailElement.is, IconBaselineAlternateEmailElement);

export default IconBaselineAlternateEmailElement;
