import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneGridOffElement
 * @class IconTwotoneGridOffElement
 * @extends {AoflElement}
 */
class IconTwotoneGridOffElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneGridOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-grid-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneGridOffElement.is, IconTwotoneGridOffElement);

export default IconTwotoneGridOffElement;
