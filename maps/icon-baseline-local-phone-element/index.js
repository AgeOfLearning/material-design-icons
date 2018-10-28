import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineLocalPhoneElement
 * @class IconBaselineLocalPhoneElement
 * @extends {AoflElement}
 */
class IconBaselineLocalPhoneElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineLocalPhoneElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-local-phone';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineLocalPhoneElement.is, IconBaselineLocalPhoneElement);

export default IconBaselineLocalPhoneElement;
