import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineScoreElement
 * @class IconBaselineScoreElement
 * @extends {AoflElement}
 */
class IconBaselineScoreElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineScoreElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-score';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineScoreElement.is, IconBaselineScoreElement);

export default IconBaselineScoreElement;
