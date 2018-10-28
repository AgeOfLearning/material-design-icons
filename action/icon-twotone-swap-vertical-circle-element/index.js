import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneSwapVerticalCircleElement
 * @class IconTwotoneSwapVerticalCircleElement
 * @extends {AoflElement}
 */
class IconTwotoneSwapVerticalCircleElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneSwapVerticalCircleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-swap-vertical-circle';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneSwapVerticalCircleElement.is, IconTwotoneSwapVerticalCircleElement);

export default IconTwotoneSwapVerticalCircleElement;
