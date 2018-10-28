import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneFilterVintageElement
 * @class IconTwotoneFilterVintageElement
 * @extends {AoflElement}
 */
class IconTwotoneFilterVintageElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneFilterVintageElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-filter-vintage';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneFilterVintageElement.is, IconTwotoneFilterVintageElement);

export default IconTwotoneFilterVintageElement;
