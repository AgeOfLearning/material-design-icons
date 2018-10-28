import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneFilter3Element
 * @class IconTwotoneFilter3Element
 * @extends {AoflElement}
 */
class IconTwotoneFilter3Element extends AoflElement {
  /**
   * Creates an instance of IconTwotoneFilter3Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-filter-3';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneFilter3Element.is, IconTwotoneFilter3Element);

export default IconTwotoneFilter3Element;
