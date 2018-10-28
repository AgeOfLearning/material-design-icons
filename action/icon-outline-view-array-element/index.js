import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineViewArrayElement
 * @class IconOutlineViewArrayElement
 * @extends {AoflElement}
 */
class IconOutlineViewArrayElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineViewArrayElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-view-array';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineViewArrayElement.is, IconOutlineViewArrayElement);

export default IconOutlineViewArrayElement;
