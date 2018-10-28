import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneAccessibleElement
 * @class IconTwotoneAccessibleElement
 * @extends {AoflElement}
 */
class IconTwotoneAccessibleElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneAccessibleElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-accessible';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneAccessibleElement.is, IconTwotoneAccessibleElement);

export default IconTwotoneAccessibleElement;
