import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundCompareArrowsElement
 * @class IconRoundCompareArrowsElement
 * @extends {AoflElement}
 */
class IconRoundCompareArrowsElement extends AoflElement {
  /**
   * Creates an instance of IconRoundCompareArrowsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-compare-arrows';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundCompareArrowsElement.is, IconRoundCompareArrowsElement);

export default IconRoundCompareArrowsElement;
