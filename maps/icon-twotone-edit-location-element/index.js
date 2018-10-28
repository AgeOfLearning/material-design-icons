import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneEditLocationElement
 * @class IconTwotoneEditLocationElement
 * @extends {AoflElement}
 */
class IconTwotoneEditLocationElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneEditLocationElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-edit-location';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneEditLocationElement.is, IconTwotoneEditLocationElement);

export default IconTwotoneEditLocationElement;
