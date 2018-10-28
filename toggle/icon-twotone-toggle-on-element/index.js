import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneToggleOnElement
 * @class IconTwotoneToggleOnElement
 * @extends {AoflElement}
 */
class IconTwotoneToggleOnElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneToggleOnElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-toggle-on';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneToggleOnElement.is, IconTwotoneToggleOnElement);

export default IconTwotoneToggleOnElement;
