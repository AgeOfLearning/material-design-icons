import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneFilter8Element
 * @class IconTwotoneFilter8Element
 * @extends {AoflElement}
 */
class IconTwotoneFilter8Element extends AoflElement {
  /**
   * Creates an instance of IconTwotoneFilter8Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-filter-8';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneFilter8Element.is, IconTwotoneFilter8Element);

export default IconTwotoneFilter8Element;
