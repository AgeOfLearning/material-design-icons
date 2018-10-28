import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineAdbElement
 * @class IconOutlineAdbElement
 * @extends {AoflElement}
 */
class IconOutlineAdbElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineAdbElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-adb';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineAdbElement.is, IconOutlineAdbElement);

export default IconOutlineAdbElement;
