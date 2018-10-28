import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneDirectionsSubwayElement
 * @class IconTwotoneDirectionsSubwayElement
 * @extends {AoflElement}
 */
class IconTwotoneDirectionsSubwayElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneDirectionsSubwayElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-directions-subway';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneDirectionsSubwayElement.is, IconTwotoneDirectionsSubwayElement);

export default IconTwotoneDirectionsSubwayElement;
