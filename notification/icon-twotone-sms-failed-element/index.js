import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneSmsFailedElement
 * @class IconTwotoneSmsFailedElement
 * @extends {AoflElement}
 */
class IconTwotoneSmsFailedElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneSmsFailedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-sms-failed';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneSmsFailedElement.is, IconTwotoneSmsFailedElement);

export default IconTwotoneSmsFailedElement;
