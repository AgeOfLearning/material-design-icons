import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineDirectionsSubwayElement
 * @class IconBaselineDirectionsSubwayElement
 * @extends {AoflElement}
 */
class IconBaselineDirectionsSubwayElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineDirectionsSubwayElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-directions-subway';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineDirectionsSubwayElement.is, IconBaselineDirectionsSubwayElement);

export default IconBaselineDirectionsSubwayElement;
