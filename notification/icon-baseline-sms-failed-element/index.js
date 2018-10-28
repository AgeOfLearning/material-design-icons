import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineSmsFailedElement
 * @class IconBaselineSmsFailedElement
 * @extends {AoflElement}
 */
class IconBaselineSmsFailedElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineSmsFailedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-sms-failed';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineSmsFailedElement.is, IconBaselineSmsFailedElement);

export default IconBaselineSmsFailedElement;
