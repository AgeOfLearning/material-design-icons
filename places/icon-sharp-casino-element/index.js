import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpCasinoElement
 * @class IconSharpCasinoElement
 * @extends {AoflElement}
 */
class IconSharpCasinoElement extends AoflElement {
  /**
   * Creates an instance of IconSharpCasinoElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-casino';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpCasinoElement.is, IconSharpCasinoElement);

export default IconSharpCasinoElement;
