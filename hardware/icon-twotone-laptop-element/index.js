import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneLaptopElement
 * @class IconTwotoneLaptopElement
 * @extends {AoflElement}
 */
class IconTwotoneLaptopElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneLaptopElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-laptop';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneLaptopElement.is, IconTwotoneLaptopElement);

export default IconTwotoneLaptopElement;
