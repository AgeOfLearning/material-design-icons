import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineContactSupportElement
 * @class IconBaselineContactSupportElement
 * @extends {AoflElement}
 */
class IconBaselineContactSupportElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineContactSupportElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-contact-support';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineContactSupportElement.is, IconBaselineContactSupportElement);

export default IconBaselineContactSupportElement;
