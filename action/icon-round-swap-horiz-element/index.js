import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundSwapHorizElement
 * @class IconRoundSwapHorizElement
 * @extends {AoflElement}
 */
class IconRoundSwapHorizElement extends AoflElement {
  /**
   * Creates an instance of IconRoundSwapHorizElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-swap-horiz';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundSwapHorizElement.is, IconRoundSwapHorizElement);

export default IconRoundSwapHorizElement;
