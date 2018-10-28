import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconSharpSwapCallsElement
 * @class IconSharpSwapCallsElement
 * @extends {AoflElement}
 */
class IconSharpSwapCallsElement extends AoflElement {
  /**
   * Creates an instance of IconSharpSwapCallsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-sharp-swap-calls';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconSharpSwapCallsElement.is, IconSharpSwapCallsElement);

export default IconSharpSwapCallsElement;
