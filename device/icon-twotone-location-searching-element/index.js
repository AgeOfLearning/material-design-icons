import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneLocationSearchingElement
 * @class IconTwotoneLocationSearchingElement
 * @extends {AoflElement}
 */
class IconTwotoneLocationSearchingElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneLocationSearchingElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-location-searching';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneLocationSearchingElement.is, IconTwotoneLocationSearchingElement);

export default IconTwotoneLocationSearchingElement;
