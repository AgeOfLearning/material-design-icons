import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneGpsOffElement
 * @class IconTwotoneGpsOffElement
 * @extends {AoflElement}
 */
class IconTwotoneGpsOffElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneGpsOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-gps-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneGpsOffElement.is, IconTwotoneGpsOffElement);

export default IconTwotoneGpsOffElement;
