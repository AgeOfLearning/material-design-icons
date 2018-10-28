import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineSwapHorizontalCircleElement
 * @class IconOutlineSwapHorizontalCircleElement
 * @extends {AoflElement}
 */
class IconOutlineSwapHorizontalCircleElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineSwapHorizontalCircleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-swap-horizontal-circle';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineSwapHorizontalCircleElement.is, IconOutlineSwapHorizontalCircleElement);

export default IconOutlineSwapHorizontalCircleElement;
