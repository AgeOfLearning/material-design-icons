import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineSmsFailedElement
 * @class IconOutlineSmsFailedElement
 * @extends {AoflElement}
 */
class IconOutlineSmsFailedElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineSmsFailedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-sms-failed';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineSmsFailedElement.is, IconOutlineSmsFailedElement);

export default IconOutlineSmsFailedElement;
