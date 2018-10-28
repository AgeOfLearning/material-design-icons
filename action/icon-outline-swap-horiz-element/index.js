import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineSwapHorizElement
 * @class IconOutlineSwapHorizElement
 * @extends {AoflElement}
 */
class IconOutlineSwapHorizElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineSwapHorizElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-swap-horiz';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineSwapHorizElement.is, IconOutlineSwapHorizElement);

export default IconOutlineSwapHorizElement;
