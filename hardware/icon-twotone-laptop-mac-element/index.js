import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneLaptopMacElement
 * @class IconTwotoneLaptopMacElement
 * @extends {AoflElement}
 */
class IconTwotoneLaptopMacElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneLaptopMacElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-laptop-mac';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneLaptopMacElement.is, IconTwotoneLaptopMacElement);

export default IconTwotoneLaptopMacElement;
