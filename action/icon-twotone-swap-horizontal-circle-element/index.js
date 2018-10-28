import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneSwapHorizontalCircleElement
 * @class IconTwotoneSwapHorizontalCircleElement
 * @extends {AoflElement}
 */
class IconTwotoneSwapHorizontalCircleElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneSwapHorizontalCircleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-swap-horizontal-circle';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneSwapHorizontalCircleElement.is, IconTwotoneSwapHorizontalCircleElement);

export default IconTwotoneSwapHorizontalCircleElement;
