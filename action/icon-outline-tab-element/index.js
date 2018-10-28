import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineTabElement
 * @class IconOutlineTabElement
 * @extends {AoflElement}
 */
class IconOutlineTabElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineTabElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-tab';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineTabElement.is, IconOutlineTabElement);

export default IconOutlineTabElement;
