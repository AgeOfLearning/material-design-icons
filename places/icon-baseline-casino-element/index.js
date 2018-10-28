import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineCasinoElement
 * @class IconBaselineCasinoElement
 * @extends {AoflElement}
 */
class IconBaselineCasinoElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineCasinoElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-casino';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineCasinoElement.is, IconBaselineCasinoElement);

export default IconBaselineCasinoElement;
