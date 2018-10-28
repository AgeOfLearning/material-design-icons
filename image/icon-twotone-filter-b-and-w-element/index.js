import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneFilterBAndWElement
 * @class IconTwotoneFilterBAndWElement
 * @extends {AoflElement}
 */
class IconTwotoneFilterBAndWElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneFilterBAndWElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-filter-b-and-w';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneFilterBAndWElement.is, IconTwotoneFilterBAndWElement);

export default IconTwotoneFilterBAndWElement;
