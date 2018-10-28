import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselinePhoneInTalkElement
 * @class IconBaselinePhoneInTalkElement
 * @extends {AoflElement}
 */
class IconBaselinePhoneInTalkElement extends AoflElement {
  /**
   * Creates an instance of IconBaselinePhoneInTalkElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-phone-in-talk';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselinePhoneInTalkElement.is, IconBaselinePhoneInTalkElement);

export default IconBaselinePhoneInTalkElement;
