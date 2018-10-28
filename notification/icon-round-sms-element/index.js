import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundSmsElement
 * @class IconRoundSmsElement
 * @extends {AoflElement}
 */
class IconRoundSmsElement extends AoflElement {
  /**
   * Creates an instance of IconRoundSmsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-sms';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundSmsElement.is, IconRoundSmsElement);

export default IconRoundSmsElement;
