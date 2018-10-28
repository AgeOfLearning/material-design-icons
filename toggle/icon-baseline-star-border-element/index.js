import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineStarBorderElement
 * @class IconBaselineStarBorderElement
 * @extends {AoflElement}
 */
class IconBaselineStarBorderElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineStarBorderElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-star-border';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineStarBorderElement.is, IconBaselineStarBorderElement);

export default IconBaselineStarBorderElement;
