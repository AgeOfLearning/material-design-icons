import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineExpandLessElement
 * @class IconOutlineExpandLessElement
 * @extends {AoflElement}
 */
class IconOutlineExpandLessElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineExpandLessElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-expand-less';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineExpandLessElement.is, IconOutlineExpandLessElement);

export default IconOutlineExpandLessElement;
