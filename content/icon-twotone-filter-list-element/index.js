import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneFilterListElement
 * @class IconTwotoneFilterListElement
 * @extends {AoflElement}
 */
class IconTwotoneFilterListElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneFilterListElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-filter-list';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneFilterListElement.is, IconTwotoneFilterListElement);

export default IconTwotoneFilterListElement;
