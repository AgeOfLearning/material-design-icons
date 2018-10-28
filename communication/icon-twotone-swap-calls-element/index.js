import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneSwapCallsElement
 * @class IconTwotoneSwapCallsElement
 * @extends {AoflElement}
 */
class IconTwotoneSwapCallsElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneSwapCallsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-swap-calls';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneSwapCallsElement.is, IconTwotoneSwapCallsElement);

export default IconTwotoneSwapCallsElement;
