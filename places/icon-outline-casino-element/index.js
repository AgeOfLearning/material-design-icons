import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineCasinoElement
 * @class IconOutlineCasinoElement
 * @extends {AoflElement}
 */
class IconOutlineCasinoElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineCasinoElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-casino';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineCasinoElement.is, IconOutlineCasinoElement);

export default IconOutlineCasinoElement;
