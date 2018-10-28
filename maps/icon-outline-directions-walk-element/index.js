import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineDirectionsWalkElement
 * @class IconOutlineDirectionsWalkElement
 * @extends {AoflElement}
 */
class IconOutlineDirectionsWalkElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineDirectionsWalkElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-directions-walk';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineDirectionsWalkElement.is, IconOutlineDirectionsWalkElement);

export default IconOutlineDirectionsWalkElement;
