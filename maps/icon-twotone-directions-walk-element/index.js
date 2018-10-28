import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneDirectionsWalkElement
 * @class IconTwotoneDirectionsWalkElement
 * @extends {AoflElement}
 */
class IconTwotoneDirectionsWalkElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneDirectionsWalkElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-directions-walk';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneDirectionsWalkElement.is, IconTwotoneDirectionsWalkElement);

export default IconTwotoneDirectionsWalkElement;
