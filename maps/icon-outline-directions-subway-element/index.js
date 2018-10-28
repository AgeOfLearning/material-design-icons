import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineDirectionsSubwayElement
 * @class IconOutlineDirectionsSubwayElement
 * @extends {AoflElement}
 */
class IconOutlineDirectionsSubwayElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineDirectionsSubwayElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-directions-subway';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineDirectionsSubwayElement.is, IconOutlineDirectionsSubwayElement);

export default IconOutlineDirectionsSubwayElement;
