import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineDirectionsWalkElement
 * @class IconBaselineDirectionsWalkElement
 * @extends {AoflElement}
 */
class IconBaselineDirectionsWalkElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineDirectionsWalkElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-directions-walk';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineDirectionsWalkElement.is, IconBaselineDirectionsWalkElement);

export default IconBaselineDirectionsWalkElement;
