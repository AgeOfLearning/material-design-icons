import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneGridOnElement
 * @class IconTwotoneGridOnElement
 * @extends {AoflElement}
 */
class IconTwotoneGridOnElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneGridOnElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-grid-on';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneGridOnElement.is, IconTwotoneGridOnElement);

export default IconTwotoneGridOnElement;
