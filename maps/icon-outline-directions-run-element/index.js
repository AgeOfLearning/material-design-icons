import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineDirectionsRunElement
 * @class IconOutlineDirectionsRunElement
 * @extends {AoflElement}
 */
class IconOutlineDirectionsRunElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineDirectionsRunElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-directions-run';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineDirectionsRunElement.is, IconOutlineDirectionsRunElement);

export default IconOutlineDirectionsRunElement;
