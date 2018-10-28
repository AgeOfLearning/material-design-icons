import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneDirectionsRunElement
 * @class IconTwotoneDirectionsRunElement
 * @extends {AoflElement}
 */
class IconTwotoneDirectionsRunElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneDirectionsRunElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-directions-run';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneDirectionsRunElement.is, IconTwotoneDirectionsRunElement);

export default IconTwotoneDirectionsRunElement;
