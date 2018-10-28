import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineRepeatOneElement
 * @class IconOutlineRepeatOneElement
 * @extends {AoflElement}
 */
class IconOutlineRepeatOneElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineRepeatOneElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-repeat-one';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineRepeatOneElement.is, IconOutlineRepeatOneElement);

export default IconOutlineRepeatOneElement;
