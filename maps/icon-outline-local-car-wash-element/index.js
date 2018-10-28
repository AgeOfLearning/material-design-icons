import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineLocalCarWashElement
 * @class IconOutlineLocalCarWashElement
 * @extends {AoflElement}
 */
class IconOutlineLocalCarWashElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineLocalCarWashElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-local-car-wash';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineLocalCarWashElement.is, IconOutlineLocalCarWashElement);

export default IconOutlineLocalCarWashElement;
