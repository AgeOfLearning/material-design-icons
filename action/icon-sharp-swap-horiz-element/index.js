import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpSwapHorizElement
 * @class IconSharpSwapHorizElement
 * @extends {AoflElement}
 */
class IconSharpSwapHorizElement extends AoflElement {
  /**
   * Creates an instance of IconSharpSwapHorizElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-swap-horiz';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpSwapHorizElement.is, IconSharpSwapHorizElement);

export default IconSharpSwapHorizElement;
