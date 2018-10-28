import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineTabletMacElement
 * @class IconOutlineTabletMacElement
 * @extends {AoflElement}
 */
class IconOutlineTabletMacElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineTabletMacElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-tablet-mac';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineTabletMacElement.is, IconOutlineTabletMacElement);

export default IconOutlineTabletMacElement;
