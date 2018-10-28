import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpSwapHorizontalCircleElement
 * @class IconSharpSwapHorizontalCircleElement
 * @extends {AoflElement}
 */
class IconSharpSwapHorizontalCircleElement extends AoflElement {
  /**
   * Creates an instance of IconSharpSwapHorizontalCircleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-swap-horizontal-circle';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpSwapHorizontalCircleElement.is, IconSharpSwapHorizontalCircleElement);

export default IconSharpSwapHorizontalCircleElement;
