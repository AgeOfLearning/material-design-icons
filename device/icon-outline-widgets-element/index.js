import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineWidgetsElement
 * @class IconOutlineWidgetsElement
 * @extends {AoflElement}
 */
class IconOutlineWidgetsElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineWidgetsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-widgets';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineWidgetsElement.is, IconOutlineWidgetsElement);

export default IconOutlineWidgetsElement;
