import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineSwapVerticalCircleElement
 * @class IconOutlineSwapVerticalCircleElement
 * @extends {AoflElement}
 */
class IconOutlineSwapVerticalCircleElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineSwapVerticalCircleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-swap-vertical-circle';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineSwapVerticalCircleElement.is, IconOutlineSwapVerticalCircleElement);

export default IconOutlineSwapVerticalCircleElement;
