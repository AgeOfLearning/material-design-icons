import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneReorderElement
 * @class IconTwotoneReorderElement
 * @extends {AoflElement}
 */
class IconTwotoneReorderElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneReorderElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-reorder';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneReorderElement.is, IconTwotoneReorderElement);

export default IconTwotoneReorderElement;
