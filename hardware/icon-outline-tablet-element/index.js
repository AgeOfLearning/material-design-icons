import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineTabletElement
 * @class IconOutlineTabletElement
 * @extends {AoflElement}
 */
class IconOutlineTabletElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineTabletElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-tablet';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineTabletElement.is, IconOutlineTabletElement);

export default IconOutlineTabletElement;
