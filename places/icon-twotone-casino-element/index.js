import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneCasinoElement
 * @class IconTwotoneCasinoElement
 * @extends {AoflElement}
 */
class IconTwotoneCasinoElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneCasinoElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-casino';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneCasinoElement.is, IconTwotoneCasinoElement);

export default IconTwotoneCasinoElement;
