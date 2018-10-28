import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundSmsFailedElement
 * @class IconRoundSmsFailedElement
 * @extends {AoflElement}
 */
class IconRoundSmsFailedElement extends AoflElement {
  /**
   * Creates an instance of IconRoundSmsFailedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-sms-failed';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundSmsFailedElement.is, IconRoundSmsFailedElement);

export default IconRoundSmsFailedElement;
