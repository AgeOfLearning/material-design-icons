import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundPhonelinkSetupElement
 * @class IconRoundPhonelinkSetupElement
 * @extends {AoflElement}
 */
class IconRoundPhonelinkSetupElement extends AoflElement {
  /**
   * Creates an instance of IconRoundPhonelinkSetupElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-phonelink-setup';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundPhonelinkSetupElement.is, IconRoundPhonelinkSetupElement);

export default IconRoundPhonelinkSetupElement;
