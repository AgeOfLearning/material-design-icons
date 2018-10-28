import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineRepeatElement
 * @class IconOutlineRepeatElement
 * @extends {AoflElement}
 */
class IconOutlineRepeatElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineRepeatElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-repeat';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineRepeatElement.is, IconOutlineRepeatElement);

export default IconOutlineRepeatElement;
