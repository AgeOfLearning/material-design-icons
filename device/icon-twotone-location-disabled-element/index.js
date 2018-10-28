import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneLocationDisabledElement
 * @class IconTwotoneLocationDisabledElement
 * @extends {AoflElement}
 */
class IconTwotoneLocationDisabledElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneLocationDisabledElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-location-disabled';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneLocationDisabledElement.is, IconTwotoneLocationDisabledElement);

export default IconTwotoneLocationDisabledElement;
