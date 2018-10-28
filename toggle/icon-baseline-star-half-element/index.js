import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineStarHalfElement
 * @class IconBaselineStarHalfElement
 * @extends {AoflElement}
 */
class IconBaselineStarHalfElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineStarHalfElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-star-half';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineStarHalfElement.is, IconBaselineStarHalfElement);

export default IconBaselineStarHalfElement;
