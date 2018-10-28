import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpSwapVerticalCircleElement
 * @class IconSharpSwapVerticalCircleElement
 * @extends {AoflElement}
 */
class IconSharpSwapVerticalCircleElement extends AoflElement {
  /**
   * Creates an instance of IconSharpSwapVerticalCircleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-swap-vertical-circle';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpSwapVerticalCircleElement.is, IconSharpSwapVerticalCircleElement);

export default IconSharpSwapVerticalCircleElement;
