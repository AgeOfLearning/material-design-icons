import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneToggleOffElement
 * @class IconTwotoneToggleOffElement
 * @extends {AoflElement}
 */
class IconTwotoneToggleOffElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneToggleOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-toggle-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneToggleOffElement.is, IconTwotoneToggleOffElement);

export default IconTwotoneToggleOffElement;
