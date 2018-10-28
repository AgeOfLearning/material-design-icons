import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundSwapCallsElement
 * @class IconRoundSwapCallsElement
 * @extends {AoflElement}
 */
class IconRoundSwapCallsElement extends AoflElement {
  /**
   * Creates an instance of IconRoundSwapCallsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-swap-calls';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundSwapCallsElement.is, IconRoundSwapCallsElement);

export default IconRoundSwapCallsElement;
