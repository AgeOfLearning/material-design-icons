import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineDirectionsRunElement
 * @class IconBaselineDirectionsRunElement
 * @extends {AoflElement}
 */
class IconBaselineDirectionsRunElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineDirectionsRunElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-directions-run';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineDirectionsRunElement.is, IconBaselineDirectionsRunElement);

export default IconBaselineDirectionsRunElement;
