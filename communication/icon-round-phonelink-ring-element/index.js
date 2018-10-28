import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundPhonelinkRingElement
 * @class IconRoundPhonelinkRingElement
 * @extends {AoflElement}
 */
class IconRoundPhonelinkRingElement extends AoflElement {
  /**
   * Creates an instance of IconRoundPhonelinkRingElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-phonelink-ring';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundPhonelinkRingElement.is, IconRoundPhonelinkRingElement);

export default IconRoundPhonelinkRingElement;
