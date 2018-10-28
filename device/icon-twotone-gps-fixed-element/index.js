import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneGpsFixedElement
 * @class IconTwotoneGpsFixedElement
 * @extends {AoflElement}
 */
class IconTwotoneGpsFixedElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneGpsFixedElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-gps-fixed';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneGpsFixedElement.is, IconTwotoneGpsFixedElement);

export default IconTwotoneGpsFixedElement;
