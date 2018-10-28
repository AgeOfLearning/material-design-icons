import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundSwapVerticalCircleElement
 * @class IconRoundSwapVerticalCircleElement
 * @extends {AoflElement}
 */
class IconRoundSwapVerticalCircleElement extends AoflElement {
  /**
   * Creates an instance of IconRoundSwapVerticalCircleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-swap-vertical-circle';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundSwapVerticalCircleElement.is, IconRoundSwapVerticalCircleElement);

export default IconRoundSwapVerticalCircleElement;
