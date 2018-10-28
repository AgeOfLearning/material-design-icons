import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneGroupElement
 * @class IconTwotoneGroupElement
 * @extends {AoflElement}
 */
class IconTwotoneGroupElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneGroupElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-group';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneGroupElement.is, IconTwotoneGroupElement);

export default IconTwotoneGroupElement;
