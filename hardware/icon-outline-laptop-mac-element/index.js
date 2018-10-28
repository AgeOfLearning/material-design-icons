import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineLaptopMacElement
 * @class IconOutlineLaptopMacElement
 * @extends {AoflElement}
 */
class IconOutlineLaptopMacElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineLaptopMacElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-laptop-mac';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineLaptopMacElement.is, IconOutlineLaptopMacElement);

export default IconOutlineLaptopMacElement;
