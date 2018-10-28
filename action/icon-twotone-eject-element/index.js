import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneEjectElement
 * @class IconTwotoneEjectElement
 * @extends {AoflElement}
 */
class IconTwotoneEjectElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneEjectElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-eject';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneEjectElement.is, IconTwotoneEjectElement);

export default IconTwotoneEjectElement;
