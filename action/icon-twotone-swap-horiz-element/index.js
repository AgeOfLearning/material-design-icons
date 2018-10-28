import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneSwapHorizElement
 * @class IconTwotoneSwapHorizElement
 * @extends {AoflElement}
 */
class IconTwotoneSwapHorizElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneSwapHorizElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-swap-horiz';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneSwapHorizElement.is, IconTwotoneSwapHorizElement);

export default IconTwotoneSwapHorizElement;
