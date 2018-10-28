import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneLocationOffElement
 * @class IconTwotoneLocationOffElement
 * @extends {AoflElement}
 */
class IconTwotoneLocationOffElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneLocationOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-location-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneLocationOffElement.is, IconTwotoneLocationOffElement);

export default IconTwotoneLocationOffElement;
