import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneToysElement
 * @class IconTwotoneToysElement
 * @extends {AoflElement}
 */
class IconTwotoneToysElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneToysElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-toys';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneToysElement.is, IconTwotoneToysElement);

export default IconTwotoneToysElement;
