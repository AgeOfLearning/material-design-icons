import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundPermPhoneMsgElement
 * @class IconRoundPermPhoneMsgElement
 * @extends {AoflElement}
 */
class IconRoundPermPhoneMsgElement extends AoflElement {
  /**
   * Creates an instance of IconRoundPermPhoneMsgElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-perm-phone-msg';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundPermPhoneMsgElement.is, IconRoundPermPhoneMsgElement);

export default IconRoundPermPhoneMsgElement;
