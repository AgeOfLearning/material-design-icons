import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneMarkunreadElement
 * @class IconTwotoneMarkunreadElement
 * @extends {AoflElement}
 */
class IconTwotoneMarkunreadElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneMarkunreadElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-markunread';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneMarkunreadElement.is, IconTwotoneMarkunreadElement);

export default IconTwotoneMarkunreadElement;
