import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneFilterElement
 * @class IconTwotoneFilterElement
 * @extends {AoflElement}
 */
class IconTwotoneFilterElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneFilterElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-filter';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneFilterElement.is, IconTwotoneFilterElement);

export default IconTwotoneFilterElement;
