import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneFilter5Element
 * @class IconTwotoneFilter5Element
 * @extends {AoflElement}
 */
class IconTwotoneFilter5Element extends AoflElement {
  /**
   * Creates an instance of IconTwotoneFilter5Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-filter-5';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneFilter5Element.is, IconTwotoneFilter5Element);

export default IconTwotoneFilter5Element;
