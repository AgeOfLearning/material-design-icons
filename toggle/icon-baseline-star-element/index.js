import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineStarElement
 * @class IconBaselineStarElement
 * @extends {AoflElement}
 */
class IconBaselineStarElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineStarElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-star';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineStarElement.is, IconBaselineStarElement);

export default IconBaselineStarElement;
