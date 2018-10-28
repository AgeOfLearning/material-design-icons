import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundCasinoElement
 * @class IconRoundCasinoElement
 * @extends {AoflElement}
 */
class IconRoundCasinoElement extends AoflElement {
  /**
   * Creates an instance of IconRoundCasinoElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-casino';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundCasinoElement.is, IconRoundCasinoElement);

export default IconRoundCasinoElement;
