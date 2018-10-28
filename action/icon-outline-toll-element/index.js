import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineTollElement
 * @class IconOutlineTollElement
 * @extends {AoflElement}
 */
class IconOutlineTollElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineTollElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-toll';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineTollElement.is, IconOutlineTollElement);

export default IconOutlineTollElement;
