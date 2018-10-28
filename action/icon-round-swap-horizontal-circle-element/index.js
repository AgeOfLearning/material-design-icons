import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundSwapHorizontalCircleElement
 * @class IconRoundSwapHorizontalCircleElement
 * @extends {AoflElement}
 */
class IconRoundSwapHorizontalCircleElement extends AoflElement {
  /**
   * Creates an instance of IconRoundSwapHorizontalCircleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-swap-horizontal-circle';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundSwapHorizontalCircleElement.is, IconRoundSwapHorizontalCircleElement);

export default IconRoundSwapHorizontalCircleElement;
