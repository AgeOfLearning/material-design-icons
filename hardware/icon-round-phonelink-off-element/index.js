import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundPhonelinkOffElement
 * @class IconRoundPhonelinkOffElement
 * @extends {AoflElement}
 */
class IconRoundPhonelinkOffElement extends AoflElement {
  /**
   * Creates an instance of IconRoundPhonelinkOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-phonelink-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundPhonelinkOffElement.is, IconRoundPhonelinkOffElement);

export default IconRoundPhonelinkOffElement;
