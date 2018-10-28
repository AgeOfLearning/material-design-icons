import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineSwapCallsElement
 * @class IconOutlineSwapCallsElement
 * @extends {AoflElement}
 */
class IconOutlineSwapCallsElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineSwapCallsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-swap-calls';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineSwapCallsElement.is, IconOutlineSwapCallsElement);

export default IconOutlineSwapCallsElement;
